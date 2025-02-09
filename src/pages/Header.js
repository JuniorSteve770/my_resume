import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Hero() {
  return (
    <div className="hero-section position-relative">
      <Container className="d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4 overflow-hidden">
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="Full Stack Developer & Data Analyst" />
          <p className="gray-90 mt-3 fs-5">
            Specialized in building robust applications with Python, C#, React.js, and data analysis with Power BI
          </p>
          <div className="d-flex gap-3">
            <Button className="m-0 my-3 px-4 py-2 fs-5">View Projects</Button>
            <Button className="m-0 my-3 px-4 py-2 fs-5" variant="outline-primary">Contact Me</Button>
          </div>
          
          <div className="d-flex justify-content-between align-items-center my-4 tech-stack">
            <div>
              <h5 className="fw-bold">Backend</h5>
              <span className="tech-list">Python, C#, SQL</span>
            </div>
            <div>
              <h5 className="fw-bold">Frontend</h5>
              <span className="tech-list">React, HTML, CSS</span>
            </div>
            <div>
              <h5 className="fw-bold">DevOps</h5>
              <span className="tech-list">Docker, Git, CI/CD</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-100 my-5"
        >
          <div className="featured-projects">
            <h3 className="text-center mb-4">Featured Projects</h3>
            <div className="project-grid">
              <div className="project-card">
                <h5>Power BI Analytics</h5>
                <p>Advanced data visualization and analysis</p>
                <a href="#" className="project-link">View Project →</a>
              </div>
              <div className="project-card">
                <h5>Bloomberg Stock Analysis</h5>
                <p>Apple stock analysis using Python</p>
                <a href="#" className="project-link">View Project →</a>
              </div>
              <div className="project-card">
                <h5>Portfolio Optimization</h5>
                <p>Markowitz Model implementation</p>
                <a href="#" className="project-link">View Project →</a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Hero;