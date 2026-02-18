import type { Topic, RoadmapSection } from './frontendRoadmap';

// ─── Full Stack Topics ───────────────────────────────────────────
export const FULLSTACK_TOPICS: Record<string, Topic> = {
    // ── Internet Fundamentals ──
    internet: {
        id: 'internet',
        title: 'Internet',
        description: 'Understanding how the internet works is the first step to becoming a full stack developer. Learn about protocols, networking, DNS, and how browsers communicate with servers.',
        resources: [
            { type: 'article', title: 'How Does the Internet Work?', url: 'https://cs.fyi/guide/how-does-internet-work' },
            { type: 'video', title: 'How the Internet Works in 5 Minutes', url: 'https://www.youtube.com/watch?v=7_LPdttKXPc' },
        ],
    },
    http: {
        id: 'http',
        title: 'HTTP / HTTPS',
        description: 'HTTP is the foundation of data communication on the web. HTTPS adds encryption via TLS. Understanding request/response cycles, methods, status codes, and headers is essential.',
        resources: [
            { type: 'article', title: 'HTTP in Depth', url: 'https://cs.fyi/guide/http-in-depth' },
            { type: 'video', title: 'HTTP Crash Course', url: 'https://www.youtube.com/watch?v=iYM2zFP3Zn0' },
        ],
    },
    dns: {
        id: 'dns',
        title: 'DNS',
        description: 'The Domain Name System translates domain names to IP addresses. Full stack developers need to understand DNS resolution, records (A, CNAME, MX), and TTL.',
        resources: [
            { type: 'article', title: 'What is DNS? (Cloudflare)', url: 'https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/' },
            { type: 'official', title: 'How DNS Works', url: 'https://howdns.works/' },
        ],
    },

    // ── HTML & CSS ──
    html: {
        id: 'html',
        title: 'HTML',
        description: 'HTML is the skeleton of every web page. Learn semantic elements, forms, accessibility, and SEO fundamentals to create well-structured documents.',
        resources: [
            { type: 'roadmap', title: 'Visit the HTML Roadmap', url: 'https://roadmap.sh/html' },
            { type: 'course', title: 'freeCodeCamp Responsive Design', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' },
            { type: 'video', title: 'HTML Full Course for Beginners', url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE' },
        ],
    },
    css: {
        id: 'css',
        title: 'CSS',
        description: 'CSS controls the visual presentation of web pages — layout, colors, typography, animations, and responsive design using Flexbox, Grid, and media queries.',
        resources: [
            { type: 'article', title: 'Learn CSS (web.dev)', url: 'https://web.dev/learn/css/' },
            { type: 'video', title: 'CSS Full Course', url: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc' },
            { type: 'official', title: 'CSS Reference (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference' },
        ],
    },
    tailwind: {
        id: 'tailwind',
        title: 'Tailwind CSS',
        description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs without writing custom CSS.',
        resources: [
            { type: 'official', title: 'Tailwind CSS Documentation', url: 'https://tailwindcss.com/docs' },
            { type: 'video', title: 'Tailwind CSS Full Course', url: 'https://www.youtube.com/watch?v=lCxcTsOHrjo' },
        ],
    },

    // ── JavaScript ──
    javascript: {
        id: 'javascript',
        title: 'JavaScript',
        description: 'JavaScript is the language of the web — used on both frontend and backend. Learn the fundamentals: variables, functions, async/await, DOM manipulation, and ES6+ features.',
        resources: [
            { type: 'roadmap', title: 'Visit the JavaScript Roadmap', url: 'https://roadmap.sh/javascript' },
            { type: 'official', title: 'The Modern JavaScript Tutorial', url: 'https://javascript.info/' },
            { type: 'video', title: 'JavaScript Full Course', url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg' },
        ],
    },
    typescript: {
        id: 'typescript',
        title: 'TypeScript',
        description: 'TypeScript adds static typing to JavaScript, catching errors at compile time. Used extensively in modern full stack development with React, Next.js, and Node.js.',
        resources: [
            { type: 'roadmap', title: 'Visit the TypeScript Roadmap', url: 'https://roadmap.sh/typescript' },
            { type: 'official', title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/' },
            { type: 'video', title: 'TypeScript Full Course', url: 'https://www.youtube.com/watch?v=30LWjhZzg50' },
        ],
    },

    // ── Frontend Frameworks ──
    react: {
        id: 'react',
        title: 'React',
        description: 'React is the most popular frontend library, maintained by Meta. Component-based architecture, hooks, virtual DOM, and a massive ecosystem.',
        resources: [
            { type: 'roadmap', title: 'Visit the React Roadmap', url: 'https://roadmap.sh/react' },
            { type: 'official', title: 'React Official Tutorial', url: 'https://react.dev/learn' },
            { type: 'video', title: 'React Full Course 2024', url: 'https://www.youtube.com/watch?v=CgkZ7MvWUAA' },
        ],
    },
    vuejs: {
        id: 'vuejs',
        title: 'Vue.js',
        description: 'Vue.js is a progressive framework for building UIs. Easy to learn, incrementally adoptable, with great documentation and an active community.',
        resources: [
            { type: 'official', title: 'Vue.js Documentation', url: 'https://vuejs.org/guide/introduction.html' },
            { type: 'video', title: 'Vue.js Course', url: 'https://www.youtube.com/watch?v=FXpIoQ_rT_c' },
        ],
    },
    angular: {
        id: 'angular',
        title: 'Angular',
        description: 'Angular is a comprehensive TypeScript-based framework by Google. Includes routing, forms, HTTP client, and testing out of the box.',
        resources: [
            { type: 'official', title: 'Angular Documentation', url: 'https://angular.dev/' },
        ],
    },

    // ── Backend with Node.js ──
    nodejs: {
        id: 'nodejs',
        title: 'Node.js',
        description: 'Node.js runs JavaScript on the server. Event-driven, non-blocking I/O makes it ideal for data-intensive real-time applications. The foundation of full stack JS development.',
        resources: [
            { type: 'roadmap', title: 'Visit the Node.js Roadmap', url: 'https://roadmap.sh/nodejs' },
            { type: 'official', title: 'Node.js Documentation', url: 'https://nodejs.org/en/docs/' },
            { type: 'video', title: 'Node.js Full Course', url: 'https://www.youtube.com/watch?v=Oe421EPjeBE' },
        ],
    },
    express: {
        id: 'express',
        title: 'Express.js',
        description: 'Express is the most popular Node.js web framework. Minimal, flexible, and provides a robust set of features for web and mobile applications, including routing and middleware.',
        resources: [
            { type: 'official', title: 'Express.js Documentation', url: 'https://expressjs.com/' },
            { type: 'video', title: 'Express.js Crash Course', url: 'https://www.youtube.com/watch?v=SccSCuHhOw0' },
        ],
    },
    nestjs: {
        id: 'nestjs',
        title: 'NestJS',
        description: 'NestJS is a progressive Node.js framework built with TypeScript. Uses decorators, modules, and dependency injection. Inspired by Angular\'s architecture.',
        resources: [
            { type: 'official', title: 'NestJS Documentation', url: 'https://docs.nestjs.com/' },
            { type: 'video', title: 'NestJS Crash Course', url: 'https://www.youtube.com/watch?v=wqhNoDE6pb4' },
        ],
    },

    // ── Full Stack Frameworks ──
    nextjs: {
        id: 'nextjs',
        title: 'Next.js',
        description: 'Next.js is the most popular React framework for full stack development. Server-side rendering, static generation, API routes, file-based routing, and edge functions.',
        resources: [
            { type: 'official', title: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
            { type: 'course', title: 'Next.js Learn Course', url: 'https://nextjs.org/learn' },
            { type: 'video', title: 'Next.js Full Course', url: 'https://www.youtube.com/watch?v=wm5gMKuwSYk' },
        ],
    },
    nuxtjs: {
        id: 'nuxtjs',
        title: 'Nuxt.js',
        description: 'Nuxt is the full stack framework for Vue.js. SSR, static generation, auto-imports, file-based routing, and a powerful module ecosystem.',
        resources: [
            { type: 'official', title: 'Nuxt.js Documentation', url: 'https://nuxt.com/docs' },
        ],
    },
    remix: {
        id: 'remix',
        title: 'Remix',
        description: 'Remix is a full stack web framework focused on web standards and modern UX. Nested routing, progressive enhancement, and server-side focus.',
        resources: [
            { type: 'official', title: 'Remix Documentation', url: 'https://remix.run/docs/en/main' },
        ],
    },

    // ── Databases ──
    postgresql: {
        id: 'postgresql',
        title: 'PostgreSQL',
        description: 'PostgreSQL is the most advanced open-source relational database. Supports JSON, full-text search, GIS, and robust query capabilities. The top choice for full stack apps.',
        resources: [
            { type: 'official', title: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/' },
            { type: 'video', title: 'PostgreSQL Full Course', url: 'https://www.youtube.com/watch?v=qw--VYLpxG4' },
        ],
    },
    mysql: {
        id: 'mysql',
        title: 'MySQL',
        description: 'MySQL is the most popular open-source relational database, widely used in LAMP stacks and web applications.',
        resources: [
            { type: 'official', title: 'MySQL Documentation', url: 'https://dev.mysql.com/doc/' },
        ],
    },
    mongodb: {
        id: 'mongodb',
        title: 'MongoDB',
        description: 'MongoDB is a document-oriented NoSQL database. Flexible schema, JSON-like documents, and the M in MERN/MEAN stack.',
        resources: [
            { type: 'official', title: 'MongoDB University', url: 'https://university.mongodb.com/' },
            { type: 'video', title: 'MongoDB Crash Course', url: 'https://www.youtube.com/watch?v=-56x56UppqQ' },
        ],
    },
    redis: {
        id: 'redis',
        title: 'Redis',
        description: 'Redis is an in-memory data store for caching, session management, real-time analytics, and pub/sub messaging.',
        resources: [
            { type: 'official', title: 'Redis Documentation', url: 'https://redis.io/docs/' },
        ],
    },

    // ── ORMs ──
    prisma: {
        id: 'prisma',
        title: 'Prisma',
        description: 'Prisma is a next-generation ORM for Node.js and TypeScript. Type-safe database access, auto-generated queries, migrations, and a visual database browser.',
        resources: [
            { type: 'official', title: 'Prisma Documentation', url: 'https://www.prisma.io/docs' },
            { type: 'video', title: 'Prisma Crash Course', url: 'https://www.youtube.com/watch?v=RebA5J-rlwg' },
        ],
    },
    drizzle: {
        id: 'drizzle',
        title: 'Drizzle ORM',
        description: 'Drizzle is a lightweight TypeScript ORM with SQL-like syntax. Zero dependencies, type-safe, and excellent for serverless environments.',
        resources: [
            { type: 'official', title: 'Drizzle ORM Documentation', url: 'https://orm.drizzle.team/' },
        ],
    },
    mongoose: {
        id: 'mongoose',
        title: 'Mongoose',
        description: 'Mongoose is the most popular MongoDB ODM for Node.js. Provides schema validation, middleware, population, and query building.',
        resources: [
            { type: 'official', title: 'Mongoose Documentation', url: 'https://mongoosejs.com/docs/' },
        ],
    },

    // ── APIs ──
    'rest-api': {
        id: 'rest-api',
        title: 'REST APIs',
        description: 'REST (Representational State Transfer) is the most common API architecture style. Uses HTTP methods, status codes, and resource-based URLs.',
        resources: [
            { type: 'article', title: 'REST API Design Best Practices', url: 'https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/' },
            { type: 'video', title: 'RESTful APIs in 100 Seconds', url: 'https://www.youtube.com/watch?v=-MTSQjw5DrM' },
        ],
    },
    graphql: {
        id: 'graphql',
        title: 'GraphQL',
        description: 'GraphQL lets clients request exactly the data they need. Great for complex UIs with many data relationships. Used with Apollo Client/Server.',
        resources: [
            { type: 'official', title: 'GraphQL Documentation', url: 'https://graphql.org/learn/' },
            { type: 'course', title: 'How to GraphQL', url: 'https://www.howtographql.com/' },
        ],
    },
    trpc: {
        id: 'trpc',
        title: 'tRPC',
        description: 'tRPC enables end-to-end typesafe APIs without code generation. Share types between frontend and backend in TypeScript monorepos.',
        resources: [
            { type: 'official', title: 'tRPC Documentation', url: 'https://trpc.io/docs' },
            { type: 'video', title: 'tRPC Tutorial', url: 'https://www.youtube.com/watch?v=UfUbBWiYYQs' },
        ],
    },

    // ── Auth ──
    authentication: {
        id: 'authentication',
        title: 'Authentication',
        description: 'Full stack authentication covers JWT, session-based auth, OAuth, social login, and multi-factor authentication. Libraries like NextAuth.js simplify implementation.',
        resources: [
            { type: 'article', title: 'Session vs Token Auth', url: 'https://roadmap.sh/guides/session-authentication' },
            { type: 'video', title: 'Authentication Methods Explained', url: 'https://www.youtube.com/watch?v=2PPSXonhIck' },
        ],
    },
    nextauth: {
        id: 'nextauth',
        title: 'NextAuth.js / Auth.js',
        description: 'NextAuth.js (now Auth.js) is the go-to authentication library for Next.js. Supports OAuth, credentials, magic links, and multiple databases.',
        resources: [
            { type: 'official', title: 'Auth.js Documentation', url: 'https://authjs.dev/' },
        ],
    },
    clerk: {
        id: 'clerk',
        title: 'Clerk',
        description: 'Clerk provides drop-in authentication and user management for React and Next.js apps with pre-built UI components.',
        resources: [
            { type: 'official', title: 'Clerk Documentation', url: 'https://clerk.com/docs' },
        ],
    },

    // ── DevOps ──
    docker: {
        id: 'docker',
        title: 'Docker',
        description: 'Docker packages applications into portable containers. Essential for consistent development environments and deployment.',
        resources: [
            { type: 'official', title: 'Docker Documentation', url: 'https://docs.docker.com/' },
            { type: 'video', title: 'Docker in 100 Seconds', url: 'https://www.youtube.com/watch?v=Gjnup-PuquQ' },
        ],
    },
    cicd: {
        id: 'cicd',
        title: 'CI/CD',
        description: 'Continuous Integration and Deployment automates testing and deploying your full stack application. Use GitHub Actions, Vercel, or railway for automated pipelines.',
        resources: [
            { type: 'article', title: 'CI/CD Explained', url: 'https://www.redhat.com/en/topics/devops/what-is-ci-cd' },
        ],
    },
    git: {
        id: 'git',
        title: 'Git',
        description: 'Git is essential for version control. Learn branching strategies, merge vs rebase, trunk-based development, and conventional commits.',
        resources: [
            { type: 'official', title: 'Git Documentation', url: 'https://git-scm.com/doc' },
            { type: 'course', title: 'Learn Git Branching', url: 'https://learngitbranching.js.org/' },
        ],
    },

    // ── Deployment ──
    vercel: {
        id: 'vercel',
        title: 'Vercel',
        description: 'Vercel is the optimal platform for deploying Next.js apps. Zero-config deployments, edge functions, serverless, and preview deployments for every PR.',
        resources: [
            { type: 'official', title: 'Vercel Documentation', url: 'https://vercel.com/docs' },
        ],
    },
    aws: {
        id: 'aws',
        title: 'AWS',
        description: 'Amazon Web Services is the largest cloud platform. Key services for full stack: EC2, S3, Lambda, RDS, CloudFront, and Amplify.',
        resources: [
            { type: 'official', title: 'AWS Documentation', url: 'https://docs.aws.amazon.com/' },
            { type: 'video', title: 'AWS for Beginners', url: 'https://www.youtube.com/watch?v=k1RI5locZE4' },
        ],
    },
    railway: {
        id: 'railway',
        title: 'Railway',
        description: 'Railway provides instant deployments for web apps, databases, and cron jobs. Great for full stack apps with built-in PostgreSQL and Redis support.',
        resources: [
            { type: 'official', title: 'Railway Documentation', url: 'https://docs.railway.app/' },
        ],
    },

    // ── Testing ──
    testing: {
        id: 'testing',
        title: 'Testing',
        description: 'Full stack testing covers unit tests (Jest, Vitest), integration tests (Supertest), and E2E tests (Playwright, Cypress). Test both frontend components and API endpoints.',
        resources: [
            { type: 'article', title: 'Testing JavaScript (Kent C. Dodds)', url: 'https://testingjavascript.com/' },
            { type: 'video', title: 'Testing Full Tutorial', url: 'https://www.youtube.com/watch?v=u6QfIXgjwGQ' },
        ],
    },
    vitest: {
        id: 'vitest',
        title: 'Vitest',
        description: 'Vitest is a Vite-native testing framework. Jest-compatible API, native ESM support, and built-in TypeScript support.',
        resources: [
            { type: 'official', title: 'Vitest Documentation', url: 'https://vitest.dev/' },
        ],
    },
    playwright: {
        id: 'playwright',
        title: 'Playwright',
        description: 'Playwright is the best E2E testing framework for full stack apps. Cross-browser, auto-waiting, and supports testing both frontend and API endpoints.',
        resources: [
            { type: 'official', title: 'Playwright Documentation', url: 'https://playwright.dev/' },
        ],
    },

    // ── Web Security ──
    'web-security': {
        id: 'web-security',
        title: 'Web Security',
        description: 'Full stack security: XSS prevention, CSRF tokens, SQL injection, rate limiting, CORS, CSP headers, input validation, and OWASP Top 10.',
        resources: [
            { type: 'article', title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
            { type: 'article', title: 'Web Security Basics (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/Security' },
        ],
    },
};

// ─── Full Stack Sections ─────────────────────────────────────────
export const FULLSTACK_SECTIONS: RoadmapSection[] = [
    {
        id: 'internet',
        title: 'Internet Fundamentals',
        description: 'How the web works',
        leftTopics: [
            { id: 'http', title: 'HTTP / HTTPS' },
        ],
        rightTopics: [
            { id: 'dns', title: 'DNS' },
        ],
    },
    {
        id: 'html-css',
        title: 'HTML & CSS',
        description: 'The building blocks',
        leftTopics: [
            { id: 'html', title: 'HTML' },
            { id: 'css', title: 'CSS' },
        ],
        rightTopics: [
            { id: 'tailwind', title: 'Tailwind CSS' },
        ],
    },
    {
        id: 'javascript',
        title: 'JavaScript',
        leftTopics: [
            { id: 'typescript', title: 'TypeScript' },
        ],
    },
    {
        id: 'frontend-frameworks',
        title: 'Frontend Framework',
        description: 'Pick one',
        rightTopics: [
            { id: 'react', title: 'React' },
            { id: 'vuejs', title: 'Vue.js' },
            { id: 'angular', title: 'Angular' },
        ],
    },
    {
        id: 'backend-runtime',
        title: 'Backend Runtime',
        leftTopics: [
            { id: 'nodejs', title: 'Node.js' },
        ],
        rightTopics: [
            { id: 'express', title: 'Express.js' },
            { id: 'nestjs', title: 'NestJS' },
        ],
    },
    {
        id: 'fullstack-frameworks',
        title: 'Full Stack Framework',
        description: 'Recommended',
        leftTopics: [
            { id: 'nextjs', title: 'Next.js' },
            { id: 'nuxtjs', title: 'Nuxt.js' },
        ],
        rightTopics: [
            { id: 'remix', title: 'Remix' },
        ],
    },
    {
        id: 'databases',
        title: 'Databases',
        description: 'SQL & NoSQL',
        leftTopics: [
            { id: 'postgresql', title: 'PostgreSQL' },
            { id: 'mysql', title: 'MySQL' },
        ],
        rightTopics: [
            { id: 'mongodb', title: 'MongoDB' },
            { id: 'redis', title: 'Redis' },
        ],
    },
    {
        id: 'orms',
        title: 'ORMs / ODMs',
        leftTopics: [
            { id: 'prisma', title: 'Prisma' },
            { id: 'drizzle', title: 'Drizzle ORM' },
        ],
        rightTopics: [
            { id: 'mongoose', title: 'Mongoose' },
        ],
    },
    {
        id: 'apis',
        title: 'APIs',
        leftTopics: [
            { id: 'rest-api', title: 'REST' },
            { id: 'graphql', title: 'GraphQL' },
        ],
        rightTopics: [
            { id: 'trpc', title: 'tRPC' },
        ],
    },
    {
        id: 'auth',
        title: 'Authentication',
        leftTopics: [
            { id: 'authentication', title: 'Auth Strategies' },
        ],
        rightTopics: [
            { id: 'nextauth', title: 'NextAuth / Auth.js' },
            { id: 'clerk', title: 'Clerk' },
        ],
    },
    {
        id: 'version-control',
        title: 'Version Control',
        rightTopics: [
            { id: 'git', title: 'Git' },
        ],
    },
    {
        id: 'testing-section',
        title: 'Testing',
        leftTopics: [
            { id: 'testing', title: 'Testing Basics' },
            { id: 'vitest', title: 'Vitest' },
        ],
        rightTopics: [
            { id: 'playwright', title: 'Playwright' },
        ],
    },
    {
        id: 'devops',
        title: 'DevOps',
        leftTopics: [
            { id: 'docker', title: 'Docker' },
        ],
        rightTopics: [
            { id: 'cicd', title: 'CI/CD' },
        ],
    },
    {
        id: 'deployment',
        title: 'Deployment',
        description: 'Ship it!',
        leftTopics: [
            { id: 'vercel', title: 'Vercel' },
        ],
        rightTopics: [
            { id: 'aws', title: 'AWS' },
            { id: 'railway', title: 'Railway' },
        ],
    },
    {
        id: 'security',
        title: 'Web Security',
        rightTopics: [
            { id: 'web-security', title: 'Security Fundamentals' },
        ],
    },
];
