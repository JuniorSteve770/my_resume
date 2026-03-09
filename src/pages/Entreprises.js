import React from 'react';
import { Container, Card, Badge, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import "../style_old.css";





import { experiencesData } from '../data/resumeData';

function Entreprises() {


  return (
    <section className="experience-section py-5" id="experience">
      <Container>
        <motion.h2
          className="text-center display-6 mb-5 fw-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        {experiencesData.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="shadow-sm">
              <Card.Header className="bg-dark text-white d-flex align-items-center justify-content-between">
                {exp.logo && <Image src={exp.logo} alt={exp.company} style={{ height: 60, borderRadius: '8px' }} />}
                <strong className="h5 text-center mx-auto">{exp.company}</strong>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-primary text-center mb-3 h5">{exp.role}</Card.Title>
                <ul className="mb-3">
                  {exp.missions.map((mission, idx) => (
                    <li key={idx} className="fw-medium lh-lg theme-text">{mission}</li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {exp.techStack.map((tech, id) => (
                    <Badge bg="secondary" className="p-2" key={id}>{tech}</Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </Container>
    </section>
  );
}

export default Entreprises;


