import { useEffect, useRef, useState } from "react";

/**
 * Hook que detecta cuando un elemento entra en el viewport usando IntersectionObserver.
 *
 * @param {object} options - Opciones del observer
 * @param {number} options.threshold - Porcentaje del elemento visible para disparar (0-1)
 * @param {string} options.rootMargin - Margen del viewport (ej: "0px 0px -100px 0px")
 * @param {boolean} options.once - Si true, se anima una sola vez (default true)
 * @returns {[ref, isVisible]} - Ref para asignar al elemento + booleano de visibilidad
 *
 * @example
 *   const [ref, visible] = useScrollReveal();
 *   return <div ref={ref} className={visible ? "fade-up-visible" : "fade-up-hidden"}>...</div>
 */
export const useScrollReveal = (options = {}) => {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", once = true } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Si el usuario prefiere movimiento reducido, mostrar todo de una sin animar
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    // IntersectionObserver no esta disponible en navegadores muy viejos
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
};
