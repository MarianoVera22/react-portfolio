import React from 'react';
import "./Nav.css";


const Nav = () => {
  return (
    <header className="header">
       <nav className="nav container">
            <a href="index.html" className="nav-logo">
                Mariano
            </a>
            <div className="nav-menu">
                <ul className="nav-list grid">
                    <li className="nav-item">
                        <a href="#home" className="nav-link active-link">
                            <i className="uil uil-estate nav-icon"></i>
                             Home
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#acerca" className="nav-link">
                            <i className="uil uil-user nav-icon"></i>
                             Acerca de
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#habilidades" className="nav-link">
                            <i className="uil uil-swatchbook nav-icon"></i>
                             Habilidades
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#trayectoria" className="nav-link">
                            <i className="uil uil-graduation-cap nav-icon"></i>
                             Trayectoria
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#proyectos" className="nav-link">
                            <i className="uil uil-rocket nav-icon"></i>
                             Proyectos
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#contacto" className="nav-link">
                            <i className="uil uil-envelope-alt nav-icon"></i>
                             Contacto
                        </a>
                    </li>
                </ul>
            </div>
            <div className="nav-toggle">
                <i class="uil uil-apps"></i>
            </div>
            <div className="div nav-close">
                <i class="uil uil-times"></i>
            </div>
       </nav>
    </header>
  )
}

export default Nav