import type { Topic, RoadmapSection } from './frontendRoadmap';

export const TYPESCRIPT_TOPICS: Record<string, Topic> = {
    // ── Fundamentals ──
    'ts-basics': {
        id: 'ts-basics',
        title: 'TypeScript Basics',
        description: 'TypeScript adds static types to JavaScript. Type annotations, type inference, compiler options (tsconfig.json), and the benefits of type safety.',
        resources: [
            { type: 'official', title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/' },
            { type: 'video', title: 'TypeScript Full Course', url: 'https://www.youtube.com/watch?v=30LWjhZzg50' },
        ],
    },
    'basic-types': {
        id: 'basic-types',
        title: 'Basic Types',
        description: 'string, number, boolean, null, undefined, any, unknown, void, never. Arrays, tuples, and type narrowing basics.',
        resources: [
            { type: 'official', title: 'Everyday Types', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html' },
        ],
    },
    'type-inference': {
        id: 'type-inference',
        title: 'Type Inference',
        description: 'TypeScript\'s ability to automatically determine types. Best practice: let TypeScript infer when it can, annotate when it can\'t.',
        resources: [
            { type: 'official', title: 'Type Inference', url: 'https://www.typescriptlang.org/docs/handbook/type-inference.html' },
        ],
    },

    // ── Type System ──
    'interfaces': {
        id: 'interfaces',
        title: 'Interfaces',
        description: 'Defining object shapes. Optional properties (?), readonly, extending interfaces, interface merging, and implements keyword.',
        resources: [
            { type: 'official', title: 'Interfaces', url: 'https://www.typescriptlang.org/docs/handbook/2/objects.html' },
        ],
    },
    'type-aliases': {
        id: 'type-aliases',
        title: 'Type Aliases & Unions',
        description: 'type keyword for aliases. Union types (A | B), intersection types (A & B), literal types, and discriminated unions.',
        resources: [
            { type: 'official', title: 'Type Aliases', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases' },
        ],
    },
    'type-narrowing': {
        id: 'type-narrowing',
        title: 'Type Narrowing',
        description: 'typeof guards, instanceof, in operator, truthiness narrowing, discriminated unions, and exhaustive checking with never.',
        resources: [
            { type: 'official', title: 'Narrowing', url: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html' },
        ],
    },

    // ── Generics ──
    'generics': {
        id: 'generics',
        title: 'Generics',
        description: 'Type parameters (<T>), generic functions, generic interfaces/classes, constraints (extends), default type parameters, and generic utility patterns.',
        resources: [
            { type: 'official', title: 'Generics', url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html' },
        ],
    },

    // ── Advanced Types ──
    'utility-types': {
        id: 'utility-types',
        title: 'Utility Types',
        description: 'Partial<T>, Required<T>, Readonly<T>, Pick<T,K>, Omit<T,K>, Record<K,V>, Exclude, Extract, ReturnType, and Parameters.',
        resources: [
            { type: 'official', title: 'Utility Types', url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html' },
        ],
    },
    'mapped-types': {
        id: 'mapped-types',
        title: 'Mapped & Conditional Types',
        description: 'Mapped types ({ [K in keyof T]: ... }), conditional types (T extends U ? X : Y), infer keyword, and template literal types.',
        resources: [
            { type: 'official', title: 'Mapped Types', url: 'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html' },
        ],
    },

    // ── Enums ──
    'enums': {
        id: 'enums',
        title: 'Enums',
        description: 'Numeric enums, string enums, const enums, and when to use enums vs union types. Trade-offs and best practices.',
        resources: [
            { type: 'official', title: 'Enums', url: 'https://www.typescriptlang.org/docs/handbook/enums.html' },
        ],
    },

    // ── Classes ──
    'classes-ts': {
        id: 'classes-ts',
        title: 'Classes in TypeScript',
        description: 'Access modifiers (public/private/protected), abstract classes, parameter properties, implements, and decorators.',
        resources: [
            { type: 'official', title: 'Classes', url: 'https://www.typescriptlang.org/docs/handbook/2/classes.html' },
        ],
    },

    // ── Modules ──
    'modules-ts': {
        id: 'modules-ts',
        title: 'Modules & Namespaces',
        description: 'ES module syntax, declaration files (.d.ts), ambient declarations, @types packages, and module resolution strategies.',
        resources: [
            { type: 'official', title: 'Modules', url: 'https://www.typescriptlang.org/docs/handbook/2/modules.html' },
        ],
    },

    // ── Config ──
    'tsconfig': {
        id: 'tsconfig',
        title: 'tsconfig.json',
        description: 'Compiler configuration: strict mode, target, module, paths, baseUrl, declaration, and project references for monorepos.',
        resources: [
            { type: 'official', title: 'TSConfig Reference', url: 'https://www.typescriptlang.org/tsconfig' },
        ],
    },

    // ── Framework Integration ──
    'ts-react': {
        id: 'ts-react',
        title: 'TypeScript with React',
        description: 'Typing components, props, hooks, context, event handlers, and refs. React.FC, generic components, and strict prop typing.',
        resources: [
            { type: 'article', title: 'React TypeScript Cheatsheet', url: 'https://react-typescript-cheatsheet.netlify.app/' },
        ],
    },
    'ts-node': {
        id: 'ts-node',
        title: 'TypeScript with Node.js',
        description: 'Running TypeScript in Node.js with ts-node, tsx, or SWC. Express typing, database typing (Prisma), and API type safety.',
        resources: [
            { type: 'official', title: 'tsx', url: 'https://tsx.is/' },
        ],
    },

    // ── Advanced ──
    'type-guards': {
        id: 'type-guards',
        title: 'Type Guards & Assertions',
        description: 'Custom type guards (is keyword), type assertions (as), non-null assertion (!), and satisfies operator for type validation.',
        resources: [
            { type: 'official', title: 'Type Guards', url: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates' },
        ],
    },
};

export const TYPESCRIPT_SECTIONS: RoadmapSection[] = [
    {
        id: 'fundamentals',
        title: 'Fundamentals',
        leftTopics: [
            { id: 'ts-basics', title: 'TypeScript Basics' },
            { id: 'basic-types', title: 'Basic Types' },
        ],
        rightTopics: [{ id: 'type-inference', title: 'Type Inference' }],
    },
    {
        id: 'type-system',
        title: 'Type System',
        description: 'The core of TypeScript',
        leftTopics: [
            { id: 'interfaces', title: 'Interfaces' },
            { id: 'type-aliases', title: 'Type Aliases & Unions' },
        ],
        rightTopics: [{ id: 'type-narrowing', title: 'Type Narrowing' }],
    },
    {
        id: 'generics-section',
        title: 'Generics',
        rightTopics: [{ id: 'generics', title: 'Generics' }],
    },
    {
        id: 'advanced-types',
        title: 'Advanced Types',
        leftTopics: [{ id: 'utility-types', title: 'Utility Types' }],
        rightTopics: [{ id: 'mapped-types', title: 'Mapped & Conditional Types' }],
    },
    {
        id: 'enums-classes',
        title: 'Enums & Classes',
        leftTopics: [{ id: 'enums', title: 'Enums' }],
        rightTopics: [{ id: 'classes-ts', title: 'Classes' }],
    },
    {
        id: 'modules',
        title: 'Modules & Config',
        leftTopics: [{ id: 'modules-ts', title: 'Modules & .d.ts' }],
        rightTopics: [{ id: 'tsconfig', title: 'tsconfig.json' }],
    },
    {
        id: 'frameworks',
        title: 'Framework Integration',
        leftTopics: [{ id: 'ts-react', title: 'TypeScript + React' }],
        rightTopics: [{ id: 'ts-node', title: 'TypeScript + Node.js' }],
    },
    {
        id: 'advanced',
        title: 'Advanced Patterns',
        rightTopics: [{ id: 'type-guards', title: 'Type Guards & Assertions' }],
    },
];
