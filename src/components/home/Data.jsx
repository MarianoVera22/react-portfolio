import React from "react";
import CV from "../../assets/CV_Vera_Causich_Mariano.pdf";

const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">Mariano Vera Causich</h1>
      <h3 className="home_subtitle">Ingeniero Electrónico / Programador</h3>
      <p className="home_description">
        Soy ingeniero electrónico especializado en el area de software y
        programación.
        <br />A lo largo de mi carrera forme parte de proyectos muy interesantes
        tanto en grupos de trabajo como de manera individual. En mi trayectoria
        profesional aprendi a trabajar en equipo desempeñando varios tipos de
        roles como lider, coordinador y ejecutor. Me motivan los desafios y el
        aprendizaje continuo. Me considero una persona responsable, autodidacta,
        honesta y disciplinada.
      </p>

      <a className="home_button button-flex" href={CV} download="">
        Descargar CV<i class="bx bxs-download home-button-icon"></i>
      </a>
    </div>
  );
};

export default Data;
