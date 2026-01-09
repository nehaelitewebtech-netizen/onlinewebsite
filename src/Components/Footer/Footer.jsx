import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
export default function Footer({ onaboutClick , onprojectsClick,}) {
 
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={onaboutClick}>About Me</li>
            <li onClick={onprojectsClick}>Projects </li>
          </ul>
        </div>

      
        <div className="footer-column">
          <h3>Location</h3>
          <p>
            <FaMapMarkerAlt className="footer-icon" />
            CRPF Campus, Chandigarh
          </p>
        </div>

        <div className="footer-column">
          <h3>Connect With Me</h3>
          <div className="social-links">
            <a href="https://github.com/nehaelitewebtech-netizen" target="_blank" rel="noreferrer">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/neha-sharma-461369292/" target="_blank" rel="noreferrer">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>

      
    </footer>
  );
  
}
