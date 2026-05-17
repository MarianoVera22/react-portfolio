import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./VisitCounter.css";

// === CONFIGURACION ===
// Reemplazar con el subdominio que elegiste en GoatCounter.
// REQUISITO: stats publicas + dominio whitelisted en GoatCounter Settings.
const GOATCOUNTER_CODE = "marianovera";

const VisitCounter = () => {
  const { t } = useLanguage();
  const [count, setCount] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!GOATCOUNTER_CODE) return;

    // Estrategia: fetch el SVG como texto plano y extraer el numero con regex.
    // El SVG de GoatCounter es publico (no requiere CORS auth) cuando tenes
    // las stats publicas y el dominio whitelisted.
    // El SVG con style=text contiene un <text> con el numero adentro.
    const fetchSvgCount = async () => {
      try {
        const url = `https://${GOATCOUNTER_CODE}.goatcounter.com/counter//.svg?style=text&no_branding=1`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const svgText = await response.text();

        // El SVG tiene la forma:
        //   <text ...>Views for this page:</text>
        //   <text ...>123</text>
        // Buscamos el ultimo <text> que solo contiene numeros
        const matches = svgText.match(/<text[^>]*>([0-9]+)<\/text>/g);
        if (matches && matches.length > 0) {
          const lastMatch = matches[matches.length - 1];
          const numMatch = lastMatch.match(/>([0-9]+)</);
          if (numMatch) {
            const num = parseInt(numMatch[1], 10);
            if (Number.isFinite(num)) {
              setCount(num);
              return;
            }
          }
        }
        // Si no encontramos numero, marcamos como fallido
        setFailed(true);
      } catch (err) {
        console.warn("VisitCounter: no se pudo obtener el contador", err);
        setFailed(true);
      }
    };

    fetchSvgCount();
  }, []);

  // No configurado o fallo: no mostramos nada
  if (!GOATCOUNTER_CODE || failed) return null;

  // Estado loading: skeleton breve
  if (count === null) {
    return (
      <div className="visit-counter visit-counter--loading">
        <i className="bx bx-show" aria-hidden="true"></i>
        <span className="visit-counter-skeleton">···</span>
      </div>
    );
  }

  const formatted = count.toLocaleString("es-AR");

  return (
    <a
      className="visit-counter"
      href={`https://${GOATCOUNTER_CODE}.goatcounter.com`}
      target="_blank"
      rel="noreferrer"
      title={t("footer.visitsTooltip")}
      aria-label={`${count} ${t("footer.visits")}`}
    >
      <i className="bx bx-show" aria-hidden="true"></i>
      <span className="visit-counter-number">{formatted}</span>
      <span className="visit-counter-label">{t("footer.visits")}</span>
    </a>
  );
};

export default VisitCounter;
