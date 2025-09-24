import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import NavbarComponent from "./components/NavbarComponent"; // your navbar
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from './components/Footer';





function App() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
     < Certification />
     <Achievements />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
