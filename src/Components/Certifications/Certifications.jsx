import React from "react";
import "./Certifications.css";

export default function Certification() {
  const certificates = [
    {
      title: "Web Development",
      provider: "Uptalent Platform Pvt. Ltd",
      year: "August 2024",
      preview: "#", // link to certificate or file
    },
  ];

  return (
    <div className="certification-container">
      <h2 className="cert-heading">My Certifications</h2>

      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <p className="provider">{cert.provider}</p>
            <span className="year">{cert.year}</span>

            <div className="cert-btn-wrapper">
              <a
                href={cert.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
