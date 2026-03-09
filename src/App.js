import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Certifications from "./pages/Certifications";
import Hero from "./pages/Herocopy";
import Expertise from "./pages/Expertise";
import Expertise2 from "./pages/Expertise2";
import Projects from "./pages/Projects";
import Entreprises from "./pages/Entreprises";
import Footer2 from "./pages/Footer2";
import AIProjects from "./pages/AIProjects";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Expertise />
            <div id="projects"> <Entreprises /></div>
            <div id="entreprises"> <Projects />  </div>
            <div id="certifications"> <Certifications /></div>
            <Footer2 />
          </>
        } />
        <Route path="/ai-projects" element={<AIProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
