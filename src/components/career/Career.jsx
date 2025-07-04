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
                <h3 className="career-title">Clean architecture C# .NET</h3>
                <span className="career-subtitle">Plataforma Udemy - Hector de Leon</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2025 - presente
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
                <h3 className="career-title">C# .NET Avanzado</h3>
                <span className="career-subtitle">
                  Plataforma Udemy - Hector de Leon
                </span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2025 - 2025
                </div>
              </div>
            </div>

           <div className="career-data">
              <div>
                <h3 className="career-title">SQL - MariaDB</h3>
                <div className="career-calendar">
                  <span className="career-subtitle">
                  Plataforma Udemy - Hector de Leon
                </span>
                  <i className="uil uil-calendar-alt"></i> 2025 - 2025
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
                <h3 className="career-title">Excel Avanzado</h3>
                <span className="career-subtitle">
                  Plataforma Udemy - Global Mentoring
                </span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 - 2024
                </div>
              </div>
            </div>

            <div className="career-data">
              <div>
                <h3 className="career-title">Automatismo industrial PLC TIA Portal</h3>
                <span className="career-subtitle">
                  Universidad Tecnológica Nacional - Facultad Regional
                  Resistencia
                </span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2023
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
                <h3 className="career-title">Ingeniería Electrónica</h3>
                <span className="career-subtitle">
                  Universidad Tecnológica Nacional - Facultad Regional Córdoba
                </span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2023
                </div>
              </div>
            </div>

            <div className="career-data">
              <div>
                <h3 className="career-title">Diseño Web (Mediaquery, Bootstrap y React)</h3>
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
                <h3 className="career-title">Desarrollo Web (HTML, CSS, JS, Angular y Java)</h3>
                <span className="career-subtitle">Argentina Programa</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2021
                </div>
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
              <div></div>

              <div>
                <span className="career-rounder"></span>
                <span className="career-line"></span>
              </div>

              <div>
                <h3 className="career-title">Analista de mantenimiento Eléctrico - Automatista</h3>
                <span className="career-subtitle">
                  Cartocor Grupo Arcor - Villa del Totoral
                </span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 - presente
                </div>
              </div>
            </div>

            <div className="career-data">
              <div>
                <h3 className="career-title">
                  Supervisor Eléctrico - Automatista
                </h3>
                <span className="career-subtitle">
                  Fantini Ladrillos Cerámicos - Colonia Caroya
                </span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2024
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
