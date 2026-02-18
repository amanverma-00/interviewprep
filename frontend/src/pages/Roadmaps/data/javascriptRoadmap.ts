import type { Topic, RoadmapSection } from './frontendRoadmap';

export const JAVASCRIPT_TOPICS: Record<string, Topic> = {
    // ── Basics ──
    'js-basics': {
        id: 'js-basics',
        title: 'JavaScript Basics',
        description: 'Variables (var/let/const), data types (primitives & objects), operators, type coercion, and strict mode. The language of the web.',
        resources: [
            { type: 'official', title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
            { type: 'article', title: 'JavaScript.info', url: 'https://javascript.info/' },
            { type: 'video', title: 'JavaScript Full Course', url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg' },
        ],
    },
    'control-flow': {
        id: 'control-flow',
        title: 'Control Flow',
        description: 'if/else, switch, for, while, do-while, for...of, for...in, break, continue, and ternary operator. Loop patterns and iteration.',
        resources: [
            { type: 'official', title: 'Loops and Iteration (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration' },
        ],
    },
    'functions': {
        id: 'functions',
        title: 'Functions',
        description: 'Function declarations, expressions, arrow functions, default parameters, rest parameters, IIFE, and first-class functions.',
        resources: [
            { type: 'official', title: 'Functions (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions' },
        ],
    },

    // ── Core Concepts ──
    'scope-closures': {
        id: 'scope-closures',
        title: 'Scope & Closures',
        description: 'Global, function, and block scope. Lexical scoping, closures, the scope chain, and practical closure patterns (data privacy, currying).',
        resources: [
            { type: 'article', title: 'Closures (JavaScript.info)', url: 'https://javascript.info/closure' },
        ],
    },
    'this-keyword': {
        id: 'this-keyword',
        title: 'this Keyword',
        description: 'How `this` works in different contexts: global, object methods, constructors, arrow functions, and explicit binding (call, apply, bind).',
        resources: [
            { type: 'official', title: 'this (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this' },
        ],
    },
    'prototypes': {
        id: 'prototypes',
        title: 'Prototypes & Inheritance',
        description: 'Prototype chain, __proto__, Object.create(), constructor functions, ES6 classes, and prototypal vs classical inheritance.',
        resources: [
            { type: 'article', title: 'Prototypes (JavaScript.info)', url: 'https://javascript.info/prototypes' },
        ],
    },
    'hoisting': {
        id: 'hoisting',
        title: 'Hoisting & TDZ',
        description: 'Variable and function hoisting, temporal dead zone (TDZ) with let/const, and why understanding hoisting prevents bugs.',
        resources: [
            { type: 'official', title: 'Hoisting (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Hoisting' },
        ],
    },

    // ── Data Structures ──
    'arrays': {
        id: 'arrays',
        title: 'Arrays',
        description: 'Array methods: map, filter, reduce, forEach, find, some, every, flat, sort, splice. Destructuring and spread operator.',
        resources: [
            { type: 'official', title: 'Array (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' },
        ],
    },
    'objects': {
        id: 'objects',
        title: 'Objects',
        description: 'Object literals, methods, computed properties, Object.keys/values/entries, destructuring, spread/rest, and optional chaining (?.).',
        resources: [
            { type: 'article', title: 'Objects (JavaScript.info)', url: 'https://javascript.info/object' },
        ],
    },
    'maps-sets': {
        id: 'maps-sets',
        title: 'Maps, Sets, WeakMap, WeakSet',
        description: 'Map for key-value pairs (any key type), Set for unique values, WeakMap/WeakSet for garbage-collectible references.',
        resources: [
            { type: 'official', title: 'Map (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map' },
        ],
    },

    // ── Async ──
    'callbacks': {
        id: 'callbacks',
        title: 'Callbacks',
        description: 'Functions passed as arguments. Callback pattern, callback hell, error-first callbacks (Node.js), and why we moved to Promises.',
        resources: [
            { type: 'article', title: 'Callbacks (JavaScript.info)', url: 'https://javascript.info/callbacks' },
        ],
    },
    'promises': {
        id: 'promises',
        title: 'Promises',
        description: 'Promise states (pending/fulfilled/rejected), then/catch/finally, Promise.all, Promise.race, Promise.allSettled, and chaining.',
        resources: [
            { type: 'official', title: 'Promise (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise' },
        ],
    },
    'async-await': {
        id: 'async-await',
        title: 'async/await',
        description: 'Syntactic sugar over Promises. async functions, await expressions, error handling with try/catch, and parallel execution patterns.',
        resources: [
            { type: 'article', title: 'async/await (JavaScript.info)', url: 'https://javascript.info/async-await' },
        ],
    },
    'event-loop': {
        id: 'event-loop',
        title: 'Event Loop',
        description: 'Call stack, task queue, microtask queue, requestAnimationFrame. How JavaScript handles concurrency with a single thread.',
        resources: [
            { type: 'video', title: 'What the heck is the event loop?', url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ' },
        ],
    },

    // ── DOM ──
    'dom': {
        id: 'dom',
        title: 'DOM Manipulation',
        description: 'querySelector, createElement, appendChild, classList, event listeners, event delegation, bubbling/capturing, and performance.',
        resources: [
            { type: 'official', title: 'DOM (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' },
        ],
    },
    'events': {
        id: 'events',
        title: 'Events',
        description: 'Event types (click, input, submit, keydown), addEventListener, event object, event delegation, custom events, and preventDefault.',
        resources: [
            { type: 'official', title: 'Events (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/Events' },
        ],
    },

    // ── ES6+ ──
    'es6-features': {
        id: 'es6-features',
        title: 'ES6+ Features',
        description: 'Template literals, destructuring, spread/rest, modules (import/export), Symbol, iterators, generators, and Proxy/Reflect.',
        resources: [
            { type: 'article', title: 'ES6 Features', url: 'https://es6-features.org/' },
        ],
    },
    'modules': {
        id: 'modules',
        title: 'Modules',
        description: 'ES Modules (import/export), CommonJS (require), dynamic imports, module bundlers (Webpack, Vite), and tree shaking.',
        resources: [
            { type: 'official', title: 'Modules (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' },
        ],
    },

    // ── Error Handling ──
    'error-handling': {
        id: 'error-handling',
        title: 'Error Handling',
        description: 'try/catch/finally, Error types (TypeError, ReferenceError, SyntaxError), custom errors, and error boundaries.',
        resources: [
            { type: 'article', title: 'Error Handling (JavaScript.info)', url: 'https://javascript.info/error-handling' },
        ],
    },

    // ── APIs ──
    'fetch-api': {
        id: 'fetch-api',
        title: 'Fetch API & HTTP',
        description: 'fetch() for HTTP requests, Request/Response objects, headers, JSON parsing, error handling, and AbortController for cancellation.',
        resources: [
            { type: 'official', title: 'Fetch API (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' },
        ],
    },
    'storage': {
        id: 'storage',
        title: 'Web Storage & APIs',
        description: 'localStorage, sessionStorage, IndexedDB, Web Workers, Service Workers, and browser APIs (Geolocation, Notifications).',
        resources: [
            { type: 'official', title: 'Web Storage (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API' },
        ],
    },
};

export const JAVASCRIPT_SECTIONS: RoadmapSection[] = [
    {
        id: 'basics',
        title: 'Basics',
        leftTopics: [
            { id: 'js-basics', title: 'JavaScript Basics' },
            { id: 'control-flow', title: 'Control Flow' },
        ],
        rightTopics: [{ id: 'functions', title: 'Functions' }],
    },
    {
        id: 'core',
        title: 'Core Concepts',
        description: 'Master these',
        leftTopics: [
            { id: 'scope-closures', title: 'Scope & Closures' },
            { id: 'this-keyword', title: 'this Keyword' },
        ],
        rightTopics: [
            { id: 'prototypes', title: 'Prototypes' },
            { id: 'hoisting', title: 'Hoisting & TDZ' },
        ],
    },
    {
        id: 'data',
        title: 'Data Structures',
        leftTopics: [
            { id: 'arrays', title: 'Arrays' },
            { id: 'objects', title: 'Objects' },
        ],
        rightTopics: [{ id: 'maps-sets', title: 'Maps & Sets' }],
    },
    {
        id: 'async',
        title: 'Asynchronous JavaScript',
        leftTopics: [
            { id: 'callbacks', title: 'Callbacks' },
            { id: 'promises', title: 'Promises' },
        ],
        rightTopics: [
            { id: 'async-await', title: 'async/await' },
            { id: 'event-loop', title: 'Event Loop' },
        ],
    },
    {
        id: 'dom-section',
        title: 'DOM & Events',
        leftTopics: [{ id: 'dom', title: 'DOM Manipulation' }],
        rightTopics: [{ id: 'events', title: 'Events' }],
    },
    {
        id: 'modern',
        title: 'Modern JavaScript',
        leftTopics: [{ id: 'es6-features', title: 'ES6+ Features' }],
        rightTopics: [{ id: 'modules', title: 'Modules' }],
    },
    {
        id: 'errors',
        title: 'Error Handling',
        rightTopics: [{ id: 'error-handling', title: 'Error Handling' }],
    },
    {
        id: 'apis',
        title: 'Web APIs',
        leftTopics: [{ id: 'fetch-api', title: 'Fetch API' }],
        rightTopics: [{ id: 'storage', title: 'Web Storage & APIs' }],
    },
];
