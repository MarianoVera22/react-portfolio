import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <ul className="footer-list">
          <li>
            <a href="#habilidades" className="footer-link">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#trayectoria" className="footer-link">
              Trayectoria
            </a>
          </li>
          <li>
            <a href="#proyectos" className="footer-link">
              Proyectos
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
          Agradecimientos a Crypticalcoder.
          <br />
          &#169; Mariano Vera Causich.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
