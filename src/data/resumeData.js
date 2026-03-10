import Hottinguer from '../images/CV_images/Hottinguer.JPG';
import Natixis from '../images/CV_images/NatixisGrd.JPG';
import portotrad from '../images/CV_images/portotrad.JPG';
import Kevmax from '../images/CV_images/kevmax.JPG';

import mlImage from '../images/CV_images/machine learning 181910.png';

export const marketsData = [
  "Equity Capital Market",
  "Debt Capital Market",
  "Derivatives & Structured Products",
  "Forex",
  "Fixed-Income",
  "Interest Rates",
  "Credit Risk",
  "Cryptocurrencies"
];

export const techStack = [
  {
    category: "Software Engineering & Cloud",
    skills: [
      "Python (Flask, FastAPI) / C++", 
      "React / Vue / JS", 
      "SQL / NoSQL (MongoDB)", 
      "AWS / Docker / CI-CD", 
      "REST API / Microservices", 
      "OOP & Design Patterns"
    ]
  },
  {
    category: "Data Science & AI",
    skills: ["Pandas / NumPy / PyTorch", "Scikit-Learn / Matplotlib", "Machine Learning", "Econometrics", "PCA / K-Means / Clustering"]
  },
  {
    category: "Quantitative Finance",
    skills: ["Pricing Models", "VaR / CVaR / Stress Testing", "Volatility (SABR, GARCH)", "Portfolio Optimization", "Time Series / Forecasting"]
  },
  {
    category: "Platforms & Tools",
    skills: ["Bloomberg", "Reuters Eikon", "Summit", "JUMP", "Sophis", "MetaTrader 4/5", "TradingView", "Yahoo Finance API", "Power BI"]
  }
];

export const educationData = [
  {
    degree: "MBA in Trading and Financial Markets",
    institution: "ESLSCA Business School Paris",
    logo: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://eslsca.fr&size=128",
    color: "#F59E0B", // Gold/Amber
    description: "Pricing of Structured Products, Options, Forex, Interest Rates, Credit Ratings (AAA)."
  },
  {
    degree: "Master 2 in Risk Management",
    institution: "University Paris Nanterre",
    logo: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://parisnanterre.fr&size=128",
    color: "#EF4444", // Crimson/Red
    description: "Credit Risk (PD, LGD, EAD), Market Risk (VaR, Expected Shortfall), Volatility Models (GARCH, IGARCH, ARIMA)."
  },
  {
    degree: "Master 1 in Data Science & Econometrics",
    institution: "Sorbonne Paris Nord (Paris 13)",
    logo: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://univ-paris13.fr&size=128",
    color: "#10B981", // Emerald/Green
    description: "Econometrics applied to finance, PCA, Regression Models, Correlation Analysis."
  },
  {
    degree: "Licence in Finance & Econometrics",
    institution: "Université de Yaoundé 2 (Soa)",
    logo: "https://site.univ-yaounde2.org/wp-content/uploads/2024/09/UY2-T-300x156.png",
    color: "#8B5CF6", // Purple/Violet
    description: "Fundamentals of Financial Markets, Asset Classes."
  },
  {
    degree: "Licence in Mathematics & Computer Science",
    institution: "Université de Yaoundé 1",
    logo: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://uy1.uninet.cm&size=128",
    color: "#3B82F6", // Blue
    description: "Frontend/Backend Development, Security, Object-Oriented Programming, Application Architecture (UML, Merise)."
  }
];

export const experiencesData = [
  {
    company: "BANK HOTTINGUER",
    role: "Risk Management & Quant Developer Apprentice",
    logo: Hottinguer,
    missions: [
      "Developed and maintained full-stack tools for Risk Management models including daily VaR, Stress Testing, and Structured Product Pricing.",
      "Engineered automated ETL pipelines (VBA/Python) to process financial instruments (Bonds, ETFs, UCITS) from Bloomberg into the JUMP software.",
      "Implemented automated batch scripts and SQL databases to calculate and report KPIs and risk metrics, ensuring AMF and SFDR compliance."
    ],
    techStack: ["Python", "VBA", "SQL", "Bloomberg", "JUMP", "Power BI"]
  },
  {
    company: "NATIXIS BANK",
    role: "Financial Analyst & VBA Developer",
    logo: Natixis,
    missions: [
      "Analyzed and processed complex trades (bonds, equity, repo) via Summit Sec with an emphasis on the fixed income life cycle.",
      "Designed and developed a VBA-based ETL system and dynamic pivot tables to automate BI/BA data flows, improving operational performance by 20%.",
      "Managed post-trade operations, valuation controls, settlements, and trade reconciliations."
    ],
    techStack: ["VBA", "Excel", "Summit Sec", "Bloomberg", "Track"]
  },
  {
    company: "PORTOTRAD Academy",
    role: "Quant Developer & Front Office Support",
    logo: portotrad,
    missions: [
      "Developed algorithmic trading tools and custom indicators in Python and MQL for MetaTrader, automating strategy execution.",
      "Built automated data scraping and REST API pipelines to extract economic indicators (NFP, CPI, FED Rates) for fundamental analysis.",
      "Designed, backtested, and optimized trading strategies (scalping, swing) and created automated PnL monitoring dashboards."
    ],
    techStack: ["Python", "C#", "MetaTrader 4/5", "REST APIs", "Web Scraping"]
  },
  {
    company: "KEVMAX SARL",
    role: "Full-Stack Web Developer & Business Analyst",
    logo: Kevmax,
    missions: [
      "Frontend & Backend Development: Engineered full-stack web applications and interactive UIs using React and PHP in an Agile/SCRUM environment.",
      "Business Analysis & Project Tracking: Gathered business requirements, authored technical specifications, and maintained comprehensive project documentation.",
      "Architecture & Algorithms: Designed optimized relational databases (SQL, Firebase) and implemented REST/GraphQL APIs utilizing UML and Merise methodologies."
    ],
    techStack: ["React.js", "PHP", "SQL", "Firebase", "UML/Merise", "Business Analysis"]
  }
];

export const projectsData = [
  {
    domain: "Trading & Algorithmic Strategies",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop", // MetaTrader / Trading charts style
    projects: [
      {
        title: "Quantitative Backtesting & Robustness Testing",
        description: "Engineered a standardized Python backtesting engine using Walk-Forward cross-validation to simulate real-market conditions. Evaluated technical indicators (RSI, Moving Averages) and applied statistical metrics (Sharpe Ratio, Max Drawdown) to prove signal robustness and systematically prevent algorithmic overfitting.",
        techStack: ["Python", "Pandas", "Time Series", "Backtesting", "Statistics"],
        links: ["/ai-projects"]
      },
      {
        title: "Trading Workflow Automation & Live Execution",
        description: "Architected end-to-end data pipelines for automated trading environments. Handled ingestion of live market flows using REST/WebSockets APIs. Designed bridging systems (ZeroMQ) to reliably connect Python-based quantitative scoring algorithms directly to MetaTrader 5 for automated order execution and dynamic strategy reporting.",
        techStack: ["Python", "MetaTrader 5 (MT5)", "WebSockets", "Data Pipelines", "Automation"],
        links: ["/ai-projects"]
      }
    ]
  },
  {
    domain: "Financial Engineering (Modeling, Pricing, Risk)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop", // Data dashboard / Analytics style
    projects: [
      {
        title: "VaR; CAViaR; SABR Modeling Tool",
        description: "Programmed quantitative risk models including SABR for advanced volatility smiles (log-normal/normal) and analytical VaR/CAViaR models to stress-test market exposure. Validated model outputs against historical data to ensure pricing accuracy across complex derivatives.",
        techStack: ["Python", "OOP", "Financial Engineering", "Risk Analysis"],
        links: ["https://colab.research.google.com/drive/1eAJnAuMp_T5dm2uIZc445vtATzpmarPL?usp=sharing", "https://github.com/JuniorSteve770/PYTHON/blob/main/RAPORT_PROJET_Mesure%20de%20Risque.pdf"]
      },
      {
        title: "Option Pricing Engine in C++",
        description: "Engineered a high-performance C++ pricing engine utilizing Object-Oriented paradigms for financial derivatives valuation. Implemented robust numerical methods including Monte Carlo simulations and finite difference schemes to price options under the Bachelier and Black-Scholes frameworks.",
        techStack: ["C++", "Financial Engineering", "Derivatives", "Monte Carlo"],
        links: ["https://github.com/JuniorSteve770/PYTHON/blob/0b53bf945e21eeec14295bfc183eeea59d1b33dc/Implementing-Bachelier-and-Black-Scholes-Models%20in%20C%2B%2B%20Projects.pdf"]
      }
    ]
  },
  {
    domain: "Data Science & Machine Learning",
    image: mlImage,
    projects: [
      {
        title: "Machine Learning & Statistical Market Analysis",
        description: "Architected a fully automated Python quantitative research lab integrated with Jupyter and Pandas to rapidly prototype algorithmic strategies. Developed an unsupervised Machine Learning pipeline applying K-Means clustering to multidimensional time-series datasets, successfully classifying distinct macroeconomic market regimes based on realized volatility and trend momentum features.",
        techStack: ["Python", "Scikit-learn (K-Means)", "Pandas", "Time Series", "Volatility Analysis"],
        links: ["/ai-projects"]
      },
      {
        title: "AI-Driven Analytical Tools Development (DQN)",
        description: "Researched and deployed Deep Reinforcement Learning agents (Deep Q-Networks) using TensorFlow and Keras tailored for noisy financial time-series. Engineered neural network architectures to extract complex predictive features across multi-timeframe inputs, successfully translating deep learning insights into actionable, robust trading signals.",
        techStack: ["Python", "TensorFlow", "Deep Q-Networks (DQN)", "Reinforcement Learning"],
        links: ["/ai-projects"]
      }
    ]
  },
  {
    domain: "Full-Stack Development & Personal Side-Projects",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop", // Code editor / Programming style
    projects: [
      {
        title: "Automated Data Scraping Pipeline for Market News",
        description: "Engineered an automated pipeline to extract stock data and macroeconomic indicators (NFP, FOMC) from financial sources using Python APIs and BeautifulSoup.",
        techStack: ["Python", "BeautifulSoup", "API Integration", "JavaScript"],
        links: []
      },
      {
        title: "React Web Applications Portfolio",
        description: "Developed several personal web applications showcasing frontend skills, including a WhatsApp clone, a flow management tool, and company branding sites.",
        techStack: ["React.js", "Vue.js", "JavaScript/HTML/CSS", "Bootstrap", "Google SignIn"],
        links: ["https://juniorsteve770.github.io/react01/", "https://juniorsteve770.github.io/flowplus", "https://juniorsteve770.github.io/whatsapp_build/", "https://youtu.be/-Q5OBsDfG_k"]
      },
      {
        title: "C# / C++ Network & Architecture Study",
        description: "Personal implementation and study of software architecture paradigms (OOP, MVC, SOLID), development processes (TDD, BDD), and networking protocols (TCP/IP).",
        techStack: ["C#", "C++", "Software Architecture", "REST API", "TCP/IP"],
        links: ["https://github.com/JuniorSteve770/PYTHON/blob/main/Projet%20Clients%20en%20C%23%2C%20MySQL%20et%20React.pdf"]
      }
    ]
  }
];
