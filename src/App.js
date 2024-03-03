import React from "react";
import "./App.css";
import Nav from './components/nav/Nav.jsx';
import Home from './components/home/Home.jsx';
import Career from "./components/career/Career.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Nav />

      <main className="main">
        <Home />
        <Skills />
        <Career />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
