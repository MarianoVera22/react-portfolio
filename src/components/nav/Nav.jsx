import React,{useState }  from 'react';
import "./Nav.css";


const Nav = () => {
    const[Toggle, showMenu] = useState(false);

  return (
    <header className="header">
       <nav className="nav container">
       <div className='nav-conf'>
            <a href="index.html" className="nav-logo">
                <i class="uil uil-moon nav-theme"></i>
            </a>
            <a href="index.html" className="nav-logo">
                <i class="uil uil-language nav-theme"></i>
            </a>
        </div>
            <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                <ul className="nav-list grid">
                    <li className="nav-item">
                        <a href="#home" className="nav-link active-link">
                            <i className="uil uil-estate nav-icon"></i>
                             <p className='nav-text'>Inicio</p>
                        </a>
                    </li>

                    {/* <li className="nav-item">
                        <a href="#acerca" className="nav-link">
                            <i className="uil uil-user nav-icon"></i>
                             Acerca de
                        </a>
                    </li> */}
                    <li className="nav-item">
                        <a href="#trayectoria" className="nav-link">
                            <i className="uil uil-graduation-cap nav-icon"></i>
                            <p className='nav-text'>Trayectoria</p>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#habilidades" className="nav-link">
                            <i className="uil uil-swatchbook nav-icon"></i>
                            <p className='nav-text'>Habilidades</p>
                        </a>
                    </li>



                    <li className="nav-item">
                        <a href="#proyectos" className="nav-link">
                            <i className="uil uil-rocket nav-icon"></i>
                            <p className='nav-text'>Proyectos</p>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#contacto" className="nav-link">
                            <i className="uil uil-envelope-alt nav-icon"></i>
                            <p className='nav-text'>Contacto</p>
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav-close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
       </nav>
    </header>
  )
}

export default Nav