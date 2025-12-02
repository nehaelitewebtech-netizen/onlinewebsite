import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">

      <div className="contact-left">
        <h1>Contact Me</h1>
        <p className="contact-sub">
          Feel free to reach out! I’d love to connect with you.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
