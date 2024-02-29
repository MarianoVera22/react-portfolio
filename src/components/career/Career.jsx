import React, { useState } from "react";
import "./Career.css";

const Career = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="career section" id="trayectoria">
      <h2 className="section-title">Trayectoria</h2>
      <span className="section-subtitle">Mi camino profesional</span>

      <div className="career-container container">
        <div className="career-tabs">
          <div
            className={
              toggleState === 1
                ? "career-button career-active button-flex"
                : "career-button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            {/* <i className="uil uil-graduation-cap career-icon"></i>*/}
            <i class="bx bxs-graduation career-icon"></i> Educación
          </div>

          <div
            className={
              toggleState === 2
                ? "career-button career-active button-flex"
                : "career-button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            {/* <i className="uil uil-briefcase-alt career-icon"></i>  */}
            <i class="bx bxs-briefcase-alt-2 career-icon"></i>
            Experiencia
          </div>
        </div>

        <div className="career-sections">
          <div
            className={
              toggleState === 1
                ? "career-content career-content-active"
                : "career-content"
            }
          >
            <div className="career-data">
              <div>
                <h3 className="career-title">ASP.NET</h3>
                <span className="career-subtitle">Plataforma Udemy</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 - Presente
                </div>
              </div>

              <div>
                <span className="career-rounder"></span>
                <div className="career-line"></div>
              </div>
            </div>

            <div className="career-data">
              <div></div>
              <div>
                <span className="career-rounder"></span>
                <span className="career-line"></span>
              </div>

              <div>
                <h3 className="career-title">Automatismo con PLC Siemens</h3>
                <span className="career-subtitle">
                  Universidad Tecnológica Nacional - Facultad Regional
                  Resistencia
                </span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2023
                </div>
              </div>
            </div>

            <div className="career-data">
              <div>
                <h3 className="career-title">Ingeniero Electrónico</h3>
                <span className="career-subtitle">
                  Universidad Tecnológica Nacional - Facultad Regional Córdoba
                </span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2023
                </div>
              </div>

              <div>
                <span className="career-rounder"></span>
                <div className="career-line"></div>
              </div>
            </div>

            <div className="career-data">
              <div></div>

              <div>
                <span className="career-rounder"></span>
                <span className="career-line"></span>
              </div>

              <div>
                <h3 className="career-title">Ingles Nivel 3</h3>
                <span className="career-subtitle">
                  Centro Universitario de Idiomas - Universidad de Buenos Aires
                </span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2023
                </div>
              </div>
            </div>

            <div className="career-data">
              <div>
                <h3 className="career-title">Diseño Web</h3>
                <span className="career-subtitle">Plataforma Udemy</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>

              <div>
                <span className="career-rounder"></span>
                <div className="career-line"></div>
              </div>
            </div>

            <div className="career-data">
              <div></div>

              <div>
                <span className="career-rounder"></span>
                <span className="career-line"></span>
              </div>

              <div>
                <h3 className="career-title">Desarrollo Web</h3>
                <span className="career-subtitle">Argentina Programa</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2021
                </div>
              </div>
            </div>

            <div className="career-data">
              <div>
                <h3 className="career-title">Armado y reparación de PC</h3>
                <span className="career-subtitle">
                  Instituto Integral Capacitando - Córdoba
                </span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2019
                </div>
              </div>

              <div>
                <span className="career-rounder"></span>
                <div className="career-line"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="career-sections">
          <div
            className={
              toggleState === 2
                ? "career-content career-content-active"
                : "career-content"
            }
          >
            <div className="career-data">
              <div>
                <h3 className="career-title">
                  Supervisor Electrónico y Eléctrico
                </h3>
                <span className="career-subtitle">
                  Fantini Ladrillos Cerámicos - Colonia Caroya
                </span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Presente
                </div>
              </div>

              <div>
                <span className="career-rounder"></span>
                <div className="career-line"></div>
              </div>
            </div>

            <div className="career-data">
              <div></div>

              <div>
                <span className="career-rounder"></span>
                <span className="career-line"></span>
              </div>

              <div>
                <h3 className="career-title">Practicas Profesionales</h3>
                <span className="career-subtitle">
                  Centro de Investigación en Informática para la Ingeniería -
                  Córdoba
                </span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>

            <div className="career-data">
              <div>
                <h3 className="career-title">
                  Profesor armado y reparación de PC
                </h3>
                <span className="career-subtitle">
                  Instituto Integral Capacitando - Jesus Maria
                </span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>

              <div>
                <span className="career-rounder"></span>
                <div className="career-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
