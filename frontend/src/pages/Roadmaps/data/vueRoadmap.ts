import type { Topic, RoadmapSection } from './frontendRoadmap';

export const VUE_TOPICS: Record<string, Topic> = {
    // ── Fundamentals ──
    'vue-basics': {
        id: 'vue-basics',
        title: 'Vue.js Basics',
        description: 'The Progressive JavaScript Framework. Reactivity system, template syntax, directives, and the Options API vs Composition API.',
        resources: [
            { type: 'official', title: 'Vue.js Documentation', url: 'https://vuejs.org/guide/introduction.html' },
            { type: 'video', title: 'Vue 3 Full Course', url: 'https://www.youtube.com/watch?v=VeNfHj6MhgA' },
        ],
    },
    'template-syntax': {
        id: 'template-syntax',
        title: 'Template Syntax',
        description: 'Interpolation ({{ }}), v-bind for attributes, v-on for events, v-if/v-else/v-show for conditionals, v-for for loops, and v-model for two-way binding.',
        resources: [
            { type: 'official', title: 'Template Syntax', url: 'https://vuejs.org/guide/essentials/template-syntax.html' },
        ],
    },
    'components-vue': {
        id: 'components-vue',
        title: 'Components',
        description: 'Single File Components (.vue), props, emit events, slots (default/named/scoped), provide/inject, and dynamic components.',
        resources: [
            { type: 'official', title: 'Components Basics', url: 'https://vuejs.org/guide/essentials/component-basics.html' },
        ],
    },

    // ── Composition API ──
    'composition-api': {
        id: 'composition-api',
        title: 'Composition API',
        description: 'Vue 3\'s modern API: setup(), ref(), reactive(), computed(), watch/watchEffect, and composables for logic reuse.',
        resources: [
            { type: 'official', title: 'Composition API', url: 'https://vuejs.org/guide/extras/composition-api-faq.html' },
        ],
    },
    'script-setup': {
        id: 'script-setup',
        title: '<script setup>',
        description: 'Compile-time syntactic sugar for Composition API. Less boilerplate, auto-imports, defineProps/defineEmits macros.',
        resources: [
            { type: 'official', title: 'Script Setup', url: 'https://vuejs.org/api/sfc-script-setup.html' },
        ],
    },
    'composables': {
        id: 'composables',
        title: 'Composables',
        description: 'Reusable logic functions using Composition API. Vue\'s equivalent of React hooks. useCounter, useFetch, useLocalStorage patterns.',
        resources: [
            { type: 'official', title: 'Composables', url: 'https://vuejs.org/guide/reusability/composables.html' },
        ],
    },

    // ── Reactivity ──
    'reactivity': {
        id: 'reactivity',
        title: 'Reactivity System',
        description: 'Vue\'s reactivity with Proxy (Vue 3). ref vs reactive, toRefs, shallowRef, computed properties, and watchers.',
        resources: [
            { type: 'official', title: 'Reactivity in Depth', url: 'https://vuejs.org/guide/extras/reactivity-in-depth.html' },
        ],
    },

    // ── Routing ──
    'vue-router': {
        id: 'vue-router',
        title: 'Vue Router',
        description: 'Official router for Vue.js. Route definitions, dynamic routes, nested routes, navigation guards, lazy loading, and history modes.',
        resources: [
            { type: 'official', title: 'Vue Router', url: 'https://router.vuejs.org/' },
        ],
    },

    // ── State Management ──
    'pinia': {
        id: 'pinia',
        title: 'Pinia',
        description: 'The official state management library for Vue. Stores with state, getters, actions. Type-safe, devtools support, and modular by design.',
        resources: [
            { type: 'official', title: 'Pinia', url: 'https://pinia.vuejs.org/' },
        ],
    },

    // ── Styling ──
    'scoped-styles': {
        id: 'scoped-styles',
        title: 'Scoped Styles & CSS',
        description: '<style scoped> for component-scoped CSS. CSS variables, :deep() for child components, and CSS Modules in Vue SFCs.',
        resources: [
            { type: 'official', title: 'SFC CSS Features', url: 'https://vuejs.org/api/sfc-css-features.html' },
        ],
    },
    'tailwind-vue': {
        id: 'tailwind-vue',
        title: 'Tailwind CSS with Vue',
        description: 'Using Tailwind CSS in Vue projects. Class binding with :class, conditional classes, and integrating with Vite.',
        resources: [
            { type: 'official', title: 'Tailwind + Vue', url: 'https://tailwindcss.com/docs/guides/vite#vue' },
        ],
    },

    // ── Forms ──
    'forms-vue': {
        id: 'forms-vue',
        title: 'Forms & Validation',
        description: 'v-model for form inputs, form handling patterns, VeeValidate for validation, Zod integration, and multi-step forms.',
        resources: [
            { type: 'official', title: 'Form Input Bindings', url: 'https://vuejs.org/guide/essentials/forms.html' },
            { type: 'official', title: 'VeeValidate', url: 'https://vee-validate.logaretm.com/v4/' },
        ],
    },

    // ── Testing ──
    'testing-vue': {
        id: 'testing-vue',
        title: 'Testing',
        description: 'Unit testing with Vitest, component testing with Vue Test Utils, and E2E testing with Cypress or Playwright.',
        resources: [
            { type: 'official', title: 'Testing Guide', url: 'https://vuejs.org/guide/scaling-up/testing.html' },
        ],
    },

    // ── Frameworks ──
    'nuxt': {
        id: 'nuxt',
        title: 'Nuxt.js',
        description: 'The Vue meta-framework. SSR, SSG, file-based routing, auto-imports, server routes, middleware, and SEO optimization.',
        resources: [
            { type: 'official', title: 'Nuxt Documentation', url: 'https://nuxt.com/docs' },
            { type: 'video', title: 'Nuxt 3 Full Course', url: 'https://www.youtube.com/watch?v=fTPCKnZZ2dk' },
        ],
    },

    // ── TypeScript ──
    'typescript-vue': {
        id: 'typescript-vue',
        title: 'TypeScript with Vue',
        description: 'Type-safe Vue development. defineComponent, typed props with defineProps<T>(), typed emits, and generic components.',
        resources: [
            { type: 'official', title: 'TypeScript with Vue', url: 'https://vuejs.org/guide/typescript/overview.html' },
        ],
    },

    // ── Ecosystem ──
    'vite': {
        id: 'vite',
        title: 'Vite',
        description: 'Vite is the recommended build tool for Vue. Lightning-fast HMR, ES modules, optimized builds, and plugin ecosystem.',
        resources: [
            { type: 'official', title: 'Vite Documentation', url: 'https://vitejs.dev/' },
        ],
    },
    'vuetify': {
        id: 'vuetify',
        title: 'Vuetify / Quasar',
        description: 'Vue UI component libraries. Vuetify for Material Design, Quasar for cross-platform (web, mobile, desktop) apps.',
        resources: [
            { type: 'official', title: 'Vuetify', url: 'https://vuetifyjs.com/' },
            { type: 'official', title: 'Quasar', url: 'https://quasar.dev/' },
        ],
    },
};

export const VUE_SECTIONS: RoadmapSection[] = [
    {
        id: 'fundamentals',
        title: 'Vue Fundamentals',
        leftTopics: [
            { id: 'vue-basics', title: 'Vue.js Basics' },
            { id: 'template-syntax', title: 'Template Syntax' },
        ],
        rightTopics: [{ id: 'components-vue', title: 'Components' }],
    },
    {
        id: 'composition',
        title: 'Composition API',
        description: 'Modern Vue',
        leftTopics: [
            { id: 'composition-api', title: 'Composition API' },
            { id: 'script-setup', title: '<script setup>' },
        ],
        rightTopics: [{ id: 'composables', title: 'Composables' }],
    },
    {
        id: 'reactivity-section',
        title: 'Reactivity',
        rightTopics: [{ id: 'reactivity', title: 'Reactivity System' }],
    },
    {
        id: 'routing',
        title: 'Routing',
        rightTopics: [{ id: 'vue-router', title: 'Vue Router' }],
    },
    {
        id: 'state',
        title: 'State Management',
        rightTopics: [{ id: 'pinia', title: 'Pinia' }],
    },
    {
        id: 'styling',
        title: 'Styling',
        leftTopics: [{ id: 'scoped-styles', title: 'Scoped Styles' }],
        rightTopics: [{ id: 'tailwind-vue', title: 'Tailwind CSS' }],
    },
    {
        id: 'forms',
        title: 'Forms',
        rightTopics: [{ id: 'forms-vue', title: 'Forms & Validation' }],
    },
    {
        id: 'testing',
        title: 'Testing',
        rightTopics: [{ id: 'testing-vue', title: 'Testing' }],
    },
    {
        id: 'frameworks',
        title: 'Meta-Framework',
        rightTopics: [{ id: 'nuxt', title: 'Nuxt.js' }],
    },
    {
        id: 'typescript',
        title: 'TypeScript',
        rightTopics: [{ id: 'typescript-vue', title: 'TypeScript with Vue' }],
    },
    {
        id: 'ecosystem',
        title: 'Ecosystem',
        leftTopics: [{ id: 'vite', title: 'Vite' }],
        rightTopics: [{ id: 'vuetify', title: 'Vuetify / Quasar' }],
    },
];
