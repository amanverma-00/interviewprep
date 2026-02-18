import type { Topic, RoadmapSection } from './frontendRoadmap';

export const IOS_TOPICS: Record<string, Topic> = {
    // ── Languages ──
    swift: {
        id: 'swift',
        title: 'Swift',
        description: 'Swift is Apple\'s modern programming language for iOS. Type safety, optionals, closures, protocols, generics, async/await, and value types vs reference types.',
        resources: [
            { type: 'official', title: 'The Swift Programming Language', url: 'https://docs.swift.org/swift-book/' },
            { type: 'video', title: 'Swift Full Course', url: 'https://www.youtube.com/watch?v=comQ1-x2a1Q' },
            { type: 'course', title: '100 Days of Swift', url: 'https://www.hackingwithswift.com/100' },
        ],
    },
    'objective-c': {
        id: 'objective-c',
        title: 'Objective-C (Legacy)',
        description: 'Objective-C was the original iOS language. Understanding it helps with legacy codebases and C-based APIs. Message passing, categories, and bridging with Swift.',
        resources: [
            { type: 'official', title: 'Objective-C Guide', url: 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/' },
        ],
    },

    // ── Xcode ──
    xcode: {
        id: 'xcode',
        title: 'Xcode',
        description: 'Xcode is Apple\'s IDE for iOS development. Interface Builder, Instruments profiler, Simulator, debugging tools, and provisioning profiles.',
        resources: [
            { type: 'official', title: 'Xcode Overview', url: 'https://developer.apple.com/xcode/' },
        ],
    },

    // ── UI Frameworks ──
    swiftui: {
        id: 'swiftui',
        title: 'SwiftUI',
        description: 'SwiftUI is Apple\'s declarative UI framework. Views, modifiers, state management (@State, @Binding, @ObservedObject, @EnvironmentObject), animations, and navigation.',
        resources: [
            { type: 'official', title: 'SwiftUI Documentation', url: 'https://developer.apple.com/documentation/swiftui/' },
            { type: 'course', title: '100 Days of SwiftUI', url: 'https://www.hackingwithswift.com/100/swiftui' },
            { type: 'video', title: 'SwiftUI Full Course', url: 'https://www.youtube.com/watch?v=F2ojC6TNwws' },
        ],
    },
    uikit: {
        id: 'uikit',
        title: 'UIKit (Legacy)',
        description: 'UIKit is the imperative UI framework. UIViewController, UITableView, UICollectionView, Auto Layout, and Storyboards. Still used in many production apps.',
        resources: [
            { type: 'official', title: 'UIKit Documentation', url: 'https://developer.apple.com/documentation/uikit' },
        ],
    },

    // ── Architecture ──
    mvvm: {
        id: 'mvvm',
        title: 'MVVM',
        description: 'Model-View-ViewModel separates UI logic from business logic. Combine with SwiftUI for reactive data flow. ViewModels expose published properties to views.',
        resources: [
            { type: 'article', title: 'MVVM in Swift', url: 'https://www.raywenderlich.com/34-design-patterns-by-tutorials-mvvm' },
        ],
    },
    'clean-architecture': {
        id: 'clean-architecture',
        title: 'Clean Architecture',
        description: 'Clean Architecture with use cases, repositories, and dependency injection. VIPER pattern for complex UIKit apps. Domain-driven design for iOS.',
        resources: [
            { type: 'article', title: 'Clean Architecture for iOS', url: 'https://nalexn.github.io/clean-architecture-swiftui/' },
        ],
    },

    // ── Data & Networking ──
    urlsession: {
        id: 'urlsession',
        title: 'URLSession',
        description: 'URLSession is Apple\'s networking API. HTTP requests, async/await, data tasks, download/upload tasks, background sessions, and request configuration.',
        resources: [
            { type: 'official', title: 'URLSession Documentation', url: 'https://developer.apple.com/documentation/foundation/urlsession' },
        ],
    },
    alamofire: {
        id: 'alamofire',
        title: 'Alamofire',
        description: 'Alamofire is the most popular third-party HTTP library for Swift. Cleaner API, request chaining, response validation, and interceptors.',
        resources: [
            { type: 'official', title: 'Alamofire GitHub', url: 'https://github.com/Alamofire/Alamofire' },
        ],
    },
    coredata: {
        id: 'coredata',
        title: 'Core Data',
        description: 'Core Data is Apple\'s persistence framework. Managed object context, fetch requests, relationships, migrations, and CloudKit integration for sync.',
        resources: [
            { type: 'official', title: 'Core Data', url: 'https://developer.apple.com/documentation/coredata' },
        ],
    },
    swiftdata: {
        id: 'swiftdata',
        title: 'SwiftData',
        description: 'SwiftData is Apple\'s modern persistence framework (iOS 17+). Uses @Model macro, automatic CloudKit sync, and integrates natively with SwiftUI.',
        resources: [
            { type: 'official', title: 'SwiftData Documentation', url: 'https://developer.apple.com/documentation/swiftdata' },
        ],
    },
    userdefaults: {
        id: 'userdefaults',
        title: 'UserDefaults & Keychain',
        description: 'UserDefaults for simple key-value storage. Keychain for secure credential storage including passwords, tokens, and certificates.',
        resources: [
            { type: 'official', title: 'UserDefaults', url: 'https://developer.apple.com/documentation/foundation/userdefaults' },
        ],
    },

    // ── Concurrency ──
    'swift-concurrency': {
        id: 'swift-concurrency',
        title: 'Swift Concurrency',
        description: 'async/await, structured concurrency with TaskGroup, actors for data-race safety, MainActor for UI updates, and Sendable protocol.',
        resources: [
            { type: 'official', title: 'Swift Concurrency', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/' },
            { type: 'video', title: 'Swift Concurrency Explained', url: 'https://www.youtube.com/watch?v=HqjqGiMi55E' },
        ],
    },
    combine: {
        id: 'combine',
        title: 'Combine',
        description: 'Combine is Apple\'s reactive framework. Publishers, subscribers, operators (map, filter, merge), and integration with URLSession and SwiftUI.',
        resources: [
            { type: 'official', title: 'Combine Documentation', url: 'https://developer.apple.com/documentation/combine' },
        ],
    },

    // ── Navigation ──
    navigation: {
        id: 'navigation',
        title: 'Navigation',
        description: 'SwiftUI NavigationStack/NavigationSplitView, programmatic navigation, deep linking, TabView, and UIKit navigation controllers.',
        resources: [
            { type: 'official', title: 'NavigationStack', url: 'https://developer.apple.com/documentation/swiftui/navigationstack' },
        ],
    },

    // ── Dependency Management ──
    spm: {
        id: 'spm',
        title: 'Swift Package Manager',
        description: 'SPM is the official dependency manager for Swift. Package.swift, resolving dependencies, and creating your own packages. Integrated into Xcode.',
        resources: [
            { type: 'official', title: 'SPM Documentation', url: 'https://www.swift.org/getting-started/cli-swiftpm/' },
        ],
    },
    cocoapods: {
        id: 'cocoapods',
        title: 'CocoaPods',
        description: 'CocoaPods is a third-party dependency manager using a Podfile. Still widely used for libraries that don\'t support SPM yet.',
        resources: [
            { type: 'official', title: 'CocoaPods Guides', url: 'https://guides.cocoapods.org/' },
        ],
    },

    // ── Testing ──
    xctest: {
        id: 'xctest',
        title: 'XCTest',
        description: 'XCTest is Apple\'s testing framework. Unit tests, UI tests (XCUIApplication), async testing, performance tests, and test plans.',
        resources: [
            { type: 'official', title: 'XCTest', url: 'https://developer.apple.com/documentation/xctest' },
        ],
    },
    'swift-testing': {
        id: 'swift-testing',
        title: 'Swift Testing',
        description: 'Swift Testing is the modern testing framework (Xcode 16+). @Test macro, parameterized tests, and cleaner assertion syntax with #expect.',
        resources: [
            { type: 'official', title: 'Swift Testing', url: 'https://developer.apple.com/documentation/testing' },
        ],
    },

    // ── App Distribution ──
    'app-store': {
        id: 'app-store',
        title: 'App Store Publishing',
        description: 'App Store Connect, provisioning profiles, certificates, TestFlight for beta testing, App Review guidelines, and App Store Optimization (ASO).',
        resources: [
            { type: 'official', title: 'App Distribution Guide', url: 'https://developer.apple.com/distribute/' },
        ],
    },
    'ci-cd': {
        id: 'ci-cd',
        title: 'CI/CD (Xcode Cloud)',
        description: 'Automated building, testing, and distribution. Xcode Cloud, Fastlane for automation, GitHub Actions for iOS, and managing signing.',
        resources: [
            { type: 'official', title: 'Xcode Cloud', url: 'https://developer.apple.com/xcode-cloud/' },
            { type: 'official', title: 'Fastlane', url: 'https://fastlane.tools/' },
        ],
    },

    // ── Platform Features ──
    notifications: {
        id: 'notifications',
        title: 'Push Notifications',
        description: 'APNs (Apple Push Notification service), local notifications, notification extensions, rich notifications with images/actions, and notification grouping.',
        resources: [
            { type: 'official', title: 'User Notifications', url: 'https://developer.apple.com/documentation/usernotifications' },
        ],
    },
    widgets: {
        id: 'widgets',
        title: 'Widgets & Live Activities',
        description: 'WidgetKit for creating home screen widgets. Timeline providers, widget families, Live Activities for real-time updates on the Lock Screen.',
        resources: [
            { type: 'official', title: 'WidgetKit', url: 'https://developer.apple.com/documentation/widgetkit' },
        ],
    },
};

export const IOS_SECTIONS: RoadmapSection[] = [
    {
        id: 'languages',
        title: 'Languages',
        description: 'Swift first',
        leftTopics: [{ id: 'swift', title: 'Swift' }],
        rightTopics: [{ id: 'objective-c', title: 'Objective-C (Legacy)' }],
    },
    {
        id: 'ide',
        title: 'Development Environment',
        rightTopics: [{ id: 'xcode', title: 'Xcode' }],
    },
    {
        id: 'ui',
        title: 'UI Frameworks',
        leftTopics: [{ id: 'swiftui', title: 'SwiftUI' }],
        rightTopics: [{ id: 'uikit', title: 'UIKit (Legacy)' }],
    },
    {
        id: 'architecture',
        title: 'Architecture',
        leftTopics: [{ id: 'mvvm', title: 'MVVM' }],
        rightTopics: [{ id: 'clean-architecture', title: 'Clean Architecture' }],
    },
    {
        id: 'networking',
        title: 'Networking',
        leftTopics: [{ id: 'urlsession', title: 'URLSession' }],
        rightTopics: [{ id: 'alamofire', title: 'Alamofire' }],
    },
    {
        id: 'storage',
        title: 'Data Persistence',
        leftTopics: [
            { id: 'coredata', title: 'Core Data' },
            { id: 'swiftdata', title: 'SwiftData' },
        ],
        rightTopics: [{ id: 'userdefaults', title: 'UserDefaults & Keychain' }],
    },
    {
        id: 'concurrency',
        title: 'Concurrency',
        leftTopics: [{ id: 'swift-concurrency', title: 'Swift Concurrency' }],
        rightTopics: [{ id: 'combine', title: 'Combine' }],
    },
    {
        id: 'navigation-section',
        title: 'Navigation',
        rightTopics: [{ id: 'navigation', title: 'Navigation' }],
    },
    {
        id: 'deps',
        title: 'Dependency Management',
        leftTopics: [{ id: 'spm', title: 'Swift Package Manager' }],
        rightTopics: [{ id: 'cocoapods', title: 'CocoaPods' }],
    },
    {
        id: 'testing',
        title: 'Testing',
        leftTopics: [{ id: 'xctest', title: 'XCTest' }],
        rightTopics: [{ id: 'swift-testing', title: 'Swift Testing' }],
    },
    {
        id: 'distribution',
        title: 'Distribution',
        description: 'Ship it!',
        leftTopics: [{ id: 'app-store', title: 'App Store' }],
        rightTopics: [{ id: 'ci-cd', title: 'CI/CD' }],
    },
    {
        id: 'platform',
        title: 'Platform Features',
        leftTopics: [{ id: 'notifications', title: 'Push Notifications' }],
        rightTopics: [{ id: 'widgets', title: 'Widgets & Live Activities' }],
    },
];
