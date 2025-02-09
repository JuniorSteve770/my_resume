import React from 'react';
import { Container, Table, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';


function Projects() {
  const projects = [
    {
      domain: "Trading & Algorithmic Strategies",
      projects: [

        {
          title: "Algorithmic Trading on Forex Market",
          description: "Development of automated trading strategies with Broker indicators, real-time API data collection, and dynamic position sizing, risk management techniques.",
          techStack: ["Python", "Machine Learning","Metatrader",  "YAhoo Finance API"],
          links: []
        },
        {
          title: "Backtesting Strategies",
          description: "Backtesting frameworks to evaluate trading strategies, including MACD, RSI, and portfolio optimization using Riskfolio-Lib and Python Backtest ",
          techStack: ["Python OOP", "Algo-Trading", "API paradigms", "Binance", "Risk Management"],
          links: ["https://github.com/JuniorSteve770/PYTHON/blob/11d0e9e4987c66bd69e5420c7ff3b05892235f91/BackTesting_Crypto_Projects.ipynb"]
        }
      ]
    },
    {
      domain: "Financial Projects (Modeling, Pricing, Risk) ",
      projects: [
        {
          title: "VaR; CAViaR; SABR Modeling",
          description: ["Implementation of SABR models for volatility smiles using log-normal and normal approaches, along with VaR and CAViaR risk modeling to evaluate and acktest market Risk exposure."],
          techStack: ["Python fonctions", "OOP", "Financial Engineering", "Risk Analysis"],
          links: ["https://colab.research.google.com/drive/1eAJnAuMp_T5dm2uIZc445vtATzpmarPL?usp=sharing","https://github.com/JuniorSteve770/PYTHON/blob/main/RAPORT_PROJET_Mesure%20de%20Risque.pdf" ]
        },
        {

              title: "OPTION PRICING in C++",
              description: "Implementation of Option pricing models for financial derivatives valuation. the project is made using C++ and Visual Studio Code  ",
              techStack: ["C++", "Financial Engineering", "Derivatives", "Monte Carlo"],
              links: ["https://github.com/JuniorSteve770/PYTHON/blob/0b53bf945e21eeec14295bfc183eeea59d1b33dc/Implementing-Bachelier-and-Black-Scholes-Models%20in%20C%2B%2B%20Projects.pdf"]
        },
        {
              title: "VBA GASTROFOOD PROJECT",
              description: "Built an application for accounting tasks, cash handling, register operations and sales, improving efficiency by 40%.",
              techStack: ["C++", "Financial Engineering", "Derivatives", "Monte Carlo"],
              links: ["https://youtu.be/b7QGe0MdypY","https://drive.google.com/file/d/13_h7xslbEDU5Zf3O6ky-KOXQPuC5g8kR/view?usp=sharing"]
        },
        {
              title: "POWER BI DASHBOARDS",
              description: "Covid Statistics, Olympic Game, Bank Customers",
              techStack: ["Power BI", "Excell Sheets Datasets"],
              links: ["https://www.youtube.com/watch?v=4DOZ52A6bjY"]
        }
      ]
    },
    {
      domain: "Data Science & Machine Learning",
      projects: [
        {
          title: "Stock Prediction with ML and Ensemble Models",
          description: "Predicting stock trends using Random Forest, Boosting, and ML models.",
          techStack: ["Machine Learning", "Data Science", "Python", "R"],
          links: ["https://github.com/JuniorSteve770/PYTHON/blob/main/Projet%20BIG%20DATA.pdf", "https://github.com/JuniorSteve770/PYTHON/blob/main/PROJET_2PYTHON_KAMELA_Alesterd_M2_BIDABI.pdf.ipynb"]
        },
        {
          title: "Clustering Financial Assets",
          description: "K-Means and PCA for stock clustering and asset analysis.",
          techStack: ["Python", "Clustering", "Finance Analytics"],
          links: ["https://github.com/JuniorSteve770/PYTHON/blob/main/PROJET_2PYTHON_KAMELA_Alesterd_M2_BIDABI.pdf.ipynb"]
        }
      ]
    },
    {
      domain: "IT & Web Development",
      projects: [
        {
          title: "Web Scraping for Market Data such as NFP, FOMC, Economic News",
          description: "Automated stock data extraction from financial sources. using Libraries",
          techStack: ["HTTPX REQUEST", "Beautiful Soop", "Python Libraries", "JavaScript",  "API Integration"],
          links: []
        },
        {
          title: "KTC Center TSI Project",
          description: "Website for branding services online for a Sport COmpany",
          techStack: ["Linux OS","SFTP Server","PHP","Github Repos", "ReactJ", "Javascript/ HTML / CSS", "Boostrap"],
          links: ["https://institut.ktc-center.net/"]
        },
        {
          title: "My Beguinner Projects",
          description: "here are the links to sevrals junior projects on bellow programming languages",
          techStack: ["PHP; ", "ReactJ; ","VueJs ;", "Javascript/ HTML / CSS", "Boostrap; ","google signIN"],
          links: ["https://juniorsteve770.github.io/react01/", "https://juniorsteve770.github.io/flowplus","https://juniorsteve770.github.io/whatsapp_build/", "https://youtu.be/-Q5OBsDfG_k"]
        },
        {
          title: "C#, C++ Software Toolstack; Network & Programming Paradigms",
          description: "IT Concepts, Network, Programming parradigms",
          techStack: ["Paradigms (OOP, MVC, SOLID); ", "Code Processes (TDD, BDD, SSD, Exeption Handling); ","Rest API, GraphQL;", "Network Protocols (TCP/IP, OSI, SFTP)"],
          links: []
        }
      ]
    }
   
  ];
  return (
    <section className="projects-section py-1" id="projects">
      <Container>
        <motion.h2 
          className="text-center display-5 mt-0 mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          🚀 My Projects
        </motion.h2>

        <Table bordered hover responsive className="text-center mt-2">
          <thead>
            <tr>
              <th style={{ width: '20%' }}>Domain</th>
              <th style={{ width: '50%' }}>Project Details & Tech Stack</th>
              <th style={{ width: '20%' }}>Links</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((category, index) => (
              category.projects.map((project, idx) => (
                <tr key={`${index}-${idx}`}>
                  {idx === 0 && (                    
                    <td rowSpan={category.projects.length} className="fw-bold align-middle">{category.domain}</td>
                  )}
                  <td>
                    <strong>{project.title}</strong>
                    <p>{project.description}</p> 
                    
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      {project.techStack.map((tech, id) => 
                        (<Badge bg="secondary" className="p-1 tech-badge"   key={id}>{tech}</Badge>))}
                    </div>
                  </td>
                  <td>
                    {project.links.map((link, linkIdx) => (
                      <a key={linkIdx} href={link} className="btn btn-outline-primary btn-sm d-block mb-1" target="_blank" rel="noreferrer">
                        View Project {linkIdx + 1} →
                      </a>
                    ))}
                  </td>
                </tr>
              ))
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
}
export default Projects;



