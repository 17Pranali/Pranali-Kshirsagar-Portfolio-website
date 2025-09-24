import React, { useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./Hero.css";

const slides = [
  {
    titleTop: "HELLO THERE!",
    title: "I'm Pranali Kshirsagar",
    subtitle: "Crafting Beautiful Software & Digital Experiences",
    img: "/images/pranali1.jpg",
    buttons: [
      { text: "Download CV", type: "primary", link: "Pranali_Kshirsagar_7507244861.pdf", download: true },
      { text: "Contact Me", type: "secondary", link: "#contact" },
    ],
  },
  {
    titleTop: "CREATIVE TECH",
    title: "Full-Stack Developer & Designer",
    subtitle: "Transforming Ideas into Seamless Digital Solutions 🚀",
    img: "/images/pranali1.jpg",
    buttons: [
      { text: "My Projects", type: "primary", link: "#projects" },
      { text: "Hire Me", type: "secondary", link: "https://www.fiverr.com/pranali_v_k?public_mode=true" },
    ],
  },
  {
    titleTop: "LET'S CONNECT",
    title: "Collaborate & Innovate",
    subtitle: "Turning Challenges into Opportunities Through Code",
    img: "/images/pranali1.jpg",
    buttons: [
      { text: "Work With Me", type: "primary", link: "#contact" },
      { text: "Get in Touch", type: "secondary", link: "https://www.linkedin.com/in/pranali-kshirsagar17/" },
    ],
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section id="home" className="hero-section">
      <Container className="hero-container">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={4000}
          controls={false}
          indicators={false}
        >
          {slides.map((s, i) => (
            <Carousel.Item key={i}>
              <Row className="align-items-center hero-row">
                {/* Text column */}
                <Col md={7} className="order-md-1 order-2">
                  <div className="hero-text">
                    {s.titleTop && <p className="intro">{s.titleTop}</p>}
                    <h1 className="hero-title">
                      {s.title.split(" ").map((word, idx) =>
                        idx === 1 ? (
                          <span key={idx} className="highlight">
                            {" " + word}
                          </span>
                        ) : (
                          " " + word
                        )
                      )}
                    </h1>
                    <p className="subtitle">{s.subtitle}</p>

                    {/* Dynamic Buttons */}
                    <div className="hero-buttons center-buttons">
                      {s.buttons.map((btn, j) => {
                        // Internal scroll links
                        if (btn.link.startsWith("#")) {
                          return (
                            <a
                              key={j}
                              href={btn.link}
                              className={btn.type === "primary" ? "btn-primary" : "btn-secondary"}
                            >
                              {btn.text}
                            </a>
                          );
                        }

                        // External links or download
                        return (
                          <a
                            key={j}
                            href={btn.link}
                            className={btn.type === "primary" ? "btn-primary" : "btn-secondary"}
                            target={btn.download ? "_self" : "_blank"}
                            rel={btn.download ? undefined : "noopener noreferrer"}
                            {...(btn.download ? { download: true } : {})}
                          >
                            {btn.text}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </Col>

                {/* Image column */}
                <Col md={5} className="text-center order-md-2 order-1">
                  <div className="hero-image">
                    <img src={s.img} alt={s.title} className="hero-img" />
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Arrows → outside content */}
        <button className="hc hc-prev" onClick={prev} aria-label="Previous">
          ‹
        </button>
        <button className="hc hc-next" onClick={next} aria-label="Next">
          ›
        </button>
      </Container>
    </section>
  );
}

export default Hero;
