import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-left">
        <h2 className="logo">
          Neha<span className="dot"></span>
        </h2>

        <p className="copyright">
          © 2025 Neha. All rights reserved.
        </p>
      </div>

     
      <div className="footer-right">

     
        <div className="footer-links">
          <a href="#">Terms of Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Connect with me</a>
        </div>

       
        <div className="social-icons">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>

          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>

          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
