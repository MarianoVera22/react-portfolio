import React from "react";
import "./About.css";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const intereses = ["software", "programming", "robotics", "firmware", "it", "automation", "hardware"];
  const softSkills = ["responsibility", "teamwork", "communication", "leadership", "proactivity"];

  return (
    <section className="about section" id="sobre-mi">
      <h2 className="section-title">{t("about.title")}</h2>
      <span className="section-subtitle">{t("about.subtitle")}</span>

      <div className="about-container container grid">

        {/* Card 1 - Intereses */}
        <div className="about-content">
          <div className="about-icon-wrap">
            <i className="bx bx-bulb about-icon"></i>
          </div>
          <h3 className="about-title">{t("about.interestsTitle")}</h3>
          <div className="about-tags">
            {intereses.map((key) => (
              <span key={key} className="about-tag">
                {t(`about.interests.${key}`)}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2 - Soft skills */}
        <div className="about-content">
          <div className="about-icon-wrap">
            <i className="bx bx-user-voice about-icon"></i>
          </div>
          <h3 className="about-title">{t("about.softSkillsTitle")}</h3>
          <div className="about-tags">
            {softSkills.map((key) => (
              <span key={key} className="about-tag">
                {t(`about.softSkills.${key}`)}
              </span>
            ))}
          </div>
        </div>

        {/* Card 3 - Idiomas */}
        <div className="about-content">
          <div className="about-icon-wrap">
            <i className="bx bx-globe about-icon"></i>
          </div>
          <h3 className="about-title">{t("about.languagesTitle")}</h3>
          <div className="about-body">
            <div className="about-row">
              <span className="about-row-label">{t("about.langSpanish")}</span>
              <span className="about-row-sep">·</span>
              <span className="about-row-value">{t("about.langSpanishLevel")}</span>
            </div>
            <div className="about-row">
              <span className="about-row-label">{t("about.langEnglish")}</span>
              <span className="about-row-sep">·</span>
              <span className="about-row-value">{t("about.langEnglishLevel")}</span>
            </div>
            <div className="about-row">
              <span className="about-row-label">{t("about.langItalian")}</span>
              <span className="about-row-sep">·</span>
              <span className="about-row-value">{t("about.langItalianLevel")}</span>
            </div>
          </div>
        </div>

        {/* Card 4 - Certificados */}
        <div className="about-content">
          <div className="about-icon-wrap">
            <i className="bx bx-certification about-icon"></i>
          </div>
          <h3 className="about-title">{t("about.certificatesTitle")}</h3>
          <div className="about-body">
            <div className="about-cert">Pearson English Interactive 3</div>
            <div className="about-cert">Technical English for Software Developers</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
