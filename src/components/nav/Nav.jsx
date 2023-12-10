import React from 'react';
import "./Nav.css";


const Nav = () => {
  return (
    <header className="nav">
       <nav className="nav container">
            <a href="index.html" className="nav-logo">
                Smith
            </a>
            <div className="nav-menu">
                <ul className="nav-list grid">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">
                            <i className="uil uil-estate nav-icon"></i>
                             Home
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#home" className="nav-link">
                            <i className="uil uil-user nav-icon"></i>
                             Acerca de
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#home" className="nav-link">
                            <i className="uil uil-swatchbook nav-icon"></i>
                             Habilidades
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#home" className="nav-link">
                            <i className="uil uil-graduation-cap nav-icon"></i>
                             Trayectoria
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#home" className="nav-link">
                            <i className="uil uil-envelope-alt nav-icon"></i>
                             Contacto
                        </a>
                    </li>
                </ul>
            </div>
       </nav>
    </header>
  )
}

export default Nav