import React, { createContext, useContext, useEffect, useState } from "react";
import translations from "../i18n/translations";
import { trackEvent } from "../utils/analytics";

const LanguageContext = createContext();

// Idiomas soportados
const SUPPORTED_LANGUAGES = ["es", "en"];
const DEFAULT_LANGUAGE = "es";
const STORAGE_KEY = "portfolio_language";

// Detecta el idioma inicial: localStorage > navegador > español
const detectInitialLanguage = () => {
  // 1. Prioridad: lo que haya guardado el usuario antes
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
  } catch (e) {
    // localStorage puede fallar en modo incógnito / SSR
  }

  // 2. Idioma del navegador
  if (typeof navigator !== "undefined") {
    const browserLang = (navigator.language || "es").slice(0, 2).toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(browserLang)) {
      return browserLang;
    }
  }

  // 3. Fallback
  return DEFAULT_LANGUAGE;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(detectInitialLanguage);

  // Persistir cambio de idioma y actualizar atributo lang del <html>
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (e) {
      // Ignorar si localStorage no está disponible
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguageState(lang);
      trackEvent("language_change", { language: lang });
    }
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      const next = prev === "es" ? "en" : "es";
      trackEvent("language_change", { language: next });
      return next;
    });
  };

  // Función t() - acepta claves tipo "home.title" o "projects.p1Desc1"
  const t = (key) => {
    if (!key) return "";
    const parts = key.split(".");
    let value = translations[language];
    for (const part of parts) {
      if (value && typeof value === "object" && part in value) {
        value = value[part];
      } else {
        // Si no encuentra la clave, devolver la clave para hacer visible el faltante
        return key;
      }
    }
    return typeof value === "string" ? value : key;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para consumir el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage debe usarse dentro de un <LanguageProvider>"
    );
  }
  return context;
};
