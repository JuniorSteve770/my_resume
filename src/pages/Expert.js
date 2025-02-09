import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';


function Expertise22() {
  const expertiseData = [
    {
      title: "Financial Markets",
      items: [
        "Forex & Derivatives Trading",
        "Structured Products",
        "Risk Management",
        "Portfolio Optimization"
      ],
      icon: "📈"
    },
    {
      title: "Quantitative Analysis",
      items: [
        "Black-Scholes Modeling",
        "SABR Volatility",
        "Stochastic Calculus",
        "VaR & Risk Metrics"
      ],
      icon: "🔢"
    },
    {
      title: "Technology Stack",
      items: [
        "Python & C++",
        "React/Vue.js",
        "SQL/NoSQL",
        "API Integration"
      ],
      icon: "💻"
    }
  ];

  return (
    <section className="expertise-section py-5 bg-light">
      <Container>
        <motion.h2 
          className="text-center display-4 mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Areas of Expertise
        </motion.h2>
        
        <Row className="g-4">
          {expertiseData.map((expertise, index) => (
            <Col md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="display-4 mb-3">{expertise.icon}</div>
                    <Card.Title className="h3 mb-4">{expertise.title}</Card.Title>
                    <ul className="list-unstyled">
                      {expertise.items.map((item, idx) => (
                        <li key={idx} className="mb-2">{item}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Expertise22;