import React, { useState } from "react";
import achievementsData from "../data/achievementsData"; // <-- correct path
import "./Achievements.css";

const Achievements = () => {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  return (
    <section id="achievements"className="achievements-section">
      <h2 className="achievements-title">Achievements</h2>
      <div className="achievements-grid">
        {achievementsData.map((ach) => (
          <div
            key={ach.id}
            className="achievement-card"
            onClick={() => openModal(ach.img)}
          >
            <img src={ach.img} alt={ach.title} className="achievement-img" />
            <div className="achievement-desc">
              <h3>{ach.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {modalImg && (
        <div className="achievement-modal" onClick={closeModal}>
          <div className="achievement-modal-content">
            <img src={modalImg} alt="Achievement" className="achievement-full-img" />
            <button className="achievement-close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
