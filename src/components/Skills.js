import React, { useEffect, useRef } from "react";
import skillsData from "../data/skillsData";
import "./Skills.css";

const Skills = () => {
  const fills = useRef([]);

  useEffect(() => {
    const elements = fills.current.slice(); // snapshot for cleanup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const w = el.dataset.width || 0;
            el.style.width = `${w}%`;
          }
        });
      },
      { threshold: 0.35 }
    );

    elements.forEach((el) => el && observer.observe(el));
    return () => elements.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-container">
        {skillsData.map((cat, ci) => (
          <div key={ci} className="skill-category">
            <h3>{cat.category}</h3>
            {cat.skills.map((skill, si) => (
              <div key={si} className="skill-card">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  {/* hidden until hover */}
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    data-width={skill.percentage}
                    ref={(el) => (fills.current[ci * 10 + si] = el)}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
