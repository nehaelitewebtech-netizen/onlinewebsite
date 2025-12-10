import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

   
      <div className="footer-column left">
        <h2 className="logo">Neha<span className="dot"></span></h2>
        <p className="copy">© 2025 Neha. All rights reserved.</p>
      </div>

      <div className="footer-column center">
        <p className="location-title">Location</p>
        <p className="location-value">Chandigarh</p>
      </div>

      <div className="footer-column right">
        <a href="https://www.linkedin.com/in/neha-sharma-461369292/" target="_blank">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://github.com/nehaelitewebtech-netizen" target="_blank">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://x.com/NehaSharma0909" target="_blank">
          <FaTwitter className="footer-icon" />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
