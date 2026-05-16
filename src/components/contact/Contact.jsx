import React, { useState } from "react";
import "./Contact.css";
import toast, { Toaster } from "react-hot-toast";
import { useLanguage } from "../../context/LanguageContext";
import { trackEvent } from "../../utils/analytics";

// Helper: convierte un objeto a application/x-www-form-urlencoded
// (formato que espera Netlify Forms)
const encode = (data) =>
  Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    "bot-field": "", // honeypot
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Si el honeypot tiene contenido, es un bot. Cortamos sin avisar.
    if (formData["bot-field"]) {
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      });

      if (response.ok) {
        toast.success(t("contact.toastSent"));
        trackEvent("contact_form_submit", { status: "success" });
        // Reset
        setFormData({
          name: "",
          email: "",
          message: "",
          "bot-field": "",
        });
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      toast.error(t("contact.toastError"));
      trackEvent("contact_form_submit", { status: "error" });
      console.error("Error enviando formulario:", error);
    } finally {
      setIsSending(false);
    }
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
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Campo oculto requerido por Netlify para identificar el form */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot anti-spam: oculto, si un bot lo rellena descartamos */}
            <p className="contact-honeypot">
              <label>
                Don't fill this out:{" "}
                <input
                  name="bot-field"
                  value={formData["bot-field"]}
                  onChange={handleChange}
                />
              </label>
            </p>

            <div className="contact-form-div">
              <label htmlFor="contact-name" className="contact-form-tag">
                {t("contact.formName")}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-form-input"
                placeholder={t("contact.placeholderName")}
                required
              />
            </div>

            <div className="contact-form-div">
              <label htmlFor="contact-email" className="contact-form-tag">
                {t("contact.formEmail")}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-form-input"
                placeholder={t("contact.placeholderEmail")}
                required
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <label htmlFor="contact-message" className="contact-form-tag">
                {t("contact.formMessage")}
              </label>
              <textarea
                id="contact-message"
                name="message"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleChange}
                className="contact-form-input"
                placeholder={t("contact.placeholderMessage")}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-button-email button-flex"
              disabled={isSending}
            >
              {isSending ? t("contact.sending") : t("contact.sendBtn")}
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
