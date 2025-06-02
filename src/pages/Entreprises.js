import React from 'react';
import { Container, Card, Badge, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Natixis from '../images/CV_images/NatixisGrd.JPG'; 
import Hottinguer from '../images/CV_images/Hottinguer.JPG';
import Kevmax from '../images/CV_images/kevmax.JPG';
import portotrad from '../images/CV_images/portotrad.JPG';
import  "../style_old.css";





function Entreprises() {
const experiences = [
  {
    company: "BANK HOTINGUER",
    logo: Hottinguer,
    role: "Risk Management Apprentice",
    missions: [
      "Developed and maintained quantitative tools and models: VaR, Stress Testing, and Structured Product Pricing",
      "Integrated financial instruments (Bonds, ETFs, UCITS) into JUMP via Bloomberg Pre-Trade workflows",
      "Implemented compliance and asset management constraints in core banking systems",
      "Participated in risk committees and collaborated cross-functionally with Front, MO, and Compliance teams"
    ],
    techStack: ["Bloomberg", "VBA", "Python", "C++", "SQL", "Access-SGBD", "Excel", "SFTP-Server", "JUMP Software"]
  },
  {
    company: "NATIXIS BANK",
    logo: Natixis,
    role: "Financial Analyst (Bonds, Equity, Fixed Income, OTC)",
    missions: [
      "Processed and analyzed trades (bonds, equity, repo) via Summit Sec – emphasis on trade life cycle & fixed income",
      "Executed post-trade operations: valuation control, booking verification, trade reconciliations",
      "Managed confirmations, exception monitoring, settlements and payment workflows with counterparties",
      "Automated BI/BA data flows with VBA to reduce operational workload and improve performance (+20%)"
    ],
    techStack: ["VBA", "Excel", "Depositaires (ICSD/DOM)", "Summit Sec", "Track", "Bloomberg"]
  },
  {
    company: "PORTOTRAD Academy",
    logo: portotrad,
    role: "Front Office Trader / Trading Support",
    missions: [
      "Operated on Forex & Crypto markets as trader and support, focused on quantitative strategy implementation",
      "Performed data scraping and fundamental data analysis (macro releases, rates) to support trading decisions",
      "Designed and executed trading strategies: scalping, intra-day, swing based on market technical indicators",
      "Built backtested models based on Market Regimes, VPS Deployment,  (Spread/Swap analysis, Lot sizing)",
      "Python, C#,  API REST(JSON/XML/sockets), FIX (heartbeat), Orders Automation (Market/Limit/Stop)"
    ],
    techStack: ["MetaTrader 4 & 5", "Binance-API", "Coinbase-API", "TradingView", "Excel-VBA", "Python"]
  },
  {
    company: "KEVMAX_SARL & POLYTECHNIQUE CMR",
    logo: Kevmax,
    role: "Web Developer & IT Support",
    missions: [
      "Developed full-stack web applications in an Agile/Scrum context",
      "Designed technical specifications and documentation using UML/Merise methodologies",
      "Structured and normalized relational databases (SQL) to optimize backend systems",
      "Managed web platforms, debugged production code, provided IT support and software maintenance",
      "Implemented REST/GraphQL APIs and CI/CD best practices for scalable delivery"
    ],
    techStack: [
      "Python (Django & Flask)",
      "JavaScript (React.js, Redux, Vue.js)",
      "TypeScript", "Material UI",
      "SQL", "Firebase",
      "UML", "Merise",
      "API-REST", "GraphQL",
      "Git & GitHub"
    ]
  }
];


return (
    <section className="experience-section py-5" id="experience">
      <Container>
        <motion.h3 
          className="text-center display-4 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          🏢 Professional Experience
        </motion.h3>

        {experiences.map((exp, index) => (
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
                <img src={exp.logo} alt={exp.company} style={{ height: 60 }} />
                <strong className="h5 text-center">{exp.company}</strong>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-primary text-center mb-3 h5">{exp.role}</Card.Title>
                <ul className="mb-3">
                  {exp.missions.map((mission, idx) => (
                    <li key={idx} className="text-muted">{mission}</li>
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


