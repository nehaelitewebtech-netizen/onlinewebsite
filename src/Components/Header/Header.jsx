import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ onaboutClick , onprojectClick, onSkillClick, onCertificationsClick , onContactClick}) {
  return (
    <div className="header">
      <div className="logo">
        <span className="gradient-text">Neha</span>
      </div>

      <nav className="nav-Links">
        <Link to="/">Home</Link>

     
        <span className="nav-link" onClick={onaboutClick}>
          About
        </span>

        <span className="nav-link" onClick={onprojectClick}>
          Projects
        </span>

        <span className="nav-link" onClick={onSkillClick}>
          Skills
        </span>

         <span className="nav-link" onClick={onCertificationsClick}>
          Certifications
        </span>

       
        
       
      </nav>

      <button className="connect-btn">
       <span className="nav-link" onClick={onContactClick}>
          Connect With Me
        </span>
      </button>
    </div>
  );
}
