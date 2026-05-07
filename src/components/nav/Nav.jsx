import React, { useState } from "react";
import "./Nav.css";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../../context/LanguageContext";

const Nav = () => {
  const [Toggle, showMenu] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {/* Barra superior solo visible en mobile para alojar el toggle
          porque en mobile el header principal se va al bottom */}
      <div className="lang-toggle-mobile-wrapper">
        <LanguageToggle />
      </div>

      <header className="header">
        <nav className="nav container">
          {/* Mariano */}

          <div className="brand-container">
            <div className="logo-mark">MV</div>
            {/* <span className="brand-name">Mariano Vera Causich</span> */}
        </div>
        
          <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
            <ul className="nav-list grid">
              <li className="nav-item">
                <a href="#home" className="nav-link active-link">
                  <i className="uil uil-estate nav-icon"></i>
                  <p className="nav-text">{t("nav.home")}</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="#habilidades" className="nav-link">
                  <i className="uil uil-swatchbook nav-icon"></i>
                  <p className="nav-text">{t("nav.skills")}</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="#trayectoria" className="nav-link">
                  <i className="uil uil-graduation-cap nav-icon"></i>
                  <p className="nav-text">{t("nav.career")}</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="#proyectos" className="nav-link">
                  <i className="uil uil-rocket nav-icon"></i>
                  <p className="nav-text">{t("nav.projects")}</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="#contacto" className="nav-link">
                  <i className="uil uil-envelope-alt nav-icon"></i>
                  <p className="nav-text">{t("nav.contact")}</p>
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav-close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>

          {/* Toggle de idioma - visible en desktop dentro del nav */}
          <LanguageToggle />

          <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
