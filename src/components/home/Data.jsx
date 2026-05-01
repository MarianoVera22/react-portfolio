import React from "react";
import CV from "../../assets/CV_Vera_Causich_Mariano.pdf";
import { useLanguage } from "../../context/LanguageContext";

const Data = () => {
  const { t } = useLanguage();

  return (
    <div className="home_data">
      <h1 className="home_title">Mariano Vera Causich</h1>
      <h3 className="home_subtitle">{t("home.subtitle")}</h3>
      <p className="home_description">
        {t("home.description")}
        <br />
        {t("home.description2")}
      </p>

      <a className="home_button button-flex" href={CV} download="">
        {t("home.downloadCV")}
        <i className="bx bxs-download home-button-icon"></i>
      </a>
    </div>
  );
};

export default Data;
