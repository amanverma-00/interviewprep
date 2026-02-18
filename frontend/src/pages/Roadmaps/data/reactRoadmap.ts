import type { Topic, RoadmapSection } from './frontendRoadmap';

export const REACT_TOPICS: Record<string, Topic> = {
    // ── Fundamentals ──
    'react-basics': {
        id: 'react-basics',
        title: 'React Basics',
        description: 'Components, JSX, props, rendering, and the component tree. React\'s declarative UI model and the virtual DOM.',
        resources: [
            { type: 'official', title: 'React Documentation', url: 'https://react.dev/' },
            { type: 'video', title: 'React Full Course', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8' },
        ],
    },
    'components': {
        id: 'components',
        title: 'Components & JSX',
        description: 'Functional components, JSX syntax, component composition, children prop, conditional rendering, and rendering lists with keys.',
        resources: [
            { type: 'official', title: 'Describing the UI', url: 'https://react.dev/learn/describing-the-ui' },
        ],
    },
    'props-state': {
        id: 'props-state',
        title: 'Props & State',
        description: 'Props for passing data down, state for component-local data with useState. Lifting state up, controlled vs uncontrolled components.',
        resources: [
            { type: 'official', title: 'Managing State', url: 'https://react.dev/learn/managing-state' },
        ],
    },

    // ── Hooks ──
    'usestate-useeffect': {
        id: 'usestate-useeffect',
        title: 'useState & useEffect',
        description: 'useState for state management, useEffect for side effects (data fetching, subscriptions, DOM manipulation). Effect cleanup and dependencies array.',
        resources: [
            { type: 'official', title: 'Hooks Reference', url: 'https://react.dev/reference/react/hooks' },
        ],
    },
    'usecontext': {
        id: 'usecontext',
        title: 'useContext',
        description: 'Context API for prop drilling avoidance. createContext, Provider, and useContext for sharing state across the component tree.',
        resources: [
            { type: 'official', title: 'useContext', url: 'https://react.dev/reference/react/useContext' },
        ],
    },
    'usereducer': {
        id: 'usereducer',
        title: 'useReducer',
        description: 'useReducer for complex state logic. Reducer pattern, actions, dispatch, and when to use useReducer vs useState.',
        resources: [
            { type: 'official', title: 'useReducer', url: 'https://react.dev/reference/react/useReducer' },
        ],
    },
    'useref-usememo': {
        id: 'useref-usememo',
        title: 'useRef, useMemo, useCallback',
        description: 'useRef for DOM access and mutable values. useMemo for expensive computation caching. useCallback for stable function references.',
        resources: [
            { type: 'official', title: 'Performance Hooks', url: 'https://react.dev/reference/react/useMemo' },
        ],
    },
    'custom-hooks': {
        id: 'custom-hooks',
        title: 'Custom Hooks',
        description: 'Extracting reusable logic into custom hooks. Hook composition, naming conventions (use prefix), and sharing stateful logic between components.',
        resources: [
            { type: 'official', title: 'Reusing Logic with Custom Hooks', url: 'https://react.dev/learn/reusing-logic-with-custom-hooks' },
        ],
    },

    // ── Routing ──
    'react-router': {
        id: 'react-router',
        title: 'React Router',
        description: 'Client-side routing with React Router v6+. Routes, nested routes, dynamic segments, loaders, actions, and protected routes.',
        resources: [
            { type: 'official', title: 'React Router', url: 'https://reactrouter.com/' },
        ],
    },

    // ── State Management ──
    'redux': {
        id: 'redux',
        title: 'Redux / Redux Toolkit',
        description: 'Centralized state management. Store, reducers, actions, middleware, Redux Toolkit (createSlice, createAsyncThunk), and RTK Query.',
        resources: [
            { type: 'official', title: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
        ],
    },
    'zustand': {
        id: 'zustand',
        title: 'Zustand',
        description: 'Lightweight state management with a simple API. No boilerplate, no providers, hooks-based, and devtools support.',
        resources: [
            { type: 'official', title: 'Zustand', url: 'https://zustand-demo.pmnd.rs/' },
        ],
    },
    'tanstack-query': {
        id: 'tanstack-query',
        title: 'TanStack Query (React Query)',
        description: 'Server state management. Data fetching, caching, background updates, pagination, infinite scroll, and optimistic updates.',
        resources: [
            { type: 'official', title: 'TanStack Query', url: 'https://tanstack.com/query/latest' },
        ],
    },

    // ── Styling ──
    'css-modules': {
        id: 'css-modules',
        title: 'CSS Modules',
        description: 'Scoped CSS with automatic class name hashing. No conflicts, component-level styles, and works with any CSS preprocessor.',
        resources: [
            { type: 'article', title: 'CSS Modules Guide', url: 'https://github.com/css-modules/css-modules' },
        ],
    },
    'tailwind': {
        id: 'tailwind',
        title: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapid UI development. JIT compiler, responsive design, dark mode, and component patterns.',
        resources: [
            { type: 'official', title: 'Tailwind CSS', url: 'https://tailwindcss.com/docs' },
        ],
    },
    'styled-components': {
        id: 'styled-components',
        title: 'Styled Components / Emotion',
        description: 'CSS-in-JS libraries for dynamic styling. Tagged template literals, theming, and runtime style generation.',
        resources: [
            { type: 'official', title: 'Styled Components', url: 'https://styled-components.com/' },
        ],
    },

    // ── Forms ──
    'forms': {
        id: 'forms',
        title: 'Forms & Validation',
        description: 'Form handling with React Hook Form or Formik. Validation with Zod or Yup. Controlled inputs, error handling, and multi-step forms.',
        resources: [
            { type: 'official', title: 'React Hook Form', url: 'https://react-hook-form.com/' },
        ],
    },

    // ── Testing ──
    'testing': {
        id: 'testing',
        title: 'Testing',
        description: 'Unit testing with Jest/Vitest, component testing with React Testing Library, integration tests, and E2E with Playwright/Cypress.',
        resources: [
            { type: 'official', title: 'React Testing Library', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
        ],
    },

    // ── Frameworks ──
    'nextjs': {
        id: 'nextjs',
        title: 'Next.js',
        description: 'The React framework for production. Server Components, App Router, SSR/SSG/ISR, API routes, middleware, and deployment with Vercel.',
        resources: [
            { type: 'official', title: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
            { type: 'video', title: 'Next.js Full Course', url: 'https://www.youtube.com/watch?v=ZVnjOPwW4ZA' },
        ],
    },
    'remix': {
        id: 'remix',
        title: 'Remix',
        description: 'Full-stack React framework leveraging web standards. Loaders, actions, nested routes, error boundaries, and progressive enhancement.',
        resources: [
            { type: 'official', title: 'Remix Documentation', url: 'https://remix.run/docs' },
        ],
    },

    // ── TypeScript ──
    'typescript': {
        id: 'typescript',
        title: 'TypeScript with React',
        description: 'Type-safe React development. Component props typing, generic components, event handler types, and strict mode benefits.',
        resources: [
            { type: 'article', title: 'React TypeScript Cheatsheet', url: 'https://react-typescript-cheatsheet.netlify.app/' },
        ],
    },

    // ── Performance ──
    'performance': {
        id: 'performance',
        title: 'Performance Optimization',
        description: 'React.memo, useMemo, useCallback, code splitting with lazy/Suspense, virtualization (react-window), and React Profiler.',
        resources: [
            { type: 'official', title: 'React Performance', url: 'https://react.dev/learn/render-and-commit' },
        ],
    },
};

export const REACT_SECTIONS: RoadmapSection[] = [
    {
        id: 'fundamentals',
        title: 'React Fundamentals',
        leftTopics: [
            { id: 'react-basics', title: 'React Basics' },
            { id: 'components', title: 'Components & JSX' },
        ],
        rightTopics: [{ id: 'props-state', title: 'Props & State' }],
    },
    {
        id: 'hooks',
        title: 'Hooks',
        description: 'The core of React',
        leftTopics: [
            { id: 'usestate-useeffect', title: 'useState & useEffect' },
            { id: 'usecontext', title: 'useContext' },
            { id: 'usereducer', title: 'useReducer' },
        ],
        rightTopics: [
            { id: 'useref-usememo', title: 'useRef / useMemo / useCallback' },
            { id: 'custom-hooks', title: 'Custom Hooks' },
        ],
    },
    {
        id: 'routing',
        title: 'Routing',
        rightTopics: [{ id: 'react-router', title: 'React Router' }],
    },
    {
        id: 'state-management',
        title: 'State Management',
        leftTopics: [
            { id: 'redux', title: 'Redux Toolkit' },
            { id: 'zustand', title: 'Zustand' },
        ],
        rightTopics: [{ id: 'tanstack-query', title: 'TanStack Query' }],
    },
    {
        id: 'styling',
        title: 'Styling',
        leftTopics: [
            { id: 'css-modules', title: 'CSS Modules' },
            { id: 'tailwind', title: 'Tailwind CSS' },
        ],
        rightTopics: [{ id: 'styled-components', title: 'CSS-in-JS' }],
    },
    {
        id: 'forms-section',
        title: 'Forms',
        rightTopics: [{ id: 'forms', title: 'Forms & Validation' }],
    },
    {
        id: 'testing-section',
        title: 'Testing',
        rightTopics: [{ id: 'testing', title: 'Testing' }],
    },
    {
        id: 'frameworks',
        title: 'Meta-Frameworks',
        leftTopics: [{ id: 'nextjs', title: 'Next.js' }],
        rightTopics: [{ id: 'remix', title: 'Remix' }],
    },
    {
        id: 'typescript-section',
        title: 'TypeScript',
        rightTopics: [{ id: 'typescript', title: 'TypeScript with React' }],
    },
    {
        id: 'performance-section',
        title: 'Performance',
        rightTopics: [{ id: 'performance', title: 'Performance Optimization' }],
    },
];
