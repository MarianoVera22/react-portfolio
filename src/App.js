import React from "react";
import "./App.css";
import Nav from './components/nav/Nav.jsx';
import Home from './components/home/Home.jsx';
import Career from "./components/career/Career.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
// import Chatbot from "./components/chatbot/Chatbot.jsx"; // Deshabilitado temporalmente - se reactivará con otro formato
import ScrollToTop from "./components/scrollToTop/ScrollToTop.jsx";
import ScrollProgress from "./components/scrollProgress/ScrollProgress.jsx";
import Splash from "./components/splash/Splash.jsx";

const App = () => {
  return (
    <>
      <Splash />
      <ScrollProgress />
      <Nav />

      <main className="main">
        <Home />
        <Skills />
        <Career />
        <Projects />
        <Contact />
      </main>

      <Footer />
      {/* <Chatbot /> */}
      <ScrollToTop />
    </>
  );
}

export default App;
