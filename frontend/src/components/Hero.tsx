import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const companies = [
        "Google", "Amazon", "Microsoft", "Netflix", "Meta", "Apple", "Uber", "Stripe",
        "LinkedIn", "Airbnb", "Databricks", "DoorDash", "Pinterest", "Atlassian", "Coinbase", "SpaceX"
    ];

    return (
        <section className="hero-section">
            <div className="hero-grid-bg" />

            <div className="container hero-container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hero-badge"
                    >
                        <span className="badge-dot" />
                        v2.0 Now Live
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-title"
                    >
                        Crack the Code. <br />
                        <span className="text-highlight">Own Your Future.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-subtitle"
                    >
                        The comprehensive platform for coding interviews.
                        Roadmaps, mock tests, and mentorship for the modern developer.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="hero-cta-group"
                    >
                        <button className="cta-primary">
                            Start Practicing
                        </button>
                        <button className="cta-secondary">
                            View Roadmaps
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="hero-marquee"
                >
                    <div className="marquee-label">Trusted by engineers from</div>
                    <div className="marquee-track">
                        {[...companies, ...companies].map((company, i) => (
                            <span key={i} className="company-name">{company}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
