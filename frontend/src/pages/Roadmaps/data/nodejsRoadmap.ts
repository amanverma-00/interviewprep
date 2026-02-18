import type { Topic, RoadmapSection } from './frontendRoadmap';

export const NODEJS_TOPICS: Record<string, Topic> = {
    // ── Fundamentals ──
    'node-basics': {
        id: 'node-basics',
        title: 'Node.js Basics',
        description: 'Node.js is a JavaScript runtime built on V8. Non-blocking I/O, single-threaded event loop, and the npm ecosystem. Server-side JavaScript.',
        resources: [
            { type: 'official', title: 'Node.js Documentation', url: 'https://nodejs.org/docs/latest/api/' },
            { type: 'video', title: 'Node.js Full Course', url: 'https://www.youtube.com/watch?v=Oe421EPjeBE' },
        ],
    },
    'event-loop-node': {
        id: 'event-loop-node',
        title: 'Event Loop',
        description: 'Node.js event loop phases: timers, pending callbacks, poll, check, close. process.nextTick vs setImmediate, and microtask queue.',
        resources: [
            { type: 'official', title: 'Event Loop (Node.js)', url: 'https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick' },
        ],
    },
    'modules-node': {
        id: 'modules-node',
        title: 'Modules',
        description: 'CommonJS (require/module.exports), ES Modules (import/export), built-in modules (fs, path, os, url), and module resolution.',
        resources: [
            { type: 'official', title: 'Modules', url: 'https://nodejs.org/api/modules.html' },
        ],
    },

    // ── Core Modules ──
    'fs-path': {
        id: 'fs-path',
        title: 'File System & Path',
        description: 'fs module for file operations (read, write, watch, stream). path module for cross-platform path manipulation. Sync vs async APIs.',
        resources: [
            { type: 'official', title: 'File System', url: 'https://nodejs.org/api/fs.html' },
        ],
    },
    'streams': {
        id: 'streams',
        title: 'Streams & Buffers',
        description: 'Readable, Writable, Transform, Duplex streams. Piping, backpressure, Buffer for binary data, and streaming large files.',
        resources: [
            { type: 'official', title: 'Streams', url: 'https://nodejs.org/api/stream.html' },
            { type: 'article', title: 'Node Streams Guide', url: 'https://nodejs.org/en/learn/modules/backpressuring-in-streams' },
        ],
    },
    'events-node': {
        id: 'events-node',
        title: 'Events & EventEmitter',
        description: 'EventEmitter class, emitting and listening to custom events, error events, and building event-driven architectures.',
        resources: [
            { type: 'official', title: 'Events', url: 'https://nodejs.org/api/events.html' },
        ],
    },

    // ── HTTP & Web ──
    'http-node': {
        id: 'http-node',
        title: 'HTTP Module',
        description: 'Built-in http/https modules for creating servers. Request/response objects, headers, status codes, and building APIs from scratch.',
        resources: [
            { type: 'official', title: 'HTTP', url: 'https://nodejs.org/api/http.html' },
        ],
    },
    'express': {
        id: 'express',
        title: 'Express.js',
        description: 'The most popular Node.js web framework. Routing, middleware, request/response handling, template engines, and error handling.',
        resources: [
            { type: 'official', title: 'Express Documentation', url: 'https://expressjs.com/' },
            { type: 'video', title: 'Express Full Course', url: 'https://www.youtube.com/watch?v=SccSCuHhOw0' },
        ],
    },
    'fastify': {
        id: 'fastify',
        title: 'Fastify',
        description: 'High-performance Node.js framework. Schema-based validation, plugin system, TypeScript support, and up to 2x faster than Express.',
        resources: [
            { type: 'official', title: 'Fastify', url: 'https://fastify.dev/' },
        ],
    },
    'nestjs': {
        id: 'nestjs',
        title: 'NestJS',
        description: 'Enterprise-grade framework with Angular-like architecture. Decorators, modules, dependency injection, guards, interceptors, and GraphQL support.',
        resources: [
            { type: 'official', title: 'NestJS Documentation', url: 'https://docs.nestjs.com/' },
        ],
    },

    // ── Async ──
    'async-node': {
        id: 'async-node',
        title: 'Async Patterns',
        description: 'Callbacks, Promises, async/await in Node.js. util.promisify, Promise.all for parallelism, and error handling best practices.',
        resources: [
            { type: 'official', title: 'Async Patterns', url: 'https://nodejs.org/en/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks' },
        ],
    },

    // ── Databases ──
    'databases-node': {
        id: 'databases-node',
        title: 'Database Integration',
        description: 'Connecting to PostgreSQL (pg), MongoDB (mongoose), MySQL, Redis, and SQLite. Connection pooling and query building.',
        resources: [
            { type: 'official', title: 'pg (node-postgres)', url: 'https://node-postgres.com/' },
            { type: 'official', title: 'Mongoose', url: 'https://mongoosejs.com/' },
        ],
    },
    'prisma': {
        id: 'prisma',
        title: 'Prisma ORM',
        description: 'Type-safe ORM for Node.js. Schema-first, auto-generated client, migrations, and relations. The modern ORM choice.',
        resources: [
            { type: 'official', title: 'Prisma Documentation', url: 'https://www.prisma.io/docs' },
        ],
    },

    // ── Auth ──
    'auth-node': {
        id: 'auth-node',
        title: 'Authentication & Authorization',
        description: 'JWT tokens, session-based auth, OAuth2, bcrypt for hashing, Passport.js, and role-based access control (RBAC).',
        resources: [
            { type: 'official', title: 'Passport.js', url: 'https://www.passportjs.org/' },
        ],
    },

    // ── APIs ──
    'rest-apis': {
        id: 'rest-apis',
        title: 'REST APIs',
        description: 'RESTful API design: HTTP methods, status codes, CRUD operations, pagination, filtering, validation (Zod/Joi), and API versioning.',
        resources: [
            { type: 'article', title: 'REST API Best Practices', url: 'https://restfulapi.net/' },
        ],
    },
    'graphql-node': {
        id: 'graphql-node',
        title: 'GraphQL',
        description: 'GraphQL with Apollo Server or Yoga. Schema definition, resolvers, mutations, subscriptions, and DataLoader for N+1 prevention.',
        resources: [
            { type: 'official', title: 'Apollo Server', url: 'https://www.apollographql.com/docs/apollo-server/' },
        ],
    },
    'websockets': {
        id: 'websockets',
        title: 'WebSockets',
        description: 'Real-time communication with WebSockets. Socket.io for rooms, namespaces, and broadcasting. ws library for raw WebSocket.',
        resources: [
            { type: 'official', title: 'Socket.io', url: 'https://socket.io/' },
        ],
    },

    // ── Testing ──
    'testing-node': {
        id: 'testing-node',
        title: 'Testing',
        description: 'Jest or Vitest for unit testing, Supertest for API testing, integration testing patterns, mocking, and test coverage.',
        resources: [
            { type: 'official', title: 'Jest', url: 'https://jestjs.io/' },
            { type: 'official', title: 'Vitest', url: 'https://vitest.dev/' },
        ],
    },

    // ── Performance ──
    'performance-node': {
        id: 'performance-node',
        title: 'Performance',
        description: 'Worker threads, cluster module, child processes, caching (Redis), connection pooling, profiling, and memory leak detection.',
        resources: [
            { type: 'official', title: 'Worker Threads', url: 'https://nodejs.org/api/worker_threads.html' },
        ],
    },

    // ── Security ──
    'security-node': {
        id: 'security-node',
        title: 'Security',
        description: 'Helmet.js for headers, CORS, rate limiting, input sanitization, SQL injection prevention, XSS protection, and OWASP best practices.',
        resources: [
            { type: 'official', title: 'Helmet.js', url: 'https://helmetjs.github.io/' },
        ],
    },

    // ── Package Management ──
    'npm': {
        id: 'npm',
        title: 'npm & Package Management',
        description: 'npm, yarn, pnpm. package.json, lock files, semantic versioning, scripts, workspaces, and publishing packages.',
        resources: [
            { type: 'official', title: 'npm Documentation', url: 'https://docs.npmjs.com/' },
        ],
    },
};

export const NODEJS_SECTIONS: RoadmapSection[] = [
    {
        id: 'fundamentals',
        title: 'Fundamentals',
        leftTopics: [
            { id: 'node-basics', title: 'Node.js Basics' },
            { id: 'event-loop-node', title: 'Event Loop' },
        ],
        rightTopics: [{ id: 'modules-node', title: 'Modules' }],
    },
    {
        id: 'core',
        title: 'Core Modules',
        leftTopics: [
            { id: 'fs-path', title: 'File System & Path' },
            { id: 'streams', title: 'Streams & Buffers' },
        ],
        rightTopics: [{ id: 'events-node', title: 'EventEmitter' }],
    },
    {
        id: 'http',
        title: 'HTTP & Frameworks',
        description: 'Pick your framework',
        leftTopics: [
            { id: 'http-node', title: 'HTTP Module' },
            { id: 'express', title: 'Express.js' },
        ],
        rightTopics: [
            { id: 'fastify', title: 'Fastify' },
            { id: 'nestjs', title: 'NestJS' },
        ],
    },
    {
        id: 'async',
        title: 'Async Patterns',
        rightTopics: [{ id: 'async-node', title: 'Callbacks / Promises / async-await' }],
    },
    {
        id: 'databases',
        title: 'Databases',
        leftTopics: [{ id: 'databases-node', title: 'Database Drivers' }],
        rightTopics: [{ id: 'prisma', title: 'Prisma ORM' }],
    },
    {
        id: 'auth',
        title: 'Authentication',
        rightTopics: [{ id: 'auth-node', title: 'Auth (JWT / OAuth / Passport)' }],
    },
    {
        id: 'apis',
        title: 'API Design',
        leftTopics: [
            { id: 'rest-apis', title: 'REST APIs' },
            { id: 'graphql-node', title: 'GraphQL' },
        ],
        rightTopics: [{ id: 'websockets', title: 'WebSockets' }],
    },
    {
        id: 'testing',
        title: 'Testing',
        rightTopics: [{ id: 'testing-node', title: 'Jest / Vitest / Supertest' }],
    },
    {
        id: 'perf-security',
        title: 'Performance & Security',
        leftTopics: [{ id: 'performance-node', title: 'Performance' }],
        rightTopics: [{ id: 'security-node', title: 'Security' }],
    },
    {
        id: 'packages',
        title: 'Package Management',
        rightTopics: [{ id: 'npm', title: 'npm / yarn / pnpm' }],
    },
];
