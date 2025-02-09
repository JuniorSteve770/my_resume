import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const expertiseData = [
  {
    title: 'Market Finance & Trading Algorithms',
    icon: '📈',
    details: {
      competencies: [
        '🎯 Backtesting de stratégies de trading (MACD, RSI, Mean Reversion, Portfolio Optimization avec Riskfolio-Lib).',
        '📈 Analyse et Prévision des marchés financiers (modèles de pricing comme Black-Scholes, Heston, SABR, VaR).',
        '🚀 Crypto Portfolio Management avec Riskfolio-Lib et API Binance/TradingView.',
        '🔗 Liens vers GitHub et Rapports PDF.'
      ]
    }
  },
  {
    title: 'Risk Management & Financial Modelling',
    icon: '📊',
    details: {
      competencies: [
        '📊 Application de VaR, ES, et CAViaR sur des actions et obligations (MSFT, AAPL, CAC40).',
        '🏦 Modélisation de Credit Risk : PD, LGD, EAD.',
        '📉 Optimisation de portefeuille avec Markowitz & CAPM.',
        '🔗 Liens vers Rapports détaillés et Code GitHub.'
      ]
    }
  },
  {
    title: 'Data Science & Machine Learning',
    icon: '🤖',
    details: {
      competencies: [
        '🧠 Prévision de marché boursier (S&P 500, CAC40) avec ML (Random Forest, Boosting).',
        '🔎 Clustering d’actions avec K-Means et PCA.',
        '🌍 Analyse des tendances climatiques avec GARCH & ARMA.',
        '🔗 Code dispo sur GitHub + Résumé avec data visualisation.'
      ]
    }
  },
  {
    title: 'IT & Développement',
    icon: '💻',
    details: {
      competencies: [
        '📌 Développement d’une application comptable en VBA (GASTROFOOD).',
        '🔍 Scraping de données boursières avec BeautifulSoup & API TradingView.',
        '⚙️ Développement C++ multithreading.',
        '🔗 Dépôt GitHub et courtes vidéos démonstratives.'
      ]
    }
  }
];

function Expertise2() {
  return (
    <Container className="py-3">
      <Row className="g-4">
        {expertiseData.map((domain, index) => (
          <Col key={index} md={4} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="text-center p-4 shadow-sm" style={{ backgroundColor: '#FCE5CD', borderRadius: '15px', minHeight: '450px', textAlign: 'justify' }}>
                <Card.Body>
                  <div style={{ fontSize: '3rem' }}>{domain.icon}</div>
                  <Card.Title className="mt-3 fw-bold">{domain.title}</Card.Title>
                  <h6 className="mt-4 fw-bold">📌 Compétences clés</h6>
                  <ul className="list-unstyled" style={{ textAlign: 'justify' }}>
                    {domain.details.competencies.map((item, idx) => (
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

export default Expertise2;
