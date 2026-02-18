import { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
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
import { FRONTEND_SECTIONS, FRONTEND_TOPICS, type Topic, type RoadmapSection, type SectionChild } from './data/frontendRoadmap';
import { BACKEND_SECTIONS, BACKEND_TOPICS } from './data/backendRoadmap';
import { FULLSTACK_SECTIONS, FULLSTACK_TOPICS } from './data/fullstackRoadmap';
import { DEVOPS_SECTIONS, DEVOPS_TOPICS } from './data/devopsRoadmap';
import { DATA_ANALYST_SECTIONS, DATA_ANALYST_TOPICS } from './data/dataAnalystRoadmap';
import { AI_ENGINEER_SECTIONS, AI_ENGINEER_TOPICS } from './data/aiEngineerRoadmap';
import { AI_DATA_SCIENTIST_SECTIONS, AI_DATA_SCIENTIST_TOPICS } from './data/aiDataScientistRoadmap';
import { DATA_ENGINEER_SECTIONS, DATA_ENGINEER_TOPICS } from './data/dataEngineerRoadmap';
import { ANDROID_SECTIONS, ANDROID_TOPICS } from './data/androidRoadmap';
import { ML_SECTIONS, ML_TOPICS } from './data/machineLearningRoadmap';
import { POSTGRESQL_SECTIONS, POSTGRESQL_TOPICS } from './data/postgresqlRoadmap';
import { IOS_SECTIONS, IOS_TOPICS } from './data/iosRoadmap';
import { BLOCKCHAIN_SECTIONS, BLOCKCHAIN_TOPICS } from './data/blockchainRoadmap';
import { CYBER_SECURITY_SECTIONS, CYBER_SECURITY_TOPICS } from './data/cyberSecurityRoadmap';
import { UX_DESIGN_SECTIONS, UX_DESIGN_TOPICS } from './data/uxDesignRoadmap';
import { GAME_DEV_SECTIONS, GAME_DEV_TOPICS } from './data/gameDeveloperRoadmap';
import { MLOPS_SECTIONS, MLOPS_TOPICS } from './data/mlopsRoadmap';
import { SQL_SECTIONS, SQL_TOPICS } from './data/sqlRoadmap';
import { CS_SECTIONS, CS_TOPICS } from './data/computerScienceRoadmap';
import { REACT_SECTIONS, REACT_TOPICS } from './data/reactRoadmap';
import { VUE_SECTIONS, VUE_TOPICS } from './data/vueRoadmap';
import { ANGULAR_SECTIONS, ANGULAR_TOPICS } from './data/angularRoadmap';
import { JAVASCRIPT_SECTIONS, JAVASCRIPT_TOPICS } from './data/javascriptRoadmap';
import { TYPESCRIPT_SECTIONS, TYPESCRIPT_TOPICS } from './data/typescriptRoadmap';
import { PYTHON_SECTIONS, PYTHON_TOPICS } from './data/pythonRoadmap';
import { NODEJS_SECTIONS, NODEJS_TOPICS } from './data/nodejsRoadmap';
import { DOCKER_SECTIONS, DOCKER_TOPICS } from './data/dockerRoadmap';
import { KUBERNETES_SECTIONS, KUBERNETES_TOPICS } from './data/kubernetesRoadmap';
import { GIT_GITHUB_SECTIONS, GIT_GITHUB_TOPICS } from './data/gitGithubRoadmap';
import './RoadmapDetail.css';

interface RoadmapConfig {
    title: string;
    icon: React.ReactNode;
    description: string;
    topics: Record<string, Topic>;
    sections: RoadmapSection[];
    footerLinks: { to: string; label: string; className: string }[];
}

const ROADMAP_CONFIGS: Record<string, RoadmapConfig> = {
    frontend: {
        title: 'Frontend Roadmap',
        icon: <Palette />,
        description: 'Step by step guide to becoming a modern frontend developer in 2026',
        topics: FRONTEND_TOPICS,
        sections: FRONTEND_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/backend', label: 'Backend', className: 'footer-link node' },
            { to: '/roadmaps/full-stack', label: 'Full Stack', className: 'footer-link fs' },
        ],
    },
    backend: {
        title: 'Back-end Roadmap',
        icon: <Server />,
        description: 'Step by step guide to becoming a modern backend developer in 2026',
        topics: BACKEND_TOPICS,
        sections: BACKEND_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/frontend', label: 'Frontend', className: 'footer-link ts' },
            { to: '/roadmaps/full-stack', label: 'Full Stack', className: 'footer-link fs' },
        ],
    },
    'full-stack': {
        title: 'Full Stack Roadmap',
        icon: <LaptopMinimalCheck />,
        description: 'Step by step guide to becoming a modern full stack developer in 2026',
        topics: FULLSTACK_TOPICS,
        sections: FULLSTACK_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/frontend', label: 'Frontend', className: 'footer-link ts' },
            { to: '/roadmaps/backend', label: 'Backend', className: 'footer-link node' },
        ],
    },
    devops: {
        title: 'DevOps Roadmap',
        icon: <Workflow />,
        description: 'Step by step guide to becoming a DevOps engineer in 2026',
        topics: DEVOPS_TOPICS,
        sections: DEVOPS_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/backend', label: 'Backend', className: 'footer-link node' },
            { to: '/roadmaps/full-stack', label: 'Full Stack', className: 'footer-link fs' },
        ],
    },
    'data-analyst': {
        title: 'Data Analyst Roadmap',
        icon: <BarChart3 />,
        description: 'Step by step guide to becoming a data analyst in 2026',
        topics: DATA_ANALYST_TOPICS,
        sections: DATA_ANALYST_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/data-engineer', label: 'Data Engineer', className: 'footer-link node' },
            { to: '/roadmaps/ai-data-scientist', label: 'AI & Data Scientist', className: 'footer-link fs' },
        ],
    },
    'ai-engineer': {
        title: 'AI Engineer Roadmap',
        icon: <HiOutlineCpuChip />,
        description: 'Step by step guide to becoming an AI engineer in 2026',
        topics: AI_ENGINEER_TOPICS,
        sections: AI_ENGINEER_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/ai-data-scientist', label: 'AI & Data Scientist', className: 'footer-link fs' },
            { to: '/roadmaps/full-stack', label: 'Full Stack', className: 'footer-link node' },
        ],
    },
    'ai-data-scientist': {
        title: 'AI & Data Scientist Roadmap',
        icon: <Brain />,
        description: 'Step by step guide to becoming an AI & data scientist in 2026',
        topics: AI_DATA_SCIENTIST_TOPICS,
        sections: AI_DATA_SCIENTIST_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/ai-engineer', label: 'AI Engineer', className: 'footer-link ts' },
            { to: '/roadmaps/data-analyst', label: 'Data Analyst', className: 'footer-link node' },
        ],
    },
    'data-engineer': {
        title: 'Data Engineer Roadmap',
        icon: <DatabaseZap />,
        description: 'Step by step guide to becoming a data engineer in 2026',
        topics: DATA_ENGINEER_TOPICS,
        sections: DATA_ENGINEER_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/data-analyst', label: 'Data Analyst', className: 'footer-link ts' },
            { to: '/roadmaps/backend', label: 'Backend', className: 'footer-link node' },
        ],
    },
    android: {
        title: 'Android Roadmap',
        icon: <Smartphone />,
        description: 'Step by step guide to becoming an Android developer in 2026',
        topics: ANDROID_TOPICS,
        sections: ANDROID_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/frontend', label: 'Frontend', className: 'footer-link ts' },
            { to: '/roadmaps/backend', label: 'Backend', className: 'footer-link node' },
        ],
    },
    'machine-learning': {
        title: 'Machine Learning Roadmap',
        icon: <BrainCircuit />,
        description: 'Step by step guide to mastering machine learning in 2026',
        topics: ML_TOPICS,
        sections: ML_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/ai-engineer', label: 'AI Engineer', className: 'footer-link ts' },
            { to: '/roadmaps/ai-data-scientist', label: 'AI & Data Scientist', className: 'footer-link fs' },
        ],
    },
    postgresql: {
        title: 'PostgreSQL Roadmap',
        icon: <SiPostgresql />,
        description: 'Step by step guide to mastering PostgreSQL in 2026',
        topics: POSTGRESQL_TOPICS,
        sections: POSTGRESQL_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/backend', label: 'Backend', className: 'footer-link node' },
            { to: '/roadmaps/data-engineer', label: 'Data Engineer', className: 'footer-link fs' },
        ],
    },
    ios: {
        title: 'iOS Roadmap',
        icon: <FaApple />,
        description: 'Step by step guide to becoming an iOS developer in 2026',
        topics: IOS_TOPICS,
        sections: IOS_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/android', label: 'Android', className: 'footer-link node' },
            { to: '/roadmaps/frontend', label: 'Frontend', className: 'footer-link ts' },
        ],
    },
    blockchain: {
        title: 'Blockchain Roadmap',
        icon: <SiHiveBlockchain />,
        description: 'Step by step guide to becoming a blockchain developer in 2026',
        topics: BLOCKCHAIN_TOPICS,
        sections: BLOCKCHAIN_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/backend', label: 'Backend', className: 'footer-link node' },
            { to: '/roadmaps/cyber-security', label: 'Cyber Security', className: 'footer-link fs' },
        ],
    },
    'cyber-security': {
        title: 'Cyber Security Roadmap',
        icon: <ShieldHalf />,
        description: 'Step by step guide to becoming a cyber security expert in 2026',
        topics: CYBER_SECURITY_TOPICS,
        sections: CYBER_SECURITY_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/devops', label: 'DevOps', className: 'footer-link node' },
            { to: '/roadmaps/backend', label: 'Backend', className: 'footer-link ts' },
        ],
    },
    'ux-design': {
        title: 'UX Design Roadmap',
        icon: <LiaPenAltSolid />,
        description: 'Step by step guide to becoming a UX designer in 2026',
        topics: UX_DESIGN_TOPICS,
        sections: UX_DESIGN_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/frontend', label: 'Frontend', className: 'footer-link ts' },
            { to: '/roadmaps/ios', label: 'iOS', className: 'footer-link node' },
        ],
    },
    'game-developer': {
        title: 'Game Developer Roadmap',
        icon: <LaptopMinimalCheck />,
        description: 'Step by step guide to becoming a game developer in 2026',
        topics: GAME_DEV_TOPICS,
        sections: GAME_DEV_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/frontend', label: 'Frontend', className: 'footer-link ts' },
            { to: '/roadmaps/backend', label: 'Backend', className: 'footer-link node' },
        ],
    },
    mlops: {
        title: 'MLOps Roadmap',
        icon: <PiBrainDuotone />,
        description: 'Step by step guide to mastering MLOps in 2026',
        topics: MLOPS_TOPICS,
        sections: MLOPS_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/machine-learning', label: 'Machine Learning', className: 'footer-link ts' },
            { to: '/roadmaps/devops', label: 'DevOps', className: 'footer-link node' },
        ],
    },
    sql: {
        title: 'SQL Roadmap',
        icon: <DiMysql />,
        description: 'Step by step guide to mastering SQL in 2026',
        topics: SQL_TOPICS,
        sections: SQL_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/postgresql', label: 'PostgreSQL', className: 'footer-link node' },
            { to: '/roadmaps/backend', label: 'Backend', className: 'footer-link ts' },
        ],
    },
    'computer-science': {
        title: 'Computer Science Roadmap',
        icon: <HiOutlineComputerDesktop />,
        description: 'Step by step guide to learning computer science in 2026',
        topics: CS_TOPICS,
        sections: CS_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/backend', label: 'Backend', className: 'footer-link node' },
            { to: '/roadmaps/data-engineer', label: 'Data Engineer', className: 'footer-link ts' },
        ],
    },
    react: {
        title: 'React Roadmap',
        icon: <IoLogoReact />,
        description: 'Step by step guide to mastering React in 2026',
        topics: REACT_TOPICS,
        sections: REACT_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/frontend', label: 'Frontend', className: 'footer-link ts' },
            { to: '/roadmaps/vue', label: 'Vue', className: 'footer-link node' },
        ],
    },
    vue: {
        title: 'Vue.js Roadmap',
        icon: <FaVuejs />,
        description: 'Step by step guide to mastering Vue.js in 2026',
        topics: VUE_TOPICS,
        sections: VUE_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/frontend', label: 'Frontend', className: 'footer-link ts' },
            { to: '/roadmaps/react', label: 'React', className: 'footer-link node' },
        ],
    },
    angular: {
        title: 'Angular Roadmap',
        icon: <FaAngular />,
        description: 'Step by step guide to mastering Angular in 2026',
        topics: ANGULAR_TOPICS,
        sections: ANGULAR_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/frontend', label: 'Frontend', className: 'footer-link ts' },
            { to: '/roadmaps/typescript', label: 'TypeScript', className: 'footer-link node' },
        ],
    },
    javascript: {
        title: 'JavaScript Roadmap',
        icon: <FaJs />,
        description: 'Step by step guide to mastering JavaScript in 2026',
        topics: JAVASCRIPT_TOPICS,
        sections: JAVASCRIPT_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/typescript', label: 'TypeScript', className: 'footer-link ts' },
            { to: '/roadmaps/react', label: 'React', className: 'footer-link node' },
        ],
    },
    typescript: {
        title: 'TypeScript Roadmap',
        icon: <SiTypescript />,
        description: 'Step by step guide to mastering TypeScript in 2026',
        topics: TYPESCRIPT_TOPICS,
        sections: TYPESCRIPT_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/javascript', label: 'JavaScript', className: 'footer-link ts' },
            { to: '/roadmaps/angular', label: 'Angular', className: 'footer-link node' },
        ],
    },
    python: {
        title: 'Python Roadmap',
        icon: <FaPython />,
        description: 'Step by step guide to mastering Python in 2026',
        topics: PYTHON_TOPICS,
        sections: PYTHON_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/machine-learning', label: 'Machine Learning', className: 'footer-link ts' },
            { to: '/roadmaps/backend', label: 'Backend', className: 'footer-link node' },
        ],
    },
    nodejs: {
        title: 'Node.js Roadmap',
        icon: <LiaNodeJs />,
        description: 'Step by step guide to mastering Node.js in 2026',
        topics: NODEJS_TOPICS,
        sections: NODEJS_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/javascript', label: 'JavaScript', className: 'footer-link ts' },
            { to: '/roadmaps/backend', label: 'Backend', className: 'footer-link node' },
        ],
    },
    docker: {
        title: 'Docker Roadmap',
        icon: <FaDocker />,
        description: 'Step by step guide to mastering Docker in 2026',
        topics: DOCKER_TOPICS,
        sections: DOCKER_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/kubernetes', label: 'Kubernetes', className: 'footer-link ts' },
            { to: '/roadmaps/devops', label: 'DevOps', className: 'footer-link node' },
        ],
    },
    kubernetes: {
        title: 'Kubernetes Roadmap',
        icon: <AiOutlineKubernetes />,
        description: 'Step by step guide to mastering Kubernetes in 2026',
        topics: KUBERNETES_TOPICS,
        sections: KUBERNETES_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/docker', label: 'Docker', className: 'footer-link ts' },
            { to: '/roadmaps/devops', label: 'DevOps', className: 'footer-link node' },
        ],
    },
    'git-github': {
        title: 'Git & GitHub Roadmap',
        icon: <FaGithub />,
        description: 'Step by step guide to mastering Git & GitHub in 2026',
        topics: GIT_GITHUB_TOPICS,
        sections: GIT_GITHUB_SECTIONS,
        footerLinks: [
            { to: '/roadmaps/devops', label: 'DevOps', className: 'footer-link ts' },
            { to: '/roadmaps/frontend', label: 'Frontend', className: 'footer-link node' },
        ],
    },
};

type TopicStatus = 'pending' | 'done' | 'skip';

const RoadmapDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
    const [panelOpen, setPanelOpen] = useState(false);
    const [topicStatuses, setTopicStatuses] = useState<Record<string, TopicStatus>>(() => {
        const saved = localStorage.getItem(`roadmap-status-${slug}`);
        if (saved) {
            try { return JSON.parse(saved); } catch { /* ignore */ }
        }
        return {};
    });

    // Save statuses
    useEffect(() => {
        if (Object.keys(topicStatuses).length > 0) {
            localStorage.setItem(`roadmap-status-${slug}`, JSON.stringify(topicStatuses));
        }
    }, [topicStatuses, slug]);

    const config = ROADMAP_CONFIGS[slug || ''];

    const openTopic = useCallback((topicId: string) => {
        if (!config) return;
        const topic = config.topics[topicId];
        if (topic) {
            setSelectedTopic(topic);
            setPanelOpen(true);
        }
    }, [config]);

    const closePanel = useCallback(() => {
        setPanelOpen(false);
        setTimeout(() => setSelectedTopic(null), 300);
    }, []);

    const updateStatus = useCallback((topicId: string, status: TopicStatus) => {
        setTopicStatuses(prev => ({ ...prev, [topicId]: status }));
    }, []);

    const getStatusClass = (topicId: string): string => {
        const status = topicStatuses[topicId];
        if (status === 'done') return 'status-done';
        if (status === 'skip') return 'status-skip';
        return '';
    };

    const getResourceBadgeClass = (type: string) => {
        switch (type) {
            case 'roadmap': return 'badge-roadmap';
            case 'course': return 'badge-course';
            case 'video': return 'badge-video';
            case 'article': return 'badge-article';
            case 'feed': return 'badge-feed';
            case 'official': return 'badge-official';
            default: return '';
        }
    };

    // Progress
    const allTopicIds = useMemo(() => config ? Object.keys(config.topics) : [], [config]);
    const doneCount = allTopicIds.filter(id => topicStatuses[id] === 'done').length;
    const progressPercent = allTopicIds.length > 0 ? Math.round((doneCount / allTopicIds.length) * 100) : 0;

    // Show coming soon for unsupported roadmaps
    if (!config) {
        return (
            <div className="roadmap-detail-page">
                <div className="roadmap-coming-soon">
                    <Link to="/roadmaps" className="back-to-roadmaps">← Back to Roadmaps</Link>
                    <div className="coming-soon-content">
                        <span className="coming-soon-icon">🚧</span>
                        <h2>Coming Soon</h2>
                        <p>The <strong>{slug?.replace(/-/g, ' ')}</strong> roadmap is being built. Check back soon!</p>
                        <Link to="/roadmaps" className="back-btn-lg">Browse All Roadmaps</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="roadmap-detail-page">
            {/* Overlay when panel is open */}
            {panelOpen && <div className="panel-overlay" onClick={closePanel} />}

            {/* Header */}
            <div className="roadmap-detail-header">
                <div className="header-left">
                    <Link to="/roadmaps" className="back-to-roadmaps">← Back to Roadmaps</Link>
                    <h1 className="roadmap-detail-title">
                        <span className="title-icon">{config.icon}</span>
                        {config.title}
                    </h1>
                    <p className="roadmap-detail-desc">
                        {config.description}
                    </p>
                </div>
                <div className="header-right">
                    <div className="progress-bar-container">
                        <div className="progress-bar-header">
                            <span className="progress-text">{progressPercent}% DONE</span>
                            <span className="progress-count">{doneCount} of {allTopicIds.length} Done</span>
                        </div>
                        <div className="progress-bar-track">
                            <div 
                                className="progress-bar-fill" 
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tree */}
            <div className="roadmap-tree-container">
                <div className="roadmap-tree">
                    {config.sections.map((section, idx) => (
                        <RoadmapTreeSection
                            key={section.id}
                            section={section}
                            isLast={idx === config.sections.length - 1}
                            onTopicClick={openTopic}
                            getStatusClass={getStatusClass}
                        />
                    ))}

                    {/* Footer */}
                    <div className="tree-footer">
                        <div className="tree-footer-content">
                            <span className="tree-footer-icon">🎉</span>
                            <span>Continue Learning with:</span>
                            <div className="footer-links">
                                {config.footerLinks.map(link => (
                                    <Link key={link.to} to={link.to} className={link.className}>{link.label}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Panel */}
            <div className={`topic-panel ${panelOpen ? 'open' : ''}`}>
                {selectedTopic && (
                    <>
                        <div className="panel-top-bar">
                            <div className="panel-tab active">
                                <span className="panel-tab-icon">📚</span>
                                Resources
                            </div>
                            <div className="panel-actions">
                                <select
                                    className="status-select"
                                    value={topicStatuses[selectedTopic.id] || 'pending'}
                                    onChange={(e) => updateStatus(selectedTopic.id, e.target.value as TopicStatus)}
                                >
                                    <option value="pending">⏳ Pending</option>
                                    <option value="done">✅ Done</option>
                                    <option value="skip">⏭️ Skip</option>
                                </select>
                                <button className="panel-close-btn" onClick={closePanel}>✕</button>
                            </div>
                        </div>

                        <div className="panel-body">
                            <h2 className="panel-topic-title">{selectedTopic.title}</h2>
                            <p className="panel-topic-desc">{selectedTopic.description}</p>

                            <div className="panel-resources-section">
                                <h3 className="resources-heading">
                                    <span className="resources-heart">💚</span>
                                    Free Resources
                                </h3>
                                <div className="resources-list">
                                    {selectedTopic.resources.map((resource, i) => (
                                        <a
                                            key={i}
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="resource-item"
                                        >
                                            <span className={`resource-badge ${getResourceBadgeClass(resource.type)}`}>
                                                {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                                            </span>
                                            <span className="resource-title">{resource.title}</span>
                                            <span className="resource-external">↗</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

// ─── Tree Section Component ──────────────────────────────────────
interface TreeSectionProps {
    section: RoadmapSection;
    isLast: boolean;
    onTopicClick: (id: string) => void;
    getStatusClass: (id: string) => string;
}

const RoadmapTreeSection = ({ section, isLast, onTopicClick, getStatusClass }: TreeSectionProps) => {
    const hasLeft = section.leftTopics && section.leftTopics.length > 0;
    const hasRight = section.rightTopics && section.rightTopics.length > 0;

    return (
        <div className="tree-section">
            {/* Connector line from previous */}
            <div className="tree-vertical-line" />

            <div className="tree-row">
                {/* Left branch */}
                <div className="tree-branch left">
                    {hasLeft && (
                        <>
                            <div className="branch-connector left" />
                            <div className="branch-items">
                                {section.leftTopics!.map((child: SectionChild) => (
                                    <button
                                        key={child.id}
                                        className={`branch-node ${getStatusClass(child.id)}`}
                                        onClick={() => onTopicClick(child.id)}
                                    >
                                        <span className="node-text">{child.title}</span>
                                        <span className="node-arrow">↗</span>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Center main node */}
                <button
                    className={`tree-main-node ${getStatusClass(section.id)}`}
                    onClick={() => FRONTEND_TOPICS[section.id] ? onTopicClick(section.id) : null}
                >
                    <span className="main-node-text">{section.title}</span>
                    {section.description && (
                        <span className="main-node-desc">{section.description}</span>
                    )}
                </button>

                {/* Right branch */}
                <div className="tree-branch right">
                    {hasRight && (
                        <>
                            <div className="branch-connector right" />
                            <div className="branch-items">
                                {section.rightTopics!.map((child: SectionChild) => (
                                    <button
                                        key={child.id}
                                        className={`branch-node ${getStatusClass(child.id)}`}
                                        onClick={() => onTopicClick(child.id)}
                                    >
                                        <span className="node-text">{child.title}</span>
                                        <span className="node-arrow">↗</span>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Connector line to next */}
            {!isLast && <div className="tree-vertical-line bottom" />}
        </div>
    );
};

export default RoadmapDetail;
