import React from 'react';
import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { techStack } from '../data/resumeData';

import profilePic from 'D:/OLD PC/Desktop/diplomes/CV 2022/pierrick/CV_Alternance/a_project_site/photo2.jpg';

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function Hero() {
  return (
    <section className="hero-section py-5">
      <Container>
        <motion.div
          className="d-flex flex-wrap justify-content-center gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            href="https://github.com/JuniorSteve770"
            target="_blank"
            className="d-flex align-items-center gap-2"
            style={{ backgroundColor: '#24292f', color: '#fff', border: '2px solid var(--primary-color)', boxShadow: '0 4px 14px 0 rgba(36, 41, 47, 0.4)' }}
          >
            My Github
            <FaGithub size={20} />
          </Button>
          <Button onClick={() => scrollToSection('expertise')} variant="outline-primary">
            Professional Xperiences
          </Button>
          <Button onClick={() => scrollToSection('projects')} variant="outline-primary">
            My Projects
          </Button>
          <Button as={Link} to="/ai-projects" variant="outline-success" className="fw-bold">
            AI & Algo Trading
          </Button>
          <Button onClick={() => scrollToSection('certifications')} variant="outline-primary">
            My Certifications
          </Button>
          <Button
            href="https://www.linkedin.com/in/alesterd-kamela-33245b1b3/"
            target="_blank"
            className="d-flex align-items-center gap-2 border-0"
            style={{ backgroundColor: '#0077b5', color: '#fff', boxShadow: '0 4px 14px 0 rgba(0, 119, 181, 0.4)' }}
          >
            <FaLinkedin size={20} /> LinkedIn
          </Button>
        </motion.div>

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
                style={{ width: '250px', height: '250px', objectFit: 'cover', border: '5px solid var(--primary-color)' }}
              />
            </motion.div>

            {/* Email contact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-3 d-flex align-items-center justify-content-center"
            >
              <a
                href="mailto:alesterd.kamela@gmail.com"
                className="d-flex align-items-center gap-2 text-decoration-none fw-semibold"
                style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }}
              >
                <FaEnvelope size={24} />
                alesterd.kamela@gmail.com
              </a>
            </motion.div>

            {/* WhatsApp contact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-5 d-flex flex-column align-items-center gap-1"
            >
              <a
                href="https://wa.me/33745489344"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-2 text-decoration-none fw-semibold"
                style={{ color: '#25D366', fontSize: '1.2rem' }}
              >
                <FaWhatsapp size={26} />
                +33 7 45 48 93 44
              </a>
              <small className="text-muted">Click to message me on WhatsApp</small>
            </motion.div>
          </Col>

          <Col lg={8} className="pt-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h6 className="h3 fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>
                Quant IT & Research | Data Sce & DevOps <br className="d-none d-lg-block" />
                <span className="d-block mt-2 ms-4 ms-lg-5">Trade support & Financial Analyst</span>
              </h6>

              <p className="lead mb-4 text-justify">
                I am a <strong>Quantitative IT Engineer & Financial Data Analyst</strong>. With a dual competence in Software Engineering and Financial Markets, my core value is applying deep IT expertise to solve complex business cases in Front Office, Risk Management, and Data Science.
              </p>
              <p className="lead mb-4 text-justify">
                My professional approach focuses on:
              </p>
              <ul className="lead mb-4 text-justify">
                <li>Automating financial workflows and deploying robust ETL / DevOps pipelines.</li>
                <li>Developing analytical tools for Pricing, Risk Modeling, and Market Analysis.</li>
                <li>Designing scalable architectures for real-time market data processing and algorithms.</li>
                <li>Implementing CI/CD practices to ensure reliable delivery of quantitative solutions.</li>
                <li>Bridging the gap between Trading/Risk constraints and scalable tech infrastructures.</li>
              </ul>
              <p className="lead mb-4 text-justify">
                💡💡 Core capabilities applied to Finance 💡💡
              </p>
              <ul className="lead mb-4 text-justify">
                <li>✅ Quantitative Finance & Market Risk Analysis</li>
                <li>✅ Software Architecture & DevOps Pipelines</li>
                <li>✅ Machine Learning & Data Engineering</li>
              </ul>
            </motion.div>
          </Col>
        </Row>

        <div className="text-center mt-5 mb-3">
          <h4 className="fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>🛠 Technical Stack & Expertise</h4>
          <Row className="justify-content-center g-4">
            {techStack.map((categoryGroup, index) => (
              <Col md={6} lg={3} key={index}>
                <div className="p-3 shadow-sm h-100 rounded" style={{ backgroundColor: 'var(--card-bg)', borderTop: '4px solid var(--primary-color)', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
                  <h6 className="fw-bold mb-3 theme-text">{categoryGroup.category}</h6>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {categoryGroup.skills.map((skill, idx) => (
                      <Badge bg="secondary" key={idx} className="px-2 py-2 fs-6 shadow-sm border border-secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
