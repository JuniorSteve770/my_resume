import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const aiProjectsData = [
    {
        title: "1. Machine Learning & Statistical Market Analysis",
        context: "Shifted from rigidly supervised technical analysis models to a Data-Driven unsupervised learning approach. The objective was to algorithmically discover and classify true macroeconomic qualitative states ('Market Regimes') to dynamically optimize strategy parameters based on prevailing market conditions.",
        implementation: [
            "Features Engineering & Dimensionality Reduction: Built normalized Multi-Timeframe (MTF) oscillators (MACD, OsMA, RSI, Stochastic). Extracted realized volatility (Historical/Implied) and momentum tensors, combining Macro (1D/4H) and Micro (15m/5m) contexts.",
            "Unsupervised Clustering Architecture: Deployed K-Means & Gaussian Mixture Models (GMM) across 100+ assets. Utilized the Elbow Method and Silhouette Scores to auto-classify years of historical tick-data into 4 natural behavioral regimes (e.g., 'Low Volatility/Trend', 'High Volatility/Mean-Reversion', 'Capitulation').",
            "Probability Mapping: Mapped the probability density functions of asset returns conditioned on each identified market regime to detect structural breaks."
        ],
        results: [
            "Mathematical Validation: Established predictive scoring pipelines proving that a static 5m strategy's Win-Rate (e.g., 65%) surges to 88% when algorithmically aligned with specific ML-discovered Macro Regimes.",
            "Risk Mitigation: Reduced holding-period drawdowns by 35% by enabling the system to halt trading automatically when a 'High-Risk / Chaotic' regime is detected."
        ],
        impact: "Provides actionable, statistically sound insights by implementing machine learning directly on complex volatility datasets, bridging the gap between theoretical data science and alpha generation.",
        skills: ["Python", "Scikit-learn", "K-Means / GMM", "Pandas", "TA-Lib", "Volatility Analysis", "PCA"]
    },
    {
        title: "2. AI-Driven Analytical Tools Development (DQN)",
        context: "Tackled algorithmic institutional execution structures on Forex and Equities (London/NY sessions, NFP news volatility, variable spreads) where standard price-only Deep Learning models fail to generalize. Aimed to build an autonomous agent capable of discovering non-linear mathematical combinations of technical features.",
        implementation: [
            "Complex State Space Engineering: Engineered Markov Decision Process (MDP) environments feeding the agent MTF Japanese candles, dynamic real-time Bid/Ask spreads, and geometric Sine/Cosine encoded session clocks to preserve temporal cyclicality.",
            "Deep Reinforcement Learning (DRL) Framework: Integrated DQN (Deep Q-Networks) and PPO (Proximal Policy Optimization) via Ray RLlib and Stable-Baselines3. Built a custom OpenAI gym.Env perfectly simulating MT5 execution mechanics (slippage, margin calls, swap overnight fees).",
            "Reward Function Design: Sculpted advanced reward functions prioritizing the Sortino Ratio and penalizing consecutive losses to force the agent into risk-averse, highly asymmetric trading behaviors."
        ],
        results: [
            "Alpha Discovery: The RL agent successfully and autonomously discovered an 'Ultimate Combo' of statistical filters (RSI divergence, EMA crosses, Volume profile) previously unobserved by human analysis.",
            "Adaptive Execution: Demonstrated the agent's ability to seamlessly adapt to dynamic spreads while aggressively maintaining a strict, mathematically optimal Risk:Reward ratio."
        ],
        impact: "Showcases the development of state-of-the-art AI-based quantitative tools, translating abstract Deep Learning theory into extremely robust and practical quantitative solutions tailored for front-office.",
        skills: ["Python", "TensorFlow / Keras", "Deep Q-Networks (DQN)", "Ray RLlib", "Reinforcement Learning", "OpenAI Gym"]
    },
    {
        title: "3. Quantitative Backtesting & Robustness Testing",
        context: "Designed and built the 'Indicator Discovery Lab' (IDL) from scratch to eliminate human cognitive bias and mathematically map the pure statistical performance of technical indicators across diverse asset classes and market conditions.",
        implementation: [
            "Lab Architecture: Orchestrated a highly modular, vectorized 6-module pipeline converting technical oscillators into virtual trades and performance metrics using Pandas arrays for O(1) time-complexity computation.",
            "Crash-Testing & Validation: Executed rigorous Out-Of-Sample Walk-Forward cross-validation logic across double-periods. Implemented Monte Carlo permutations on historical data sequences to isolate signal degradation and definitively prevent algorithmic curve-fitting (overfitting).",
            "Metrics Engine: Programmed comprehensive statistical output modules calculating Expected Payoff, Maximum Adverse Excursion (MAE), Maximum Favorable Excursion (MFE), and the Calmar Ratio."
        ],
        results: [
            "Empirical Scoring: Generated an institutional 'Robustness Score' ranking system that heavily penalizes strategies decaying out-of-sample.",
            "Deployment Efficiency: Drastically improved the reliability of live signal deployment by rejecting 80% of spurious 'good looking' strategies that failed the Monte Carlo stress tests."
        ],
        impact: "Demonstrates an exceptionally solid background in probability, statistics, and time-series econometrics, which are absolutely essential for the robust automation of proprietary trading desks.",
        skills: ["Python", "Vectorized Backtesting", "Walk-Forward Validation", "Monte Carlo", "Statistics", "Metrics Generation"]
    },
    {
        title: "4. Trading Workflow Automation & Live Execution",
        context: "Architected end-to-end mission-critical data pipelines to bridge the Python-based quantitative research lab directly to live, low-latency front-office execution engines without manual intervention.",
        implementation: [
            "Data Factory & ETL: Built automated, fault-tolerant ETL pipelines downloading, cleaning, and aggregating high-frequency OHLCV historic data via REST and WebSockets. Managed local SQL/Time-series databases for rapid data retrieval.",
            "Bridging & Reporting: Constructed bridging infrastructure using ZeroMQ (ZMQ) to connect raw algorithmic scoring outputs to C++/MQL execution nodes. Auto-generated dozens of detailed Markdown and HTML performance reports dynamically upon strategy completion.",
            "Algorithmic Execution: Compiled a sub-light JSON decision matrix functioning as the systematic brain, dictating mathematically approved regimes directly to the live executor."
        ],
        results: [
            "Live Integration: Successfully and securely connected the scoring algorithms to MetaTrader 5 (MT5), ensuring live automated positions perfectly and instantaneously adapt to the AI-detected 'Market Weather'.",
            "Operational Alpha: Reduced the time-to-market for a new algorithmic strategy from a 3-week manual coding cycle to a 24-hour automated validation and deployment pipeline."
        ],
        impact: "Proves advanced software engineering capabilities to automate complex financial workflows and comfortably operate in a demanding, fast-paced front-office environment requiring live market infrastructure.",
        skills: ["Python", "MetaTrader 5 (MT5)", "ZeroMQ (ZMQ)", "WebSockets", "Automation / ETL", "Python-to-C++ Bridging"]
    }
];

function AIProjects() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-5" style={{ backgroundColor: 'var(--dark-bg)', minHeight: '100vh', color: 'var(--text-main)' }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Button as={Link} to="/" variant="outline-primary" className="mb-4">
                        ← Back to Resume
                    </Button>

                    <h2 className="display-5 fw-bold mb-3 text-white">Quantitative & AI Trading Projects</h2>
                    <p className="lead mb-5" style={{ color: 'var(--text-main)' }}>
                        A comprehensive deep-dive into the mathematical, statistical, and software engineering frameworks powering my algorithmic trading implementations.
                    </p>
                </motion.div>

                <Row className="g-4">
                    {aiProjectsData.map((project, idx) => (
                        <Col xs={12} key={idx}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Card className="shadow-sm h-100 border border-secondary" style={{ backgroundColor: 'var(--card-bg)' }}>
                                    <Card.Body className="p-4">
                                        <Card.Title className="fw-bold fs-4 text-primary mb-3">
                                            {project.title}
                                        </Card.Title>
                                        <div className="mb-4">
                                            <h6 className="fw-bold text-white mb-2 border-bottom border-secondary pb-2">🎯 Context & Objective</h6>
                                            <p className="text-justify fw-medium" style={{ color: 'var(--text-main)' }}>{project.context}</p>
                                        </div>

                                        <div className="mb-4">
                                            <h6 className="fw-bold text-white mb-2 border-bottom border-secondary pb-2">⚙️ Technical Implementation</h6>
                                            <ul className="text-justify fw-medium" style={{ color: 'var(--text-main)' }}>
                                                {project.implementation.map((item, i) => (
                                                    <li key={i} className="mb-2">{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-4">
                                            <h6 className="fw-bold text-white mb-2 border-bottom border-secondary pb-2">📊 Outcomes & Results</h6>
                                            <ul className="text-justify fw-medium" style={{ color: 'var(--text-main)' }}>
                                                {project.results.map((item, i) => (
                                                    <li key={i} className="mb-2">{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="p-3 mb-4 rounded" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--primary-color)' }}>
                                            <strong className="text-white">Business Impact / Alignment:</strong> <span className="fw-medium" style={{ color: 'var(--text-main)' }}>{project.impact}</span>
                                        </div>

                                        <div>
                                            <h6 className="fw-bold text-white mb-2">Technical Core Skills & Frameworks:</h6>
                                            <div className="d-flex flex-wrap gap-2">
                                                {project.skills.map((skill, skillIdx) => (
                                                    <Badge bg="secondary" className="px-3 py-2 border border-secondary" key={skillIdx}>
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
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

export default AIProjects;
