import React from "react";
import {  Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Certifications from "./pages/Certifications";
import Hero from "./pages/Herocopy";
import Expertise from "./pages/Expertise";
import Expertise2 from "./pages/Expertise2";
import Projects from "./pages/Projects";
import Entreprises from "./pages/Entreprises";
import Footer2 from "./pages/Footer2";

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Expertise /> 
      <div id="projects"> <Entreprises /></div>
      <div id="entreprises"> <Projects />  </div>
      <div id="expertise"> <Certifications /></div>   
      <Footer2 />
    </BrowserRouter>
  );
}

export default App;
