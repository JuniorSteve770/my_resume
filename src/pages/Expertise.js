import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { educationData } from '../data/resumeData';

const expertiseData = [
  {
    title: 'Quantitative Finance & Modeling',
    icon: '📊',
    details: {
      competencies: [
        'Pricing models (Black-Scholes, SABR, Heston)',
        'Credit and Market Risk: VaR, CVaR, EAD, LGD, PD',
        'Derivatives: Swaps, Options, Futures',
        'Stress testing, backtesting, Greeks sensitivity',
        'Portfolio optimization (CAPM, Markowitz)'
      ],
      projects: [
        '- Default risk simulation (PD, LGD, EAD)',
        '- Volatility smile and implied volatility analysis',
        '- Pricing of complex derivative products',
        '- VaR/CVaR comparative analysis on market data'
      ]
    }
  },
  {
    title: 'Algorithmic Trading & Backtesting',
    icon: '📈',
    details: {
      competencies: [
        'Strategies (MACD, RSI, arbitrage)',
        'Market data via APIs (Binance, Yahoo, TradingView)',
        'Automated trading (MetaTrader 4, Crypto)',
        'Machine Learning in trading',
        'Risk management (Volatility, Spread), PnL monitoring (Power BI, Python)'
      ],
      projects: [
        '- Backtesting of Forex/Crypto strategies (Daily Close)',
        '- Scalping and swing trading strategy development',
        '- Crypto algo-trading with Riskfolio-Lib',
        '- Automated PnL pipeline using VBA/Python'
      ]
    }
  },
  {
    title: 'Data Science & Machine Learning',
    icon: '🤖',
    details: {
      competencies: [
        'Forecasting: GARCH, ARIMA, XGBoost, LSTM',
        'Clustering & Factor Analysis (PCA, DBSCAN)',
        'ETL & Data Pipelines (SQL, API, FastAPI, Flask)',
        'Reporting automation for risk management',
        'Cloud & CI/CD: AWS, GCP, Azure, Databricks'
      ],
      projects: [
        '- Predictive modeling (XGBoost, LSTM)',
        '- Financial sentiment analysis & scraping',
        '- Asset recommendation system using cointegration'
      ]
    }
  },
  {
    title: 'IT Development & Automation in Finance',
    icon: '💻',
    details: {
      competencies: [
        'Languages: Python, SQL, VBA, C++, React',
        'Business tools & process automation (VBA/Python)',
        'ETL, REST APIs, market data processing',
        'Web & server application deployment',
        'Functional & technical specifications'
      ],
      projects: [
        '- Automation of business reporting & tasks',
        '- Web development with React, Django, PHP',
        '- Writing functional specs (BA/IT)',
        '- Financial APIs and real-time backtesting'
      ]
    }
  }
];

function Expertise() {
  return (
    <Container className="py-5" id="expertise">
      {/* Education & Academic Path Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-5"
      >
        <h2 className="text-center display-6 mb-5 fw-bold">Academic Path & Dual Competence</h2>
        <p className="text-center lead mb-5 text-muted">
          Educational background combining Software Engineering with high-level Quantitative Finance and Risk Management.
        </p>
        <Row className="g-4 justify-content-center">
          {educationData.map((edu, index) => (
            <Col key={index} lg={6} xl={4}>
              <Card className="h-100 shadow-sm border-0" style={{ borderLeft: `6px solid ${edu.color || 'var(--primary-color)'}` }}>
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    {edu.logo && (
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        style={{ width: '45px', height: '45px', objectFit: 'contain', marginRight: '15px' }}
                        className="rounded shadow-sm border p-1 bg-white"
                      />
                    )}
                    <div>
                      <Card.Title className="fw-bold text-primary mb-1">{edu.degree}</Card.Title>
                      <Card.Subtitle className="text-muted">{edu.institution}</Card.Subtitle>
                    </div>
                  </div>
                  <Card.Text>
                    {edu.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </motion.div>

      <hr className="my-5" style={{ borderColor: 'var(--border-color)', opacity: 0.2 }} />

      <h2 className="text-center display-6 mb-5 fw-bold">Technical & Quantitative Expertise</h2>
      <Row className="g-5">
        {expertiseData.map((domain, index) => (
          <Col key={index} md={4} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="text-center p-0 shadow-sm" style={{ backgroundColor: '#FCE5CD', borderRadius: '10px', minHeight: '50px' }}>
                <Card.Body className="pt-4">
                  <Card.Title className="mt-3 fw-bold">{domain.title}</Card.Title>
                  <h6 className="mt-4 fw-bold">📌 Compétences clés et Projets</h6>
                  <ul className="list-unstyled">
                    {domain.details.competencies.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <h6 className="mt-3 fw-bold">📊 Exemples de projets</h6>
                  <ul className="list-unstyled">
                    {domain.details.projects.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Expertise;