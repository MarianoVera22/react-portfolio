import React from 'react';
import "./Career.css";

const Career = () => {
  return (
    <section className="career section">
        <h2 className="section-title">Trayectoria</h2>
        <span className="section-subtitle">Mi camino profesional</span>
        
        <div className="career-container container">
            <div className="career-tabs">
                <div className="career-button career-active button--flex">
                    <i className="uil uil-graduation-cap career-icon"></i>{" "}
                    Educación
                </div>

                <div className="career-button button--flex">
                    <i className="uil uil-briefcase-alt career-icon"></i>{" "}
                    Experiencia
                </div>
            </div>

            <div className="career-sections">
                <div className="career-content">
                    
                    <div className="career-data">
                        <div>
                            <h3 className="career-title">Ingeniero Electrónico</h3>
                            <span className="career-subtitle">Universidad Tecnológica Nacional - FRC</span>
                            <div className="career-calender">
                                <i className="uil uil-calendar-alt"></i>2014 - 2023
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
                            <h3 className="career-title">Armado y reparación de PC</h3>
                            <span className="career-subtitle">Integral Capacitando</span>
                            <div className="career-calender">
                                <i className="uil uil-calendar-alt"></i>2019
                            </div>
                        </div>   
                    </div>

                    <div className="career-data">
                        <div>
                            <h3 className="career-title">Desarrollo Web</h3>
                            <span className="career-subtitle">Argentina Programa</span>
                            <div className="career-calender">
                                <i className="uil uil-calendar-alt"></i>2020
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
                            <span className="career-subtitle">Udemy</span>
                            <div className="career-calender">
                                <i className="uil uil-calendar-alt"></i>2020
                            </div>
                        </div>   
                    </div>

                    <div className="career-data">
                        <div>
                            <h3 className="career-title">Automatismo con PLC Siemens</h3>
                            <span className="career-subtitle">Universidad Tecnológica - FRRe</span>
                            <div className="career-calender">
                                <i className="uil uil-calendar-alt"></i>2023
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
                            <h3 className="career-title">Clean Architecture</h3>
                            <span className="career-subtitle">Udemy</span>
                            <div className="career-calender">
                                <i className="uil uil-calendar-alt"></i>En proceso
                            </div>
                        </div>   
                    </div>


                </div>
            </div>
        </div>
    </section>
  );
};

export default Career