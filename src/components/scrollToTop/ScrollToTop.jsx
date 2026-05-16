import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece tras bajar 500px
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-top ${visible ? "scroll-top--visible" : ""}`}
      onClick={handleClick}
      aria-label="Volver arriba"
      title="Volver arriba"
    >
      <i className="uil uil-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;
