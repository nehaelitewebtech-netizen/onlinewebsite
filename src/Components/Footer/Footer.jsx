import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="logo">
          Neha<span className="dot"></span>
        </h2>

    
        <p className="copyright">
          © 2023 Neha. All rights reserved.
        </p>
      </div>

      <div className="footer-right">
        <div className="footer-links">
          <a href="#">Terms of Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Connect with me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
