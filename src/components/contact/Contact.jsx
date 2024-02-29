import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contacto">
      <h2 className="section-title">Contacto</h2>
      <span className="section-subtitle">Contactame por cualquier medio</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Via chat</h3>
          <div className="contact-info">
            <a
              className="contact-card"
              href="https://www.linkedin.com/in/marianoveracausich/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin-square contact-card-icon"></i>

              <h3 className="contact-card-title">Linkedin</h3>
              <span className="contact-card-data">marianoveracausich</span>

              <div className="contact-button">Contactame</div>
            </a>

            <a
              className="contact-card"
              href="https://wa.me/+5493525531247"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-whatsapp-square contact-card-icon"></i>

              <h3 className="contact-card-title">WhatsApp</h3>
              <span className="contact-card-data">+543525531247</span>

              <div className="contact-button">Contactame</div>
            </a>

            <a
              className="contact-card"
              href="https://t.me/Marianovera22"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-telegram contact-card-icon"></i>

              <h3 className="contact-card-title">Telegram</h3>
              <span className="contact-card-data">Marianovera22</span>

              <div className="contact-button">Contactame</div>
            </a>

            {/* <div className="contact-card">
              <i className="bx bxl-gmail contact-card-icon"></i>

              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">
                marianoveracausich@gmail.com
              </span>

              <a
                href="mailto:marianoveracausich@gmail.com"
                className="contact-button"
                rel="noreferrer"
                tar
              >
                Contactame
              </a>
            </div>  */}
          </div>
        </div>

        <div className="contact-content-form">
          <h3 className="contact-title">Via email</h3>
          <form className="contact-form">
            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-tag">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Inserta tu nombre"
              />
            </div>

            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Inserta tu email"
              />
            </div>

            <div className="contact-form-div  contact-form-area">
              <label htmlFor="" className="contact-form-tag">
                Mensaje
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>

            <button
              className="contact-button-email button-flex"
              href=""
              download=""
            >
              Enviar mensaje<i class="bx bxs-send contact-button-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
