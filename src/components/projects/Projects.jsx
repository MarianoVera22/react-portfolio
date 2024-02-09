import React from 'react';
import "./Projects.css";
import image1 from "../../assets/foto_cv2.jpg"

const Projects = () => {
  return (
    <section className="projects section" id='proyectos'>
        <h2 className="section-title">Proyectos</h2>
        <span className="section-subtitle">Mis proyectos</span>

        <div className="projects-container container grid">
            <div className="projects-card">
                <img src={image1} alt="asd" className="projects-img" />
                <h3 className="projects-title">Proyecto1</h3>
                <a href="#" className="projects-button">
                    Ver mas <i className="bx bx-right-arrow-alt projects-button-icon"></i>
                </a>
            </div>

            <div className="projects-card">
                <img src={image1} alt="asd" className="projects-img" />
                <h3 className="projects-title">Proyecto1</h3>
                <a href="#" className="projects-button">
                    Ver mas <i className="bx bx-right-arrow-alt projects-button-icon"></i>
                </a>
            </div>

            <div className="projects-card">
                <img src={image1} alt="asd" className="projects-img" />
                <h3 className="projects-title">Proyecto1</h3>
                <a href="#" className="projects-button">
                    Ver mas <i className="bx bx-right-arrow-alt projects-button-icon"></i>
                </a>
            </div>

            <div className="projects-card">
                <img src={image1} alt="asd" className="projects-img" />
                <h3 className="projects-title">Proyecto1</h3>
                <a href="#" className="projects-button">
                    Ver mas <i className="bx bx-right-arrow-alt projects-button-icon"></i>
                </a>
            </div>

            <div className="projects-card">
                <img src={image1} alt="asd" className="projects-img" />
                <h3 className="projects-title">Proyecto1</h3>
                <a href="#" className="projects-button">
                    Ver mas <i className="bx bx-right-arrow-alt projects-button-icon"></i>
                </a>
            </div>

            <div className="projects-card">
                <img src={image1} alt="asd" className="projects-img" />
                <h3 className="projects-title">Proyecto1</h3>
                <a href="#" className="projects-button">
                    Ver mas <i className="bx bx-right-arrow-alt projects-button-icon"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Projects