import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';



function Footer2() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-4 mt-5"
      style={{ backgroundColor: 'var(--darker-bg)', borderTop: '1px solid var(--border-color)' }}
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
            <div className="d-flex justify-content-center gap-3 mb-2">
              <a href="https://github.com/JuniorSteve770" target="_blank" rel="noopener noreferrer" className="me-3 text-decoration-none" style={{ color: 'var(--text-main)' }}>
                GitHub <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/alesterd-kamela-33245b1b3/" target="_blank" rel="noopener noreferrer" className="me-3 text-decoration-none" style={{ color: 'var(--text-main)' }}>
                LinkedIn <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <a href="https://wa.me/33745489344" target="_blank" rel="noopener noreferrer" className="text-decoration-none d-flex align-items-center gap-2" style={{ color: '#25D366', fontWeight: '500' }}>
                <FaWhatsapp size={24} /> Write to me on WhatsApp
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
