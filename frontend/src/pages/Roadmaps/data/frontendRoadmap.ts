// ─── Types ───────────────────────────────────────────────────────
export interface TopicResource {
    type: 'roadmap' | 'course' | 'video' | 'article' | 'feed' | 'official';
    title: string;
    url: string;
}

export interface Topic {
    id: string;
    title: string;
    description: string;
    resources: TopicResource[];
}

export interface SectionChild {
    id: string;
    title: string;
}

export interface RoadmapSection {
    id: string;
    title: string;
    description?: string;
    leftTopics?: SectionChild[];
    rightTopics?: SectionChild[];
}

// ─── Topics Data (flat map) ──────────────────────────────────────
export const FRONTEND_TOPICS: Record<string, Topic> = {
    // ── Internet ──
    internet: {
        id: 'internet',
        title: 'Internet',
        description: 'The Internet is a global network of computers connected to each other which communicate through a set of standardized protocols.',
        resources: [
            { type: 'article', title: 'How Does the Internet Work?', url: 'https://cs.fyi/guide/how-does-internet-work' },
            { type: 'article', title: 'How Does the Internet Work? (Stanford)', url: 'https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm' },
            { type: 'video', title: 'How the Internet Works in 5 Minutes', url: 'https://www.youtube.com/watch?v=7_LPdttKXPc' },
        ],
    },
    'what-is-http': {
        id: 'what-is-http',
        title: 'What is HTTP?',
        description: 'HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It defines how messages are formatted and transmitted between clients and servers.',
        resources: [
            { type: 'article', title: 'Everything you need to know about HTTP', url: 'https://cs.fyi/guide/http-in-depth' },
            { type: 'article', title: 'What is HTTP? (Cloudflare)', url: 'https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/' },
            { type: 'video', title: 'HTTP Crash Course & Exploration', url: 'https://www.youtube.com/watch?v=iYM2zFP3Zn0' },
        ],
    },
    'domain-name': {
        id: 'domain-name',
        title: 'What is Domain Name?',
        description: 'A domain name is a human-readable address used to access websites. It maps to an IP address through the DNS system.',
        resources: [
            { type: 'article', title: 'What is a Domain Name? (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name' },
            { type: 'video', title: 'DNS and How does it Work?', url: 'https://www.youtube.com/watch?v=Wj0od2ag5sk' },
        ],
    },
    hosting: {
        id: 'hosting',
        title: 'What is Hosting?',
        description: 'Web hosting is a service that allows organizations and individuals to publish their websites on the internet.',
        resources: [
            { type: 'video', title: 'What is Web Hosting?', url: 'https://www.youtube.com/watch?v=htbY9-yggB0' },
            { type: 'article', title: 'Different types of web hosting', url: 'https://www.namecheap.com/hosting/what-is-web-hosting-definition/' },
        ],
    },
    dns: {
        id: 'dns',
        title: 'DNS and how it works?',
        description: 'DNS (Domain Name System) is the phonebook of the Internet. It translates domain names into IP addresses so browsers can load resources.',
        resources: [
            { type: 'article', title: 'What is DNS? (Cloudflare)', url: 'https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/' },
            { type: 'video', title: 'DNS Explained in 100 Seconds', url: 'https://www.youtube.com/watch?v=UVR9lhUGAyU' },
            { type: 'official', title: 'How DNS Works (Comic)', url: 'https://howdns.works/' },
        ],
    },
    browsers: {
        id: 'browsers',
        title: 'Browsers and how they work?',
        description: 'Web browsers request, retrieve, and display content from the web. Understanding how they render pages is key to frontend development.',
        resources: [
            { type: 'article', title: 'How Browsers Work (web.dev)', url: 'https://web.dev/howbrowserswork/' },
            { type: 'video', title: 'How Do Web Browsers Work?', url: 'https://www.youtube.com/watch?v=WjDrMKZWCt0' },
        ],
    },

    // ── HTML ──
    html: {
        id: 'html',
        title: 'HTML',
        description: 'HTML (HyperText Markup Language) is the standard for creating web pages, structuring content with elements and attributes. Browsers interpret HTML tags to render pages. HTML5, the current standard, adds semantic elements, multimedia support, and form controls. It works with CSS for styling and JavaScript for interactivity, forming web development\'s foundation.',
        resources: [
            { type: 'roadmap', title: 'Visit the Dedicated HTML Roadmap', url: 'https://roadmap.sh/html' },
            { type: 'course', title: 'Responsive Web Design Certification - Co-Learn HTML & CSS with guided projects', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' },
            { type: 'video', title: 'HTML Full Course for Beginners', url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE' },
            { type: 'video', title: 'HTML Full Course - Build a Website Tutorial', url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg' },
            { type: 'feed', title: 'Explore top posts about HTML', url: 'https://app.daily.dev/tags/html' },
        ],
    },
    'semantic-html': {
        id: 'semantic-html',
        title: 'Writing Semantic HTML',
        description: 'Semantic HTML uses HTML elements for their intended purpose, improving accessibility, SEO, and code readability. Elements like <header>, <nav>, <main>, <article>, <section>, and <footer> describe the content they contain.',
        resources: [
            { type: 'article', title: 'Semantic HTML Guide (web.dev)', url: 'https://web.dev/learn/html/semantic-html/' },
            { type: 'article', title: 'Semantic HTML (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html' },
            { type: 'video', title: 'Semantic HTML Tutorial', url: 'https://www.youtube.com/watch?v=kGW8Al_cga4' },
        ],
    },
    'forms-validations': {
        id: 'forms-validations',
        title: 'Forms and Validations',
        description: 'HTML forms collect user input. Form validation ensures that data submitted meets the required format before processing.',
        resources: [
            { type: 'article', title: 'Client-side form validation (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation' },
            { type: 'video', title: 'HTML Forms Full Course', url: 'https://www.youtube.com/watch?v=fNcJuPIZ2WE' },
        ],
    },
    accessibility: {
        id: 'accessibility',
        title: 'Accessibility',
        description: 'Web accessibility ensures websites are usable by everyone, including people with disabilities. It involves proper HTML semantics, ARIA attributes, keyboard navigation, and screen reader support.',
        resources: [
            { type: 'article', title: 'Accessibility Overview (web.dev)', url: 'https://web.dev/accessibility/' },
            { type: 'course', title: 'Web Accessibility (Udacity)', url: 'https://www.udacity.com/course/web-accessibility--ud891' },
            { type: 'article', title: 'A11y Project Checklist', url: 'https://www.a11yproject.com/checklist/' },
        ],
    },
    'seo-basics': {
        id: 'seo-basics',
        title: 'SEO Basics',
        description: 'SEO (Search Engine Optimization) improves a website\'s visibility in search results. Frontend SEO focuses on proper HTML structure, meta tags, performance, and content accessibility.',
        resources: [
            { type: 'article', title: 'Google SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
            { type: 'video', title: 'SEO for Developers', url: 'https://www.youtube.com/watch?v=JSm4aQl4w_U' },
        ],
    },

    // ── CSS ──
    css: {
        id: 'css',
        title: 'CSS',
        description: 'CSS (Cascading Style Sheets) controls the visual presentation of web pages. It handles layout, colors, typography, animations, and responsive design. Modern CSS includes Flexbox, Grid, custom properties, and media queries.',
        resources: [
            { type: 'course', title: 'CSS Full Course (freeCodeCamp)', url: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc' },
            { type: 'article', title: 'Learn CSS (web.dev)', url: 'https://web.dev/learn/css/' },
            { type: 'official', title: 'CSS Reference (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference' },
            { type: 'feed', title: 'Explore top posts about CSS', url: 'https://app.daily.dev/tags/css' },
        ],
    },
    'css-layouts': {
        id: 'css-layouts',
        title: 'Making Layouts',
        description: 'CSS layouts define how elements are positioned on a page. Modern techniques include Flexbox for one-dimensional layouts and CSS Grid for two-dimensional layouts.',
        resources: [
            { type: 'article', title: 'Learn CSS Layout (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout' },
            { type: 'course', title: 'CSS Flexbox in 100 Seconds', url: 'https://www.youtube.com/watch?v=K74l26pE4YA' },
            { type: 'course', title: 'CSS Grid in 100 Seconds', url: 'https://www.youtube.com/watch?v=uuOXPWCh-6o' },
            { type: 'official', title: 'A Complete Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
        ],
    },
    'responsive-design': {
        id: 'responsive-design',
        title: 'Responsive Design',
        description: 'Responsive design ensures websites work across all screen sizes using fluid grids, flexible images, and media queries.',
        resources: [
            { type: 'article', title: 'Responsive Web Design Basics (web.dev)', url: 'https://web.dev/responsive-web-design-basics/' },
            { type: 'video', title: 'Responsive Web Design Tutorial', url: 'https://www.youtube.com/watch?v=srvUrASNj0s' },
        ],
    },

    // ── JavaScript ──
    javascript: {
        id: 'javascript',
        title: 'JavaScript',
        description: 'JavaScript is the programming language of the web. It enables interactive web pages, handles events, manipulates the DOM, makes network requests, and is essential for modern frontend development.',
        resources: [
            { type: 'roadmap', title: 'Visit the JavaScript Roadmap', url: 'https://roadmap.sh/javascript' },
            { type: 'official', title: 'The Modern JavaScript Tutorial', url: 'https://javascript.info/' },
            { type: 'article', title: 'JavaScript Guide (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
            { type: 'video', title: 'JavaScript Full Course for Beginners', url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg' },
            { type: 'feed', title: 'Explore top posts about JavaScript', url: 'https://app.daily.dev/tags/javascript' },
        ],
    },
    'dom-manipulation': {
        id: 'dom-manipulation',
        title: 'Learn DOM Manipulation',
        description: 'DOM manipulation involves using JavaScript to dynamically change the content, structure, and style of a web page by interacting with the Document Object Model.',
        resources: [
            { type: 'article', title: 'DOM Manipulation (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents' },
            { type: 'video', title: 'JavaScript DOM Crash Course', url: 'https://www.youtube.com/watch?v=0ik6X4DJKCc' },
        ],
    },
    'fetch-api': {
        id: 'fetch-api',
        title: 'Fetch API / Ajax (XHR)',
        description: 'The Fetch API provides a modern interface for making HTTP requests from the browser. It replaces the older XMLHttpRequest (XHR) approach.',
        resources: [
            { type: 'article', title: 'Fetch API (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' },
            { type: 'video', title: 'JavaScript Fetch API Explained', url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0' },
        ],
    },

    // ── Version Control ──
    git: {
        id: 'git',
        title: 'Git',
        description: 'Git is a distributed version control system that tracks changes in source code. It enables collaboration, branching, merging, and maintaining project history.',
        resources: [
            { type: 'official', title: 'Git Documentation', url: 'https://git-scm.com/doc' },
            { type: 'video', title: 'Git Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=8JJ101D3knE' },
            { type: 'course', title: 'Learn Git Branching (Interactive)', url: 'https://learngitbranching.js.org/' },
        ],
    },
    github: {
        id: 'github',
        title: 'GitHub',
        description: 'GitHub is the world\'s largest platform for hosting Git repositories. It provides collaboration tools like pull requests, issues, actions, and code review.',
        resources: [
            { type: 'official', title: 'GitHub Skills', url: 'https://skills.github.com/' },
            { type: 'video', title: 'Git and GitHub for Beginners', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk' },
        ],
    },
    gitlab: {
        id: 'gitlab',
        title: 'GitLab',
        description: 'GitLab is a DevOps platform that provides Git repository management, CI/CD, and project management features.',
        resources: [
            { type: 'official', title: 'GitLab Documentation', url: 'https://docs.gitlab.com/' },
        ],
    },

    // ── Package Managers ──
    npm: {
        id: 'npm',
        title: 'npm',
        description: 'npm (Node Package Manager) is the default package manager for Node.js. It hosts the world\'s largest registry of JavaScript packages.',
        resources: [
            { type: 'official', title: 'npm Documentation', url: 'https://docs.npmjs.com/' },
            { type: 'video', title: 'NPM Crash Course', url: 'https://www.youtube.com/watch?v=jHDhaSSKmB0' },
        ],
    },
    pnpm: {
        id: 'pnpm',
        title: 'pnpm',
        description: 'pnpm is a fast, disk-efficient package manager. It uses a content-addressable store to save disk space and speed up installations.',
        resources: [
            { type: 'official', title: 'pnpm Documentation', url: 'https://pnpm.io/' },
        ],
    },
    yarn: {
        id: 'yarn',
        title: 'yarn',
        description: 'Yarn is a fast, reliable, and secure dependency management tool developed by Facebook.',
        resources: [
            { type: 'official', title: 'Yarn Documentation', url: 'https://yarnpkg.com/' },
        ],
    },

    // ── Frameworks ──
    react: {
        id: 'react',
        title: 'React',
        description: 'React is a JavaScript library for building user interfaces, maintained by Meta. It uses a component-based architecture and virtual DOM for efficient rendering.',
        resources: [
            { type: 'roadmap', title: 'Visit the React Roadmap', url: 'https://roadmap.sh/react' },
            { type: 'official', title: 'React Official Tutorial', url: 'https://react.dev/learn' },
            { type: 'video', title: 'React Full Course 2024', url: 'https://www.youtube.com/watch?v=CgkZ7MvWUAA' },
            { type: 'course', title: 'Full Stack Open (React)', url: 'https://fullstackopen.com/en/' },
        ],
    },
    vuejs: {
        id: 'vuejs',
        title: 'Vue.js',
        description: 'Vue.js is a progressive JavaScript framework for building user interfaces. It\'s designed to be incrementally adoptable and focused on the view layer.',
        resources: [
            { type: 'official', title: 'Vue.js Documentation', url: 'https://vuejs.org/guide/introduction.html' },
            { type: 'video', title: 'Vue.js Course for Beginners', url: 'https://www.youtube.com/watch?v=FXpIoQ_rT_c' },
        ],
    },
    angular: {
        id: 'angular',
        title: 'Angular',
        description: 'Angular is a TypeScript-based web application framework developed by Google. It provides a comprehensive solution including routing, forms, HTTP client, and testing.',
        resources: [
            { type: 'official', title: 'Angular Documentation', url: 'https://angular.dev/' },
            { type: 'video', title: 'Angular Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=3qBXWUpoPHo' },
        ],
    },
    svelte: {
        id: 'svelte',
        title: 'Svelte',
        description: 'Svelte is a compiler that turns declarative component code into efficient JavaScript. Unlike frameworks, Svelte shifts work from runtime to compile time.',
        resources: [
            { type: 'official', title: 'Svelte Tutorial', url: 'https://svelte.dev/tutorial' },
            { type: 'video', title: 'Svelte in 100 Seconds', url: 'https://www.youtube.com/watch?v=rv3Yq-B8qp4' },
        ],
    },
    solidjs: {
        id: 'solidjs',
        title: 'Solid JS',
        description: 'SolidJS is a reactive JavaScript library for building user interfaces with fine-grained reactivity. It compiles templates to real DOM nodes with no virtual DOM.',
        resources: [
            { type: 'official', title: 'SolidJS Documentation', url: 'https://www.solidjs.com/' },
            { type: 'video', title: 'SolidJS Crash Course', url: 'https://www.youtube.com/watch?v=2iGN3_TGr7w' },
        ],
    },

    // ── CSS Tools ──
    tailwind: {
        id: 'tailwind',
        title: 'Tailwind CSS',
        description: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs quickly without writing custom CSS.',
        resources: [
            { type: 'official', title: 'Tailwind CSS Documentation', url: 'https://tailwindcss.com/docs' },
            { type: 'video', title: 'Tailwind CSS Full Course', url: 'https://www.youtube.com/watch?v=lCxcTsOHrjo' },
        ],
    },
    bem: {
        id: 'bem',
        title: 'BEM',
        description: 'BEM (Block Element Modifier) is a CSS naming methodology that helps write maintainable and scalable CSS. It structures class names as block__element--modifier.',
        resources: [
            { type: 'official', title: 'BEM Methodology', url: 'https://en.bem.info/methodology/' },
            { type: 'article', title: 'BEM 101 (CSS-Tricks)', url: 'https://css-tricks.com/bem-101/' },
        ],
    },
    sass: {
        id: 'sass',
        title: 'Sass',
        description: 'Sass is a CSS preprocessor that adds features like variables, nesting, mixins, and functions to CSS, making stylesheets more maintainable.',
        resources: [
            { type: 'official', title: 'Sass Documentation', url: 'https://sass-lang.com/documentation/' },
            { type: 'video', title: 'Sass Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=_a5j7KoflTs' },
        ],
    },
    postcss: {
        id: 'postcss',
        title: 'PostCSS',
        description: 'PostCSS is a tool for transforming CSS with JavaScript plugins. It powers tools like Autoprefixer, CSS Modules, and cssnano.',
        resources: [
            { type: 'official', title: 'PostCSS Documentation', url: 'https://postcss.org/' },
        ],
    },

    // ── Build Tools ──
    vite: {
        id: 'vite',
        title: 'Vite',
        description: 'Vite is a next-generation build tool that provides instant server start, lightning-fast HMR, and optimized production builds using Rollup.',
        resources: [
            { type: 'official', title: 'Vite Documentation', url: 'https://vitejs.dev/' },
            { type: 'video', title: 'Vite in 100 Seconds', url: 'https://www.youtube.com/watch?v=KCrXgy8qtjM' },
        ],
    },
    webpack: {
        id: 'webpack',
        title: 'Webpack',
        description: 'Webpack is a module bundler that takes modules with dependencies and generates static assets representing those modules.',
        resources: [
            { type: 'official', title: 'Webpack Documentation', url: 'https://webpack.js.org/concepts/' },
            { type: 'video', title: 'Webpack Crash Course', url: 'https://www.youtube.com/watch?v=IZGNcSuwBZs' },
        ],
    },
    esbuild: {
        id: 'esbuild',
        title: 'esbuild',
        description: 'esbuild is an extremely fast JavaScript/TypeScript bundler written in Go. It\'s 10-100x faster than traditional bundlers.',
        resources: [
            { type: 'official', title: 'esbuild Documentation', url: 'https://esbuild.github.io/' },
        ],
    },
    eslint: {
        id: 'eslint',
        title: 'ESLint',
        description: 'ESLint is a pluggable linting utility for JavaScript and TypeScript that identifies and reports code patterns to avoid bugs and enforce coding standards.',
        resources: [
            { type: 'official', title: 'ESLint Documentation', url: 'https://eslint.org/docs/latest/' },
            { type: 'video', title: 'ESLint Tutorial', url: 'https://www.youtube.com/watch?v=SydnKbGc7W8' },
        ],
    },
    prettier: {
        id: 'prettier',
        title: 'Prettier',
        description: 'Prettier is an opinionated code formatter that enforces a consistent style across your entire codebase for JavaScript, TypeScript, CSS, HTML, and more.',
        resources: [
            { type: 'official', title: 'Prettier Documentation', url: 'https://prettier.io/docs/en/' },
        ],
    },

    // ── Testing ──
    vitest: {
        id: 'vitest',
        title: 'Vitest',
        description: 'Vitest is a blazing fast unit test framework powered by Vite. It provides a Jest-compatible API with native ESM, TypeScript, and JSX support.',
        resources: [
            { type: 'official', title: 'Vitest Documentation', url: 'https://vitest.dev/' },
            { type: 'video', title: 'Vitest Crash Course', url: 'https://www.youtube.com/watch?v=7f-71kYhK00' },
        ],
    },
    jest: {
        id: 'jest',
        title: 'Jest',
        description: 'Jest is a JavaScript testing framework that focuses on simplicity. It provides features like snapshot testing, mocking, and code coverage out of the box.',
        resources: [
            { type: 'official', title: 'Jest Documentation', url: 'https://jestjs.io/docs/getting-started' },
            { type: 'video', title: 'Jest Crash Course', url: 'https://www.youtube.com/watch?v=7r4xVDI2vho' },
        ],
    },
    playwright: {
        id: 'playwright',
        title: 'Playwright',
        description: 'Playwright is a framework for end-to-end testing of web applications. It supports Chromium, Firefox, and WebKit with a single API.',
        resources: [
            { type: 'official', title: 'Playwright Documentation', url: 'https://playwright.dev/' },
            { type: 'video', title: 'Playwright Tutorial', url: 'https://www.youtube.com/watch?v=Xz6lhEzgI5I' },
        ],
    },
    cypress: {
        id: 'cypress',
        title: 'Cypress',
        description: 'Cypress is a JavaScript end-to-end testing framework for web applications. It runs in the same run-loop as the application, providing fast and reliable testing.',
        resources: [
            { type: 'official', title: 'Cypress Documentation', url: 'https://docs.cypress.io/' },
            { type: 'video', title: 'Cypress End-to-End Testing', url: 'https://www.youtube.com/watch?v=u8vMu7viCm8' },
        ],
    },

    // ── Auth ──
    'auth-strategies': {
        id: 'auth-strategies',
        title: 'Authentication Strategies',
        description: 'Authentication strategies verify user identity. Common approaches include JWT (JSON Web Tokens), OAuth 2.0, SSO (Single Sign-On), session-based auth, and basic authentication.',
        resources: [
            { type: 'article', title: 'Session vs Token Authentication', url: 'https://roadmap.sh/guides/session-authentication' },
            { type: 'article', title: 'JWT Introduction', url: 'https://jwt.io/introduction/' },
            { type: 'video', title: 'OAuth 2.0 Simplified', url: 'https://www.youtube.com/watch?v=ZV5yTm4pT8g' },
            { type: 'article', title: 'Basic Authentication (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication' },
        ],
    },

    // ── Security ──
    'web-security': {
        id: 'web-security',
        title: 'Web Security Basics',
        description: 'Web security protects websites and users from threats. Key topics include CORS, HTTPS, Content Security Policy, and OWASP security risks.',
        resources: [
            { type: 'article', title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
            { type: 'article', title: 'Content Security Policy (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP' },
            { type: 'video', title: 'Web Security Explained', url: 'https://www.youtube.com/watch?v=JnstGFDgGO0' },
        ],
    },
    cors: {
        id: 'cors',
        title: 'CORS',
        description: 'Cross-Origin Resource Sharing (CORS) is a security mechanism that allows or restricts resources requested from another domain.',
        resources: [
            { type: 'article', title: 'CORS (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS' },
        ],
    },
    https: {
        id: 'https',
        title: 'HTTPS',
        description: 'HTTPS (HTTP Secure) encrypts communication between browser and server using TLS/SSL, protecting data integrity and privacy.',
        resources: [
            { type: 'article', title: 'Why HTTPS Matters (web.dev)', url: 'https://web.dev/why-https-matters/' },
        ],
    },

    // ── TypeScript ──
    typescript: {
        id: 'typescript',
        title: 'TypeScript',
        description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static type checking, interfaces, generics, and other features to help catch errors at compile time.',
        resources: [
            { type: 'roadmap', title: 'Visit the TypeScript Roadmap', url: 'https://roadmap.sh/typescript' },
            { type: 'official', title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/' },
            { type: 'video', title: 'TypeScript Full Course for Beginners', url: 'https://www.youtube.com/watch?v=30LWjhZzg50' },
            { type: 'course', title: 'TypeScript Exercises', url: 'https://typescript-exercises.github.io/' },
        ],
    },

    // ── SSR Frameworks ──
    nextjs: {
        id: 'nextjs',
        title: 'Next.js',
        description: 'Next.js is a React framework that enables server-side rendering, static site generation, API routes, and file-based routing. It\'s the most popular full-stack React framework.',
        resources: [
            { type: 'official', title: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
            { type: 'video', title: 'Next.js Full Course', url: 'https://www.youtube.com/watch?v=wm5gMKuwSYk' },
            { type: 'course', title: 'Next.js Learn Course', url: 'https://nextjs.org/learn' },
        ],
    },
    nuxtjs: {
        id: 'nuxtjs',
        title: 'Nuxt.js',
        description: 'Nuxt.js is a framework for building Vue.js applications with server-side rendering, static generation, and powerful module ecosystem.',
        resources: [
            { type: 'official', title: 'Nuxt.js Documentation', url: 'https://nuxt.com/docs' },
        ],
    },
    astro: {
        id: 'astro',
        title: 'Astro',
        description: 'Astro is a modern static site builder that ships zero JavaScript by default. It supports multiple frameworks (React, Vue, Svelte) in the same project.',
        resources: [
            { type: 'official', title: 'Astro Documentation', url: 'https://docs.astro.build/' },
            { type: 'video', title: 'Astro Crash Course', url: 'https://www.youtube.com/watch?v=zrPVTf761OI' },
        ],
    },
    sveltekit: {
        id: 'sveltekit',
        title: 'SvelteKit',
        description: 'SvelteKit is the official application framework for Svelte. It provides routing, server-side rendering, and build optimization.',
        resources: [
            { type: 'official', title: 'SvelteKit Documentation', url: 'https://kit.svelte.dev/docs' },
        ],
    },

    // ── GraphQL ──
    graphql: {
        id: 'graphql',
        title: 'GraphQL',
        description: 'GraphQL is a query language for APIs that lets clients request exactly the data they need. It provides a more efficient alternative to REST APIs.',
        resources: [
            { type: 'official', title: 'GraphQL Documentation', url: 'https://graphql.org/learn/' },
            { type: 'video', title: 'GraphQL Full Course', url: 'https://www.youtube.com/watch?v=ed8SzALpx1Q' },
            { type: 'course', title: 'How to GraphQL', url: 'https://www.howtographql.com/' },
        ],
    },
    apollo: {
        id: 'apollo',
        title: 'Apollo',
        description: 'Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.',
        resources: [
            { type: 'official', title: 'Apollo Client Documentation', url: 'https://www.apollographql.com/docs/react/' },
        ],
    },

    // ── Mobile / Desktop ──
    'react-native': {
        id: 'react-native',
        title: 'React Native',
        description: 'React Native is a framework for building native mobile applications using React. It renders to native iOS and Android components.',
        resources: [
            { type: 'official', title: 'React Native Documentation', url: 'https://reactnative.dev/' },
            { type: 'video', title: 'React Native Tutorial', url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc' },
        ],
    },
    flutter: {
        id: 'flutter',
        title: 'Flutter',
        description: 'Flutter is Google\'s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.',
        resources: [
            { type: 'official', title: 'Flutter Documentation', url: 'https://docs.flutter.dev/' },
            { type: 'video', title: 'Flutter Course for Beginners', url: 'https://www.youtube.com/watch?v=VPvVD8t02U8' },
        ],
    },
    electron: {
        id: 'electron',
        title: 'Electron',
        description: 'Electron enables building cross-platform desktop apps using web technologies (HTML, CSS, JavaScript). VS Code, Discord, and Slack are built with Electron.',
        resources: [
            { type: 'official', title: 'Electron Documentation', url: 'https://www.electronjs.org/docs/latest/' },
        ],
    },
    tauri: {
        id: 'tauri',
        title: 'Tauri',
        description: 'Tauri is a framework for building tiny, fast desktop applications using web frontend technologies and a Rust backend. Much smaller and faster than Electron.',
        resources: [
            { type: 'official', title: 'Tauri Documentation', url: 'https://tauri.app/' },
            { type: 'video', title: 'Tauri in 100 Seconds', url: 'https://www.youtube.com/watch?v=5A808TBnk7A' },
        ],
    },

    // ── Performance ──
    performance: {
        id: 'performance',
        title: 'Performance Best Practices',
        description: 'Web performance optimization ensures fast loading and smooth interactions. Key areas include PRPL pattern, RAIL model, Core Web Vitals, code splitting, lazy loading, and using Lighthouse for auditing.',
        resources: [
            { type: 'article', title: 'Web Performance (web.dev)', url: 'https://web.dev/performance/' },
            { type: 'article', title: 'RAIL Model (web.dev)', url: 'https://web.dev/rail/' },
            { type: 'official', title: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse/overview/' },
            { type: 'video', title: 'Web Performance Made Easy', url: 'https://www.youtube.com/watch?v=Mv-l3-tJgGk' },
        ],
    },
};

// ─── Roadmap Sections (tree structure) ───────────────────────────
export const FRONTEND_SECTIONS: RoadmapSection[] = [
    {
        id: 'internet',
        title: 'Internet',
        description: 'How does the internet work?',
        rightTopics: [
            { id: 'what-is-http', title: 'What is HTTP?' },
            { id: 'domain-name', title: 'What is Domain Name?' },
            { id: 'hosting', title: 'What is Hosting?' },
            { id: 'dns', title: 'DNS and how it works?' },
            { id: 'browsers', title: 'Browsers and how they work?' },
        ],
    },
    {
        id: 'html',
        title: 'HTML',
        leftTopics: [
            { id: 'semantic-html', title: 'Writing Semantic HTML' },
            { id: 'forms-validations', title: 'Forms and Validations' },
            { id: 'accessibility', title: 'Accessibility' },
            { id: 'seo-basics', title: 'SEO Basics' },
        ],
    },
    {
        id: 'css',
        title: 'CSS',
        rightTopics: [
            { id: 'css-layouts', title: 'Making Layouts' },
            { id: 'responsive-design', title: 'Responsive Design' },
        ],
    },
    {
        id: 'javascript',
        title: 'JavaScript',
        leftTopics: [
            { id: 'dom-manipulation', title: 'Learn DOM Manipulation' },
            { id: 'fetch-api', title: 'Fetch API / Ajax (XHR)' },
        ],
    },
    {
        id: 'vcs',
        title: 'Version Control Systems',
        description: 'Git',
        leftTopics: [
            { id: 'git', title: 'Git' },
        ],
        rightTopics: [
            { id: 'github', title: 'GitHub' },
            { id: 'gitlab', title: 'GitLab' },
        ],
    },
    {
        id: 'pkg-managers',
        title: 'Package Managers',
        leftTopics: [
            { id: 'npm', title: 'npm' },
            { id: 'pnpm', title: 'pnpm' },
        ],
        rightTopics: [
            { id: 'yarn', title: 'yarn' },
        ],
    },
    {
        id: 'frameworks',
        title: 'Pick a Framework',
        rightTopics: [
            { id: 'react', title: 'React' },
            { id: 'vuejs', title: 'Vue.js' },
            { id: 'angular', title: 'Angular' },
            { id: 'svelte', title: 'Svelte' },
            { id: 'solidjs', title: 'Solid JS' },
        ],
    },
    {
        id: 'css-tools',
        title: 'Writing CSS',
        description: 'Modern CSS tooling',
        leftTopics: [
            { id: 'tailwind', title: 'Tailwind CSS' },
            { id: 'bem', title: 'BEM' },
        ],
        rightTopics: [
            { id: 'sass', title: 'Sass' },
            { id: 'postcss', title: 'PostCSS' },
        ],
    },
    {
        id: 'build-tools',
        title: 'Build Tools',
        leftTopics: [
            { id: 'vite', title: 'Vite' },
            { id: 'webpack', title: 'Webpack' },
            { id: 'esbuild', title: 'esbuild' },
        ],
        rightTopics: [
            { id: 'eslint', title: 'ESLint' },
            { id: 'prettier', title: 'Prettier' },
        ],
    },
    {
        id: 'testing',
        title: 'Testing',
        leftTopics: [
            { id: 'vitest', title: 'Vitest' },
            { id: 'jest', title: 'Jest' },
        ],
        rightTopics: [
            { id: 'playwright', title: 'Playwright' },
            { id: 'cypress', title: 'Cypress' },
        ],
    },
    {
        id: 'auth',
        title: 'Authentication',
        description: 'JWT, OAuth, SSO, Session Auth',
        rightTopics: [
            { id: 'auth-strategies', title: 'Auth Strategies' },
        ],
    },
    {
        id: 'security',
        title: 'Web Security',
        leftTopics: [
            { id: 'cors', title: 'CORS' },
            { id: 'https', title: 'HTTPS' },
        ],
        rightTopics: [
            { id: 'web-security', title: 'Security Basics' },
        ],
    },
    {
        id: 'type-checkers',
        title: 'Type Checkers',
        rightTopics: [
            { id: 'typescript', title: 'TypeScript' },
        ],
    },
    {
        id: 'ssr',
        title: 'SSR (Server Side Rendering)',
        leftTopics: [
            { id: 'nextjs', title: 'Next.js' },
            { id: 'nuxtjs', title: 'Nuxt.js' },
        ],
        rightTopics: [
            { id: 'astro', title: 'Astro' },
            { id: 'sveltekit', title: 'SvelteKit' },
        ],
    },
    {
        id: 'graphql-section',
        title: 'GraphQL',
        rightTopics: [
            { id: 'graphql', title: 'GraphQL' },
            { id: 'apollo', title: 'Apollo' },
        ],
    },
    {
        id: 'mobile-apps',
        title: 'Mobile Apps',
        rightTopics: [
            { id: 'react-native', title: 'React Native' },
            { id: 'flutter', title: 'Flutter' },
        ],
    },
    {
        id: 'desktop-apps',
        title: 'Desktop Apps',
        leftTopics: [
            { id: 'electron', title: 'Electron' },
            { id: 'tauri', title: 'Tauri' },
        ],
    },
    {
        id: 'performance-section',
        title: 'Performance',
        description: 'Measure & Improve',
        rightTopics: [
            { id: 'performance', title: 'Best Practices' },
        ],
    },
];
