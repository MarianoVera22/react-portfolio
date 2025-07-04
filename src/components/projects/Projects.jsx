import React, { useState } from "react";
import "./Projects.css";
import aspnet from "../../assets/csharp-net.png";
import listado from "../../assets/listadodetareas.png";
import calculadora from "../../assets/calculadora.png";
import presupuesto from "../../assets/presupuesto.png";
import luces from "../../assets/luces.png";
import vision from "../../assets/opencv-python.png";
import tesis from "../../assets/Sistema-completo-real.jpg";
import informetesis from "../../assets/TesisCampetellaVera.pdf";
import informetd2 from "../../assets/ProyectoFinalTDII.pdf";

const Projects = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="projects section" id="proyectos">
      <h2 className="section-title">Proyectos</h2>
      <span className="section-subtitle">Mis proyectos</span>
      <div className="projects-container container grid">
        {/* Proyecto 1: HAT*/}
        <div className="projects-card">
          <img
            src={tesis}
            alt="Raspberry Pi HAT"
            className="projects-img"
            onClick={() => toggleTab(1)}
          />
          <h3 className="projects-title">HAT de Raspberry Pi</h3>
          <span className="projects-button" onClick={() => toggleTab(1)}>
            Ver mas
            <i className="bx bx-right-arrow-alt projects-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "projects-modal active-modal"
                : "projects-modal"
            }
          >
            <div className="projects-modal-content">
              <i
                className="uil uil-times projects-modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="projects-modal-title">
                Hardware HAT de sensor odométrico basado en la fusión de visión
                y mediciones inerciales.
                <i class="fa fa-picture-o" aria-hidden="true"></i>
              </h3>
              <p className="projects-modal-description">
                El proyecto se trato de la primera iteracción en el diseño de un
                hardware que permita desarrollar un sensor de odometría visual e
                inercial aplicado a la navegación de robots móviles.
                <br />
                La placa dispone de una cámara y sensores inerciales para ser
                utilizada como plataforma experimental en el desarrollo de
                algoritomos de fusión sensorial para la estimación de posición
                de un robot móvil.
                <br />
                Además del hardware, se desarrollaron varios scripts de prueba
                para los diferentes tipos de sensores y se creo un contenedor
                docker configurado para la comunicación con nuestra Raspberry Pi
                a traves de I2C.
                <br />
                Este proyecto fue realizado como tesis de grado de Ingenieria
                Electrónica junto al Centro de Investigación en Informática para
                la Ingeniería.
              </p>
              <p className="projects-modal-skills-title">
                Herramientas usadas:
              </p>
              {/* ICONOS DE HERRAMIENTAS */}
              <ul className="projects-modal-skills">
                <li className="projects-modal-icon">
                  <i class="bx bxl-python"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-c-plus-plus"></i>
                </li>
                <li className="projects-modal-icon">
                  <svg
                    width="28"
                    height="28"
                    viewBox="-2.5 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m13.656 17.338c-.857.989-1.334 2.79-.709 3.371.6.449 2.2.391 3.385-1.23.344-.487.551-1.093.551-1.747 0-.603-.175-1.164-.477-1.637l.007.012c-.73-.555-1.778.164-2.757 1.243zm-8.057.3c-.908-1.04-2.088-1.658-2.851-1.2-.51.382-.605 1.685.123 2.967 1.078 1.524 2.6 1.679 3.221 1.307.659-.488.3-2.137-.493-3.075zm4.105 3.145c-1.1-.026-2.8.439-2.776 1.032-.018.4 1.331 1.572 2.7 1.513 1.326.03 2.7-1.139 2.682-1.649s-1.5-.927-2.607-.884zm-.075-13.944c-1.275-.032-2.5.933-2.5 1.493 0 .68 1.008 1.376 2.51 1.394 1.543.01 2.518-.559 2.532-1.26.016-.794-1.394-1.639-2.518-1.627zm-3.071.532c-2.135-.345-3.913.9-3.842 3.192.07.884 4.63-3.041 3.843-3.177v-.015zm9.749 3.251c.071-2.277-1.709-3.521-3.844-3.176-.787.135 3.772 4.061 3.844 3.176zm.364.824c-1.239-.329-.42 5.049.588 4.615.551-.525.894-1.265.894-2.084 0-1.077-.592-2.015-1.468-2.508l-.014-.007v-.015zm-14.9 4.675c1.007.45 1.827-4.929.589-4.6-.891.504-1.483 1.445-1.483 2.525 0 .821.343 1.563.893 2.089l.001.001zm9.415-5.948c-.63.49-1.032 1.249-1.032 2.101 0 .624.215 1.197.575 1.65l-.004-.005c.492.838 1.388 1.392 2.414 1.392.467 0 .908-.115 1.295-.318l-.015.007c.631-.49 1.034-1.248 1.034-2.101 0-.624-.215-1.197-.576-1.65l.004.005c-.484-.835-1.374-1.388-2.393-1.388-.476 0-.923.121-1.314.333l.015-.007zm-3.1.135c-.373-.199-.816-.315-1.286-.315-1.02 0-1.911.548-2.395 1.366l-.007.013c-.357.45-.572 1.026-.572 1.652 0 .855.402 1.616 1.027 2.105l.006.004c.376.205.823.325 1.298.325 1.019 0 1.909-.553 2.386-1.376l.007-.013c.352-.448.564-1.019.564-1.64 0-.853-.4-1.612-1.024-2.1l-.006-.004zm4.369 7.162c-.077-1.399-1.23-2.504-2.641-2.504-.049 0-.098.001-.147.004h.007c-.028-.001-.062-.002-.095-.002-1.423 0-2.585 1.119-2.653 2.526v.006.029c.078 1.399 1.232 2.504 2.643 2.504.049 0 .098-.001.147-.004h-.007c.035.002.076.003.117.003 1.413 0 2.566-1.116 2.625-2.514v-.005-.029l.01-.015zm3.215-15.133c-1.69.771-3.14 1.756-4.396 2.945l.007-.007c.377 1.5 2.344 1.558 3.063 1.512-.139-.044-.251-.141-.314-.266l-.001-.003c.18-.12.821-.016 1.268-.255-.171-.03-.252-.061-.329-.2.432-.095.813-.255 1.156-.472l-.015.009c-.033.005-.07.009-.109.009-.132 0-.256-.037-.361-.1l.003.002c.419-.179.779-.4 1.103-.664l-.008.006c-.2 0-.406 0-.466-.075.336-.197.625-.429.875-.698l.002-.002c-.272.045-.39.016-.454-.03.295-.226.544-.494.742-.798l.007-.012c-.076.04-.166.063-.261.063s-.185-.023-.264-.064l.003.002c.091-.194.47-.314.69-.779-.073.019-.157.031-.243.031s-.17-.011-.25-.032l.007.002c.093-.328.242-.613.439-.859l-.004.005c-.095.004-.206.006-.318.006-.281 0-.558-.013-.832-.038l.035.003.283-.285c-.124-.024-.266-.038-.412-.038-.297 0-.58.058-.839.164l.015-.005c-.149-.105 0-.255.185-.4-.385.05-.734.138-1.065.262l.033-.011c-.164-.15.1-.285.24-.436-.413.071-.781.218-1.106.427l.012-.007c-.18-.165-.015-.314.1-.449-.354.137-.657.33-.916.57l.002-.002c-.09-.1-.209-.179-.06-.449-.291.162-.535.373-.73.624l-.004.005c-.194-.134-.119-.3-.119-.449-.285.253-.545.518-.785.8l-.009.011c-.061-.031-.1-.15-.135-.346-.779.75-1.889 2.623-.285 3.356 1.36-1.066 2.949-1.919 4.672-2.47l.107-.03.041-.075zm-12.259 0c1.831.583 3.42 1.441 4.808 2.542l-.031-.024c1.6-.75.493-2.623-.282-3.356-.041.194-.085.329-.135.359-.249-.292-.507-.557-.78-.803l-.008-.007c0 .15.077.33-.117.45-.193-.258-.434-.469-.71-.624l-.011-.006c.149.256.025.33-.056.449-.247-.258-.547-.462-.883-.594l-.017-.006c.12.149.3.3.12.465-.309-.203-.673-.35-1.064-.417l-.017-.002c.135.149.4.3.238.45-.301-.12-.65-.211-1.014-.256l-.021-.002c.181.15.342.289.192.4-.251-.11-.543-.173-.849-.173-.143 0-.284.014-.419.04l.014-.002.284.284c-.242.026-.523.041-.807.041-.11 0-.22-.002-.33-.007l.016.001c.199.238.35.525.432.839l.003.015c-.045.045-.27.016-.483 0 .225.449.6.57.688.765-.076.041-.166.065-.261.065s-.186-.024-.264-.066l.003.001c.219.307.465.573.741.805l.007.005c-.083.039-.181.061-.283.061-.064 0-.127-.009-.186-.025l.005.001c.251.269.537.5.851.69l.018.01c-.06.07-.271.069-.479.075.315.26.676.483 1.065.652l.029.011c-.102.071-.228.113-.365.113-.035 0-.07-.003-.104-.008h.004c.327.21.708.371 1.116.46l.023.004c-.071.118-.198.197-.344.2.449.254 1.078.135 1.258.27-.064.128-.175.225-.31.269l-.004.001c.719.045 2.7-.015 3.072-1.514-1.248-1.177-2.699-2.157-4.292-2.877l-.099-.04.04.016zm1.734-2.237c.243.033.463.103.664.205l-.012-.005c.529-.17.65.063.91.159.577-.12.752.141 1.029.419l.322-.009c.707.489 1.225 1.206 1.451 2.044l.006.025c.231-.862.749-1.579 1.445-2.057l.012-.008.321.007c.277-.28.452-.539 1.029-.418.261-.1.38-.33.911-.166.33-.1.62-.375 1.057-.045.131-.076.289-.121.457-.121.224 0 .429.08.589.213l-.001-.001c.5-.06.653.061.774.21.108 0 .809-.1 1.132.36.81-.09 1.064.464.774.988.114.121.185.284.185.464 0 .204-.091.387-.234.511l-.001.001c.15.269.062.553-.27.913.014.055.023.117.023.182 0 .284-.159.53-.393.655l-.004.002c.06.51-.48.81-.629.914-.061.3-.181.584-.8.734-.089.449-.464.523-.824.614 1.309.619 2.199 1.929 2.199 3.446 0 .1-.004.2-.012.298l.001-.013.181.3c.991.664 1.634 1.779 1.634 3.045 0 .953-.365 1.821-.963 2.472l.002-.003c-.139.635-.315 1.186-.535 1.713l.024-.065c-.211 1.48-1.197 2.687-2.528 3.209l-.027.01c-.697.564-1.506 1.025-2.384 1.344l-.058.019c-.745.815-1.809 1.328-2.993 1.337h-.094c-1.191-.007-2.262-.519-3.009-1.332l-.003-.003c-.938-.339-1.748-.801-2.463-1.378l.016.013c-1.358-.533-2.346-1.739-2.559-3.197l-.003-.022c-.198-.465-.376-1.021-.505-1.595l-.013-.067c-.599-.649-.966-1.519-.966-2.475 0-1.265.644-2.38 1.621-3.036l.013-.008.172-.3c-.007-.085-.011-.184-.011-.284 0-1.517.889-2.827 2.176-3.436l.023-.01c-.359-.09-.72-.165-.823-.615-.615-.15-.735-.434-.8-.734-.15-.105-.689-.4-.629-.928-.239-.13-.399-.38-.399-.667 0-.067.009-.131.025-.193l-.001.005c-.314-.346-.4-.645-.27-.915-.144-.123-.234-.305-.234-.508 0-.181.072-.346.189-.466-.285-.525-.03-1.094.779-1 .317-.465 1.023-.359 1.126-.359.121-.15.285-.285.779-.225.162-.133.371-.214.599-.214.165 0 .32.042.455.116l-.005-.002c.108-.097.249-.159.405-.166h.001z"
                      fill="var(--title-color)"
                    />
                  </svg>
                </li>
                <li className="projects-modal-icon">
                  <svg
                    height="28"
                    width="28"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m0 0v512h512v-512zm407.6596069 42.0140381c34.5601196-19.9243164 77.994873 5.116333 77.994873 44.9649658s-43.4346924 64.8892212-77.994873 44.9649048c-34.5601196-19.9243164-34.5601196-70.0055542 0-89.9298706zm-184.3894653 413.0828857c4.2844849-18.4424438-3.3591919-28.7300415-18.1851196-51.9573975l-75.0783081-102.355957v103.6549072c-.0001831 24.0735474 4.8491821 40.9597778 14.5480347 50.6584473h-122.0997315c12.7050171-14.1990356 14.9053345-22.3414917 14.5449829-50.3987426v-286.0250245c-.0045166-28.401062-1.3139038-35.4966431-14.5449829-50.3987427h122.0997314c-9.6988525 9.6989746-14.5482178 26.4985962-14.5480347 50.3987427v95.3417358l74.5587769-94.3024292c14.6218872-19.0511475 27.1481323-37.5650635 21.5622559-51.4378052h130.1531372c-24.487793 16.2039795-37.1495361 35.071228-58.1921997 60.789978l-97.6798096 121.5802002 116.6442261 160.5480957c13.7973633 18.4342651 29.4298706 37.0852051 39.7473755 43.9039917h-133.5303345zm153.2740479 0c8.7683105-10.3731079 12.4020386-16.0053711 11.9501343-45.7226562v-193.28125c.5737915-23.6783447-.8546753-32.6720581-11.6903687-45.2030029 0 0 102.0961304 0 102.0961914.0002441v238.4840088c.2631226 25.4750366.3855591 32.1329346 11.9501953 45.7226562z"
                      fill="var(--title-color)"
                    />
                  </svg>
                </li>

                <li className="projects-modal-icon">
                  <svg
                    width="28"
                    height="28"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    viewBox="0 0 266 312"
                  >
                    <path
                      d="M128.6640625 79.2793c0 1-1 1-1 1h-1c-1 0-1-1-2-2 0 0-1-1-1-2s0-1 1-1l2 1c1 1 2 2 2 3m-18-10c0-5-2-8-5-8 0 0 0 1-1 1v2h3c0 2 1 3 1 5h2m35-5c2 0 3 2 4 5h2c-1-1-1-2-1-3s0-2-1-3-2-2-3-2c0 0-1 1-2 1 0 1 1 1 1 2m-30 16c-1 0-1 0-1-1s0-2 1-3c2 0 3-1 3-1 1 0 1 1 1 1 0 1-1 2-3 4h-1m-11-1c-4-2-5-5-5-10 0-3 0-5 2-7 1-2 3-3 5-3s3 1 5 3c1 3 2 6 2 9v2h1v-1c1 0 1-2 1-6 0-3 0-6-2-9s-4-5-8-5c-3 0-6 2-7 5-2 4-2.4 7-2.4 12 0 4 1.4 8 5.4 12 1-1 2-1 3-2m125 141c1 0 1-.4 1-1.3 0-2.2-1-4.8-4-7.7-3-3-8-4.9-14-5.7-1-.1-2-.1-2-.1-1-.2-1-.2-2-.2-1-.1-3-.3-4-.5 3-9.3 4-17.5 4-24.7 0-10-2-17-6-23s-8-9-13-10c-1 1-1 1-1 2 5 2 10 6 13 12 3 7 4 13 4 20 0 5.6-1 13.9-5 24.5-4 1.6-8 5.3-11 11.1 0 .9 0 1.4 1 1.4 0 0 1-.9 2-2.6 2-1.7 3-3.4 5-5.1 3-1.7 5-2.6 8-2.6 5 0 10 .7 13 2.1 4 1.3 6 2.7 7 4.3 1 1.5 2 2.9 3 4.2 0 1.3 1 1.9 1 1.9m-92-145c-1-1-1-3-1-5 0-4 0-6 2-9 2-2 4-3 6-3 3 0 5 2 7 4 1 3 2 5 2 8 0 5-2 8-6 9 0 0 1 1 2 1 2 0 3 1 5 2 1-6 2-10 2-15 0-6-1-10-3-13-3-3-6-4-10-4-3 0-6 1-9 3-2 3-3 5-3 8 0 5 1 9 3 13 1 0 2 1 3 1m12 16c-13 9-23 13-31 13-7 0-14-3-20-8 1 2 2 4 3 5l6 6c4 4 9 6 14 6 7 0 15-4 25-11l9-6c2-2 4-4 4-7 0-1 0-2-1-2-1-2-6-5-16-8-9-4-16-6-20-6-3 0-8 2-15 6-6 4-10 8-10 12 0 0 1 1 2 3 6 5 12 8 18 8 8 0 18-4 31-14v2c1 0 1 1 1 1m23 202c4 7.52 11 11.3 19 11.3 2 0 4-.3 6-.9 2-.4 4-1.1 5-1.9 1-.7 2-1.4 3-2.2 2-.7 2-1.2 3-1.7l17-14.7c4-3.19 8-5.98 13-8.4 4-2.4 8-4 10-4.9 3-.8 5-2 7-3.6 1-1.5 2-3.4 2-5.8 0-2.9-2-5.1-4-6.7s-4-2.7-6-3.4-4-2.3-7-5c-2-2.6-4-6.2-5-10.9l-1-5.8c-1-2.7-1-4.7-2-5.8 0-.3 0-.4-1-.4s-3 .9-4 2.6c-2 1.7-4 3.6-6 5.6-1 2-4 3.8-6 5.5-3 1.7-6 2.6-8 2.6-8 0-12-2.2-15-6.5-2-3.2-3-6.9-4-11.1-2-1.7-3-2.6-5-2.6-5 0-7 5.2-7 15.7v31.1c0 .9-1 2.9-1 6-1 3.1-1 6.62-1 10.6l-2 11.1v.17m-145-5.29c9.3 1.36 20 4.27 32.1 8.71 12.1 4.4 19.5 6.7 22.2 6.7 7 0 12.8-3.1 17.6-9.09 1-1.94 1-4.22 1-6.84 0-9.45-5.7-21.4-17.1-35.9l-6.8-9.1c-1.4-1.9-3.1-4.8-5.3-8.7-2.1-3.9-4-6.9-5.5-9-1.3-2.3-3.4-4.6-6.1-6.9-2.6-2.3-5.6-3.8-8.9-4.6-4.2.8-7.1 2.2-8.5 4.1s-2.2 4-2.4 6.2c-.3 2.1-.9 3.5-1.9 4.2-1 .6-2.7 1.1-5 1.6-.5 0-1.4 0-2.7.1h-2.7c-5.3 0-8.9.6-10.8 1.6-2.5 2.9-3.8 6.2-3.8 9.7 0 1.6.4 4.3 1.2 8.1.8 3.7 1.2 6.7 1.2 8.8 0 4.1-1.2 8.2-3.7 12.3-2.5 4.3-3.8 7.5-3.8 9.78 1 3.88 7.6 6.61 19.7 8.21m33.3-90.9c0-6.9 1.8-14.5 5.5-23.5 3.6-9 7.2-15 10.7-19-.2-1-.7-1-1.5-1l-1-1c-2.9 3-6.4 10-10.6 20-4.2 9-6.4 17.3-6.4 23.4 0 4.5 1.1 8.4 3.1 11.8 2.2 3.3 7.5 8.1 15.9 14.2l10.6 6.9c11.3 9.8 17.3 16.6 17.3 20.6 0 2.1-1 4.2-4 6.5-2 2.4-4.7 3.6-7 3.6-.2 0-.3.2-.3.7 0 .1 1 2.1 3.1 6 4.2 5.7 13.2 8.5 25.2 8.5 22 0 39-9 52-27 0-5 0-8.1-1-9.4v-3.7c0-6.5 1-11.4 3-14.6s4-4.7 7-4.7c2 0 4 .7 6 2.2 1-7.7 1-14.4 1-20.4 0-9.1 0-16.6-2-23.6-1-6-3-11-5-15l-6-9c-2-3-3-6-5-9-1-4-2-7-2-12-3-5-5-10-8-15-2-5-4-10-6-14l-9 7c-10 7-18 10-25 10-6 0-11-1-14-5l-6-5c0 3-1 7-3 11l-6.3 12c-2.8 7-4.3 11-4.6 14-.4 2-.7 4-.9 4l-7.5 15c-8.1 15-12.2 28.9-12.2 40.4 0 2.3.2 4.7.6 7.1-4.5-3.1-6.7-7.4-6.7-13m71.6 94.6c-13 0-23 1.76-30 5.25v-.3c-5 6-10.6 9.1-18.4 9.1-4.9 0-12.6-1.9-23-5.7-10.5-3.6-19.8-6.36-27.9-8.18-.8-.23-2.6-.57-5.5-1.03-2.8-.45-5.4-.91-7.7-1.37-2.1-.45-4.5-1.13-7.1-2.05-2.5-.79-4.5-1.82-6-3.07-1.38-1.26-2.06-2.68-2.06-4.27 0-1.6.34-3.31 1.02-5.13.64-1.1 1.34-2.2 2.04-3.2.7-1.1 1.3-2.1 1.7-3.1.6-.9 1-1.8 1.4-2.8.4-.9.8-1.8 1-2.9.2-1 .4-2 .4-3s-.4-4-1.2-9.3c-.8-5.2-1.2-8.5-1.2-9.9 0-4.4 1-7.9 3.2-10.4s4.3-3.8 6.5-3.8h11.5c.9 0 2.3-.5 4.4-1.7.7-1.6 1.3-2.9 1.7-4.1.5-1.2.7-2.1.9-2.5.2-.6.4-1.2.6-1.7.4-.7.9-1.5 1.6-2.3-.8-1-1.2-2.3-1.2-3.9 0-1.1 0-2.1.2-2.7 0-3.6 1.7-8.7 5.3-15.4l3.5-6.3c2.9-5.4 5.1-9.4 6.7-13.4 1.7-4 3.5-10 5.5-18 1.6-7 5.4-14 11.4-21l7.5-9c5.2-6 8.6-11 10.5-15s2.9-9 2.9-13c0-2-.5-8-1.6-18-1-10-1.5-20-1.5-29 0-7 .6-12 1.9-17s3.6-10 7-14c3-4 7-8 13-10s13-3 21-3c3 0 6 0 9 1 3 0 7 1 12 3 4 2 8 4 11 7 4 3 7 8 10 13 2 6 4 12 5 20 1 5 1 10 2 17 0 6 1 10 1 13 1 3 1 7 2 12 1 4 2 8 4 11 2 4 4 8 7 12 3 5 7 10 11 16 9 10 16 21 20 32 5 10 8 23 8 36.9 0 6.9-1 13.6-3 20.1 2 0 3 .8 4 2.2s2 4.4 3 9.1l1 7.4c1 2.2 2 4.3 5 6.1 2 1.8 4 3.3 7 4.5 2 1 5 2.4 7 4.2 2 2 3 4.1 3 6.3 0 3.4-1 5.9-3 7.7-2 2-4 3.4-7 4.3-2 1-6 3-12 5.82-5 2.96-10 6.55-15 10.8l-10 8.51c-4 3.9-8 6.7-11 8.4-3 1.8-7 2.7-11 2.7l-7-.8c-8-2.1-13-6.1-16-12.2-16-1.94-29-2.9-37-2.9"
                      fill="var(--title-color)"
                    />
                  </svg>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-docker"></i>
                </li>
                <li className="projects-modal-icon-ros">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>ROS</title>
                    <path
                      d="M2.807 0C1.353 0 .173 1.22.173 2.722c0 1.504 1.18 2.723 2.634 2.723 1.455 0 2.635-1.22 2.635-2.723S4.262 0 2.807 0zM12 0c-1.455 0-2.634 1.22-2.634 2.722 0 1.504 1.18 2.723 2.634 2.723 1.455 0 2.634-1.22 2.634-2.723S13.454 0 12 0zm9.193 0c-1.455 0-2.635 1.22-2.635 2.722 0 1.504 1.18 2.723 2.635 2.723 1.455 0 2.634-1.22 2.634-2.723S22.647 0 21.193 0zM2.807 9.277C1.353 9.277.173 10.497.173 12s1.18 2.722 2.634 2.722c1.455 0 2.635-1.219 2.635-2.722 0-1.504-1.18-2.723-2.635-2.723zm9.193 0c-1.455 0-2.634 1.22-2.634 2.723s1.18 2.722 2.634 2.722c1.455 0 2.634-1.219 2.634-2.722 0-1.504-1.18-2.723-2.634-2.723zm9.193 0c-1.455 0-2.635 1.22-2.635 2.723s1.18 2.722 2.635 2.722c1.455 0 2.634-1.219 2.634-2.722 0-1.504-1.18-2.723-2.634-2.723zM2.807 18.555c-1.454 0-2.634 1.22-2.634 2.722C.173 22.781 1.353 24 2.807 24c1.455 0 2.635-1.22 2.635-2.723s-1.18-2.722-2.635-2.722zm9.193 0c-1.455 0-2.634 1.22-2.634 2.722C9.366 22.781 10.546 24 12 24c1.455 0 2.634-1.22 2.634-2.723s-1.18-2.722-2.634-2.722zm9.193 0c-1.455 0-2.635 1.22-2.635 2.722 0 1.504 1.18 2.723 2.635 2.723 1.455 0 2.634-1.22 2.634-2.723s-1.18-2.722-2.634-2.722z"
                      fill="var(--title-color)"
                    />
                  </svg>
                </li>
                <li className="projects-modal-icon">
                  <svg
                    height="28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="m507.712 311.74c-7.903 0-13.493-.757-16.772-2.27s-6.599-4.456-9.962-8.827l-62.298-89.284 39.85-57.757c3.363-4.54 7.945-8.66 13.746-12.358s15.343-5.549 28.627-5.549v-8.828h-68.855v8.828c5.549 0 9.878 1.387 12.989 4.161s4.666 5.843 4.666 9.206c0 1.177-.084 2.312-.252 3.405s-.841 2.228-2.018 3.405l-33.293 48.93-37.832-55.74-1.135-1.387s-.378-.967-1.135-2.9c0-2.354 1.598-4.456 4.792-6.305s7.567-2.774 13.115-2.774v-8.828h-80.205v8.828h4.54c7.735 0 13.536.673 17.403 2.018s6.894 3.699 9.08 7.062l53.47 79.952-46.66 69.108c-2.186 3.363-6.18 7.188-11.981 11.476s-15.932 6.432-30.392 6.432v8.827h16.413c-3.319 17.739-7.947 31.114-13.892 40.103-6.894 10.425-22.531 15.637-46.913 15.637h-37.833c-6.726 0-10.635-.757-11.728-2.27s-1.639-4.456-1.639-8.827v-75.917h24.465c13.284 0 21.774 2.522 25.474 7.567s5.549 13.704 5.549 25.978h6.81v-75.665h-6.81c0 12.274-1.555 20.892-4.666 25.852s-11.896 7.44-26.357 7.44h-24.465v-69.108c0-4.372.547-7.315 1.639-8.827s5.002-2.27 11.728-2.27h35.563c22.195 0 36.445 4.287 42.75 12.863s10.635 22.868 12.989 42.877h6.558l-8.827-64.567h-129.294l-4.381-62.298h-175.795l-4.54 64.567h6.558c2.354-23.372 6.222-38.505 11.602-45.399s18.664-10.341 39.85-10.341h15.386c3.363 0 5.338 1.009 5.927 3.026s.883 4.708.883 8.071v149.313c0 4.372-1.219 7.692-3.657 9.962s-10.888 3.405-25.348 3.405h-13.367v8.827h106.94v-8.827h-9.08c-14.46 0-22.868-1.135-25.221-3.405s-3.531-5.591-3.531-9.962v-149.313c0-3.363.168-5.759.504-7.188s1.597-2.732 3.784-3.91h15.638c21.186 0 34.469 3.447 39.85 10.341 5.202 6.666 8.907 21.058 11.123 43.129h-21.968v8.827h6.558c11.266 0 17.823.841 19.673 2.522s2.774 5.297 2.774 10.845v149.313c0 5.549-.925 9.164-2.774 10.846s-8.407 2.522-19.673 2.522h-6.558v8.827h164.697l9.763-64.567h48.247v-8.827c-6.726 0-11.392-1.682-13.998-5.045s-3.909-6.137-3.909-8.323c0-1.177.084-2.312.252-3.405s.841-2.228 2.017-3.405l40.103-60.028 44.39 69.107c0 1.009.378 1.598 1.135 1.765l1.135.252c0 2.354-1.555 4.456-4.666 6.305s-7.44 2.774-12.989 2.774v8.827h79.952v-8.827z"
                      fill="var(--title-color)"
                    />
                  </svg>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-git"></i>
                </li>
              </ul>
              <ul className="projects-modal-links">
                {/* <a className='projects-modal-button button-flex' href={informetesis} download="">
                            App
                        </a> */}
                {/* <a className='projects-modal-button button-flex' href={informetesis} download="">
                            Repositorio
                        </a> */}
                <a
                  className="projects-modal-button button-flex"
                  href={informetesis}
                  download=""
                >
                  Documento
                  <i class="bx bxs-download projects-modal-button-icon"></i>
                </a>
              </ul>
            </div>
          </div>
        </div>

        {/* Proyecto 3: Presupuesto personal */}
        <div className="projects-card">
          <img
            src={presupuesto}
            alt="asd"
            className="projects-img"
            onClick={() => toggleTab(3)}
          />
          <h3 className="projects-title">Presupuesto personal</h3>
          <span className="projects-button" onClick={() => toggleTab(3)}>
            Ver mas{" "}
            <i className="bx bx-right-arrow-alt projects-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "projects-modal active-modal"
                : "projects-modal"
            }
          >
            <div className="projects-modal-content">
              <i
                className="uil uil-times projects-modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="projects-modal-title">
                Presupuesto personal desarrollado con Angular
              </h3>
              <p className="projects-modal-description">
                Se trata de una app para presupuesto personal donde podemos
                añadir ingresos y egresos con sus respectivas descripciones y
                valores.
                <br />
                Estos quedaran registrados y se calculara el presupuesto actual
                disponible asi como tambien el porcentaje que representa cada
                uno de ellos.
              </p>
              <p className="projects-modal-skills-title">
                Herramientas usadas:
              </p>
              {/* ICONOS DE HERRAMIENTAS */}
              <ul className="projects-modal-skills">
                <li className="projects-modal-icon">
                  <i class="bx bxl-html5"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-css3"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-typescript"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-angular"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-visual-studio"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-git"></i>
                </li>
              </ul>
              <ul className="projects-modal-links">
                {/* <a className='projects-modal-button button-flex' href="https://www.google.com/" target='_blanck'>
                                App<i class='bx bx-link-external projects-modal-button-icon'></i>
                            </a> */}
                <a
                  className="projects-modal-button button-flex"
                  href="https://github.com/MarianoVera22/PresupuestoAngular"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repositorio
                  <i class="bx bxl-github projects-modal-button-icon"></i>
                </a>
                {/* <a className='projects-modal-button button-flex' href={informetesis} download="">
                                Documento<i class='bx bxs-download projects-modal-button-icon'></i>
                            </a> */}
              </ul>
            </div>
          </div>
        </div>
        {/* Proyecto 4: Listado de tareas */}
        <div className="projects-card">
          <img
            src={listado}
            alt="asd"
            className="projects-img"
            onClick={() => toggleTab(4)}
          />
          <h3 className="projects-title">Listado de tareas</h3>
          <span className="projects-button" onClick={() => toggleTab(4)}>
            Ver mas{" "}
            <i className="bx bx-right-arrow-alt projects-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "projects-modal active-modal"
                : "projects-modal"
            }
          >
            <div className="projects-modal-content">
              <i
                className="uil uil-times projects-modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="projects-modal-title">
                Listado de tareas con React
              </h3>
              <p className="projects-modal-description">
                Esta app nos permite hacer un listado de tareas muy bien
                estilada y con funcionalidades como agregar, eliminar o tachar
                tareas.
                <br />
                Este proyecto es parte de un curso de FreeCodeCamp que he
                realizado.
              </p>
              <p className="projects-modal-skills-title">
                Herramientas usadas:
              </p>
              {/* ICONOS DE HERRAMIENTAS */}
              <ul className="projects-modal-skills">
                <li className="projects-modal-icon">
                  <i class="bx bxl-html5"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-css3"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-javascript"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-react"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-visual-studio"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-git"></i>
                </li>
              </ul>
              <ul className="projects-modal-links">
                <a
                  className="projects-modal-button button-flex"
                  href="https://listado-tareas-mvc.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  App
                  <i class="bx bx-link-external projects-modal-button-icon"></i>
                </a>
                <a
                  className="projects-modal-button button-flex"
                  rel="noreferrer"
                  href="https://github.com/MarianoVera22/ReactFreeCodeCamp/tree/main/listado%20de%20tareas/listado-de-tareas"
                  target="_blank"
                >
                  Repositorio
                  <i class="bx bxl-github projects-modal-button-icon"></i>
                </a>
                {/* <a className='projects-modal-button button-flex' href={informetesis} download="">
                            Documento<i class='bx bxs-download projects-modal-button-icon'></i>
                        </a> */}
              </ul>
            </div>
          </div>
        </div>
        {/* Proyecto 5: Vision por computadora */}
        <div className="projects-card">
          <img
            src={vision}
            alt="asd"
            className="projects-img"
            onClick={() => toggleTab(5)}
          />
          <h3 className="projects-title">Visión por computadora</h3>
          <span className="projects-button" onClick={() => toggleTab(5)}>
            Ver mas{" "}
            <i className="bx bx-right-arrow-alt projects-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 5
                ? "projects-modal active-modal"
                : "projects-modal"
            }
          >
            <div className="projects-modal-content">
              <i
                className="uil uil-times projects-modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="projects-modal-title">Visión por computadora</h3>
              <p className="projects-modal-description">
                Se trata de una serie de ejercicios practicos hechos para la
                materia electiva Visión por computadora en la carrera de
                Ingeniería Electrónica.
                <br />
                En estos proyectos se busca integrar las librerias de OpenCV en
                Python para manipular imagenes y videos.
                <br />
                Dentro de estos practicos podemos encontrar practicos sencillos
                que van subiendo su dificultad para luego formar parte de una
                agrupación de herramientas de manipulación de imagenes. Tambien,
                practicos donde a traves de una imagen y relaciones podemos
                medir objetos desde una imagen con muy buena precisión.
              </p>
              <p className="projects-modal-skills-title">
                Herramientas usadas:
              </p>
              {/* ICONOS DE HERRAMIENTAS */}
              <ul className="projects-modal-skills">
                <li className="projects-modal-icon">
                  <i class="bx bxl-python"></i>
                </li>
                <li className="projects-modal-icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M148.6458282,81.0641403C191.8570709-0.3458452,307.612915-4.617764,356.5062561,73.3931732c37.8880615,60.4514771,13.7960815,135.4847717-41.8233948,167.7876129l-36.121521-62.5643005c22.1270447-12.8510284,31.7114563-42.7013397,16.6385498-66.750618c-19.4511414-31.034935-65.5021057-29.3354645-82.692749,3.0517044c-12.7206879,23.9658356-2.6391449,51.5502472,18.3088379,63.7294922l-36.1482544,62.6105804C142.0118256,210.643219,116.6704254,141.3057709,148.6458282,81.0641403z M167.9667206,374.4708557c-0.0435791,24.2778625-18.934967,46.8978271-46.092804,47.9000549c-36.6418304,1.3522339-61.0877724-37.6520386-43.8971252-70.0392151c13.2918015-25.0418091,43.8297424-31.7192383,65.9928284-19.1222839l36.2165222-62.7288513c-55.7241974-31.7991638-132.6246796-15.0146027-166.0706635,47.9976501c-43.2111893,81.4099731,18.2372913,179.4530945,110.3418884,176.0540161c68.1375427-2.5146179,115.5750122-59.1652527,115.8612366-120.0613708H167.9667206z M451.714386,270.7571411l-36.1215515,62.5642395c22.2027588,12.816864,31.8418274,42.7249451,16.744751,66.8127441c-19.4511414,31.0349426-65.5021057,29.3354797-82.692688-3.0516968c-12.742218-24.0063782-2.6048279-51.643219,18.4154358-63.7908325l-36.1482544-62.6105652c-52.7280579,30.5827942-78.1254272,99.9726562-46.128479,160.2548218c43.2111816,81.4099731,158.9670105,85.6818848,207.8603821,7.6710205C531.5561523,378.1168213,507.4096069,303.0259705,451.714386,270.7571411z"
                      fill="hsl(var(--hue), var(--sat), 20%)"
                    />
                  </svg>
                </li>
                <li className="projects-modal-icon">
                  <svg
                    height="30"
                    width="29"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m203.5571289 104.0314026-85.5129776-43.1698227-93.8829498 46.8550644 87.8459167 44.1122284zm39.2245789 19.7910385 89.6654663 45.2887039-93.0251617 46.7120514-87.9823761-44.1772461zm119.7662658-62.3174171 92.1283264 46.2116203-82.4067078 41.375946-89.8473816-45.3341675zm-39.6600036-19.9015656-82.9395752-41.6034584-82.0363007 40.9600105 85.4674835 43.0983696zm-64.8349304 357.1943321v113.2022095l100.4658813-50.1503296-.0909729-113.2477112zm100.3293762-89.7194214-.1169434-112.0517883-100.2124328 49.8318482v112.0907898zm120.6175842-20.9869384v113.6376343l-85.7014465 42.7539062-.0714417-113.1112366zm0-39.7380982v-111.3563537l-85.7924194 42.6823883v112.2792511zm-256.4154358-1.4949035-67.6682739-34.0509949v147.0647278l-90.4257736-191.9634705c-.9877663-2.0473175-5.0427856-4.2831573-6.0825348-4.8356171l-58.4079819-29.8068084v259.9159546l60.1625519 32.2506104v-135.9180299l82.7316437 159.1148376c.8513031 1.7223816 9.0263367 18.2896729 17.8252258 24.1132507 11.6776886 7.7669067 61.8196564 37.9182129 61.8196564 37.9182129z"
                      fill="hsl(var(--hue), var(--sat), 20%)"
                    />
                  </svg>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-visual-studio"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-git"></i>
                </li>
              </ul>
              <ul className="projects-modal-links">
                {/* <a
                  className="projects-modal-button button-flex"
                  href="https://calculadora-app-mvc.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  App
                  <i class="bx bx-link-external projects-modal-button-icon"></i>
                </a> */}
                <a
                  className="projects-modal-button button-flex"
                  href="https://github.com/MarianoVera22/Vision-por-computadora"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repositorio
                  <i class="bx bxl-github projects-modal-button-icon"></i>
                </a>
                {/* <a className='projects-modal-button button-flex' href={informetesis} download="">
                            Documento<i class='bx bxs-download projects-modal-button-icon'></i>
                        </a> */}
              </ul>
            </div>
          </div>
        </div>
        {/* Proyecto 6: Calculadora */}
        <div className="projects-card">
          <img
            src={calculadora}
            alt="asd"
            className="projects-img"
            onClick={() => toggleTab(6)}
          />
          <h3 className="projects-title">Calculadora</h3>
          <span className="projects-button" onClick={() => toggleTab(6)}>
            Ver mas{" "}
            <i className="bx bx-right-arrow-alt projects-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 6
                ? "projects-modal active-modal"
                : "projects-modal"
            }
          >
            <div className="projects-modal-content">
              <i
                className="uil uil-times projects-modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="projects-modal-title">Calculadora con React</h3>
              <p className="projects-modal-description">
                Este proyecto se trata de una calculadora totalmente funcional,
                estilizado y responsive hecha junto a React.
                <br />
                Esta app es parte de un curso de FreeCodeCamp que he realizado.
              </p>
              <p className="projects-modal-skills-title">
                Herramientas usadas:
              </p>
              {/* ICONOS DE HERRAMIENTAS */}
              <ul className="projects-modal-skills">
                <li className="projects-modal-icon">
                  <i class="bx bxl-html5"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-css3"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-javascript"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-react"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-visual-studio"></i>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-git"></i>
                </li>
              </ul>
              <ul className="projects-modal-links">
                <a
                  className="projects-modal-button button-flex"
                  href="https://calculadora-app-mvc.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  App
                  <i class="bx bx-link-external projects-modal-button-icon"></i>
                </a>
                <a
                  className="projects-modal-button button-flex"
                  href="https://github.com/MarianoVera22/ReactFreeCodeCamp/tree/main/calculadora/calculadora"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repositorio
                  <i class="bx bxl-github projects-modal-button-icon"></i>
                </a>
                {/* <a className='projects-modal-button button-flex' href={informetesis} download="">
                            Documento<i class='bx bxs-download projects-modal-button-icon'></i>
                        </a> */}
              </ul>
            </div>
          </div>
        </div>

        {/* Proyecto 7: Secuencia de luces*/}
        <div className="projects-card">
          <img
            src={luces}
            alt="asd"
            className="projects-img"
            onClick={() => toggleTab(7)}
          />
          <h3 className="projects-title">Secuencias de luces</h3>
          <span className="projects-button" onClick={() => toggleTab(7)}>
            Ver mas{" "}
            <i className="bx bx-right-arrow-alt projects-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 7
                ? "projects-modal active-modal"
                : "projects-modal"
            }
          >
            <div className="projects-modal-content">
              <i
                className="uil uil-times projects-modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="projects-modal-title">Secuencias de luces</h3>
              <p className="projects-modal-description">
                Se trata de un programa en C++ creado para funcionar en una
                Raspberry Pi 3 junto a una placa experimental hecha por el
                grupo.
                <br />
                Este cuenta con secuencias de luces LED y la posibilidad de
                subir o bajar la velocidad de cada una de las secuencias.
                <br />
                Se utiliza un protocolo de comunicación en serie para
                interactuar entre la Raspberry Pi y la placa experimental.
                <br />
                Este proyecto se trata de un trabajo practico final de la
                asignatura Técnicas Digitales II de la carrera Ingeniería
                Electrónica.
              </p>
              <p className="projects-modal-skills-title">
                Herramientas usadas:
              </p>
              {/* ICONOS DE HERRAMIENTAS */}
              <ul className="projects-modal-skills">
                <li className="projects-modal-icon">
                  <i class="bx bxl-c-plus-plus"></i>
                </li>
                <li className="projects-modal-icon">
                  <svg
                    width="28"
                    height="28"
                    viewBox="-2.5 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m13.656 17.338c-.857.989-1.334 2.79-.709 3.371.6.449 2.2.391 3.385-1.23.344-.487.551-1.093.551-1.747 0-.603-.175-1.164-.477-1.637l.007.012c-.73-.555-1.778.164-2.757 1.243zm-8.057.3c-.908-1.04-2.088-1.658-2.851-1.2-.51.382-.605 1.685.123 2.967 1.078 1.524 2.6 1.679 3.221 1.307.659-.488.3-2.137-.493-3.075zm4.105 3.145c-1.1-.026-2.8.439-2.776 1.032-.018.4 1.331 1.572 2.7 1.513 1.326.03 2.7-1.139 2.682-1.649s-1.5-.927-2.607-.884zm-.075-13.944c-1.275-.032-2.5.933-2.5 1.493 0 .68 1.008 1.376 2.51 1.394 1.543.01 2.518-.559 2.532-1.26.016-.794-1.394-1.639-2.518-1.627zm-3.071.532c-2.135-.345-3.913.9-3.842 3.192.07.884 4.63-3.041 3.843-3.177v-.015zm9.749 3.251c.071-2.277-1.709-3.521-3.844-3.176-.787.135 3.772 4.061 3.844 3.176zm.364.824c-1.239-.329-.42 5.049.588 4.615.551-.525.894-1.265.894-2.084 0-1.077-.592-2.015-1.468-2.508l-.014-.007v-.015zm-14.9 4.675c1.007.45 1.827-4.929.589-4.6-.891.504-1.483 1.445-1.483 2.525 0 .821.343 1.563.893 2.089l.001.001zm9.415-5.948c-.63.49-1.032 1.249-1.032 2.101 0 .624.215 1.197.575 1.65l-.004-.005c.492.838 1.388 1.392 2.414 1.392.467 0 .908-.115 1.295-.318l-.015.007c.631-.49 1.034-1.248 1.034-2.101 0-.624-.215-1.197-.576-1.65l.004.005c-.484-.835-1.374-1.388-2.393-1.388-.476 0-.923.121-1.314.333l.015-.007zm-3.1.135c-.373-.199-.816-.315-1.286-.315-1.02 0-1.911.548-2.395 1.366l-.007.013c-.357.45-.572 1.026-.572 1.652 0 .855.402 1.616 1.027 2.105l.006.004c.376.205.823.325 1.298.325 1.019 0 1.909-.553 2.386-1.376l.007-.013c.352-.448.564-1.019.564-1.64 0-.853-.4-1.612-1.024-2.1l-.006-.004zm4.369 7.162c-.077-1.399-1.23-2.504-2.641-2.504-.049 0-.098.001-.147.004h.007c-.028-.001-.062-.002-.095-.002-1.423 0-2.585 1.119-2.653 2.526v.006.029c.078 1.399 1.232 2.504 2.643 2.504.049 0 .098-.001.147-.004h-.007c.035.002.076.003.117.003 1.413 0 2.566-1.116 2.625-2.514v-.005-.029l.01-.015zm3.215-15.133c-1.69.771-3.14 1.756-4.396 2.945l.007-.007c.377 1.5 2.344 1.558 3.063 1.512-.139-.044-.251-.141-.314-.266l-.001-.003c.18-.12.821-.016 1.268-.255-.171-.03-.252-.061-.329-.2.432-.095.813-.255 1.156-.472l-.015.009c-.033.005-.07.009-.109.009-.132 0-.256-.037-.361-.1l.003.002c.419-.179.779-.4 1.103-.664l-.008.006c-.2 0-.406 0-.466-.075.336-.197.625-.429.875-.698l.002-.002c-.272.045-.39.016-.454-.03.295-.226.544-.494.742-.798l.007-.012c-.076.04-.166.063-.261.063s-.185-.023-.264-.064l.003.002c.091-.194.47-.314.69-.779-.073.019-.157.031-.243.031s-.17-.011-.25-.032l.007.002c.093-.328.242-.613.439-.859l-.004.005c-.095.004-.206.006-.318.006-.281 0-.558-.013-.832-.038l.035.003.283-.285c-.124-.024-.266-.038-.412-.038-.297 0-.58.058-.839.164l.015-.005c-.149-.105 0-.255.185-.4-.385.05-.734.138-1.065.262l.033-.011c-.164-.15.1-.285.24-.436-.413.071-.781.218-1.106.427l.012-.007c-.18-.165-.015-.314.1-.449-.354.137-.657.33-.916.57l.002-.002c-.09-.1-.209-.179-.06-.449-.291.162-.535.373-.73.624l-.004.005c-.194-.134-.119-.3-.119-.449-.285.253-.545.518-.785.8l-.009.011c-.061-.031-.1-.15-.135-.346-.779.75-1.889 2.623-.285 3.356 1.36-1.066 2.949-1.919 4.672-2.47l.107-.03.041-.075zm-12.259 0c1.831.583 3.42 1.441 4.808 2.542l-.031-.024c1.6-.75.493-2.623-.282-3.356-.041.194-.085.329-.135.359-.249-.292-.507-.557-.78-.803l-.008-.007c0 .15.077.33-.117.45-.193-.258-.434-.469-.71-.624l-.011-.006c.149.256.025.33-.056.449-.247-.258-.547-.462-.883-.594l-.017-.006c.12.149.3.3.12.465-.309-.203-.673-.35-1.064-.417l-.017-.002c.135.149.4.3.238.45-.301-.12-.65-.211-1.014-.256l-.021-.002c.181.15.342.289.192.4-.251-.11-.543-.173-.849-.173-.143 0-.284.014-.419.04l.014-.002.284.284c-.242.026-.523.041-.807.041-.11 0-.22-.002-.33-.007l.016.001c.199.238.35.525.432.839l.003.015c-.045.045-.27.016-.483 0 .225.449.6.57.688.765-.076.041-.166.065-.261.065s-.186-.024-.264-.066l.003.001c.219.307.465.573.741.805l.007.005c-.083.039-.181.061-.283.061-.064 0-.127-.009-.186-.025l.005.001c.251.269.537.5.851.69l.018.01c-.06.07-.271.069-.479.075.315.26.676.483 1.065.652l.029.011c-.102.071-.228.113-.365.113-.035 0-.07-.003-.104-.008h.004c.327.21.708.371 1.116.46l.023.004c-.071.118-.198.197-.344.2.449.254 1.078.135 1.258.27-.064.128-.175.225-.31.269l-.004.001c.719.045 2.7-.015 3.072-1.514-1.248-1.177-2.699-2.157-4.292-2.877l-.099-.04.04.016zm1.734-2.237c.243.033.463.103.664.205l-.012-.005c.529-.17.65.063.91.159.577-.12.752.141 1.029.419l.322-.009c.707.489 1.225 1.206 1.451 2.044l.006.025c.231-.862.749-1.579 1.445-2.057l.012-.008.321.007c.277-.28.452-.539 1.029-.418.261-.1.38-.33.911-.166.33-.1.62-.375 1.057-.045.131-.076.289-.121.457-.121.224 0 .429.08.589.213l-.001-.001c.5-.06.653.061.774.21.108 0 .809-.1 1.132.36.81-.09 1.064.464.774.988.114.121.185.284.185.464 0 .204-.091.387-.234.511l-.001.001c.15.269.062.553-.27.913.014.055.023.117.023.182 0 .284-.159.53-.393.655l-.004.002c.06.51-.48.81-.629.914-.061.3-.181.584-.8.734-.089.449-.464.523-.824.614 1.309.619 2.199 1.929 2.199 3.446 0 .1-.004.2-.012.298l.001-.013.181.3c.991.664 1.634 1.779 1.634 3.045 0 .953-.365 1.821-.963 2.472l.002-.003c-.139.635-.315 1.186-.535 1.713l.024-.065c-.211 1.48-1.197 2.687-2.528 3.209l-.027.01c-.697.564-1.506 1.025-2.384 1.344l-.058.019c-.745.815-1.809 1.328-2.993 1.337h-.094c-1.191-.007-2.262-.519-3.009-1.332l-.003-.003c-.938-.339-1.748-.801-2.463-1.378l.016.013c-1.358-.533-2.346-1.739-2.559-3.197l-.003-.022c-.198-.465-.376-1.021-.505-1.595l-.013-.067c-.599-.649-.966-1.519-.966-2.475 0-1.265.644-2.38 1.621-3.036l.013-.008.172-.3c-.007-.085-.011-.184-.011-.284 0-1.517.889-2.827 2.176-3.436l.023-.01c-.359-.09-.72-.165-.823-.615-.615-.15-.735-.434-.8-.734-.15-.105-.689-.4-.629-.928-.239-.13-.399-.38-.399-.667 0-.067.009-.131.025-.193l-.001.005c-.314-.346-.4-.645-.27-.915-.144-.123-.234-.305-.234-.508 0-.181.072-.346.189-.466-.285-.525-.03-1.094.779-1 .317-.465 1.023-.359 1.126-.359.121-.15.285-.285.779-.225.162-.133.371-.214.599-.214.165 0 .32.042.455.116l-.005-.002c.108-.097.249-.159.405-.166h.001z"
                      fill="hsl(var(--hue), var(--sat), 20%)"
                    />
                  </svg>
                </li>
                <li className="projects-modal-icon">
                  <i class="bx bxl-visual-studio"></i>
                </li>
              </ul>
              <ul className="projects-modal-links">
                {/* <a className='projects-modal-button button-flex' href="">
                            App
                        </a> */}
                <a
                  className="projects-modal-button button-flex"
                  href="https://github.com/MarianoVera22/Tecnicas-Digitales-II"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repositorio
                  <i class="bx bxl-github projects-modal-button-icon"></i>
                </a>
                <a
                  className="projects-modal-button button-flex"
                  href={informetd2}
                  download=""
                >
                  Documento
                  <i class="bx bxs-download projects-modal-button-icon"></i>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
