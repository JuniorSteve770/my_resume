import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';



function Footer2() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-dark text-white py-4 mt-5"
    >
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <h5>About Me</h5>
            <p>Finance & Tech enthusiast specializing in quantitative analysis, algorithmic trading, and data science.</p>
          </Col>
          <Col md={4}>
            <h5>📩 CONTACT</h5>
            <h2> +33 7 45 48 93 44</h2>
          
          </Col>
          <Col md={4}>
            <h5>Follow Me</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://github.com/JuniorSteve770" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                GitHub <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/alesterd-kamela-33245b1b3/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                LinkedIn <i className="fab fa-linkedin"></i>
              </a>
            </div>

          </Col>
        </Row>
        <Row className="mt-3 text-center">
          <Col>
            <p>&copy; 2025 Projectfolio Alesterd KAMELA.</p>
            <p>All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
}

export default Footer2;
