// === Google Analytics 4 ===
// Carga dinámica del script gtag y helpers para trackear eventos.
//
// Configuración:
//   1. Crear cuenta en https://analytics.google.com (es gratis)
//   2. Crear una propiedad GA4 y un Data Stream para tu sitio web
//   3. Copiar el "Measurement ID" (formato: G-XXXXXXXXXX)
//   4. Crear archivo .env en la raíz del proyecto con:
//        REACT_APP_GA_ID=G-XXXXXXXXXX
//   5. Reiniciar el dev server (npm start) para que tome la variable
//
// En producción (Netlify), configurar la variable en:
//   Site settings > Build & deploy > Environment variables

const GA_ID = process.env.REACT_APP_GA_ID;

let isInitialized = false;

/**
 * Inicializa Google Analytics. Llamar una sola vez al cargar la app.
 * Si no hay GA_ID configurado, no hace nada (modo dev sin analytics).
 */
export const initAnalytics = () => {
  if (!GA_ID) {
    if (process.env.NODE_ENV === "development") {
      console.info(
        "[analytics] REACT_APP_GA_ID no configurado, analytics deshabilitado."
      );
    }
    return;
  }

  if (isInitialized) return;

  // Inyectar el script gtag.js
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // Inicializar el dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_ID, {
    // Respeta la privacidad: anonimiza la IP
    anonymize_ip: true,
    // No envía datos personales adicionales
    allow_google_signals: false,
  });

  isInitialized = true;
};

/**
 * Trackea un evento custom.
 * @param {string} eventName - Nombre del evento (snake_case recomendado)
 * @param {object} params - Parámetros opcionales del evento
 */
export const trackEvent = (eventName, params = {}) => {
  if (!GA_ID || !window.gtag) return;

  try {
    window.gtag("event", eventName, params);
  } catch (e) {
    // Falla silenciosa: analytics no debe romper la app
  }
};

/**
 * Trackea una "page view" virtual (útil para SPAs con secciones).
 * @param {string} pagePath - Path o ancla (ej: "/#proyectos")
 * @param {string} pageTitle - Título opcional
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (!GA_ID || !window.gtag) return;

  try {
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: pageTitle,
    });
  } catch (e) {
    // Falla silenciosa
  }
};
