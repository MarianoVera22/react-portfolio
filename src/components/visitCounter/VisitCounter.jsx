import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./VisitCounter.css";

// === CONFIGURACION ===
// Reemplazar con el subdominio que elegiste en GoatCounter.
// Ej: si tu URL es https://marianovera.goatcounter.com → "marianovera"
// Si lo dejas vacio, el componente queda en modo "placeholder" sin hacer fetch.
const GOATCOUNTER_CODE = "marianoveracausich";

const VisitCounter = () => {
  const { t } = useLanguage();
  const [count, setCount] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Si no hay codigo configurado todavia, no hacemos nada
    if (!GOATCOUNTER_CODE) {
      return;
    }

    const fetchCount = async () => {
      try {
        // GoatCounter expone un endpoint publico de "counter" como JSON
        // Endpoint: https://{code}.goatcounter.com/counter//TOTAL/.json
        // Devuelve { count: "1234", count_unique: "987" } (ambos como string)
        const response = await fetch(
          `https://${GOATCOUNTER_CODE}.goatcounter.com/counter//TOTAL/.json`
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        // Usamos count_unique = visitantes unicos (mas honesto que count que es page-views)
        const unique = parseInt(data.count_unique, 10);

        if (Number.isFinite(unique)) {
          setCount(unique);
        } else {
          setError(true);
        }
      } catch (err) {
        // Falla silenciosa: el counter no es critico, no debe romper el footer
        console.warn("VisitCounter: no se pudo obtener el contador", err);
        setError(true);
      }
    };

    fetchCount();
  }, []);

  // Si no hay codigo configurado o hubo error, no mostramos nada
  if (!GOATCOUNTER_CODE || error) {
    return null;
  }

  // Mientras carga, mostramos un skeleton mini
  if (count === null) {
    return (
      <div className="visit-counter visit-counter--loading">
        <i className="bx bx-show"></i>
        <span className="visit-counter-skeleton">···</span>
      </div>
    );
  }

  // Formato con separador de miles (1.247 en es-AR)
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
