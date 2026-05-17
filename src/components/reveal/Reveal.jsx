import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Reveal.css";

/**
 * Wrapper que aplica fade-up al elemento hijo cuando entra al viewport.
 *
 * @param {React.ReactNode} children - Contenido a animar
 * @param {number} delay - Delay en ms antes de animar (util para staggered)
 * @param {string} as - Tag HTML a renderizar (default "div")
 * @param {string} className - Clases extra
 *
 * @example
 *   <Reveal delay={100}><Card /></Reveal>
 *   <Reveal as="article" className="my-class">...</Reveal>
 */
const Reveal = ({ children, delay = 0, as: Tag = "div", className = "", ...rest }) => {
  const [ref, isVisible] = useScrollReveal();

  const style = delay
    ? { transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` }
    : undefined;

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "reveal--visible" : ""} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
