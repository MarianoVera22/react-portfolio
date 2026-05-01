import React from 'react';
import "./Skills.css";
import WebDevelopment from './WebDevelopment';
import DataScience from './DataScience';
import Automation from './Automation';
import { useLanguage } from "../../context/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="skills section" id="habilidades">
        <h2 className="section-title">{t("skills.title")}</h2>
        <span className="section-subtitle">{t("skills.subtitle")}</span>
        <div className="skills-container container grid">
            <WebDevelopment />
            <DataScience />
            <Automation />
        </div>
    </section>
  )
}

export default Skills
