import React from 'react';
import { Container, Table, Badge, Image } from 'react-bootstrap';
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
        "Execution and Maintenance of daily tools and Models (VaR, Stress Test, Pricing Structured Products)",
        "Pre-Trade Operation using Bloomberg to integrate Bonds, Trackers, ETF, UCITS in Bank Software JUMP",
        "Constraints integration in Banking Software for Asset Management and Compliance",
        "Worked on Risk Committee participation and collaboration with other teams"
      ],
      techStack: ["Bloomberg","VBA", "Python", "C++", "SQL","Access-Sgbd", "Excel", "SFTP-Server", "JUMP Software"]
    },
    {
      company: "NATIXIS BANK",
      logo: Natixis,
      role: "Financial Analyst (Bonds, Equity,  Fixed Income, OTC)",
      missions: [
        "Managed bonds, equity, fixed income, and repo transactions using Summit Sec",
        "Post-trade operations (verification, valuations, booking control) in interaction with Trading and banking software",
        "Confirmation of market transactions, monitoring exceptions, payments, and settlement with counterparties",
        "Automated ETL processes on datasets to analyze workload and increase performance by 20%"
      ],
      techStack: ["VBA", "Excel", "Depositaires (ICSD/DOM)","Summit Sec", "Track", "Bloomberg"]
    },
    {
      company: "PORTOTRAD Academy",
      logo: portotrad,
      role: "Front Office Trader / Support Trader",
      missions: [
        "Trader and Trade Support in Forex and Cryptocurrency markets, focusing on building algo trading tools and strategies",
        "python for Web Scraping on Market Data for position taking (NFP, CPI, PMI, RS, LIBOR, EURIBOR, FED FUNDS Rates)",
        "Market Analysis (fundamental, Technical, Patterns) and trading strategies for scalping, intra-day, and swing trading",
        "Developed and optimized trading strategies including (MACD, RSI, BB, MM, spreads, swaps, and lot sizing) implementation "
      ],
      techStack: ["MetaTrader 4 & 5", "Binance-API", "Coinbase-API", "Trading View", "Excell-VBA", "Python"]
    },
    {
      company: "KEVMAX_SARL & POLYTECHNIQUE CMR",
      logo: Kevmax,
      role: "Web Developer & IT Support",
      missions: [
        "Developed front and back-end applications using Agile & Scrum methodologies",
        "Write and maintain documentation for the clients project using (UML, Merise, etc.)",
        "Structured databases using UML, Merise, and normalization techniques",
        "Created and maintained company websites and various web applications",
        "Performed OS system updates, code debugging, and IT support for various clients"
      ],
      techStack: ["Python (Django & Flask)", "JavaScript (React.js, Redux, Vue.js)", "TypeScript,", "Material UI",  "SQL", "Firebase", "UML","Merise", "API-Rest"," GraphQL","Git & GitHub"]
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

        <Table bordered hover responsive className="text-center mt-2">
          <thead>
            <tr>
              <th style={{ width: '20%' }} className="company-column">Company</th>
              <th style={{ width: '60%' }} className="missions-column">Responsibilities & Missions</th>
              <th style={{ width: '20%' }} className="tech-column">Technologies</th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((exp, index) => (
              <tr key={index}>
                <td className="fw-bold align-middle company-cell">
                  <Image src={exp.logo} alt={exp.company} fluid className="mb-2 company-logo" />
                  <br/>{exp.company}
                </td>
                <td className="missions-cell">
                  <strong>{exp.role}</strong>
                  <ul className="text-start">
                    {exp.missions.map((mission, idx) => (
                      <li key={idx}>{mission}</li>
                    ))}
                  </ul>
                </td>
                <td className="tech-cell">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {exp.techStack.map((tech, id) => (
                <Badge bg="secondary" className="p-2 tech-badge" key={id}>{tech}</Badge>
              ))}
            </div>
          </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
}



export default Entreprises;


