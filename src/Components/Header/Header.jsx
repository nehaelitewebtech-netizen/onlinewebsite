import React from "react";
import "./Header.css";


export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <span className="gradient-text">Neha</span>
       
      </div>

      <nav className="nav">
        <ul>
          <li className="active">Home</li>
          <li>About Me</li>
          <li>Projects</li>
           <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>

      <button className="connect-btn">Connect With Me</button>
    </div>
  )
};
