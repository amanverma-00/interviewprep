import type { Topic, RoadmapSection } from './frontendRoadmap';

export const UX_DESIGN_TOPICS: Record<string, Topic> = {
    // ── Foundations ──
    'what-is-ux': {
        id: 'what-is-ux',
        title: 'What is UX Design?',
        description: 'UX design is the process of creating products that provide meaningful, relevant experiences. It encompasses usability, accessibility, information architecture, and interaction design.',
        resources: [
            { type: 'article', title: 'What is UX Design?', url: 'https://www.nngroup.com/articles/definition-user-experience/' },
            { type: 'video', title: 'UX Design in 100 Seconds', url: 'https://www.youtube.com/watch?v=SRec90j6lTY' },
            { type: 'course', title: 'Google UX Design Certificate', url: 'https://www.coursera.org/professional-certificates/google-ux-design' },
        ],
    },
    'design-thinking': {
        id: 'design-thinking',
        title: 'Design Thinking',
        description: 'A human-centered approach to innovation: Empathize, Define, Ideate, Prototype, Test. Iterative problem-solving framework used by IDEO and Stanford d.school.',
        resources: [
            { type: 'article', title: 'Design Thinking (IDEO)', url: 'https://designthinking.ideo.com/' },
            { type: 'video', title: 'Design Thinking Explained', url: 'https://www.youtube.com/watch?v=_r0VX-aU_T8' },
        ],
    },
    'ux-vs-ui': {
        id: 'ux-vs-ui',
        title: 'UX vs UI',
        description: 'UX is the overall experience and how the product feels. UI is the visual layer — buttons, colors, typography. Both are essential but serve different purposes.',
        resources: [
            { type: 'article', title: 'UX vs UI Explained', url: 'https://www.nngroup.com/articles/definition-user-experience/' },
        ],
    },

    // ── Research ──
    'user-research': {
        id: 'user-research',
        title: 'User Research',
        description: 'Qualitative and quantitative methods to understand users. Interviews, surveys, contextual inquiry, diary studies, and analytics analysis.',
        resources: [
            { type: 'article', title: 'User Research Methods (NN/g)', url: 'https://www.nngroup.com/articles/which-ux-research-methods/' },
        ],
    },
    'user-interviews': {
        id: 'user-interviews',
        title: 'User Interviews',
        description: 'One-on-one conversations to understand user needs, pain points, and behaviors. Interview guides, open-ended questions, and synthesis techniques.',
        resources: [
            { type: 'article', title: 'How to Conduct User Interviews', url: 'https://www.nngroup.com/articles/user-interviews/' },
        ],
    },
    personas: {
        id: 'personas',
        title: 'User Personas',
        description: 'Research-based representations of user types. Demographics, goals, frustrations, and behaviors. Personas align teams around who they\'re designing for.',
        resources: [
            { type: 'article', title: 'Personas (NN/g)', url: 'https://www.nngroup.com/articles/persona/' },
        ],
    },
    'user-journey': {
        id: 'user-journey',
        title: 'User Journey Maps',
        description: 'Visualizing the user\'s end-to-end experience. Touchpoints, emotions, pain points, and opportunities across the entire interaction with a product.',
        resources: [
            { type: 'article', title: 'Journey Mapping 101', url: 'https://www.nngroup.com/articles/journey-mapping-101/' },
        ],
    },
    'usability-testing': {
        id: 'usability-testing',
        title: 'Usability Testing',
        description: 'Observing real users interacting with your product. Moderated vs unmoderated, task-based testing, think-aloud protocol, and analyzing results.',
        resources: [
            { type: 'article', title: 'Usability Testing 101', url: 'https://www.nngroup.com/articles/usability-testing-101/' },
            { type: 'video', title: 'How to Do Usability Testing', url: 'https://www.youtube.com/watch?v=BrVnBj0CnzQ' },
        ],
    },

    // ── Information Architecture ──
    'information-architecture': {
        id: 'information-architecture',
        title: 'Information Architecture',
        description: 'Organizing and structuring content so users can find what they need. Card sorting, tree testing, site maps, and navigation patterns.',
        resources: [
            { type: 'article', title: 'IA Basics (NN/g)', url: 'https://www.nngroup.com/articles/ia-vs-navigation/' },
        ],
    },
    'user-flows': {
        id: 'user-flows',
        title: 'User Flows',
        description: 'Diagramming the paths users take through your product to complete tasks. Entry points, decision points, and success/failure states.',
        resources: [
            { type: 'article', title: 'User Flow Guide', url: 'https://www.nngroup.com/articles/user-journey-vs-user-flow/' },
        ],
    },

    // ── Wireframing & Prototyping ──
    wireframing: {
        id: 'wireframing',
        title: 'Wireframing',
        description: 'Low-fidelity representations of layouts. Focus on structure, content hierarchy, and functionality without visual design distractions.',
        resources: [
            { type: 'article', title: 'Wireframing Guide', url: 'https://www.nngroup.com/articles/wireframing/' },
        ],
    },
    prototyping: {
        id: 'prototyping',
        title: 'Prototyping',
        description: 'Interactive mockups that simulate the real product. Low-fi (paper), mid-fi (clickable wireframes), and high-fi (pixel-perfect) prototypes.',
        resources: [
            { type: 'article', title: 'Prototyping (NN/g)', url: 'https://www.nngroup.com/articles/prototyping-101/' },
        ],
    },

    // ── Tools ──
    figma: {
        id: 'figma',
        title: 'Figma',
        description: 'Figma is the industry-standard design tool. Components, auto layout, prototyping, design systems, Dev Mode, and real-time collaboration.',
        resources: [
            { type: 'official', title: 'Figma Learn', url: 'https://help.figma.com/hc/en-us' },
            { type: 'video', title: 'Figma Full Course', url: 'https://www.youtube.com/watch?v=1pW_sk-2y40' },
        ],
    },
    sketch: {
        id: 'sketch',
        title: 'Sketch',
        description: 'Sketch is a macOS design tool popular for UI design. Symbols, libraries, prototyping, and plugins. Still used in many teams alongside Figma.',
        resources: [
            { type: 'official', title: 'Sketch Documentation', url: 'https://www.sketch.com/docs/' },
        ],
    },
    'adobe-xd': {
        id: 'adobe-xd',
        title: 'Adobe XD',
        description: 'Adobe XD offers UI design and prototyping with Creative Cloud integration. Auto-animate, repeat grids, and voice prototyping.',
        resources: [
            { type: 'official', title: 'Adobe XD', url: 'https://helpx.adobe.com/xd/user-guide.html' },
        ],
    },

    // ── Visual Design ──
    typography: {
        id: 'typography',
        title: 'Typography',
        description: 'Type hierarchy, font pairing, readability, line height, letter spacing, and responsive typography. Typography is 90% of design.',
        resources: [
            { type: 'article', title: 'Typography Guide', url: 'https://practicaltypography.com/' },
        ],
    },
    'color-theory': {
        id: 'color-theory',
        title: 'Color Theory',
        description: 'Color psychology, contrast ratios, color systems (HSL, HSB), accessible color palettes, and brand colors. Creating harmonious palettes.',
        resources: [
            { type: 'article', title: 'Color for UX', url: 'https://www.nngroup.com/articles/color-enhance-design/' },
        ],
    },
    'design-systems': {
        id: 'design-systems',
        title: 'Design Systems',
        description: 'Reusable components, design tokens, style guides, pattern libraries. Systems like Material Design, Apple HIG, and building your own.',
        resources: [
            { type: 'official', title: 'Material Design', url: 'https://m3.material.io/' },
            { type: 'official', title: 'Apple HIG', url: 'https://developer.apple.com/design/human-interface-guidelines/' },
        ],
    },
    'responsive-design': {
        id: 'responsive-design',
        title: 'Responsive & Adaptive Design',
        description: 'Designing for multiple screen sizes. Breakpoints, fluid grids, mobile-first design, and platform-specific considerations.',
        resources: [
            { type: 'article', title: 'Responsive Design (NN/g)', url: 'https://www.nngroup.com/articles/responsive-web-design-definition/' },
        ],
    },

    // ── Interaction Design ──
    'interaction-design': {
        id: 'interaction-design',
        title: 'Interaction Design',
        description: 'How users interact with interfaces. Affordances, feedback, micro-interactions, gestures, transitions, and animation principles.',
        resources: [
            { type: 'article', title: 'Interaction Design (NN/g)', url: 'https://www.nngroup.com/articles/interaction-design/' },
        ],
    },
    'micro-interactions': {
        id: 'micro-interactions',
        title: 'Micro-interactions',
        description: 'Small, single-purpose animations that provide feedback, guide tasks, or add delight. Loading states, toggles, pull-to-refresh, and hover effects.',
        resources: [
            { type: 'video', title: 'Micro-interactions in UX', url: 'https://www.youtube.com/watch?v=FPCYp2BTOYA' },
        ],
    },

    // ── Accessibility ──
    accessibility: {
        id: 'accessibility',
        title: 'Accessibility (a11y)',
        description: 'Designing for all users including those with disabilities. WCAG guidelines, screen readers, color contrast (4.5:1 minimum), keyboard navigation, and alt text.',
        resources: [
            { type: 'official', title: 'WCAG 2.1 Guidelines', url: 'https://www.w3.org/WAI/WCAG21/quickref/' },
            { type: 'article', title: 'Accessibility Guide (NN/g)', url: 'https://www.nngroup.com/topic/accessibility/' },
        ],
    },

    // ── UX Writing ──
    'ux-writing': {
        id: 'ux-writing',
        title: 'UX Writing & Content',
        description: 'Microcopy, error messages, CTAs, onboarding flows, tone of voice, and content strategy. Words are part of the interface.',
        resources: [
            { type: 'article', title: 'UX Writing Tips', url: 'https://uxplanet.org/ux-writing-guide-for-beginners-a4cdd8db94a0' },
        ],
    },

    // ── Metrics ──
    'ux-metrics': {
        id: 'ux-metrics',
        title: 'UX Metrics & Analytics',
        description: 'Measuring UX: SUS, NPS, task success rate, time on task, error rate, conversion funnels, heatmaps, and A/B testing.',
        resources: [
            { type: 'article', title: 'UX Metrics (NN/g)', url: 'https://www.nngroup.com/articles/usability-metrics/' },
        ],
    },

    // ── Portfolio ──
    'ux-portfolio': {
        id: 'ux-portfolio',
        title: 'UX Portfolio',
        description: 'Building a portfolio that lands jobs. Case studies with process (research, ideation, testing), storytelling, before/after, and measurable outcomes.',
        resources: [
            { type: 'article', title: 'Portfolio Tips (NN/g)', url: 'https://www.nngroup.com/articles/ux-portfolio/' },
        ],
    },
};

export const UX_DESIGN_SECTIONS: RoadmapSection[] = [
    {
        id: 'foundations',
        title: 'Foundations',
        leftTopics: [
            { id: 'what-is-ux', title: 'What is UX Design?' },
            { id: 'design-thinking', title: 'Design Thinking' },
        ],
        rightTopics: [{ id: 'ux-vs-ui', title: 'UX vs UI' }],
    },
    {
        id: 'research',
        title: 'User Research',
        description: 'Understand users',
        leftTopics: [
            { id: 'user-research', title: 'Research Methods' },
            { id: 'user-interviews', title: 'User Interviews' },
        ],
        rightTopics: [
            { id: 'personas', title: 'Personas' },
            { id: 'user-journey', title: 'Journey Maps' },
            { id: 'usability-testing', title: 'Usability Testing' },
        ],
    },
    {
        id: 'ia',
        title: 'Information Architecture',
        leftTopics: [{ id: 'information-architecture', title: 'Information Architecture' }],
        rightTopics: [{ id: 'user-flows', title: 'User Flows' }],
    },
    {
        id: 'wireframing-section',
        title: 'Wireframing & Prototyping',
        leftTopics: [{ id: 'wireframing', title: 'Wireframing' }],
        rightTopics: [{ id: 'prototyping', title: 'Prototyping' }],
    },
    {
        id: 'tools',
        title: 'Design Tools',
        leftTopics: [{ id: 'figma', title: 'Figma' }],
        rightTopics: [
            { id: 'sketch', title: 'Sketch' },
            { id: 'adobe-xd', title: 'Adobe XD' },
        ],
    },
    {
        id: 'visual',
        title: 'Visual Design',
        leftTopics: [
            { id: 'typography', title: 'Typography' },
            { id: 'color-theory', title: 'Color Theory' },
        ],
        rightTopics: [
            { id: 'design-systems', title: 'Design Systems' },
            { id: 'responsive-design', title: 'Responsive Design' },
        ],
    },
    {
        id: 'interaction',
        title: 'Interaction Design',
        leftTopics: [{ id: 'interaction-design', title: 'Interaction Design' }],
        rightTopics: [{ id: 'micro-interactions', title: 'Micro-interactions' }],
    },
    {
        id: 'a11y',
        title: 'Accessibility',
        rightTopics: [{ id: 'accessibility', title: 'Accessibility (a11y)' }],
    },
    {
        id: 'writing',
        title: 'UX Writing',
        rightTopics: [{ id: 'ux-writing', title: 'UX Writing & Content' }],
    },
    {
        id: 'metrics',
        title: 'Metrics & Analytics',
        rightTopics: [{ id: 'ux-metrics', title: 'UX Metrics' }],
    },
    {
        id: 'portfolio',
        title: 'Portfolio',
        description: 'Land the job',
        rightTopics: [{ id: 'ux-portfolio', title: 'UX Portfolio' }],
    },
];
