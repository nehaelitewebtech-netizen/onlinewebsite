import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        
        
        <div className="footer-social-buttons">
          <a href="#" className="social-btn"><FaGithub /></a>
          <a href="#" className="social-btn"><FaLinkedin /></a>
          <a href="#" className="social-btn"><FaTwitter /></a>
          <a href="mailto:neha@example.com" className="social-btn"><FaEnvelope /></a>
        </div>

       
      </div>

      <div className="footer-bottom">
        <p>© 2025 Neha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
