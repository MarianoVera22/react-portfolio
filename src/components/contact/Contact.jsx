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

// Regex de email robusto (RFC 5322 simplificado)
const EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Reglas de longitud minima
const MIN_NAME_LENGTH = 2;
const MIN_MESSAGE_LENGTH = 10;

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    "bot-field": "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSending, setIsSending] = useState(false);

  /**
   * Valida un campo individual y devuelve la clave de error o null si esta OK.
   * Recibe la clave del campo y opcionalmente un valor (si no se pasa usa formData).
   */
  const validateField = (field, value) => {
    const val = (value !== undefined ? value : formData[field]).trim();

    switch (field) {
      case "name":
        if (!val) return "errorNameRequired";
        if (val.length < MIN_NAME_LENGTH) return "errorNameShort";
        return null;

      case "email":
        if (!val) return "errorEmailRequired";
        if (!EMAIL_REGEX.test(val)) return "errorEmailInvalid";
        return null;

      case "message":
        if (!val) return "errorMessageRequired";
        if (val.length < MIN_MESSAGE_LENGTH) return "errorMessageShort";
        return null;

      default:
        return null;
    }
  };

  /**
   * Valida el form completo y actualiza errors. Devuelve true si todo OK.
   */
  const validateAll = () => {
    const newErrors = {};
    ["name", "email", "message"].forEach((field) => {
      const err = validateField(field);
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Si el campo ya fue tocado (blurreado), revalidamos en vivo
    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot anti-spam: si tiene contenido, es bot
    if (formData["bot-field"]) {
      return;
    }

    // Marcamos todos los campos como tocados para mostrar errores
    setTouched({ name: true, email: true, message: true });

    if (!validateAll()) {
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
        setFormData({
          name: "",
          email: "",
          message: "",
          "bot-field": "",
        });
        setTouched({});
        setErrors({});
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

  // Helper para clase + mensaje de error en cada campo
  const getFieldClass = (field) =>
    `contact-form-input ${errors[field] ? "contact-form-input--error" : ""}`;

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
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />

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
                onBlur={handleBlur}
                className={getFieldClass("name")}
                placeholder={t("contact.placeholderName")}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
              />
              {errors.name && (
                <span
                  id="contact-name-error"
                  className="contact-form-error"
                  role="alert"
                >
                  {t(`contact.${errors.name}`)}
                </span>
              )}
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
                onBlur={handleBlur}
                className={getFieldClass("email")}
                placeholder={t("contact.placeholderEmail")}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
              />
              {errors.email && (
                <span
                  id="contact-email-error"
                  className="contact-form-error"
                  role="alert"
                >
                  {t(`contact.${errors.email}`)}
                </span>
              )}
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
                onBlur={handleBlur}
                className={getFieldClass("message")}
                placeholder={t("contact.placeholderMessage")}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
              ></textarea>
              {errors.message && (
                <span
                  id="contact-message-error"
                  className="contact-form-error"
                  role="alert"
                >
                  {t(`contact.${errors.message}`)}
                </span>
              )}
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
