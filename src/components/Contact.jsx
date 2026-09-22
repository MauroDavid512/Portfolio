import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Contact.css";

function Contact() {
  const { lang } = useSelector((state) => state);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent("Nuevo contacto desde el portfolio");
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`,
    );

    window.location.href = `mailto:maurodaviddev@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contactSection">
      <div className="contactPaper">
        <h2>{lang === "EN" ? "Contact" : "Contacto"}</h2>
        <form className="contactForm" onSubmit={handleSubmit}>
          <label>
            {lang === "EN" ? "Name" : "Nombre"}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={lang === "EN" ? "Your name" : "Tu nombre"}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={lang === "EN" ? "your@email.com" : "tu@email.com"}
            />
          </label>

          <label>
            {lang === "EN" ? "Message" : "Mensaje"}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder={
                lang === "EN"
                  ? "Tell me about your project"
                  : "Contame sobre tu proyecto"
              }
            />
          </label>

          <button type="submit" className="paperButton contactSubmit">
            {lang === "EN" ? "Send message" : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
