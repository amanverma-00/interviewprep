import type { Topic, RoadmapSection } from './frontendRoadmap';

// ─── Backend Topics ──────────────────────────────────────────────
export const BACKEND_TOPICS: Record<string, Topic> = {
    // ── Internet ──
    internet: {
        id: 'internet',
        title: 'Internet',
        description: 'The Internet is a global network of computers connected to each other which communicate through a set of standardized protocols.',
        resources: [
            { type: 'article', title: 'How Does the Internet Work?', url: 'https://cs.fyi/guide/how-does-internet-work' },
            { type: 'video', title: 'How the Internet Works in 5 Minutes', url: 'https://www.youtube.com/watch?v=7_LPdttKXPc' },
        ],
    },
    'what-is-http': {
        id: 'what-is-http',
        title: 'What is HTTP?',
        description: 'HTTP is an application-layer protocol for transmitting hypermedia documents. It follows a client-server model where a client opens a connection, makes a request, and waits for a response.',
        resources: [
            { type: 'article', title: 'Everything you need to know about HTTP', url: 'https://cs.fyi/guide/http-in-depth' },
            { type: 'article', title: 'What is HTTP? (Cloudflare)', url: 'https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/' },
            { type: 'video', title: 'HTTP Crash Course', url: 'https://www.youtube.com/watch?v=iYM2zFP3Zn0' },
        ],
    },
    'domain-name': {
        id: 'domain-name',
        title: 'Domain Name',
        description: 'A domain name is a human-readable address used to access websites, mapped to IP addresses via DNS.',
        resources: [
            { type: 'article', title: 'What is a Domain Name? (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name' },
        ],
    },
    hosting: {
        id: 'hosting',
        title: 'Hosting',
        description: 'Web hosting makes your website accessible on the internet. Understanding different hosting types (shared, VPS, dedicated, cloud) is essential for backend developers.',
        resources: [
            { type: 'video', title: 'What Is Web Hosting?', url: 'https://www.youtube.com/watch?v=htbY9-yggB0' },
        ],
    },
    dns: {
        id: 'dns',
        title: 'DNS',
        description: 'The Domain Name System translates human-readable domain names into IP addresses. Understanding DNS is critical for backend engineering, debugging, and deployment.',
        resources: [
            { type: 'article', title: 'What is DNS? (Cloudflare)', url: 'https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/' },
            { type: 'official', title: 'How DNS Works (Comic)', url: 'https://howdns.works/' },
        ],
    },
    browsers: {
        id: 'browsers',
        title: 'Browsers',
        description: 'Understanding how browsers work helps backend developers optimize response delivery, caching headers, and content negotiation.',
        resources: [
            { type: 'article', title: 'How Browsers Work (web.dev)', url: 'https://web.dev/howbrowserswork/' },
        ],
    },

    // ── Languages ──
    javascript: {
        id: 'javascript',
        title: 'JavaScript',
        description: 'JavaScript with Node.js enables server-side development. It\'s event-driven, non-blocking, and ideal for I/O-heavy applications like APIs and real-time apps.',
        resources: [
            { type: 'official', title: 'The Modern JavaScript Tutorial', url: 'https://javascript.info/' },
            { type: 'video', title: 'JavaScript Full Course', url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg' },
            { type: 'roadmap', title: 'Visit the JavaScript Roadmap', url: 'https://roadmap.sh/javascript' },
        ],
    },
    python: {
        id: 'python',
        title: 'Python',
        description: 'Python is a versatile language used for web development (Django, Flask, FastAPI), data science, automation, and scripting. Known for readability and a vast ecosystem.',
        resources: [
            { type: 'roadmap', title: 'Visit the Python Roadmap', url: 'https://roadmap.sh/python' },
            { type: 'official', title: 'Python Documentation', url: 'https://docs.python.org/3/' },
            { type: 'video', title: 'Python Full Course for Beginners', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
        ],
    },
    java: {
        id: 'java',
        title: 'Java',
        description: 'Java is a robust, object-oriented language powering enterprise backends with Spring Boot. Known for strong typing, JVM performance, and massive enterprise adoption.',
        resources: [
            { type: 'roadmap', title: 'Visit the Java Roadmap', url: 'https://roadmap.sh/java' },
            { type: 'video', title: 'Java Full Course', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' },
        ],
    },
    go: {
        id: 'go',
        title: 'Go',
        description: 'Go (Golang) is a statically typed, compiled language designed by Google. Known for simplicity, built-in concurrency (goroutines), and fast compilation. Ideal for microservices and CLI tools.',
        resources: [
            { type: 'official', title: 'Go Tour', url: 'https://go.dev/tour/' },
            { type: 'video', title: 'Go Full Course', url: 'https://www.youtube.com/watch?v=un6ZyFkqFKo' },
        ],
    },
    rust: {
        id: 'rust',
        title: 'Rust',
        description: 'Rust is a systems programming language focused on safety, speed, and concurrency. No garbage collector, zero-cost abstractions, and memory safety guaranteed at compile time.',
        resources: [
            { type: 'official', title: 'The Rust Book', url: 'https://doc.rust-lang.org/book/' },
            { type: 'video', title: 'Rust in 100 Seconds', url: 'https://www.youtube.com/watch?v=5C_HPTJg5ek' },
        ],
    },
    csharp: {
        id: 'csharp',
        title: 'C#',
        description: 'C# is a modern, object-oriented language by Microsoft. Used with ASP.NET Core for high-performance web APIs, microservices, and enterprise applications.',
        resources: [
            { type: 'official', title: 'C# Documentation', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
            { type: 'video', title: 'C# Full Course', url: 'https://www.youtube.com/watch?v=GhQdlMFylQ8' },
        ],
    },

    // ── Version Control ──
    git: {
        id: 'git',
        title: 'Git',
        description: 'Git is a distributed version control system. Essential for tracking changes, collaborating, branching, and maintaining project history.',
        resources: [
            { type: 'official', title: 'Git Documentation', url: 'https://git-scm.com/doc' },
            { type: 'course', title: 'Learn Git Branching', url: 'https://learngitbranching.js.org/' },
            { type: 'video', title: 'Git Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=8JJ101D3knE' },
        ],
    },
    github: {
        id: 'github',
        title: 'GitHub',
        description: 'GitHub is the largest platform for hosting Git repositories with collaboration features like pull requests, issues, actions, and code review.',
        resources: [
            { type: 'official', title: 'GitHub Skills', url: 'https://skills.github.com/' },
        ],
    },

    // ── OS & General Knowledge ──
    'os-general': {
        id: 'os-general',
        title: 'OS and General Knowledge',
        description: 'Understanding operating system concepts like processes, threads, memory management, I/O, and networking is fundamental for backend development.',
        resources: [
            { type: 'video', title: 'Operating System Concepts', url: 'https://www.youtube.com/watch?v=vBURTt97EkA' },
            { type: 'article', title: 'Linux Journey', url: 'https://linuxjourney.com/' },
        ],
    },
    'terminal-usage': {
        id: 'terminal-usage',
        title: 'Terminal Usage',
        description: 'Proficiency with the command line is essential for backend developers. Learn shell commands, scripting, file manipulation, and process management.',
        resources: [
            { type: 'course', title: 'The Linux Command Line', url: 'https://www.gnu.org/software/bash/manual/bash.html' },
            { type: 'video', title: 'Linux Command Line Tutorial', url: 'https://www.youtube.com/watch?v=ZtqBQ68cfJc' },
        ],
    },
    'process-management': {
        id: 'process-management',
        title: 'Process Management',
        description: 'Understanding how processes work, including creation, scheduling, inter-process communication, and signals is key to backend development.',
        resources: [
            { type: 'article', title: 'Process Management in Linux', url: 'https://tldp.org/LDP/intro-linux/html/chap_04.html' },
        ],
    },
    threads: {
        id: 'threads',
        title: 'Threads and Concurrency',
        description: 'Threads enable parallel execution within a single process. Understanding threading, locks, race conditions, and deadlocks is critical for high-performance backends.',
        resources: [
            { type: 'article', title: 'Concurrency vs Parallelism', url: 'https://blog.golang.org/waza-talk' },
            { type: 'video', title: 'Threading Explained', url: 'https://www.youtube.com/watch?v=7ENFeb-J75k' },
        ],
    },
    'memory-management': {
        id: 'memory-management',
        title: 'Memory Management',
        description: 'Understanding memory allocation, garbage collection, stack vs heap, memory leaks, and optimization helps build efficient backend services.',
        resources: [
            { type: 'article', title: 'Memory Management (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management' },
        ],
    },
    networking: {
        id: 'networking',
        title: 'Networking Concepts',
        description: 'TCP/IP, UDP, sockets, ports, HTTP/2, WebSockets, and other networking fundamentals every backend developer must understand.',
        resources: [
            { type: 'video', title: 'Computer Networking Full Course', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw' },
            { type: 'article', title: 'Networking 101', url: 'https://iximiuz.com/en/posts/computer-networking-101/' },
        ],
    },

    // ── Databases ──
    postgresql: {
        id: 'postgresql',
        title: 'PostgreSQL',
        description: 'PostgreSQL is the most advanced open-source relational database. It supports JSON, full-text search, GIS data, and complex queries with excellent performance.',
        resources: [
            { type: 'official', title: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/' },
            { type: 'video', title: 'PostgreSQL Full Course', url: 'https://www.youtube.com/watch?v=qw--VYLpxG4' },
        ],
    },
    mysql: {
        id: 'mysql',
        title: 'MySQL',
        description: 'MySQL is the world\'s most popular open-source relational database. Known for simplicity, speed, and reliability in web applications.',
        resources: [
            { type: 'official', title: 'MySQL Documentation', url: 'https://dev.mysql.com/doc/' },
            { type: 'video', title: 'MySQL Course for Beginners', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA' },
        ],
    },
    mongodb: {
        id: 'mongodb',
        title: 'MongoDB',
        description: 'MongoDB is a document-oriented NoSQL database that stores data in flexible JSON-like documents. Great for rapid prototyping and schema-less data.',
        resources: [
            { type: 'official', title: 'MongoDB University', url: 'https://university.mongodb.com/' },
            { type: 'video', title: 'MongoDB Crash Course', url: 'https://www.youtube.com/watch?v=-56x56UppqQ' },
        ],
    },
    redis: {
        id: 'redis',
        title: 'Redis',
        description: 'Redis is an in-memory data structure store used as a database, cache, and message broker. Supports strings, lists, sets, hashes, sorted sets, and pub/sub.',
        resources: [
            { type: 'official', title: 'Redis Documentation', url: 'https://redis.io/docs/' },
            { type: 'video', title: 'Redis Crash Course', url: 'https://www.youtube.com/watch?v=jgpVdJB2sKQ' },
        ],
    },

    // ── APIs ──
    'rest-api': {
        id: 'rest-api',
        title: 'REST APIs',
        description: 'REST (Representational State Transfer) is the most common API architecture. It uses standard HTTP methods (GET, POST, PUT, DELETE) and stateless communication.',
        resources: [
            { type: 'article', title: 'REST API Best Practices', url: 'https://restfulapi.net/' },
            { type: 'video', title: 'RESTful APIs in 100 Seconds', url: 'https://www.youtube.com/watch?v=-MTSQjw5DrM' },
            { type: 'article', title: 'REST API Design Best Practices', url: 'https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/' },
        ],
    },
    graphql: {
        id: 'graphql',
        title: 'GraphQL',
        description: 'GraphQL is a query language for APIs. Clients request exactly the data they need, reducing over-fetching and under-fetching of data.',
        resources: [
            { type: 'official', title: 'GraphQL Documentation', url: 'https://graphql.org/learn/' },
            { type: 'course', title: 'How to GraphQL', url: 'https://www.howtographql.com/' },
        ],
    },
    grpc: {
        id: 'grpc',
        title: 'gRPC',
        description: 'gRPC is a high-performance RPC framework using Protocol Buffers. Supports streaming, multiplexing, and is ideal for microservice communication.',
        resources: [
            { type: 'official', title: 'gRPC Documentation', url: 'https://grpc.io/docs/' },
            { type: 'video', title: 'gRPC Introduction', url: 'https://www.youtube.com/watch?v=gnchfOojMk4' },
        ],
    },
    'json-apis': {
        id: 'json-apis',
        title: 'JSON APIs',
        description: 'JSON API is a specification for building APIs in JSON, standardizing how clients and servers communicate, including pagination, filtering, and error responses.',
        resources: [
            { type: 'official', title: 'JSON:API Specification', url: 'https://jsonapi.org/' },
        ],
    },

    // ── Auth ──
    authentication: {
        id: 'authentication',
        title: 'Authentication',
        description: 'Authentication verifies user identity. Common strategies include JWT, OAuth 2.0, session-based auth, API keys, and multi-factor authentication.',
        resources: [
            { type: 'article', title: 'Authentication vs Authorization', url: 'https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization' },
            { type: 'article', title: 'Session vs Token Authentication', url: 'https://roadmap.sh/guides/session-authentication' },
            { type: 'video', title: 'Authentication Methods Explained', url: 'https://www.youtube.com/watch?v=2PPSXonhIck' },
        ],
    },
    jwt: {
        id: 'jwt',
        title: 'JWT',
        description: 'JSON Web Tokens are compact, URL-safe tokens for transmitting claims between parties. Used for stateless authentication in APIs.',
        resources: [
            { type: 'official', title: 'JWT.io', url: 'https://jwt.io/introduction/' },
        ],
    },
    oauth: {
        id: 'oauth',
        title: 'OAuth',
        description: 'OAuth 2.0 is an authorization framework that enables third-party applications to obtain limited access to user accounts without exposing credentials.',
        resources: [
            { type: 'article', title: 'OAuth 2.0 Simplified', url: 'https://aaronparecki.com/oauth-2-simplified/' },
            { type: 'video', title: 'OAuth 2.0 Explained', url: 'https://www.youtube.com/watch?v=ZV5yTm4pT8g' },
        ],
    },

    // ── Caching ──
    caching: {
        id: 'caching',
        title: 'Caching',
        description: 'Caching stores frequently accessed data in fast storage (memory) to reduce database load and improve response times. Strategies include CDN, server-side, client-side, and database caching.',
        resources: [
            { type: 'article', title: 'Caching Overview (AWS)', url: 'https://aws.amazon.com/caching/' },
            { type: 'video', title: 'Caching Explained', url: 'https://www.youtube.com/watch?v=6FyXURRVmR0' },
        ],
    },
    'cdn-caching': {
        id: 'cdn-caching',
        title: 'CDN',
        description: 'Content Delivery Networks cache content at edge locations globally, reducing latency and load on origin servers.',
        resources: [
            { type: 'article', title: 'What is a CDN? (Cloudflare)', url: 'https://www.cloudflare.com/en-gb/learning/cdn/what-is-a-cdn/' },
        ],
    },
    'server-side-caching': {
        id: 'server-side-caching',
        title: 'Server-Side Caching',
        description: 'Server-side caching stores computed results in Redis, Memcached, or in-memory stores to avoid redundant processing and database queries.',
        resources: [
            { type: 'article', title: 'Caching Strategies', url: 'https://codeahoy.com/2017/08/11/caching-strategies-and-how-to-choose-the-right-one/' },
        ],
    },

    // ── Web Security ──
    'web-security': {
        id: 'web-security',
        title: 'Web Security',
        description: 'Backend security includes HTTPS, CORS, CSRF protection, input validation, SQL injection prevention, rate limiting, and the OWASP Top 10.',
        resources: [
            { type: 'article', title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
            { type: 'video', title: 'Web Security Explained', url: 'https://www.youtube.com/watch?v=JnstGFDgGO0' },
        ],
    },
    hashing: {
        id: 'hashing',
        title: 'Hashing Algorithms',
        description: 'Hashing produces fixed-length output from input data. Used for password storage (bcrypt, argon2), data integrity, and digital signatures.',
        resources: [
            { type: 'article', title: 'Hashing in Action', url: 'https://auth0.com/blog/hashing-in-action-understanding-bcrypt/' },
        ],
    },

    // ── Testing ──
    'unit-testing': {
        id: 'unit-testing',
        title: 'Unit Testing',
        description: 'Unit tests verify individual functions or methods in isolation. Frameworks include Jest (JS), pytest (Python), JUnit (Java), and Go testing package.',
        resources: [
            { type: 'article', title: 'Unit Testing Best Practices', url: 'https://martinfowler.com/bliki/UnitTest.html' },
            { type: 'video', title: 'Unit Testing Tutorial', url: 'https://www.youtube.com/watch?v=Jv2uxzhPFl4' },
        ],
    },
    'integration-testing': {
        id: 'integration-testing',
        title: 'Integration Testing',
        description: 'Integration tests verify that multiple components work together correctly, including database interactions, API calls, and service communication.',
        resources: [
            { type: 'article', title: 'Integration Testing (Martin Fowler)', url: 'https://martinfowler.com/bliki/IntegrationTest.html' },
        ],
    },
    'functional-testing': {
        id: 'functional-testing',
        title: 'Functional Testing',
        description: 'Functional tests verify that the system behaves according to requirements, testing complete workflows end-to-end.',
        resources: [
            { type: 'article', title: 'Functional Testing Guide', url: 'https://www.guru99.com/functional-testing.html' },
        ],
    },

    // ── CI/CD ──
    cicd: {
        id: 'cicd',
        title: 'CI/CD',
        description: 'Continuous Integration and Continuous Deployment automates building, testing, and deploying code changes. Essential for modern development workflows.',
        resources: [
            { type: 'article', title: 'CI/CD Explained', url: 'https://www.redhat.com/en/topics/devops/what-is-ci-cd' },
            { type: 'video', title: 'DevOps CI/CD Explained', url: 'https://www.youtube.com/watch?v=scEDHsr3APg' },
        ],
    },
    'github-actions': {
        id: 'github-actions',
        title: 'GitHub Actions',
        description: 'GitHub Actions automates CI/CD workflows directly in GitHub repositories. Build, test, and deploy on every push, PR, or schedule.',
        resources: [
            { type: 'official', title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions' },
        ],
    },
    jenkins: {
        id: 'jenkins',
        title: 'Jenkins',
        description: 'Jenkins is an open-source automation server widely used for CI/CD pipelines. Highly extensible with thousands of plugins.',
        resources: [
            { type: 'official', title: 'Jenkins Documentation', url: 'https://www.jenkins.io/doc/' },
        ],
    },

    // ── Design & Architecture ──
    'design-patterns': {
        id: 'design-patterns',
        title: 'Design Patterns',
        description: 'Design patterns are reusable solutions to common software design problems. Key patterns include Singleton, Factory, Observer, Strategy, Repository, and Dependency Injection.',
        resources: [
            { type: 'official', title: 'Refactoring Guru - Design Patterns', url: 'https://refactoring.guru/design-patterns' },
            { type: 'video', title: '10 Design Patterns Explained', url: 'https://www.youtube.com/watch?v=tv-_1er1mWI' },
        ],
    },
    'domain-driven-design': {
        id: 'domain-driven-design',
        title: 'Domain-Driven Design',
        description: 'DDD is an approach to software development that focuses on modeling the domain and using ubiquitous language shared between developers and domain experts.',
        resources: [
            { type: 'article', title: 'DDD Introduction', url: 'https://martinfowler.com/bliki/DomainDrivenDesign.html' },
        ],
    },
    'test-driven-dev': {
        id: 'test-driven-dev',
        title: 'Test Driven Development',
        description: 'TDD is a development approach where tests are written before the implementation code. The cycle: Red (write failing test) → Green (make it pass) → Refactor.',
        resources: [
            { type: 'article', title: 'TDD by Example', url: 'https://martinfowler.com/bliki/TestDrivenDevelopment.html' },
        ],
    },

    // ── Architectural Patterns ──
    monolithic: {
        id: 'monolithic',
        title: 'Monolithic Apps',
        description: 'Monolithic architecture deploys the entire application as a single unit. Simpler to develop initially but harder to scale and maintain as the app grows.',
        resources: [
            { type: 'article', title: 'Monolithic vs Microservices', url: 'https://microservices.io/patterns/monolithic.html' },
        ],
    },
    microservices: {
        id: 'microservices',
        title: 'Microservices',
        description: 'Microservices architecture decomposes the application into small, independent services that communicate via APIs. Each service can be deployed, scaled, and maintained independently.',
        resources: [
            { type: 'article', title: 'Microservices (martinfowler.com)', url: 'https://martinfowler.com/articles/microservices.html' },
            { type: 'video', title: 'Microservices Explained', url: 'https://www.youtube.com/watch?v=rv4LlmLmVWk' },
        ],
    },
    soa: {
        id: 'soa',
        title: 'SOA',
        description: 'Service-Oriented Architecture organizes software as a collection of loosely coupled services. Each service provides a business capability and communicates via standard protocols.',
        resources: [
            { type: 'article', title: 'SOA vs Microservices', url: 'https://www.ibm.com/topics/soa' },
        ],
    },
    serverless: {
        id: 'serverless',
        title: 'Serverless',
        description: 'Serverless computing runs code without managing servers. Cloud providers handle infrastructure. You pay only for execution time. Examples: AWS Lambda, Vercel Functions.',
        resources: [
            { type: 'article', title: 'Serverless Computing (AWS)', url: 'https://aws.amazon.com/serverless/' },
            { type: 'video', title: 'Serverless in 100 Seconds', url: 'https://www.youtube.com/watch?v=W_VV2Fx32_Y' },
        ],
    },

    // ── Message Brokers ──
    rabbitmq: {
        id: 'rabbitmq',
        title: 'RabbitMQ',
        description: 'RabbitMQ is an open-source message broker implementing AMQP. It supports complex routing, message acknowledgment, and various exchange types.',
        resources: [
            { type: 'official', title: 'RabbitMQ Tutorials', url: 'https://www.rabbitmq.com/tutorials' },
        ],
    },
    kafka: {
        id: 'kafka',
        title: 'Kafka',
        description: 'Apache Kafka is a distributed event streaming platform for high-throughput, real-time data pipelines and streaming applications.',
        resources: [
            { type: 'official', title: 'Kafka Documentation', url: 'https://kafka.apache.org/documentation/' },
            { type: 'video', title: 'Kafka in 100 Seconds', url: 'https://www.youtube.com/watch?v=uvb00oaa3k8' },
        ],
    },

    // ── Containerization ──
    docker: {
        id: 'docker',
        title: 'Docker',
        description: 'Docker packages applications into containers — standardized, portable environments that include code, runtime, system tools, and libraries.',
        resources: [
            { type: 'official', title: 'Docker Documentation', url: 'https://docs.docker.com/' },
            { type: 'video', title: 'Docker in 100 Seconds', url: 'https://www.youtube.com/watch?v=Gjnup-PuquQ' },
            { type: 'course', title: 'Docker Crash Course', url: 'https://www.youtube.com/watch?v=pg19Z8LL06w' },
        ],
    },
    kubernetes: {
        id: 'kubernetes',
        title: 'Kubernetes',
        description: 'Kubernetes (K8s) is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.',
        resources: [
            { type: 'official', title: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/home/' },
            { type: 'video', title: 'Kubernetes in 100 Seconds', url: 'https://www.youtube.com/watch?v=PziYflu8cB8' },
        ],
    },

    // ── Web Servers ──
    nginx: {
        id: 'nginx',
        title: 'Nginx',
        description: 'Nginx is a high-performance web server, reverse proxy, load balancer, and HTTP cache. Handles millions of concurrent connections with low memory.',
        resources: [
            { type: 'official', title: 'Nginx Documentation', url: 'https://nginx.org/en/docs/' },
            { type: 'video', title: 'NGINX Explained', url: 'https://www.youtube.com/watch?v=7VAI73roXaY' },
        ],
    },
    apache: {
        id: 'apache',
        title: 'Apache',
        description: 'Apache HTTP Server is the most widely used web server. Highly configurable with modules for URL rewriting, SSL, authentication, and more.',
        resources: [
            { type: 'official', title: 'Apache Documentation', url: 'https://httpd.apache.org/docs/' },
        ],
    },

    // ── Scaling ──
    'scaling-strategies': {
        id: 'scaling-strategies',
        title: 'Scaling',
        description: 'Scaling strategies include horizontal scaling (more machines), vertical scaling (bigger machines), database replication, sharding, and load balancing.',
        resources: [
            { type: 'article', title: 'Scaling to 100K Users', url: 'https://alexpareto.com/scalability/systems/2020/02/03/scaling-100k.html' },
            { type: 'video', title: 'System Design: Scaling', url: 'https://www.youtube.com/watch?v=hnpzNAPiC0E' },
        ],
    },
    'load-balancing': {
        id: 'load-balancing',
        title: 'Load Balancing',
        description: 'Load balancers distribute incoming traffic across multiple servers to ensure high availability and reliability. Algorithms include round-robin, least connections, and IP hash.',
        resources: [
            { type: 'article', title: 'What is Load Balancing?', url: 'https://www.nginx.com/resources/glossary/load-balancing/' },
        ],
    },
};

// ─── Backend Sections ────────────────────────────────────────────
export const BACKEND_SECTIONS: RoadmapSection[] = [
    {
        id: 'internet',
        title: 'Internet',
        description: 'How does the internet work?',
        rightTopics: [
            { id: 'what-is-http', title: 'What is HTTP?' },
            { id: 'domain-name', title: 'Domain Name' },
            { id: 'hosting', title: 'Hosting' },
            { id: 'dns', title: 'DNS' },
            { id: 'browsers', title: 'Browsers' },
        ],
    },
    {
        id: 'languages',
        title: 'Pick a Language',
        leftTopics: [
            { id: 'javascript', title: 'JavaScript' },
            { id: 'python', title: 'Python' },
            { id: 'java', title: 'Java' },
        ],
        rightTopics: [
            { id: 'go', title: 'Go' },
            { id: 'rust', title: 'Rust' },
            { id: 'csharp', title: 'C#' },
        ],
    },
    {
        id: 'vcs',
        title: 'Version Control Systems',
        leftTopics: [
            { id: 'git', title: 'Git' },
        ],
        rightTopics: [
            { id: 'github', title: 'GitHub' },
        ],
    },
    {
        id: 'os-knowledge',
        title: 'OS and General Knowledge',
        leftTopics: [
            { id: 'terminal-usage', title: 'Terminal Usage' },
            { id: 'os-general', title: 'OS Concepts' },
        ],
        rightTopics: [
            { id: 'process-management', title: 'Process Management' },
            { id: 'threads', title: 'Threads & Concurrency' },
            { id: 'memory-management', title: 'Memory Management' },
            { id: 'networking', title: 'Networking Concepts' },
        ],
    },
    {
        id: 'databases',
        title: 'Databases',
        description: 'Relational & NoSQL',
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
        id: 'apis',
        title: 'APIs',
        description: 'Learn to build APIs',
        leftTopics: [
            { id: 'rest-api', title: 'REST' },
            { id: 'json-apis', title: 'JSON APIs' },
        ],
        rightTopics: [
            { id: 'graphql', title: 'GraphQL' },
            { id: 'grpc', title: 'gRPC' },
        ],
    },
    {
        id: 'auth',
        title: 'Authentication',
        leftTopics: [
            { id: 'authentication', title: 'Auth Strategies' },
            { id: 'jwt', title: 'JWT' },
        ],
        rightTopics: [
            { id: 'oauth', title: 'OAuth' },
        ],
    },
    {
        id: 'caching-section',
        title: 'Caching',
        leftTopics: [
            { id: 'caching', title: 'Caching Basics' },
        ],
        rightTopics: [
            { id: 'cdn-caching', title: 'CDN' },
            { id: 'server-side-caching', title: 'Server-Side' },
        ],
    },
    {
        id: 'security',
        title: 'Web Security',
        leftTopics: [
            { id: 'web-security', title: 'Security Basics' },
        ],
        rightTopics: [
            { id: 'hashing', title: 'Hashing Algorithms' },
        ],
    },
    {
        id: 'testing-section',
        title: 'Testing',
        leftTopics: [
            { id: 'unit-testing', title: 'Unit Testing' },
        ],
        rightTopics: [
            { id: 'integration-testing', title: 'Integration Testing' },
            { id: 'functional-testing', title: 'Functional Testing' },
        ],
    },
    {
        id: 'cicd-section',
        title: 'CI / CD',
        leftTopics: [
            { id: 'cicd', title: 'CI/CD Basics' },
        ],
        rightTopics: [
            { id: 'github-actions', title: 'GitHub Actions' },
            { id: 'jenkins', title: 'Jenkins' },
        ],
    },
    {
        id: 'design-section',
        title: 'Design & Development',
        leftTopics: [
            { id: 'design-patterns', title: 'Design Patterns' },
            { id: 'domain-driven-design', title: 'Domain-Driven Design' },
        ],
        rightTopics: [
            { id: 'test-driven-dev', title: 'Test Driven Development' },
        ],
    },
    {
        id: 'architecture',
        title: 'Architectural Patterns',
        leftTopics: [
            { id: 'monolithic', title: 'Monolithic Apps' },
            { id: 'microservices', title: 'Microservices' },
        ],
        rightTopics: [
            { id: 'soa', title: 'SOA' },
            { id: 'serverless', title: 'Serverless' },
        ],
    },
    {
        id: 'message-brokers',
        title: 'Message Brokers',
        leftTopics: [
            { id: 'rabbitmq', title: 'RabbitMQ' },
        ],
        rightTopics: [
            { id: 'kafka', title: 'Kafka' },
        ],
    },
    {
        id: 'containerization',
        title: 'Containerization',
        leftTopics: [
            { id: 'docker', title: 'Docker' },
        ],
        rightTopics: [
            { id: 'kubernetes', title: 'Kubernetes' },
        ],
    },
    {
        id: 'web-servers',
        title: 'Web Servers',
        leftTopics: [
            { id: 'nginx', title: 'Nginx' },
        ],
        rightTopics: [
            { id: 'apache', title: 'Apache' },
        ],
    },
    {
        id: 'scaling',
        title: 'Scaling',
        description: 'Building for growth',
        leftTopics: [
            { id: 'scaling-strategies', title: 'Scaling Strategies' },
        ],
        rightTopics: [
            { id: 'load-balancing', title: 'Load Balancing' },
        ],
    },
];
