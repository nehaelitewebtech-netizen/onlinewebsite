import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email (example@gmail.com)");
      return false;
    }

    if (!formData.message.trim()) {
      toast.error("Message is required");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_th3exq9",
        "template_22aihvy",
        templateParams,
        "n6IqouDo8yW2qfFLl"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          toast.error("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <>
      <section className="contact-section">
        <h2 className="contact-title">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <div className="contact-container">
          <div className="contact-left">
            <h3 className="contact-heading">
              <span className="gradient-text">Let's talk</span>
            </h3>

            <p className="contact-description">
              I'm currently available to take on new projects, so feel free to
              send me a message about anything you'd like me to work on.
            </p>

            <div className="contact-info">
              <span className="gradient-text">
                <a href="mailto:neha.elitewebtech@gmail.com">
                  neha.elitewebtech@gmail.com
                </a>
                <div></div>
                <a href="tel:+918968448954">+918968448954</a>
                <div></div>
                India
              </span>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />

              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

              <label>Write your message here</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button className="gradient-btn submit-btn" type="submit">
                Submit now
              </button>
            </form>
          </div>
        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </>
  );
}
