import React from 'react';
import "./Projects.css";
import aspnet from "../../assets/aspnet.png";
import listado from "../../assets/listadodetareas.png";
import calculadora from "../../assets/calculadora.png";
import presupuesto from "../../assets/presupuesto.png";
import luces from "../../assets/luces.png";
import tesis from "../../assets/Sistema-completo-real.jpg";

const Projects = () => {
  return (
    <section className="projects section" id='proyectos'>
        <h2 className="section-title">Proyectos</h2>
        <span className="section-subtitle">Mis proyectos</span>

        <div className="projects-container container grid">
            <div className="projects-card">
                <img src={tesis} alt="asd" className="projects-img" />
                <h3 className="projects-title">HAT de sensor odométrico</h3>
                <a href="#" className="projects-button">
                    Ver mas <i className="bx bx-right-arrow-alt projects-button-icon"></i>
                </a>
            </div>

            <div className="projects-card">
                <img src={aspnet} alt="asd" className="projects-img" />
                <h3 className="projects-title">ASP .NET Core Clean Architecture</h3>
                <a href="#" className="projects-button">
                    Ver mas <i className="bx bx-right-arrow-alt projects-button-icon"></i>
                </a>
            </div>

            <div className="projects-card">
                <img src={presupuesto} alt="asd" className="projects-img" />
                <h3 className="projects-title">Presupuesto con Angular</h3>
                <a href="#" className="projects-button">
                    Ver mas <i className="bx bx-right-arrow-alt projects-button-icon"></i>
                </a>
            </div>

            <div className="projects-card">
                <img src={listado} alt="asd" className="projects-img" />
                <h3 className="projects-title">Listado de tareas con React</h3>
                <a href="#" className="projects-button">
                    Ver mas <i className="bx bx-right-arrow-alt projects-button-icon"></i>
                </a>
            </div>

            <div className="projects-card">
                <img src={calculadora} alt="asd" className="projects-img" />
                <h3 className="projects-title">Calculadora con React</h3>
                <a href="#" className="projects-button">
                    Ver mas <i className="bx bx-right-arrow-alt projects-button-icon"></i>
                </a>
            </div>

            <div className="projects-card">
                <img src={luces} alt="asd" className="projects-img" />
                <h3 className="projects-title">Secuencias de luces con Raspberry Pi</h3>
                <a href="#" className="projects-button">
                    Ver mas <i className="bx bx-right-arrow-alt projects-button-icon"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Projects