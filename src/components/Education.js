import React from "react";
import "./Education.css";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institute: "Karmaveer Bhaurao Patil College Of Engineering, Satara",
    year: "2021 - 2025",
    grade: "CGPA: 8.53",
  },
  {
    degree: "Higher Secondary Certificate (HSC) - PCM",
    institute: "Jr College of Arts, Commerce, Science and Vocational, Rahimatpur",
    year: "2019 - 2021",
    grade: "Percentage: 92.50%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institute: "Vasantadada Patil Vidyalaya, Rahimatpur",
    year: "2017 - 2019",
    grade: "Percentage: 93%",
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-year">{edu.year}</div>
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-institute">{edu.institute}</p>
            <p className="education-grade">{edu.grade}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
