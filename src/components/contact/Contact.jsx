import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contacto">
      <h2 className="section-title">Contacto</h2>
      <span className="section-subtitle">Contactame por cualquier medio</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Redes sociales</h3>
          <div className="contact-info">
            <div className="contact-card">
              <i className="bx bxl-linkedin-square contact-card-icon"></i>

              <h3 className="contact-card-title">Linkedin</h3>
              <span className="contact-card-data">marianoveracausich</span>

              <a
                href="https://www.linkedin.com/in/marianoveracausich/"
                className="contact-button"
                target="_blank"
                rel="noreferrer"
              >
                LINK
              </a>
            </div>

            <div className="contact-card">
              <i className="bx bxl-whatsapp-square contact-card-icon"></i>

              <h3 className="contact-card-title">WhatsApp</h3>
              <span className="contact-card-data">+543525531247</span>

              <a
                href="https://www.linkedin.com/in/marianoveracausich/"
                className="contact-button"
                target="_blank"
                rel="noreferrer"
              >
                LINK
              </a>
            </div>

            <div className="contact-card">
              <i className="bx bxl-gmail contact-card-icon"></i>

              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">
                marianoveracausich@gmail.com
              </span>

              <a
                href="mailto:marianoveracausich@gmail.com.com"
                className="contact-button"
                target="_blank"
                rel="noreferrer"
              >
                LINK
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
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

            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-tag">
                Mensaje
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Escribeme tu mensaje"
              ></textarea>
            </div>

            <button className="home_button button-flex" href="" download="">
              Enviar mensaje<i class="bx bxs-send home-button-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
