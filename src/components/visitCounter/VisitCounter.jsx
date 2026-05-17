import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./VisitCounter.css";

// === CONFIGURACION ===
// Reemplazar con el subdominio que elegiste en GoatCounter.
// REQUISITO: stats publicas + dominio whitelisted en GoatCounter Settings.
const GOATCOUNTER_CODE = "marianovera";

const VisitCounter = () => {
  const { t } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);

  if (!GOATCOUNTER_CODE || imgFailed) return null;

  // El SVG de GoatCounter viene con su propio fondo oscuro y texto rosa.
  // Parametros que ajustan el aspecto:
  //   style=none    -> sin background, sin estilo de borde
  //   no_branding=1 -> sin firma "Goat" abajo
  // Despues el CSS le aplica filtros para que matchee con el footer.
  const svgUrl = `https://${GOATCOUNTER_CODE}.goatcounter.com/counter//.svg?style=none&no_branding=1`;

  return (
    <a
      className="visit-counter"
      href={`https://${GOATCOUNTER_CODE}.goatcounter.com`}
      target="_blank"
      rel="noreferrer"
      title={t("footer.visitsTooltip")}
      aria-label={t("footer.visits")}
    >
      <i className="bx bx-show visit-counter-icon" aria-hidden="true"></i>
      <img
        src={svgUrl}
        alt=""
        className="visit-counter-img"
        onError={() => setImgFailed(true)}
      />
      <span className="visit-counter-label">{t("footer.visits")}</span>
    </a>
  );
};

export default VisitCounter;
