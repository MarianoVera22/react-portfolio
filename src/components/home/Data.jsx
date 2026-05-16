import React from "react";
import CV_ES from "../../assets/CV_Vera_Causich_Mariano.pdf";
import CV_EN from "../../assets/CV_Vera_Causich_Mariano_EN.pdf";
import { useLanguage } from "../../context/LanguageContext";
import { trackEvent } from "../../utils/analytics";

const Data = () => {
  const { language, t } = useLanguage();

  // Selecciona el CV correspondiente al idioma activo
  const CV = language === "en" ? CV_EN : CV_ES;
  const CVFilename =
    language === "en"
      ? "CV_Vera_Causich_Mariano_EN.pdf"
      : "CV_Vera_Causich_Mariano.pdf";

  const handleCVDownload = () => {
    trackEvent("cv_download", { language });
  };

  return (
    <div className="home_data">
      <h1 className="home_title">Mariano Vera Causich</h1>
      <h3 className="home_subtitle">{t("home.subtitle")}</h3>
      {/* <h2 className="hero-tagline">
        Industrial Automation · Software Developer 
    </h2> */}
      <p className="home_description">
        {t("home.description")}
        <br />
        {t("home.description2")}
        <br />
        {t("home.description3")}
        <br />
        {t("home.description4")}
      </p>

      <div className="home_buttons">
        <a
          className="home_button button-flex"
          href={CV}
          download={CVFilename}
          onClick={handleCVDownload}
        >
          {t("home.downloadCV")}
          <i className="bx bxs-download home-button-icon"></i>
        </a>

        <div className="home_socials">
          <a
            href="https://github.com/MarianoVera22"
            className="home-social-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            onClick={() => trackEvent("social_click", { network: "github" })}
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/marianoveracausich/"
            className="home-social-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            onClick={() => trackEvent("social_click", { network: "linkedin" })}
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Data;
