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
    "Python", "C++/C#", "VBA", "SQL", "JavaScript (React, Vue)", "//", "Data Science stack", "Machine Learning",
    "Financial Modelling", "API (Rest/GraphQL)", "//", "Quantitative Finance", "Algorithmic Trading"
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
              <h3 className="display-3 fw-bold mb-6">
                📌 Finance & IT Developer
               </h3>
               <p className="lead mb-4 text-justify">
               Je suis passionné par la Finance et la technologie (IT, Programmation, Data Science ), et toujours désireux d'apprendre et de progresser.
               Mes compétences en Finance Quantitative, Data Science et Business Analyst   me sont précieuses dans mes missions quotidiennes.
              </p>
              <p className="lead mb-4 text-justify">
                Mon approche professionnelle repose sur :
             
              <ul className="lead mb-4 text-justify">
                <li>Collaboration quotidienne avec les équipes pour une intégration rapide, complétée par des recherches et optimisation des solutions existantes.</li>
                <li>Travail approfondi les week-ends à la Bibliothèque nationale (BNF Paris) sur des projets personnels et professionnels pour renforcer mes compétences et innover.</li>
              </ul>
              
                💡 Mon expertise couvre :
              
              <ul className="lead mb-4 text-justify">
                ✅ Finance de Marché ✅ Gestion des Risques ✅ Programmation ✅ Data Science & Fintech. 
              </ul>
            </p>
            </motion.div>
          </Col>
        </Row>
         
            <div className="text-center mb-1 " style={{marginTop: '15px'}}>
              <h5 className="fw-bold">🛠 Tech Stack & Langages de Programmation</h5>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {techStack.map((tech, idx) => (
                  <Badge bg="secondary" key={idx} className="p-2">{tech}</Badge>
                ))}        
            <motion.div
            className="d-flex flex-wrap justify-content-center gap-3"
              // className="mb-3  gap-2 me-2 align-items-center justify-content-center "
              style={{marginTop: '30px'}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button  variant="dark btn-lg"   href={CV}  download="CV_Alesterd KAMELA.pdf">
                📄 Download CV 
              </Button>
              <Button   onClick={() => scrollToSection('projects')}variant="outline-primary btn-lg" >
                🚀Experiences and Projects
              </Button>
              <Button   onClick={() => scrollToSection('expertise')} variant="outline-primary btn-lg" >
                My Certifications
                </Button>
              <Button   variant="primary btn-lg" href="https://www.linkedin.com/in/alesterd-kamela-33245b1b3/" target="_blank">
                🔗 LinkedIn
              </Button>
              <Button variant="dark btn-lg" href="https://github.com/JuniorSteve770" target="_blank">  My Github Repos
              <Image src={githubLogo} alt="github" width={24} height={24} />
              </Button>
              </motion.div>
              </div>
              </div>
      </Container>
    </section>
  );
}

export default Hero;


