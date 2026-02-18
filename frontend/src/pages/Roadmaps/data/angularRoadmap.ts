import type { Topic, RoadmapSection } from './frontendRoadmap';

export const ANGULAR_TOPICS: Record<string, Topic> = {
    // ── Fundamentals ──
    'angular-basics': {
        id: 'angular-basics',
        title: 'Angular Basics',
        description: 'Angular is a full-featured framework by Google. TypeScript-first, opinionated architecture with modules, components, services, and dependency injection.',
        resources: [
            { type: 'official', title: 'Angular Documentation', url: 'https://angular.dev/' },
            { type: 'video', title: 'Angular Full Course', url: 'https://www.youtube.com/watch?v=3qBXWUpoPHo' },
        ],
    },
    'angular-cli': {
        id: 'angular-cli',
        title: 'Angular CLI',
        description: 'ng new, ng generate, ng serve, ng build, ng test. Scaffolding components, services, modules, pipes, and guards from the command line.',
        resources: [
            { type: 'official', title: 'Angular CLI', url: 'https://angular.dev/tools/cli' },
        ],
    },
    'typescript-angular': {
        id: 'typescript-angular',
        title: 'TypeScript for Angular',
        description: 'Angular requires TypeScript. Decorators, interfaces, generics, enums, strict mode, and type-safe component inputs/outputs.',
        resources: [
            { type: 'official', title: 'TypeScript Docs', url: 'https://www.typescriptlang.org/docs/' },
        ],
    },

    // ── Components ──
    'components-angular': {
        id: 'components-angular',
        title: 'Components',
        description: 'Component decorator, templates, styles, lifecycle hooks (ngOnInit, ngOnDestroy), standalone components, and component interaction.',
        resources: [
            { type: 'official', title: 'Components', url: 'https://angular.dev/guide/components' },
        ],
    },
    'templates': {
        id: 'templates',
        title: 'Templates & Data Binding',
        description: 'Interpolation {{ }}, property binding [prop], event binding (event), two-way binding [(ngModel)], and template reference variables.',
        resources: [
            { type: 'official', title: 'Template Syntax', url: 'https://angular.dev/guide/templates' },
        ],
    },
    'directives': {
        id: 'directives',
        title: 'Directives',
        description: 'Built-in directives: *ngIf, *ngFor, ngSwitch, ngClass, ngStyle. New control flow (@if, @for, @switch). Custom attribute and structural directives.',
        resources: [
            { type: 'official', title: 'Directives', url: 'https://angular.dev/guide/directives' },
        ],
    },
    'pipes': {
        id: 'pipes',
        title: 'Pipes',
        description: 'Transform data in templates. Built-in pipes (date, currency, async, json). Custom pipes, pure vs impure pipes.',
        resources: [
            { type: 'official', title: 'Pipes', url: 'https://angular.dev/guide/pipes' },
        ],
    },

    // ── Services & DI ──
    'services': {
        id: 'services',
        title: 'Services & Dependency Injection',
        description: 'Injectable services, providedIn root/module, hierarchical injectors, injection tokens, and the DI system that powers Angular.',
        resources: [
            { type: 'official', title: 'Dependency Injection', url: 'https://angular.dev/guide/di' },
        ],
    },

    // ── Routing ──
    'angular-router': {
        id: 'angular-router',
        title: 'Angular Router',
        description: 'RouterModule, route configuration, lazy loading with loadComponent/loadChildren, route guards, resolvers, and nested routes.',
        resources: [
            { type: 'official', title: 'Routing', url: 'https://angular.dev/guide/routing' },
        ],
    },

    // ── Reactive ──
    'rxjs': {
        id: 'rxjs',
        title: 'RxJS & Observables',
        description: 'Reactive programming with RxJS. Observables, operators (map, filter, switchMap, mergeMap, debounceTime), subjects, and async pipe.',
        resources: [
            { type: 'official', title: 'RxJS Documentation', url: 'https://rxjs.dev/' },
            { type: 'video', title: 'RxJS Crash Course', url: 'https://www.youtube.com/watch?v=PhggNGsSQyg' },
        ],
    },
    'signals': {
        id: 'signals',
        title: 'Signals',
        description: 'Angular\'s new reactivity primitive (v16+). signal(), computed(), effect(), and migration from traditional change detection.',
        resources: [
            { type: 'official', title: 'Angular Signals', url: 'https://angular.dev/guide/signals' },
        ],
    },

    // ── Forms ──
    'reactive-forms': {
        id: 'reactive-forms',
        title: 'Reactive Forms',
        description: 'FormGroup, FormControl, FormArray, validators (built-in and custom), async validators, and dynamic form generation.',
        resources: [
            { type: 'official', title: 'Reactive Forms', url: 'https://angular.dev/guide/forms/reactive-forms' },
        ],
    },
    'template-forms': {
        id: 'template-forms',
        title: 'Template-Driven Forms',
        description: 'NgModel-based forms for simpler scenarios. FormsModule, two-way binding, template validation, and when to use template vs reactive forms.',
        resources: [
            { type: 'official', title: 'Template-Driven Forms', url: 'https://angular.dev/guide/forms/template-driven-forms' },
        ],
    },

    // ── HTTP ──
    'http-client': {
        id: 'http-client',
        title: 'HttpClient',
        description: 'Angular\'s HTTP client for API calls. GET/POST/PUT/DELETE, interceptors, error handling, retry logic, and typed responses.',
        resources: [
            { type: 'official', title: 'HttpClient', url: 'https://angular.dev/guide/http' },
        ],
    },

    // ── State Management ──
    'ngrx': {
        id: 'ngrx',
        title: 'NgRx',
        description: 'Redux-inspired state management for Angular. Store, actions, reducers, effects, selectors, and entity adapter.',
        resources: [
            { type: 'official', title: 'NgRx Documentation', url: 'https://ngrx.io/' },
        ],
    },

    // ── Testing ──
    'testing-angular': {
        id: 'testing-angular',
        title: 'Testing',
        description: 'Unit testing with Jasmine/Karma or Jest. TestBed for component testing, service testing, HttpClientTestingModule, and E2E with Cypress.',
        resources: [
            { type: 'official', title: 'Testing Guide', url: 'https://angular.dev/guide/testing' },
        ],
    },

    // ── UI Libraries ──
    'angular-material': {
        id: 'angular-material',
        title: 'Angular Material',
        description: 'Official Material Design component library. Buttons, forms, tables, dialogs, navigation, CDK (Component Dev Kit), and theming.',
        resources: [
            { type: 'official', title: 'Angular Material', url: 'https://material.angular.io/' },
        ],
    },

    // ── Performance ──
    'performance-angular': {
        id: 'performance-angular',
        title: 'Performance',
        description: 'OnPush change detection, trackBy for ngFor, lazy loading, preloading strategies, tree shaking, and Angular DevTools profiler.',
        resources: [
            { type: 'official', title: 'Performance', url: 'https://angular.dev/best-practices/runtime-performance' },
        ],
    },

    // ── SSR ──
    'angular-ssr': {
        id: 'angular-ssr',
        title: 'SSR (Angular Universal)',
        description: 'Server-side rendering for Angular apps. @angular/ssr, hydration, SEO benefits, and pre-rendering static pages.',
        resources: [
            { type: 'official', title: 'Server-Side Rendering', url: 'https://angular.dev/guide/ssr' },
        ],
    },
};

export const ANGULAR_SECTIONS: RoadmapSection[] = [
    {
        id: 'fundamentals',
        title: 'Fundamentals',
        leftTopics: [
            { id: 'angular-basics', title: 'Angular Basics' },
            { id: 'angular-cli', title: 'Angular CLI' },
        ],
        rightTopics: [{ id: 'typescript-angular', title: 'TypeScript' }],
    },
    {
        id: 'components-section',
        title: 'Components & Templates',
        leftTopics: [
            { id: 'components-angular', title: 'Components' },
            { id: 'templates', title: 'Data Binding' },
        ],
        rightTopics: [
            { id: 'directives', title: 'Directives' },
            { id: 'pipes', title: 'Pipes' },
        ],
    },
    {
        id: 'services-section',
        title: 'Services & DI',
        rightTopics: [{ id: 'services', title: 'Services & DI' }],
    },
    {
        id: 'routing',
        title: 'Routing',
        rightTopics: [{ id: 'angular-router', title: 'Angular Router' }],
    },
    {
        id: 'reactive',
        title: 'Reactivity',
        leftTopics: [{ id: 'rxjs', title: 'RxJS & Observables' }],
        rightTopics: [{ id: 'signals', title: 'Signals' }],
    },
    {
        id: 'forms',
        title: 'Forms',
        leftTopics: [{ id: 'reactive-forms', title: 'Reactive Forms' }],
        rightTopics: [{ id: 'template-forms', title: 'Template-Driven' }],
    },
    {
        id: 'http',
        title: 'HTTP',
        rightTopics: [{ id: 'http-client', title: 'HttpClient' }],
    },
    {
        id: 'state',
        title: 'State Management',
        rightTopics: [{ id: 'ngrx', title: 'NgRx' }],
    },
    {
        id: 'testing',
        title: 'Testing',
        rightTopics: [{ id: 'testing-angular', title: 'Testing' }],
    },
    {
        id: 'ui',
        title: 'UI Library',
        rightTopics: [{ id: 'angular-material', title: 'Angular Material' }],
    },
    {
        id: 'perf',
        title: 'Performance & SSR',
        leftTopics: [{ id: 'performance-angular', title: 'Performance' }],
        rightTopics: [{ id: 'angular-ssr', title: 'SSR (Universal)' }],
    },
];
