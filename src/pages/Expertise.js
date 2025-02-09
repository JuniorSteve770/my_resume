import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const expertiseData = [
  {
    title: 'Finance Quantitative & Modélisation & Pricing ',
    icon: '📊',
    details: {
      competencies: [
        ' Marchés (Bonds, Equity Fx-income, Forex, Derivatives(Options, Swap, Future))',
        ' Optimisation portefeuille (CAPM, Factor investing,  Markowitz, Efficient Frontier)',
        ' Risque de Credit: PD (Prob Default), LGD (Loss Given Default), EAD (Exposure at Default) ',
        ' Risque Marché (VaR, ES, CAViaR, Greeks, ARCH, GARCH)',
        ' Modeles Pricing (Black-Scholes, Binomial, SARR, Volatility)',
        ' Analyse de sensibilité des Grecs, Stress-testing et Backtesting',
      ],
      projects: [
        '- Pricing avec modèles Black-Scholes, Binomial , SABR et Heston',
        '- Volatility smiles en Log et log-normal grace au modele SABR et Vol Implicite ',
        '- Comparaison des mesures de volatilités VaR et CAViaR et Backtesting.',
        '- Simulation de Credit Risk (PD, LGD, EAD) pour analyser les risques de Defauts '
      ]
    }
  },
  {
    title: 'Trading Algorithmique & Backtetsting de Stratégies',
    icon: '📈',
    details: {
      competencies: [
        ' Web Scaping de données de Marché News, Binance API, Yahoo API, TradingView',
        ' Développement et Backtesting de Stratégies (MACD, RSI, BB, MACD)',
        ' Trading automatisé sur Broker MetaTrader 4, Exchange Crypto ',
        ' Conception et Intégration d’algorithmes de Machine Learning en trading',
        ' Gestion du risque(Vol) et exécution des ordres en temps réel(Spread)',
        ' Développement de Dataflow,  Dashboard TCD/PowerBI,/Python pour suivi P&L'
      ],
      projects: [
        '- Backtesting de stratégies de trading sur Forex, Crypto en periode Daily [Close] )',
        '- Algo-trading sur crypto avec Riskfolio-Lib et Tachnique Arbitrage sur FX',
        '- Développement d’une stratégie de scalping et swing trading',
        '- ETL Pipeline pour Automatisation stratégie, PnL, monitoring en VBA'
      ]
    }
  },
  {
    "title": "Data Science & Machine Learning ",
    "icon": "🤖",
    "details": {
      "competencies": [
        "Prévision des tendances de marché avec GARCH, ARIMA, XGBoost, LSTM ",
        "Algo. Clustering (K-Means, DBSCAN) et analyse factorielle (PCA, ACM, ARMA)",
        "Conception de Process  ETL, Data Pipelines sur SQL Server, API(Rest, FastAPI, Flask)",
        "- Automatisation des requêtes SQL et rapports pour le Risk Management et la compliance",
        "Fort interet pour la Fintech, Conteneurs Docker, et Cloud computing (CI/CD, AWS, GCP, Azure, Databricks)"
      ],
      "projects": [
        "- Prédiction grace au Random Forest, Boosting (XGBoost, LightGBM) et LSTM",
        "- Scraping, NLP et analyse de sentiment des news financières et prise de décision",
        "- Développement  d’un systeme de recommandation d’actifs basé sur la Cointegration"
      ]
    }
  },
  {
    title: 'Développement IT & Automatisation en Finance',
    icon: '💻',
    details: {
      competencies: [
        ' Développement en Python, C++, SQL, VBA, JavaScript (React, Vue)',
        ' Création d’applications financières et outils d’analyse de marché',
        ' ETL pour la collecte, transformation et stockage de données en SQL',
        ' Automatisation et optimisation de processus de gestion de Données',
        ' Développement d’ETL et API pour la récupération de données marché'
      ],
      projects: [
        '- Conception de Cahier des Charges et Specifications Fonctionnelles et Techniques)',
        '- Développement d’une application Web PHP, Django, Comptabilité en VBA',
        '- Automatisation des tâches et reporting par mail avec VBA et Python',
        '- Création d’une application web interactive avec React et Vue.js',
        '- Déploiement et gestion d’applications conteneurisées et sur Serveur',
        '- Intégration d’APIs financières pour data streaming et backtesting'
      ]
    }
  }
];

function Expertise() {
  return (
    <Container className="py-3">
      <Row className="g-5">
        {expertiseData.map((domain, index) => (
          <Col key={index} md={4} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="text-center p-0 shadow-sm" style={{ backgroundColor: '#FCE5CD', borderRadius: '10px', minHeight: '50px' }}>
                <Card.Body>
                  <div style={{ fontSize: '3rem' }}>{domain.icon}</div>
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