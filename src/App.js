import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from './components/nav/Nav.jsx';
import Home from './components/home/Home.jsx';
import Career from "./components/career/Career.jsx";
import Skills from "./components/skills/Skills.jsx";

const App = () => {
  return (
  <>
    <Nav />
    <main className="main">
      <Home />
      <Career />
      <Skills />
    </main>
    
  </>
  );
}

export default App;
