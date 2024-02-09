import React from 'react';
import "./Skills.css";
import WebDevelopment from './WebDevelopment';
import DataScience from './DataScience';
import Automation from './Automation';

const Skills = () => {
  return (
    <section className="skills section" id="habilidades">
        <h2 className="section-title">Habilidades</h2>
        <span className="section-subtitle">Mis habilidades tecnicas</span>
        <div className="skills-container container grid">
            <WebDevelopment />
            <DataScience />
            <Automation />
        </div>
    </section>
  )
}

export default Skills