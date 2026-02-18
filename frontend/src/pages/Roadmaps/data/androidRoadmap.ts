import type { Topic, RoadmapSection } from './frontendRoadmap';

// ─── Android Topics ──────────────────────────────────────────────
export const ANDROID_TOPICS: Record<string, Topic> = {
    // ── Languages ──
    kotlin: {
        id: 'kotlin',
        title: 'Kotlin',
        description: 'Kotlin is the official language for Android development. Null safety, extension functions, coroutines, data classes, and 100% Java interoperability.',
        resources: [
            { type: 'official', title: 'Kotlin Documentation', url: 'https://kotlinlang.org/docs/home.html' },
            { type: 'video', title: 'Kotlin Full Course', url: 'https://www.youtube.com/watch?v=EExSSotojVI' },
            { type: 'course', title: 'Kotlin for Android (Google)', url: 'https://developer.android.com/courses' },
        ],
    },
    java: {
        id: 'java',
        title: 'Java',
        description: 'Java was the original Android language. Vast ecosystem, strong typing, and legacy codebase knowledge. Still relevant for maintaining older Android projects.',
        resources: [
            { type: 'official', title: 'Java Documentation', url: 'https://docs.oracle.com/en/java/' },
        ],
    },

    // ── Android Fundamentals ──
    'android-studio': {
        id: 'android-studio',
        title: 'Android Studio',
        description: 'Android Studio is the official IDE for Android development. Layout editor, debugger, profiler, emulator, Gradle build system, and Logcat.',
        resources: [
            { type: 'official', title: 'Android Studio Setup', url: 'https://developer.android.com/studio' },
            { type: 'video', title: 'Android Studio Tutorial', url: 'https://www.youtube.com/watch?v=fis26HvvDII' },
        ],
    },
    'app-components': {
        id: 'app-components',
        title: 'App Components',
        description: 'The four fundamental components: Activities (screens), Services (background work), Broadcast Receivers (system events), and Content Providers (data sharing).',
        resources: [
            { type: 'official', title: 'App Components Guide', url: 'https://developer.android.com/guide/components/fundamentals' },
        ],
    },
    'activity-lifecycle': {
        id: 'activity-lifecycle',
        title: 'Activity Lifecycle',
        description: 'onCreate, onStart, onResume, onPause, onStop, onDestroy. Understanding lifecycle is critical for handling configuration changes, saving state, and preventing memory leaks.',
        resources: [
            { type: 'official', title: 'Activity Lifecycle', url: 'https://developer.android.com/guide/components/activities/activity-lifecycle' },
        ],
    },
    'android-manifest': {
        id: 'android-manifest',
        title: 'AndroidManifest.xml',
        description: 'The manifest file declares permissions, activities, services, intents, and app metadata. Every Android app must have one.',
        resources: [
            { type: 'official', title: 'App Manifest', url: 'https://developer.android.com/guide/topics/manifest/manifest-intro' },
        ],
    },

    // ── UI ──
    'jetpack-compose': {
        id: 'jetpack-compose',
        title: 'Jetpack Compose',
        description: 'Jetpack Compose is Android\'s modern declarative UI toolkit. Composable functions, state management, theming, animations, and Material Design 3 integration.',
        resources: [
            { type: 'official', title: 'Compose Documentation', url: 'https://developer.android.com/develop/ui/compose' },
            { type: 'video', title: 'Jetpack Compose Full Course', url: 'https://www.youtube.com/watch?v=6_wK_Ud8--0' },
        ],
    },
    'xml-layouts': {
        id: 'xml-layouts',
        title: 'XML Layouts (Legacy)',
        description: 'Traditional Android UI uses XML layouts. ConstraintLayout, RecyclerView, Fragments, and View Binding. Still used in many existing apps and libraries.',
        resources: [
            { type: 'official', title: 'Layouts Guide', url: 'https://developer.android.com/develop/ui/views/layout/declaring-layout' },
        ],
    },
    'material-design': {
        id: 'material-design',
        title: 'Material Design 3',
        description: 'Material Design 3 (Material You) provides guidelines, components, and theming for beautiful, consistent Android UIs. Dynamic color, typography, and shape systems.',
        resources: [
            { type: 'official', title: 'Material Design 3', url: 'https://m3.material.io/' },
            { type: 'official', title: 'Material Components Android', url: 'https://github.com/material-components/material-components-android' },
        ],
    },

    // ── Architecture ──
    mvvm: {
        id: 'mvvm',
        title: 'MVVM Architecture',
        description: 'Model-View-ViewModel is the recommended architecture for Android. Separation of concerns, testability, and survival across configuration changes with ViewModels.',
        resources: [
            { type: 'official', title: 'App Architecture Guide', url: 'https://developer.android.com/topic/architecture' },
        ],
    },
    viewmodel: {
        id: 'viewmodel',
        title: 'ViewModel',
        description: 'ViewModel stores and manages UI-related data in a lifecycle-conscious way. Survives configuration changes like screen rotation. Foundation of MVVM.',
        resources: [
            { type: 'official', title: 'ViewModel Guide', url: 'https://developer.android.com/topic/libraries/architecture/viewmodel' },
        ],
    },
    'live-data': {
        id: 'live-data',
        title: 'LiveData / StateFlow',
        description: 'Observable data holders that respect the lifecycle. LiveData (lifecycle-aware) and Kotlin StateFlow/SharedFlow for reactive UI updates.',
        resources: [
            { type: 'official', title: 'LiveData Guide', url: 'https://developer.android.com/topic/libraries/architecture/livedata' },
        ],
    },

    // ── Navigation ──
    navigation: {
        id: 'navigation',
        title: 'Navigation Component',
        description: 'Android Navigation Component handles fragment transactions, deep links, back stack, and navigation graphs. Works with both Compose and XML-based UIs.',
        resources: [
            { type: 'official', title: 'Navigation Documentation', url: 'https://developer.android.com/guide/navigation' },
        ],
    },

    // ── Networking ──
    retrofit: {
        id: 'retrofit',
        title: 'Retrofit',
        description: 'Retrofit is the most popular HTTP client for Android. Type-safe API definitions, converters (Gson/Moshi), interceptors, and integration with Kotlin coroutines.',
        resources: [
            { type: 'official', title: 'Retrofit Documentation', url: 'https://square.github.io/retrofit/' },
            { type: 'video', title: 'Retrofit Tutorial', url: 'https://www.youtube.com/watch?v=t6Sql3WMAnk' },
        ],
    },
    ktor: {
        id: 'ktor',
        title: 'Ktor Client',
        description: 'Ktor is a Kotlin-native HTTP client built by JetBrains. Coroutine-based, multiplatform support, and Kotlin-idiomatic API design.',
        resources: [
            { type: 'official', title: 'Ktor Documentation', url: 'https://ktor.io/docs/welcome.html' },
        ],
    },
    'okhttp': {
        id: 'okhttp',
        title: 'OkHttp',
        description: 'OkHttp is the underlying HTTP client for Retrofit. Connection pooling, caching, interceptors, and WebSocket support.',
        resources: [
            { type: 'official', title: 'OkHttp Documentation', url: 'https://square.github.io/okhttp/' },
        ],
    },

    // ── Data Storage ──
    room: {
        id: 'room',
        title: 'Room Database',
        description: 'Room is Android\'s abstraction over SQLite. Entities, DAOs, compile-time query verification, migrations, and Flow/LiveData for reactive queries.',
        resources: [
            { type: 'official', title: 'Room Documentation', url: 'https://developer.android.com/training/data-storage/room' },
        ],
    },
    datastore: {
        id: 'datastore',
        title: 'DataStore',
        description: 'DataStore replaces SharedPreferences. Preferences DataStore for key-value pairs and Proto DataStore for typed objects, both with coroutine and Flow support.',
        resources: [
            { type: 'official', title: 'DataStore Guide', url: 'https://developer.android.com/topic/libraries/architecture/datastore' },
        ],
    },

    // ── Dependency Injection ──
    hilt: {
        id: 'hilt',
        title: 'Hilt',
        description: 'Hilt is Android\'s recommended dependency injection library built on Dagger. Simplified setup, Android-specific components, ViewModel injection, and test support.',
        resources: [
            { type: 'official', title: 'Hilt Documentation', url: 'https://developer.android.com/training/dependency-injection/hilt-android' },
        ],
    },
    koin: {
        id: 'koin',
        title: 'Koin',
        description: 'Koin is a lightweight Kotlin DI framework. DSL-based module definitions, no code generation, and easy-to-understand service locator pattern.',
        resources: [
            { type: 'official', title: 'Koin Documentation', url: 'https://insert-koin.io/docs/quickstart/android/' },
        ],
    },

    // ── Async ──
    coroutines: {
        id: 'coroutines',
        title: 'Kotlin Coroutines',
        description: 'Coroutines provide lightweight concurrency in Kotlin. suspend functions, Dispatchers, Flow, async/await, structured concurrency, and cancellation.',
        resources: [
            { type: 'official', title: 'Coroutines Guide', url: 'https://kotlinlang.org/docs/coroutines-guide.html' },
            { type: 'video', title: 'Coroutines Explained', url: 'https://www.youtube.com/watch?v=ShNhJ3V3mfg' },
        ],
    },
    flow: {
        id: 'flow',
        title: 'Kotlin Flow',
        description: 'Flow is Kotlin\'s reactive streams API. Cold streams, operators (map, filter, combine), StateFlow, SharedFlow, and integration with Room and Retrofit.',
        resources: [
            { type: 'official', title: 'Flow Documentation', url: 'https://kotlinlang.org/docs/flow.html' },
        ],
    },

    // ── Testing ──
    'unit-testing': {
        id: 'unit-testing',
        title: 'Unit Testing',
        description: 'JUnit, Mockito/MockK for mocking, and Turbine for Flow testing. Test ViewModels, repositories, and use cases in isolation.',
        resources: [
            { type: 'official', title: 'Testing Guide', url: 'https://developer.android.com/training/testing' },
        ],
    },
    'ui-testing': {
        id: 'ui-testing',
        title: 'UI Testing',
        description: 'Espresso for View-based UIs, Compose Testing for Compose UIs. Assertions, interactions, and screenshot testing for UI verification.',
        resources: [
            { type: 'official', title: 'Espresso Guide', url: 'https://developer.android.com/training/testing/espresso' },
            { type: 'official', title: 'Compose Testing', url: 'https://developer.android.com/develop/ui/compose/testing' },
        ],
    },

    // ── Publishing ──
    'play-store': {
        id: 'play-store',
        title: 'Google Play Store',
        description: 'Publishing to the Play Store: signing, release tracks (internal/closed/open testing), Play Console, store listing optimization, and review process.',
        resources: [
            { type: 'official', title: 'Publish Your App', url: 'https://developer.android.com/studio/publish' },
        ],
    },
    'app-signing': {
        id: 'app-signing',
        title: 'App Signing & Security',
        description: 'App signing with Play App Signing, ProGuard/R8 code shrinking, network security config, encrypted storage, and biometric authentication.',
        resources: [
            { type: 'official', title: 'App Signing', url: 'https://developer.android.com/studio/publish/app-signing' },
        ],
    },

    // ── Performance ──
    performance: {
        id: 'performance',
        title: 'Performance Optimization',
        description: 'Android Profiler, memory leaks (LeakCanary), layout performance, startup optimization, Baseline Profiles, and reducing APK size.',
        resources: [
            { type: 'official', title: 'Performance Guide', url: 'https://developer.android.com/topic/performance' },
        ],
    },
};

// ─── Android Sections ────────────────────────────────────────────
export const ANDROID_SECTIONS: RoadmapSection[] = [
    {
        id: 'languages',
        title: 'Languages',
        description: 'Kotlin first',
        leftTopics: [
            { id: 'kotlin', title: 'Kotlin' },
        ],
        rightTopics: [
            { id: 'java', title: 'Java' },
        ],
    },
    {
        id: 'fundamentals',
        title: 'Android Fundamentals',
        leftTopics: [
            { id: 'android-studio', title: 'Android Studio' },
            { id: 'app-components', title: 'App Components' },
        ],
        rightTopics: [
            { id: 'activity-lifecycle', title: 'Activity Lifecycle' },
            { id: 'android-manifest', title: 'AndroidManifest.xml' },
        ],
    },
    {
        id: 'ui',
        title: 'User Interface',
        leftTopics: [
            { id: 'jetpack-compose', title: 'Jetpack Compose' },
            { id: 'material-design', title: 'Material Design 3' },
        ],
        rightTopics: [
            { id: 'xml-layouts', title: 'XML Layouts (Legacy)' },
        ],
    },
    {
        id: 'architecture',
        title: 'Architecture',
        leftTopics: [
            { id: 'mvvm', title: 'MVVM' },
            { id: 'viewmodel', title: 'ViewModel' },
        ],
        rightTopics: [
            { id: 'live-data', title: 'LiveData / StateFlow' },
        ],
    },
    {
        id: 'navigation-section',
        title: 'Navigation',
        rightTopics: [
            { id: 'navigation', title: 'Navigation Component' },
        ],
    },
    {
        id: 'networking',
        title: 'Networking',
        leftTopics: [
            { id: 'retrofit', title: 'Retrofit' },
            { id: 'okhttp', title: 'OkHttp' },
        ],
        rightTopics: [
            { id: 'ktor', title: 'Ktor Client' },
        ],
    },
    {
        id: 'storage',
        title: 'Data Storage',
        leftTopics: [
            { id: 'room', title: 'Room Database' },
        ],
        rightTopics: [
            { id: 'datastore', title: 'DataStore' },
        ],
    },
    {
        id: 'di',
        title: 'Dependency Injection',
        leftTopics: [
            { id: 'hilt', title: 'Hilt' },
        ],
        rightTopics: [
            { id: 'koin', title: 'Koin' },
        ],
    },
    {
        id: 'async',
        title: 'Asynchronous Programming',
        leftTopics: [
            { id: 'coroutines', title: 'Kotlin Coroutines' },
        ],
        rightTopics: [
            { id: 'flow', title: 'Kotlin Flow' },
        ],
    },
    {
        id: 'testing',
        title: 'Testing',
        leftTopics: [
            { id: 'unit-testing', title: 'Unit Testing' },
        ],
        rightTopics: [
            { id: 'ui-testing', title: 'UI Testing' },
        ],
    },
    {
        id: 'publishing',
        title: 'Publishing',
        description: 'Ship it!',
        leftTopics: [
            { id: 'play-store', title: 'Google Play Store' },
        ],
        rightTopics: [
            { id: 'app-signing', title: 'App Signing & Security' },
        ],
    },
    {
        id: 'performance-section',
        title: 'Performance',
        rightTopics: [
            { id: 'performance', title: 'Performance Optimization' },
        ],
    },
];
