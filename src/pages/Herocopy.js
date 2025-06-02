import React from 'react';
import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

import githubLogo from 'D:/OLD PC/Desktop/diplomes/CV 2022/pierrick/CV_Alternance/a_project_site/github.png'; 
import profilePic from 'D:/OLD PC/Desktop/diplomes/CV 2022/pierrick/CV_Alternance/a_project_site/photo2.jpg'; 

import CV from '../images/CV_images/CV_Alesterd KAMELA.pdf';
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function Hero() {
const techStack = [
  // Programming
  "Python", "C#/C++", "SQL", "JavaScript (React)",

  // Data & AI
  "Pandas,Pytorch", "TensorFlow", "Machine Learning",

  // Finance & Tools
  "BA/BI","Git","REST API",

  // Banking Systems
  "Summit","Sophys","Jump"
];
  return (
    <section className="hero-section py-5">
      <Container>
        <Row className="align-items-center text-start">
          <Col lg={4} className="text-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src={profilePic} 
                roundedCircle 
                fluid 
                alt="Alesterd Kamela"
                className="mb-4 profile-pic"
                width={280}
                height={200}
              />
            </motion.div>
          </Col>

          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h6 className="display-6 fw-bold mb-6">
                Quant | Risk | Data | Operational Support
              </h6>
              <p className="lead mb-4 text-justify">
                I am passionate about finance and technology, with a strong interest in Markets Dynamics & Trends. 
                My skills are essential assets in my day-to-day responsibilities, where I strive to deliver robust and impactful solutions.
                Always eager to learn and grow. My combined skillset proves valuable in my daily responsibilities.
              </p>
              <p className="lead mb-4 text-justify">
                professional approach i use is built on:
              </p>
              <ul className="lead mb-4 text-justify">
                <li>Fast integration into IT and business teams</li>
                <li>Functional analysis and tool automation</li>
                <li>Technical projects & continuous learning (BNF weekend sessions)</li>
              </ul>
              <p className="lead mb-4 text-justify">
                💡 My areas of expertise:
              </p>
              <ul className="lead mb-4 text-justify">
                <li>✅ Quantitative Finance</li>
                <li>✅ Operational Support(FO, MO, Risk)</li>
                <li>✅ Business Analysis</li>
                <li>✅ Data Science & Fintech</li>
              </ul>
            </motion.div>
          </Col>
        </Row>

        <div className="text-center mb-1" style={{ marginTop: '15px' }}>
          <h5 className="fw-bold">🛠 Stack Technique</h5>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <div className="d-flex flex-wrap justify-content-center gap-1 mt-3">
              {techStack.map((tech, idx) => (
                <Badge bg="dark" key={idx} className="px-3 py-2 fs-6 rounded-pill shadow-sm">
                  {tech}
                </Badge>
              ))}
            </div>
                        <motion.div
              className="d-flex flex-wrap justify-content-center gap-3"
              style={{ marginTop: '30px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button variant="dark btn-lg" href="https://github.com/JuniorSteve770" target="_blank">
                My Github Repos
                <Image src={githubLogo} alt="github" width={24} height={24} />
              </Button>
              <Button onClick={() => scrollToSection('projects')} variant="outline-primary btn-lg">
                🚀Experiences and Projects
              </Button>
              <Button onClick={() => scrollToSection('expertise')} variant="outline-primary btn-lg">
                My Certifications
              </Button>
              <Button variant="primary btn-lg" href="https://www.linkedin.com/in/alesterd-kamela-33245b1b3/" target="_blank">
                🔗 LinkedIn
              </Button>

            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
