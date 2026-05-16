import React, { useEffect, useState } from "react";
import "./Splash.css";

// Tiempo minimo que se muestra el splash (evita parpadeo si la pagina carga muy rapido)
const MIN_DURATION_MS = 1000;
// Tiempo de la animacion de fade-out (debe coincidir con la transition del CSS)
const FADE_OUT_MS = 400;

const Splash = () => {
  const [phase, setPhase] = useState("visible"); // visible -> hiding -> hidden

  useEffect(() => {
    const startTime = Date.now();

    // Cuando termina la carga de la pagina, calculamos cuanto falta para llegar al minimo
    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DURATION_MS - elapsed);

      setTimeout(() => {
        setPhase("hiding");
        // Tras la animacion de fade-out, lo removemos del DOM
        setTimeout(() => setPhase("hidden"), FADE_OUT_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Una vez oculto, no renderizamos nada para liberar el DOM
  if (phase === "hidden") return null;

  return (
    <div
      className={`splash ${phase === "hiding" ? "splash--hiding" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Cargando portfolio"
    >
      <div className="splash-content">
        <div className="splash-logo">MV</div>
        <div className="splash-spinner" aria-hidden="true">
          <div className="splash-spinner-dot"></div>
          <div className="splash-spinner-dot"></div>
          <div className="splash-spinner-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
