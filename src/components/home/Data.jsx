import React from 'react'
import CV from "../../assets/CV_Vera_Causich_Mariano.pdf"

const Data = () => {
  return (
    <div className="home_data">
        <h1 className="home_title">
            Mariano Vera Causich
        </h1>
        <h3 className="home_subtitle">
            Ingeniero Electrónico / Programador
        </h3>
        <p className="home_description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem expedita unde maxime ad mollitia tenetur voluptate, dolorem dolor eveniet impedit omnis quasi perferendis ea qui quaerat, repellat praesentium. Provident, adipisci!
        </p>

        <a className='home_button button-flex' href={CV} download="">
          Descargar CV<i class='bx bxs-download home-button-icon'></i>
        </a>

    </div>
  )
}

export default Data