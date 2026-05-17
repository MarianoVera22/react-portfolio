import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./VisitCounter.css";

// === CONFIGURACION ===
// Reemplazar con el subdominio que elegiste en GoatCounter.
// Si lo dejas vacio, el componente no muestra nada.
const GOATCOUNTER_CODE = "marianoveracausich";

const VisitCounter = () => {
  const { t } = useLanguage();
  const [count, setCount] = useState(null);
  const [fetchFailed, setFetchFailed] = useState(false);

  useEffect(() => {
    if (!GOATCOUNTER_CODE) return;

    // Intento 1: fetch JSON (funciona si tenes "public statistics" habilitado
    // en GoatCounter Settings + CORS lo permite desde tu dominio)
    const fetchCount = async () => {
      try {
        const response = await fetch(
          `https://${GOATCOUNTER_CODE}.goatcounter.com/counter//TOTAL/.json`
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const unique = parseInt(data.count_unique, 10);
        if (Number.isFinite(unique)) {
          setCount(unique);
        } else {
          setFetchFailed(true);
        }
      } catch (err) {
        // CORS error o stats no publicas: usamos el fallback SVG abajo
        console.warn("VisitCounter: fallback a SVG embebido", err);
        setFetchFailed(true);
      }
    };

    fetchCount();
  }, []);

  if (!GOATCOUNTER_CODE) return null;

  // === Fallback: imagen SVG oficial de GoatCounter ===
  // Este endpoint devuelve un SVG con el numero renderizado.
  // No tiene problemas de CORS porque es un <img>, no fetch.
  // Solo requiere que las stats sean publicas (Settings -> "Allow viewing").
  if (fetchFailed) {
    return (
      <a
        className="visit-counter visit-counter--svg"
        href={`https://${GOATCOUNTER_CODE}.goatcounter.com`}
        target="_blank"
        rel="noreferrer"
        title={t("footer.visitsTooltip")}
      >
        <i className="bx bx-show" aria-hidden="true"></i>
        <img
          src={`https://${GOATCOUNTER_CODE}.goatcounter.com/counter//TOTAL.svg?style=text`}
          alt={t("footer.visits")}
          className="visit-counter-svg-img"
          onError={(e) => {
            // Si el SVG tampoco carga, oculta todo el counter
            e.currentTarget.parentElement.style.display = "none";
          }}
        />
        <span className="visit-counter-label">{t("footer.visits")}</span>
      </a>
    );
  }

  if (count === null) {
    return (
      <div className="visit-counter visit-counter--loading">
        <i className="bx bx-show"></i>
        <span className="visit-counter-skeleton">···</span>
      </div>
    );
  }

  const formattedCount = count.toLocaleString("es-AR");

  return (
    <div
      className="visit-counter"
      title={t("footer.visitsTooltip")}
      aria-label={`${count} ${t("footer.visits")}`}
    >
      <i className="bx bx-show" aria-hidden="true"></i>
      <span className="visit-counter-number">{formattedCount}</span>
      <span className="visit-counter-label">{t("footer.visits")}</span>
    </div>
  );
};

export default VisitCounter;
