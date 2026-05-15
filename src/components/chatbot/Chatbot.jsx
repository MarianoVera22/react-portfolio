import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { trackEvent } from "../../utils/analytics";
import "./Chatbot.css";

const Chatbot = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  // messages = array de { sender: "bot" | "user", text: string }
  const [messages, setMessages] = useState([]);
  const [showQuestions, setShowQuestions] = useState(true);
  const messagesEndRef = useRef(null);

  // Lista de preguntas (claves de translations.chatbot)
  const questionKeys = ["q1", "q2", "q3", "q4", "q5", "q6"];
  const answerMap = {
    q1: "a1",
    q2: "a2",
    q3: "a3",
    q4: "a4",
    q5: "a5",
    q6: "a6",
  };

  // Auto-scroll al final del chat cuando llega un mensaje nuevo
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, showQuestions]);

  // Al abrir el chat por primera vez, mostrar mensaje de bienvenida
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ sender: "bot", text: t("chatbot.welcome") }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const toggleChat = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next) {
      trackEvent("chatbot_open");
    }
  };

  const handleQuestionClick = (qKey) => {
    const userText = t(`chatbot.${qKey}`);
    const botText = t(`chatbot.${answerMap[qKey]}`);

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
      { sender: "bot", text: botText },
    ]);
    setShowQuestions(false);

    trackEvent("chatbot_question", { question_key: qKey });
  };

  const handleBackToMenu = () => {
    setShowQuestions(true);
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        type="button"
        className={`chatbot-toggle ${isOpen ? "chatbot-toggle--open" : ""}`}
        onClick={toggleChat}
        aria-label={isOpen ? t("chatbot.closeLabel") : t("chatbot.openLabel")}
        title={isOpen ? t("chatbot.closeLabel") : t("chatbot.openLabel")}
      >
        {isOpen ? (
          <i className="uil uil-times"></i>
        ) : (
          <i className="uil uil-comments-alt"></i>
        )}
      </button>

      {/* Panel del chat */}
      <div
        className={`chatbot-panel ${isOpen ? "chatbot-panel--open" : ""}`}
        role="dialog"
        aria-hidden={!isOpen}
        aria-label={t("chatbot.headerTitle")}
      >
        <div className="chatbot-header">
          <div className="chatbot-header-avatar">
            <i className="uil uil-robot"></i>
          </div>
          <div className="chatbot-header-text">
            <h4 className="chatbot-header-title">
              {t("chatbot.headerTitle")}
            </h4>
            <span className="chatbot-header-subtitle">
              {t("chatbot.headerSubtitle")}
            </span>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chatbot-message chatbot-message--${msg.sender}`}
            >
              {msg.text}
            </div>
          ))}

          {showQuestions && (
            <div className="chatbot-questions">
              {questionKeys.map((qKey) => (
                <button
                  key={qKey}
                  type="button"
                  className="chatbot-question-btn"
                  onClick={() => handleQuestionClick(qKey)}
                >
                  {t(`chatbot.${qKey}`)}
                </button>
              ))}
            </div>
          )}

          {!showQuestions && (
            <button
              type="button"
              className="chatbot-back-btn"
              onClick={handleBackToMenu}
            >
              <i className="uil uil-arrow-left"></i>
              {t("chatbot.backToMenu")}
            </button>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>
    </>
  );
};

export default Chatbot;
