import React from "react";
import "./Footer.css";
import { useLanguage } from "../../context/LanguageContext";
// import VisitCounter from "../visitCounter/VisitCounter"; // Oculto temporalmente - tracking sigue activo via GoatCounter

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container container">
        <ul className="footer-list">
          <li>
            <a href="#habilidades" className="footer-link">
              {t("footer.skills")}
            </a>
          </li>
          <li>
            <a href="#trayectoria" className="footer-link">
              {t("footer.career")}
            </a>
          </li>
          <li>
            <a href="#proyectos" className="footer-link">
              {t("footer.projects")}
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://github.com/MarianoVera22"
            className="footer-social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/marianoveracausich/"
            className="footer-social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>

          <a
            href="https://www.instagram.com/marianovera.22/"
            className="footer-social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </div>
        <span className="footer-copy">
          {/* {t("footer.thanks")} */}
          {/* <br /> */}
          &#169; Mariano Vera Causich.
        </span>
        {/* <VisitCounter /> */}
      </div>
    </footer>
  );
};

export default Footer;
