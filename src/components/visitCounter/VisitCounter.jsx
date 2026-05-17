import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./VisitCounter.css";

// === CONFIGURACION ===
// Reemplazar con el subdominio que elegiste en GoatCounter.
// Si lo dejas vacio, el componente no muestra nada.
//
// REQUISITO: las stats deben ser publicas en GoatCounter.
// Settings -> Site settings -> Public access -> "Publicly accessible"
const GOATCOUNTER_CODE = "marianovera";

const VisitCounter = () => {
  const { t } = useLanguage();
  const [imageOk, setImageOk] = useState(true);

  if (!GOATCOUNTER_CODE) return null;

  // Si la imagen falla en cargar (stats privadas o servicio caido), ocultamos
  if (!imageOk) return null;

  // URL del SVG oficial de GoatCounter.
  // style=text -> devuelve solo el numero, sin "Visits:" prefix
  // no_branding=1 -> sin firma "Goat" abajo
  const svgUrl = `https://${GOATCOUNTER_CODE}.goatcounter.com/counter//TOTAL.svg?style=text&no_branding=1`;

  return (
    <a
      className="visit-counter"
      href={`https://${GOATCOUNTER_CODE}.goatcounter.com`}
      target="_blank"
      rel="noreferrer"
      title={t("footer.visitsTooltip")}
      aria-label={t("footer.visits")}
    >
      <i className="bx bx-show" aria-hidden="true"></i>
      <img
        src={svgUrl}
        alt=""
        className="visit-counter-svg"
        onError={() => setImageOk(false)}
      />
      <span className="visit-counter-label">{t("footer.visits")}</span>
    </a>
  );
};

export default VisitCounter;
