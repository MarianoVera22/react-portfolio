import React from 'react';
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects section" id='projects'>
        <h2 className="section-title">Proyectos</h2>
        <span className="section-subtitle">Mis proyectos</span>

        <div className="projects-container container grid">
            <div className="projects-content">
                <div>
                    <i className="uil projects-icon"></i>
                    <h3 className="projects-title"></h3>
                </div>
                <span className="projects-button">Ver mas{" "}
                    <i className="uil uil-arrow-right project-button-icon"></i>
                </span>

                <div className="projects-modal">
                    <div className="projects-modal-content">
                        <i className="uil uil-times projects-modal-close"></i>
                        <h3 className="projects-modal-title"></h3>
                        <p className="projects-modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illum soluta fugiat obcaecati porro exercitationem accusantium aliquam molestias! Eos atque maxime qui ratione fugit animi explicabo totam ullam voluptate deleniti.</p>
                        <ul className="projects-modal-projects grid">
                            <li className="projects-modal-projects">
                                <i className="uil uil-check-circle projects-modal-icon"></i>
                                <p className="projects-modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="projects-modal-projects">
                                <i className="uil uil-check-circle projects-modal-icon"></i>
                                <p className="projects-modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="projects-modal-projects">
                                <i className="uil uil-check-circle projects-modal-icon"></i>
                                <p className="projects-modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects