import React, { useState } from "react";
import "./Career.css";
import { useLanguage } from "../../context/LanguageContext";

const Career = () => {
  const [toggleState, setToggleState] = useState(1);
  const { t } = useLanguage();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="career section" id="trayectoria">
      <h2 className="section-title">{t("career.title")}</h2>
      <span className="section-subtitle">{t("career.subtitle")}</span>

      <div className="career-container container">
        <div className="career-tabs">
          <div
            className={
              toggleState === 1
                ? "career-button career-active button-flex"
                : "career-button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="bx bxs-graduation career-icon"></i> {t("career.education")}
          </div>

          <div
            className={
              toggleState === 2
                ? "career-button career-active button-flex"
                : "career-button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="bx bxs-briefcase-alt-2 career-icon"></i>
            {t("career.experience")}
          </div>
        </div>

        <div className="career-sections">
          <div
            className={
              toggleState === 1
                ? "career-content career-content-active"
                : "career-content"
            }
          >
            <div className="career-data">
              <div>
                <h3 className="career-title">{t("career.edu1Title")}</h3>
                <span className="career-subtitle">{t("career.edu1Sub")}</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2026 - {t("career.present")}
                </div>
              </div>

              <div>
                <span className="career-rounder"></span>
                <div className="career-line"></div>
              </div>
            </div>

            <div className="career-data">
              <div></div>
              <div>
                <span className="career-rounder"></span>
                <span className="career-line"></span>
              </div>

              <div>
                <h3 className="career-title">{t("career.edu2Title")}</h3>
                <span className="career-subtitle">{t("career.edu2Sub")}</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2025 - 2025
                </div>
              </div>
            </div>

            <div className="career-data">
              <div>
                <h3 className="career-title">{t("career.edu3Title")}</h3>
                <div className="career-calendar">
                  <span className="career-subtitle">{t("career.edu3Sub")}</span>
                  <i className="uil uil-calendar-alt"></i> 2025 - 2025
                </div>
              </div>

              <div>
                <span className="career-rounder"></span>
                <div className="career-line"></div>
              </div>
            </div>

            <div className="career-data">
              <div></div>
              <div>
                <span className="career-rounder"></span>
                <span className="career-line"></span>
              </div>

              <div>
                <h3 className="career-title">{t("career.edu4Title")}</h3>
                <span className="career-subtitle">{t("career.edu4Sub")}</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 - 2024
                </div>
              </div>
            </div>

            <div className="career-data">
              <div>
                <h3 className="career-title">{t("career.edu5Title")}</h3>
                <span className="career-subtitle">{t("career.edu5Sub")}</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2023
                </div>
              </div>

              <div>
                <span className="career-rounder"></span>
                <div className="career-line"></div>
              </div>
            </div>

            <div className="career-data">
              <div></div>

              <div>
                <span className="career-rounder"></span>
                <span className="career-line"></span>
              </div>

              <div>
                <h3 className="career-title">{t("career.edu6Title")}</h3>
                <span className="career-subtitle">{t("career.edu6Sub")}</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2023
                </div>
              </div>
            </div>

            <div className="career-data">
              <div>
                <h3 className="career-title">{t("career.edu7Title")}</h3>
                <span className="career-subtitle">{t("career.edu7Sub")}</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>

              <div>
                <span className="career-rounder"></span>
                <div className="career-line"></div>
              </div>
            </div>

            <div className="career-data">
              <div></div>

              <div>
                <span className="career-rounder"></span>
                <span className="career-line"></span>
              </div>

              <div>
                <h3 className="career-title">{t("career.edu8Title")}</h3>
                <span className="career-subtitle">{t("career.edu8Sub")}</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2021
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="career-sections">
          <div
            className={
              toggleState === 2
                ? "career-content career-content-active"
                : "career-content"
            }
          >
            <div className="career-data">
              <div>
                <h3 className="career-title">{t("career.exp1Title")}</h3>
                <span className="career-subtitle">{t("career.exp1Sub")}</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2025 - {t("career.present")}
                </div>
              </div>

              <div>
                <span className="career-rounder"></span>
                <div className="career-line"></div>
              </div>
            </div>

            <div className="career-data">
              <div></div>

              <div>
                <span className="career-rounder"></span>
                <span className="career-line"></span>
              </div>

              <div>
                <h3 className="career-title">{t("career.exp2Title")}</h3>
                <span className="career-subtitle">{t("career.exp2Sub")}</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 - 2025
                </div>
              </div>
            </div>

            <div className="career-data">
              <div>
                <h3 className="career-title">{t("career.exp3Title")}</h3>
                <span className="career-subtitle">{t("career.exp3Sub")}</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2024
                </div>
              </div>

              <div>
                <span className="career-rounder"></span>
                <div className="career-line"></div>
              </div>
            </div>

            <div className="career-data">
              <div></div>

              <div>
                <span className="career-rounder"></span>
                <span className="career-line"></span>
              </div>

              <div>
                <h3 className="career-title">{t("career.exp4Title")}</h3>
                <span className="career-subtitle">{t("career.exp4Sub")}</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>

            <div className="career-data">
              <div>
                <h3 className="career-title">{t("career.exp5Title")}</h3>
                <span className="career-subtitle">{t("career.exp5Sub")}</span>
                <div className="career-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>

              <div>
                <span className="career-rounder"></span>
                <div className="career-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
