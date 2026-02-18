import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Palette, 
    Server, 
    LaptopMinimalCheck, 
    Workflow, 
    BarChart3, 
    BrainCircuit, 
    Brain, 
    DatabaseZap, 
    Smartphone, 
    ShieldHalf 
} from 'lucide-react';
import { SiHiveBlockchain, SiPostgresql, SiTypescript } from 'react-icons/si';
import { LiaPenAltSolid, LiaNodeJs } from 'react-icons/lia';
import { PiBrainDuotone } from 'react-icons/pi';
import { HiOutlineCpuChip, HiOutlineComputerDesktop } from 'react-icons/hi2';
import { FaApple, FaVuejs, FaAngular, FaJs, FaDocker, FaGithub } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa6';
import { IoLogoReact } from 'react-icons/io5';
import { DiMysql } from 'react-icons/di';
import { AiOutlineKubernetes } from 'react-icons/ai';
import './Roadmaps.css';

interface RoadmapItem {
    name: string;
    slug: string;
    icon: React.ReactNode;
}

const ROLE_BASED_ROADMAPS: RoadmapItem[] = [
    { name: 'Frontend', slug: 'frontend', icon: <Palette /> },
    { name: 'Backend', slug: 'backend', icon: <Server /> },
    { name: 'Full Stack', slug: 'full-stack', icon: <LaptopMinimalCheck /> },
    { name: 'DevOps', slug: 'devops', icon: <Workflow /> },
    { name: 'Data Analyst', slug: 'data-analyst', icon: <BarChart3 /> },
    { name: 'AI Engineer', slug: 'ai-engineer', icon: <HiOutlineCpuChip /> },
    { name: 'AI and Data Scientist', slug: 'ai-data-scientist', icon: <Brain /> },
    { name: 'Data Engineer', slug: 'data-engineer', icon: <DatabaseZap /> },
    { name: 'Android', slug: 'android', icon: <Smartphone /> },
    { name: 'Machine Learning', slug: 'machine-learning', icon: <BrainCircuit /> },
    { name: 'PostgreSQL', slug: 'postgresql', icon: <SiPostgresql /> },
    { name: 'iOS', slug: 'ios', icon: <FaApple /> },
    { name: 'Blockchain', slug: 'blockchain', icon: <SiHiveBlockchain /> },
    { name: 'Cyber Security', slug: 'cyber-security', icon: <ShieldHalf /> },
    { name: 'UX Design', slug: 'ux-design', icon: <LiaPenAltSolid /> },
    { name: 'Game Developer', slug: 'game-developer', icon: <LaptopMinimalCheck /> },
    { name: 'MLOps', slug: 'mlops', icon: <PiBrainDuotone /> },
];

const SKILL_BASED_ROADMAPS: RoadmapItem[] = [
    { name: 'SQL', slug: 'sql', icon: <DiMysql /> },
    { name: 'Computer Science', slug: 'computer-science', icon: <HiOutlineComputerDesktop /> },
    { name: 'React', slug: 'react', icon: <IoLogoReact /> },
    { name: 'Vue', slug: 'vue', icon: <FaVuejs /> },
    { name: 'Angular', slug: 'angular', icon: <FaAngular /> },
    { name: 'JavaScript', slug: 'javascript', icon: <FaJs /> },
    { name: 'TypeScript', slug: 'typescript', icon: <SiTypescript /> },
    { name: 'Python', slug: 'python', icon: <FaPython /> },
    { name: 'Node.js', slug: 'nodejs', icon: <LiaNodeJs /> },
    { name: 'Docker', slug: 'docker', icon: <FaDocker /> },
    { name: 'Kubernetes', slug: 'kubernetes', icon: <AiOutlineKubernetes /> },
    { name: 'Git & GitHub', slug: 'git-github', icon: <FaGithub /> },
];

const Roadmaps = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filterItems = (items: RoadmapItem[]) =>
        items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

    const filteredRole = filterItems(ROLE_BASED_ROADMAPS);
    const filteredSkill = filterItems(SKILL_BASED_ROADMAPS);
    const totalResults = filteredRole.length + filteredSkill.length;

    return (
        <div className="roadmaps-page">
            <div className="roadmaps-grid-bg" />

            <main className="roadmaps-main">
                <div className="container">
                    {/* Header */}
                    <header className="roadmaps-header">
                        <h1 className="roadmaps-title">
                            Developer <span className="text-highlight">Roadmaps</span>
                        </h1>
                        <p className="roadmaps-subtitle">
                            Step-by-step guides to learn any technology, role, or skill. Pick a path and start your journey.
                        </p>
                    </header>

                    {/* Search */}
                    <div className="roadmaps-search-wrapper">
                        <span className="roadmaps-search-icon">🔍</span>
                        <input
                            type="text"
                            className="roadmaps-search-input"
                            placeholder="Search roadmaps..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button className="roadmaps-search-clear" onClick={() => setSearchQuery('')}>
                                ✕
                            </button>
                        )}
                    </div>

                    {searchQuery && (
                        <div className="roadmaps-results-count">
                            Found <strong>{totalResults}</strong> roadmap{totalResults !== 1 ? 's' : ''}
                        </div>
                    )}

                    {/* Role Based Roadmaps */}
                    {filteredRole.length > 0 && (
                        <section className="roadmap-section">
                            <div className="section-label-wrapper">
                                <span className="section-label">Role Based Roadmaps</span>
                            </div>

                            <div className="roadmap-cards-grid">
                                {filteredRole.map((item) => (
                                    <Link
                                        key={item.slug}
                                        to={`/roadmaps/${item.slug}`}
                                        className="roadmap-card"
                                    >
                                        <div className="roadmap-card-content">
                                            <span className="roadmap-card-icon">{item.icon}</span>
                                            <span className="roadmap-card-name">{item.name}</span>
                                        </div>
                                        <span className="roadmap-card-arrow">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M7 17L17 7" />
                                                <path d="M7 7h10v10" />
                                            </svg>
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Skill Based Roadmaps */}
                    {filteredSkill.length > 0 && (
                        <section className="roadmap-section">
                            <div className="section-label-wrapper">
                                <span className="section-label">Skill Based Roadmaps</span>
                            </div>

                            <div className="roadmap-cards-grid">
                                {filteredSkill.map((item) => (
                                    <Link
                                        key={item.slug}
                                        to={`/roadmaps/${item.slug}`}
                                        className="roadmap-card"
                                    >
                                        <div className="roadmap-card-content">
                                            <span className="roadmap-card-icon">{item.icon}</span>
                                            <span className="roadmap-card-name">{item.name}</span>
                                        </div>
                                        <span className="roadmap-card-arrow">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M7 17L17 7" />
                                                <path d="M7 7h10v10" />
                                            </svg>
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Empty state */}
                    {totalResults === 0 && (
                        <div className="roadmaps-empty">
                            <span className="empty-icon-lg">🗺️</span>
                            <h3>No roadmaps found</h3>
                            <p>Try a different search term</p>
                            <button
                                className="reset-search-btn"
                                onClick={() => setSearchQuery('')}
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Roadmaps;
