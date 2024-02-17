import React from 'react'

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
                    <i className="bx bx contact-card-icon"></i>

                    <h3 className="contact-card-title">Linkedin</h3>
                    <span className="contact-card-data"></span>

                    <a href="https://www.linkedin.com/in/marianoveracausich/" className="contact-button" target="_blank" rel='noreferrer'>
                      {/* icono linkedin */}
                    </a>
                  </div>
                </div>
            </div>

            <div className="contact-content">
                <h3 className="contact-title">Email</h3>
            </div>
        </div>
    </section>
  )
}

export default Contact