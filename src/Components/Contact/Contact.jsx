import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">

      <h2 className="contact-title">
        Get in <span className="gradient-text">touch</span>
      </h2>

      <div className="contact-container">

       
        <div className="contact-left">
          <h3 className="contact-heading">
            Let's <span className="gradient-text">talk</span>
          </h3>

          <p className="contact-description">
            I'm currently available to take on new projects, so feel free to send
            me a message about anything you'd like me to work on. You can
            contact me anytime.
          </p>

          <div className="contact-info">
            <p> nehasharmma72@gmail.com</p>
            <p> +91 8968448954</p>
            <p> India</p>
          </div>
        </div>

       
        <div className="contact-right">
          <form className="contact-form">

            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Write your message here</label>
            <textarea placeholder="Enter your message"></textarea>

            <button className="gradient-btn submit-btn">Submit now</button>

          </form>
        </div>

      </div>
    </section>
  );
}
