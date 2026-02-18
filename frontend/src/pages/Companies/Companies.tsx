import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Companies.css';

// ─── SVG Company Logos ───────────────────────────────────────────
const CompanyLogos: Record<string, React.ReactNode> = {
    google: (
        <svg viewBox="0 0 24 24" className="company-svg-logo">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
    ),
    meta: (
        <svg viewBox="0 0 24 24" className="company-svg-logo">
            <path fill="#0866FF" d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.77-3.92 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
        </svg>
    ),
    amazon: (
        <svg viewBox="0 0 24 24" className="company-svg-logo">
            <path fill="#FF9900" d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.493.126.112.18.032.36-.238.54-.336.21-.72.422-1.15.634-2.478 1.22-5.15 1.83-8.02 1.83-4.548 0-8.624-1.393-12.23-4.18-.154-.117-.18-.27-.128-.46z" />
            <path fill="#FF9900" d="M6.623 15.86c1.18-1.606 2.758-2.48 4.753-2.48.52 0 1.09.07 1.72.2.63.14 1.22.37 1.77.7.55.33.99.78 1.34 1.34.35.57.52 1.23.52 2v.01c0 .58-.14 1.2-.43 1.85-.29.65-.73 1.19-1.33 1.61-.6.42-1.32.63-2.17.63-.44 0-.91-.08-1.41-.23-.5-.15-.96-.4-1.37-.73l.02.02c.46.96 1.09 1.67 1.88 2.13s1.62.69 2.51.69c.67 0 1.3-.14 1.89-.42h.01l.15-.08a7.54 7.54 0 0 0 2.07-1.62c.34-.38.61-.79.82-1.23zm-2.7-2.38c0-1.92.5-3.44 1.5-4.55 1-1.11 2.28-1.67 3.84-1.67 1.45 0 2.7.56 3.74 1.67 1.05 1.11 1.57 2.63 1.57 4.55 0 .61-.06 1.19-.17 1.74-.11.55-.26 1.05-.44 1.5l-.02.05c-.35-.31-.73-.56-1.14-.73-.41-.18-.83-.27-1.27-.27-.62 0-1.1.18-1.45.54-.34.36-.52.86-.52 1.49 0 .3.05.6.14.88.09.28.23.52.43.72.2.2.44.36.71.48s.58.18.92.18c.44 0 .86-.1 1.27-.29.41-.19.78-.47 1.11-.84.05-.06.1-.12.14-.18a7.38 7.38 0 0 1-2.97 3.56 7.14 7.14 0 0 1-4.1 1.27c-2.1 0-3.82-.72-5.16-2.15-1.34-1.44-2.02-3.4-2.02-5.9z" />
        </svg>
    ),
    microsoft: (
        <svg viewBox="0 0 24 24" className="company-svg-logo">
            <path fill="#F25022" d="M1 1h10v10H1z" />
            <path fill="#7FBA00" d="M13 1h10v10H13z" />
            <path fill="#00A4EF" d="M1 13h10v10H1z" />
            <path fill="#FFB900" d="M13 13h10v10H13z" />
        </svg>
    ),
    apple: (
        <svg viewBox="0 0 24 24" className="company-svg-logo">
            <path fill="#fff" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
    ),
    netflix: (
        <svg viewBox="0 0 24 24" className="company-svg-logo">
            <path fill="#E50914" d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z" />
        </svg>
    ),
    uber: (
        <svg viewBox="0 0 24 24" className="company-svg-logo">
            <path fill="#fff" d="M0 7.97v4.958c0 1.867 1.302 3.101 3 3.101.826 0 1.562-.316 2.094-.87v.736H6.27V7.97H5.094v4.684c0 1.27-.807 2.119-1.925 2.119-1.088 0-1.891-.822-1.891-2.119V7.97zm17.05 0v4.958c0 1.867 1.302 3.101 2.999 3.101.826 0 1.563-.316 2.095-.87v.736H23.32V7.97h-1.176v4.684c0 1.27-.807 2.119-1.925 2.119-1.088 0-1.892-.822-1.892-2.119V7.97zM6.93 7.97h1.177v.78c.453-.591 1.132-.913 1.96-.913 1.603 0 2.762 1.254 2.762 2.997 0 1.744-1.159 2.998-2.762 2.998-.828 0-1.507-.322-1.96-.913v3.22H6.93zm3.986 2.878c0-1.088-.855-1.894-1.938-1.894-1.084 0-1.938.806-1.938 1.894 0 1.087.854 1.894 1.938 1.894 1.083 0 1.938-.807 1.938-1.894zm3.318-2.878h1.177v.69c.372-.498.939-.823 1.702-.823 1.343 0 2.267.963 2.267 2.454v3.604H18.2v-3.33c0-.975-.554-1.6-1.446-1.6-.932 0-1.519.665-1.519 1.6v3.33h-1.177z" />
        </svg>
    ),
    airbnb: (
        <svg viewBox="0 0 24 24" className="company-svg-logo">
            <path fill="#FF5A5F" d="M12.001 18.275c-.238-.344-.47-.695-.69-1.052-1.092-1.77-2.088-3.624-2.74-5.61-.192-.607-.334-1.21-.392-1.812-.082-.847.058-1.622.496-2.326.532-.86 1.323-1.376 2.32-1.576.812-.163 1.586-.074 2.298.347.82.484 1.348 1.193 1.544 2.133.138.663.082 1.32-.092 1.968-.328 1.22-.85 2.365-1.444 3.478-.67 1.254-1.424 2.456-2.23 3.627-.236.326-.48.645-.734.96-.108.138-.217.274-.336.413l-.002-.002zM12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.628-5.373-12-12-12z" />
        </svg>
    ),
    linkedin: (
        <svg viewBox="0 0 24 24" className="company-svg-logo">
            <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    twitter: (
        <svg viewBox="0 0 24 24" className="company-svg-logo">
            <path fill="#fff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    stripe: (
        <svg viewBox="0 0 24 24" className="company-svg-logo">
            <path fill="#635BFF" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
        </svg>
    ),
    salesforce: (
        <svg viewBox="0 0 24 24" className="company-svg-logo">
            <path fill="#00A1E0" d="M10.006 5.415a4.195 4.195 0 0 1 3.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.45 0-.87-.06-1.29-.165a3.9 3.9 0 0 1-3.42 2.025c-.45 0-.87-.075-1.26-.225a4.67 4.67 0 0 1-4.14 2.52 4.665 4.665 0 0 1-4.41-3.15 3.74 3.74 0 0 1-.51.045c-2.13 0-3.81-1.71-3.81-3.84 0-1.47.81-2.73 2.01-3.39a4.42 4.42 0 0 1-.45-1.92c0-2.37 1.89-4.26 4.23-4.26 1.23 0 2.34.525 3.12 1.365z" />
        </svg>
    ),
};

// ─── Types ───────────────────────────────────────────────────────
interface CompanyData {
    id: string;
    name: string;
    color: string;
    type: 'Product Based' | 'Service Based' | 'Product & Service';
    industry: string;
    founded: number;
    headquarters: string;
    employees: string;
    description: string;
    positions: string[];
    salaryRange: { min: string; max: string; currency: string };
    interviewDifficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard';
    interviewRounds: number;
    totalProblems: number;
    tags: string[];
}

// ─── Company Data ────────────────────────────────────────────────
const COMPANIES: CompanyData[] = [
    {
        id: 'google',
        name: 'Google',
        color: '#4285F4',
        type: 'Product Based',
        industry: 'Technology / Search / Cloud',
        founded: 1998,
        headquarters: 'Mountain View, CA',
        employees: '180,000+',
        description: 'Google is a global leader in search, advertising, cloud computing, and AI. Known for its engineering culture, Google sets the gold standard for technical interviews with a focus on algorithms, system design, and behavioral assessments.',
        positions: ['Software Engineer', 'Senior SWE', 'Staff Engineer', 'SRE', 'Data Scientist', 'Product Manager', 'ML Engineer', 'UX Designer'],
        salaryRange: { min: '$130K', max: '$450K+', currency: 'USD' },
        interviewDifficulty: 'Very Hard',
        interviewRounds: 5,
        totalProblems: 342,
        tags: ['FAANG', 'Top Tier', 'AI/ML', 'Cloud'],
    },
    {
        id: 'meta',
        name: 'Meta',
        color: '#0866FF',
        type: 'Product Based',
        industry: 'Social Media / VR / AI',
        founded: 2004,
        headquarters: 'Menlo Park, CA',
        employees: '67,000+',
        description: 'Meta builds technologies that help people connect. From Facebook and Instagram to WhatsApp and Quest VR headsets, Meta is shaping the future of social connection and the metaverse. Strong focus on coding speed and problem-solving.',
        positions: ['Software Engineer', 'Production Engineer', 'Research Scientist', 'Data Engineer', 'Product Designer', 'ML Engineer'],
        salaryRange: { min: '$140K', max: '$480K+', currency: 'USD' },
        interviewDifficulty: 'Hard',
        interviewRounds: 4,
        totalProblems: 289,
        tags: ['FAANG', 'Social', 'VR/AR', 'AI'],
    },
    {
        id: 'amazon',
        name: 'Amazon',
        color: '#FF9900',
        type: 'Product & Service',
        industry: 'E-Commerce / Cloud (AWS)',
        founded: 1994,
        headquarters: 'Seattle, WA',
        employees: '1,500,000+',
        description: 'Amazon is the world\'s largest e-commerce and cloud computing company. AWS powers a significant portion of the internet. Interviews are heavily based on Leadership Principles (LPs) alongside DSA and system design.',
        positions: ['SDE I', 'SDE II', 'SDE III', 'Solutions Architect', 'Data Engineer', 'Applied Scientist', 'TPM', 'DevOps Engineer'],
        salaryRange: { min: '$120K', max: '$400K+', currency: 'USD' },
        interviewDifficulty: 'Hard',
        interviewRounds: 5,
        totalProblems: 456,
        tags: ['FAANG', 'E-Commerce', 'AWS', 'Cloud'],
    },
    {
        id: 'microsoft',
        name: 'Microsoft',
        color: '#00A4EF',
        type: 'Product Based',
        industry: 'Software / Cloud / AI',
        founded: 1975,
        headquarters: 'Redmond, WA',
        employees: '220,000+',
        description: 'Microsoft builds enterprise and consumer software, Azure cloud, and AI-powered products. Known for a collaborative interview process covering coding, design, and behavioral rounds. Great work-life balance reputation.',
        positions: ['Software Engineer', 'Senior SWE', 'Principal Engineer', 'PM', 'Data Scientist', 'Cloud Architect', 'Security Engineer'],
        salaryRange: { min: '$120K', max: '$380K+', currency: 'USD' },
        interviewDifficulty: 'Medium',
        interviewRounds: 4,
        totalProblems: 312,
        tags: ['FAANG-Adjacent', 'Enterprise', 'Azure', 'AI'],
    },
    {
        id: 'apple',
        name: 'Apple',
        color: '#A3AAAE',
        type: 'Product Based',
        industry: 'Consumer Electronics / Software',
        founded: 1976,
        headquarters: 'Cupertino, CA',
        employees: '160,000+',
        description: 'Apple designs and manufactures consumer electronics, software, and online services. Known for secrecy in interviews and emphasis on domain-specific expertise. Strong focus on iOS/macOS development and hardware-software integration.',
        positions: ['Software Engineer', 'iOS Developer', 'ML Engineer', 'Hardware Engineer', 'Silicon Design', 'Product Designer', 'QA Engineer'],
        salaryRange: { min: '$130K', max: '$420K+', currency: 'USD' },
        interviewDifficulty: 'Hard',
        interviewRounds: 5,
        totalProblems: 198,
        tags: ['FAANG', 'Hardware', 'iOS', 'Premium'],
    },
    {
        id: 'netflix',
        name: 'Netflix',
        color: '#E50914',
        type: 'Product Based',
        industry: 'Entertainment / Streaming',
        founded: 1997,
        headquarters: 'Los Gatos, CA',
        employees: '13,000+',
        description: 'Netflix is the world\'s leading streaming entertainment service. Known for its "Freedom & Responsibility" culture, Netflix pays top-of-market salaries with no bonus structure. Interviews focus on senior-level system design and cultural fit.',
        positions: ['Senior SWE', 'Staff Engineer', 'Engineering Manager', 'Data Scientist', 'ML Engineer', 'Site Reliability Engineer'],
        salaryRange: { min: '$200K', max: '$900K+', currency: 'USD' },
        interviewDifficulty: 'Very Hard',
        interviewRounds: 6,
        totalProblems: 87,
        tags: ['FAANG', 'Streaming', 'Culture', 'Top Pay'],
    },
    {
        id: 'uber',
        name: 'Uber',
        color: '#276EF1',
        type: 'Product Based',
        industry: 'Transportation / Delivery',
        founded: 2009,
        headquarters: 'San Francisco, CA',
        employees: '32,000+',
        description: 'Uber operates a ride-sharing and food delivery platform globally. Engineering challenges include real-time mapping, pricing algorithms, and high-availability distributed systems. Interviews cover DSA, system design, and team fit.',
        positions: ['Software Engineer', 'Senior SWE', 'Staff Engineer', 'ML Engineer', 'Backend Engineer', 'Mobile Developer', 'Data Scientist'],
        salaryRange: { min: '$130K', max: '$400K+', currency: 'USD' },
        interviewDifficulty: 'Hard',
        interviewRounds: 5,
        totalProblems: 156,
        tags: ['Unicorn', 'Real-time', 'Maps', 'Scale'],
    },
    {
        id: 'airbnb',
        name: 'Airbnb',
        color: '#FF5A5F',
        type: 'Product Based',
        industry: 'Travel / Hospitality Tech',
        founded: 2008,
        headquarters: 'San Francisco, CA',
        employees: '7,000+',
        description: 'Airbnb is a global platform for travel accommodations and experiences. Known for its unique culture-fit interviews and real-world coding challenges. Interviews include pair programming, architecture discussions, and cross-functional values.',
        positions: ['Software Engineer', 'Senior SWE', 'Staff Engineer', 'Data Scientist', 'Product Manager', 'Full-Stack Engineer'],
        salaryRange: { min: '$140K', max: '$420K+', currency: 'USD' },
        interviewDifficulty: 'Hard',
        interviewRounds: 5,
        totalProblems: 124,
        tags: ['Travel', 'Culture-Fit', 'Full-Stack', 'Design'],
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        color: '#0A66C2',
        type: 'Product Based',
        industry: 'Professional Networking',
        founded: 2003,
        headquarters: 'Sunnyvale, CA',
        employees: '20,000+',
        description: 'LinkedIn is the world\'s largest professional network with 900M+ members. As a Microsoft subsidiary, it offers competitive compensation and strong work-life balance. Interviews include coding, system design, and values-based behavioral rounds.',
        positions: ['Software Engineer', 'Senior SWE', 'Staff Engineer', 'Data Engineer', 'ML Engineer', 'Product Manager', 'QA Engineer'],
        salaryRange: { min: '$120K', max: '$380K+', currency: 'USD' },
        interviewDifficulty: 'Medium',
        interviewRounds: 4,
        totalProblems: 178,
        tags: ['Microsoft', 'Networking', 'Enterprise', 'Growth'],
    },
    {
        id: 'twitter',
        name: 'X (Twitter)',
        color: '#fff',
        type: 'Product Based',
        industry: 'Social Media / Microblogging',
        founded: 2006,
        headquarters: 'San Francisco, CA',
        employees: '2,000+',
        description: 'X (formerly Twitter) is a social media platform for real-time communication. Engineering challenges focus on high-throughput systems handling 500M+ tweets/day. Lean engineering team demands strong distributed systems knowledge.',
        positions: ['Software Engineer', 'Senior SWE', 'Backend Engineer', 'ML Engineer', 'Infrastructure Engineer', 'iOS/Android Developer'],
        salaryRange: { min: '$120K', max: '$350K+', currency: 'USD' },
        interviewDifficulty: 'Hard',
        interviewRounds: 4,
        totalProblems: 98,
        tags: ['Social', 'Real-time', 'Scale', 'Lean'],
    },
    {
        id: 'stripe',
        name: 'Stripe',
        color: '#635BFF',
        type: 'Product Based',
        industry: 'Fintech / Payments',
        founded: 2010,
        headquarters: 'San Francisco, CA',
        employees: '8,000+',
        description: 'Stripe builds financial infrastructure for the internet. Powers payments for millions of businesses. Interviews are known for practical coding challenges, debugging exercises, and systems thinking. High bar for code quality.',
        positions: ['Software Engineer', 'Senior SWE', 'Infrastructure Engineer', 'Product Manager', 'Security Engineer', 'ML Engineer'],
        salaryRange: { min: '$150K', max: '$500K+', currency: 'USD' },
        interviewDifficulty: 'Very Hard',
        interviewRounds: 5,
        totalProblems: 76,
        tags: ['Fintech', 'Payments', 'High-Bar', 'API'],
    },
    {
        id: 'salesforce',
        name: 'Salesforce',
        color: '#00A1E0',
        type: 'Product & Service',
        industry: 'CRM / Cloud / Enterprise',
        founded: 1999,
        headquarters: 'San Francisco, CA',
        employees: '73,000+',
        description: 'Salesforce is the world\'s #1 CRM platform, powering sales, service, and marketing for businesses of all sizes. Known for its Ohana culture and strong emphasis on equality. Interviews are more accessible compared to FAANG.',
        positions: ['Software Engineer', 'Member of Technical Staff', 'Senior SWE', 'Architect', 'QA Engineer', 'DevOps Engineer', 'Data Analyst'],
        salaryRange: { min: '$110K', max: '$320K+', currency: 'USD' },
        interviewDifficulty: 'Medium',
        interviewRounds: 4,
        totalProblems: 89,
        tags: ['CRM', 'Enterprise', 'Cloud', 'Culture'],
    },
];

type FilterType = 'all' | 'Product Based' | 'Service Based' | 'Product & Service';
type DifficultyFilter = 'all' | 'Medium' | 'Hard' | 'Very Hard';
type SortType = 'name' | 'problems' | 'salary' | 'difficulty';

const Companies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState<FilterType>('all');
    const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
    const [sortBy, setSortBy] = useState<SortType>('name');
    const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

    const filteredCompanies = COMPANIES
        .filter(c => {
            const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesType = typeFilter === 'all' || c.type === typeFilter;
            const matchesDifficulty = difficultyFilter === 'all' || c.interviewDifficulty === difficultyFilter;
            return matchesSearch && matchesType && matchesDifficulty;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'problems': return b.totalProblems - a.totalProblems;
                case 'salary': return parseInt(b.salaryRange.max.replace(/[^0-9]/g, '')) - parseInt(a.salaryRange.max.replace(/[^0-9]/g, ''));
                case 'difficulty': {
                    const order = { 'Medium': 1, 'Hard': 2, 'Very Hard': 3, 'Easy': 0 };
                    return order[b.interviewDifficulty] - order[a.interviewDifficulty];
                }
                default: return a.name.localeCompare(b.name);
            }
        });

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Easy': return '#2ecc71';
            case 'Medium': return '#f39c12';
            case 'Hard': return '#e74c3c';
            case 'Very Hard': return '#9b59b6';
            default: return '#a1a1aa';
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'Product Based': return '🏗️';
            case 'Service Based': return '🔧';
            case 'Product & Service': return '🔄';
            default: return '🏢';
        }
    };

    return (
        <div className="companies-page">
            <div className="companies-grid-bg" />

            <main className="companies-main">
                <div className="container">
                    {/* Header */}
                    <header className="companies-header">
                        <div className="header-content">
                            <div className="header-badge">
                                <span className="badge-dot" />
                                <span>{COMPANIES.length} companies</span>
                            </div>
                            <h1 className="companies-title">
                                Company <span className="text-highlight">Profiles</span>
                            </h1>
                            <p className="companies-subtitle">
                                Explore top tech companies, their interview processes, salary ranges, and open positions. Prepare smarter with company-specific insights.
                            </p>
                        </div>
                    </header>

                    {/* Filters Bar */}
                    <div className="filters-bar">
                        <div className="search-wrapper">
                            <span className="search-icon-companies">🔍</span>
                            <input
                                type="text"
                                className="search-input-companies"
                                placeholder="Search companies, industries, tags..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                                    ✕
                                </button>
                            )}
                        </div>

                        <div className="filter-chips">
                            <div className="chip-group">
                                <span className="chip-label">Type:</span>
                                {(['all', 'Product Based', 'Service Based', 'Product & Service'] as FilterType[]).map(type => (
                                    <button
                                        key={type}
                                        className={`filter-chip ${typeFilter === type ? 'active' : ''}`}
                                        onClick={() => setTypeFilter(type)}
                                    >
                                        {type === 'all' ? 'All' : type}
                                    </button>
                                ))}
                            </div>

                            <div className="chip-group">
                                <span className="chip-label">Difficulty:</span>
                                {(['all', 'Medium', 'Hard', 'Very Hard'] as DifficultyFilter[]).map(diff => (
                                    <button
                                        key={diff}
                                        className={`filter-chip ${difficultyFilter === diff ? 'active' : ''}`}
                                        onClick={() => setDifficultyFilter(diff)}
                                    >
                                        {diff === 'all' ? 'All' : diff}
                                    </button>
                                ))}
                            </div>

                            <div className="chip-group">
                                <span className="chip-label">Sort:</span>
                                <select
                                    className="sort-select"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortType)}
                                >
                                    <option value="name">Name (A-Z)</option>
                                    <option value="problems">Most Problems</option>
                                    <option value="salary">Highest Salary</option>
                                    <option value="difficulty">Difficulty</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="results-count">
                        Showing <strong>{filteredCompanies.length}</strong> of {COMPANIES.length} companies
                    </div>

                    {/* Company Cards */}
                    <div className="company-cards-grid">
                        {filteredCompanies.map((company) => {
                            const isExpanded = expandedCompany === company.id;
                            return (
                                <div
                                    key={company.id}
                                    className={`company-profile-card ${isExpanded ? 'expanded' : ''}`}
                                    style={{ '--company-color': company.color } as React.CSSProperties}
                                >
                                    {/* Card Top Accent */}
                                    <div className="card-accent-bar" />

                                    {/* Company Header */}
                                    <div className="company-card-header">
                                        <div className="company-identity">
                                            <div className="company-logo-circle">
                                                {CompanyLogos[company.id]}
                                            </div>
                                            <div className="company-name-group">
                                                <h3 className="company-name">{company.name}</h3>
                                                <span className="company-industry">{company.industry}</span>
                                            </div>
                                        </div>
                                        <div className="company-type-badge">
                                            <span>{getTypeIcon(company.type)}</span>
                                            <span>{company.type}</span>
                                        </div>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="company-quick-stats">
                                        <div className="quick-stat">
                                            <span className="stat-number">{company.totalProblems}</span>
                                            <span className="stat-text">Problems</span>
                                        </div>
                                        <div className="stat-divider" />
                                        <div className="quick-stat">
                                            <span className="stat-number">{company.interviewRounds}</span>
                                            <span className="stat-text">Rounds</span>
                                        </div>
                                        <div className="stat-divider" />
                                        <div className="quick-stat">
                                            <span
                                                className="stat-number difficulty-text"
                                                style={{ color: getDifficultyColor(company.interviewDifficulty) }}
                                            >
                                                {company.interviewDifficulty}
                                            </span>
                                            <span className="stat-text">Difficulty</span>
                                        </div>
                                        <div className="stat-divider" />
                                        <div className="quick-stat">
                                            <span className="stat-number salary-text">{company.salaryRange.max}</span>
                                            <span className="stat-text">Max TC</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="company-description">
                                        {isExpanded ? company.description : company.description.slice(0, 140) + '...'}
                                    </p>

                                    {/* Tags */}
                                    <div className="company-tags">
                                        {company.tags.map(tag => (
                                            <span key={tag} className="company-tag">{tag}</span>
                                        ))}
                                    </div>

                                    {/* Expanded Content */}
                                    {isExpanded && (
                                        <div className="company-expanded-content">
                                            {/* Company Details */}
                                            <div className="detail-section">
                                                <h4 className="detail-title">Company Details</h4>
                                                <div className="detail-grid">
                                                    <div className="detail-item">
                                                        <span className="detail-icon">📍</span>
                                                        <div>
                                                            <span className="detail-label">Headquarters</span>
                                                            <span className="detail-value">{company.headquarters}</span>
                                                        </div>
                                                    </div>
                                                    <div className="detail-item">
                                                        <span className="detail-icon">📅</span>
                                                        <div>
                                                            <span className="detail-label">Founded</span>
                                                            <span className="detail-value">{company.founded}</span>
                                                        </div>
                                                    </div>
                                                    <div className="detail-item">
                                                        <span className="detail-icon">👥</span>
                                                        <div>
                                                            <span className="detail-label">Employees</span>
                                                            <span className="detail-value">{company.employees}</span>
                                                        </div>
                                                    </div>
                                                    <div className="detail-item">
                                                        <span className="detail-icon">💰</span>
                                                        <div>
                                                            <span className="detail-label">Salary Range</span>
                                                            <span className="detail-value">{company.salaryRange.min} – {company.salaryRange.max}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Hiring Positions */}
                                            <div className="detail-section">
                                                <h4 className="detail-title">Hiring Positions</h4>
                                                <div className="positions-grid">
                                                    {company.positions.map(pos => (
                                                        <span key={pos} className="position-chip">{pos}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Card Actions */}
                                    <div className="company-card-actions">
                                        <button
                                            className="toggle-details-btn"
                                            onClick={() => setExpandedCompany(isExpanded ? null : company.id)}
                                        >
                                            {isExpanded ? '▲ Less' : '▼ More Details'}
                                        </button>
                                        <Link
                                            to={`/mock-test/session/new?type=company&company=${company.name}`}
                                            className="practice-btn"
                                        >
                                            Practice Questions →
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Empty State */}
                    {filteredCompanies.length === 0 && (
                        <div className="companies-empty">
                            <span className="empty-icon-lg">🔍</span>
                            <h3>No companies found</h3>
                            <p>Try adjusting your filters or search query</p>
                            <button
                                className="reset-filters-btn"
                                onClick={() => {
                                    setSearchQuery('');
                                    setTypeFilter('all');
                                    setDifficultyFilter('all');
                                }}
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Companies;
