import React, { useState } from "react";
import certificatedata from "../data/certificatedata";
import "./Certification.css";

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certification" className="cert-section">
      <h2 className="cert-title">Certifications</h2>
      <div className="cert-grid">
        {certificatedata.map((cert) => (
          <div
            key={cert.id}
            className="cert-card"
            onClick={() => setSelectedCert(cert)}
          >
            <img src={cert.img} alt={cert.title} className="cert-img" />
            <div className="cert-desc">
              <h3>{cert.title}</h3>
              <p>{cert.provider}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged certificate */}
      {selectedCert && (
        <div className="cert-modal">
          <div className="cert-modal-content">
            <button className="cert-close" onClick={() => setSelectedCert(null)}>
              ← Back
            </button>
            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              className="cert-full-img"
            />
            <h3>{selectedCert.title}</h3>
            <p>{selectedCert.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certification;
