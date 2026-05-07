import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const form = useRef();
  const { t } = useLanguage();

  const notify = () => toast.success(t("contact.toastSent"));

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Enviando formulario...");

    emailjs.sendForm("service_5pfooxj", "template_dqmk3kd", form.current, {
      publicKey: "Hmmm_6nHhA0ze_2F4",
    });

    e.target.reset();
  };

  return (
    <section className="contact section" id="contacto">
      <h2 className="section-title">{t("contact.title")}</h2>
      <span className="section-subtitle">{t("contact.subtitle")}</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">{t("contact.viaChat")}</h3>
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

              <div className="contact-button">{t("contact.contactMe")}</div>
            </a>

            <a
              className="contact-card"
              href="https://wa.me/+5493525531247"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-whatsapp-square contact-card-icon"></i>

              <h3 className="contact-card-title">WhatsApp</h3>
              <span className="contact-card-data">+54 3525 531247</span>

              <div className="contact-button">{t("contact.contactMe")}</div>
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

              <div className="contact-button">{t("contact.contactMe")}</div>
            </a>
          </div>
        </div>

        <div className="contact-content-form">
          <h3 className="contact-title">{t("contact.viaEmail")}</h3>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-tag">
                {t("contact.formName")}
              </label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder={t("contact.placeholderName")}
              />
            </div>

            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-tag">
                {t("contact.formEmail")}
              </label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder={t("contact.placeholderEmail")}
              />
            </div>

            <div className="contact-form-div  contact-form-area">
              <label htmlFor="" className="contact-form-tag">
                {t("contact.formMessage")}
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder={t("contact.placeholderMessage")}
              ></textarea>
            </div>

            <button
              className="contact-button-email button-flex"
              onClick={notify}
            >
              {t("contact.sendBtn")}
              <i className="bx bxs-send contact-button-icon"></i>
            </button>
            <Toaster position="bottom-center" reverseOrder={false} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
