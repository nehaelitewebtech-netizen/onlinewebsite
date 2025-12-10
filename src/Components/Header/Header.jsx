import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ onAboutClick }) {
  return (
    <div className="header">
      <div className="logo">
        <span className="gradient-text">Neha</span>
      </div>

      <nav className="nav-Links">
        <Link to="/">Home</Link>

     
        <span className="nav-link" onClick={onAboutClick}>
          About
        </span>

        <Link to="/Projects">Projects</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Certifications">Certification</Link>
      </nav>

      <button className="connect-btn">
        <Link to="/contact">Connect With Me</Link>
      </button>
    </div>
  );
}
