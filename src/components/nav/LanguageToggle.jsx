import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./LanguageToggle.css";

// Bandera de España - SVG simplificado (rojo/amarillo/rojo)
const FlagES = () => (
  <svg
    viewBox="0 0 60 40"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="60" height="40" fill="#c60b1e" />
    <rect y="10" width="60" height="20" fill="#ffc400" />
  </svg>
);

// Bandera del Reino Unido - Union Jack
const FlagEN = () => (
  <svg
    viewBox="0 0 60 40"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <clipPath id="ukClip">
      <rect width="60" height="40" />
    </clipPath>
    <g clipPath="url(#ukClip)">
      <rect width="60" height="40" fill="#012169" />
      {/* Cruz diagonal blanca */}
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
      {/* Cruz diagonal roja (St. Patrick) */}
      <path
        d="M0,0 L60,40 M60,0 L0,40"
        stroke="#c8102e"
        strokeWidth="3"
        clipPath="url(#ukClip)"
      />
      {/* Cruz recta blanca */}
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="10" />
      {/* Cruz recta roja (St. George) */}
      <path d="M30,0 V40 M0,20 H60" stroke="#c8102e" strokeWidth="6" />
    </g>
  </svg>
);

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className="lang-toggle"
      role="group"
      aria-label={t("lang.switchTo")}
    >
      <button
        type="button"
        className={`lang-toggle-btn ${language === "es" ? "active" : ""}`}
        onClick={() => setLanguage("es")}
        aria-label={t("lang.es")}
        aria-pressed={language === "es"}
        title={t("lang.es")}
      >
        <FlagES />
      </button>

      <span className="lang-toggle-divider" aria-hidden="true" />

      <button
        type="button"
        className={`lang-toggle-btn ${language === "en" ? "active" : ""}`}
        onClick={() => setLanguage("en")}
        aria-label={t("lang.en")}
        aria-pressed={language === "en"}
        title={t("lang.en")}
      >
        <FlagEN />
      </button>
    </div>
  );
};

export default LanguageToggle;
