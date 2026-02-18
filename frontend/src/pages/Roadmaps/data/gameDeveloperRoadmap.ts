import type { Topic, RoadmapSection } from './frontendRoadmap';

export const GAME_DEV_TOPICS: Record<string, Topic> = {
    // ── Languages ──
    'cpp': {
        id: 'cpp',
        title: 'C++',
        description: 'C++ is the industry-standard language for game engines. Memory management, pointers, templates, STL, and performance optimization. Used in Unreal Engine.',
        resources: [
            { type: 'video', title: 'C++ Full Course', url: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y' },
            { type: 'official', title: 'C++ Reference', url: 'https://en.cppreference.com/' },
        ],
    },
    'csharp': {
        id: 'csharp',
        title: 'C#',
        description: 'C# is the primary language for Unity. OOP, delegates, events, LINQ, async/await, and the .NET ecosystem. Easier learning curve than C++.',
        resources: [
            { type: 'official', title: 'C# Documentation', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
            { type: 'video', title: 'C# Full Course', url: 'https://www.youtube.com/watch?v=GhQdlMFylQ8' },
        ],
    },
    gdscript: {
        id: 'gdscript',
        title: 'GDScript',
        description: 'GDScript is Godot\'s Python-like scripting language. Dynamically typed, built for game logic, tight engine integration, and fast prototyping.',
        resources: [
            { type: 'official', title: 'GDScript Basics', url: 'https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html' },
        ],
    },

    // ── Math & Physics ──
    'game-math': {
        id: 'game-math',
        title: 'Game Mathematics',
        description: 'Vectors (2D/3D), matrices, quaternions, trigonometry, linear interpolation (lerp), dot/cross products, and coordinate systems.',
        resources: [
            { type: 'video', title: 'Math for Game Devs', url: 'https://www.youtube.com/watch?v=MOYiVLEnhrw' },
        ],
    },
    physics: {
        id: 'physics',
        title: 'Game Physics',
        description: 'Rigid body dynamics, collision detection (AABB, SAT), raycasting, forces, gravity, joints, and physics engine integration.',
        resources: [
            { type: 'article', title: 'Game Physics Guide', url: 'https://www.toptal.com/game/video-game-physics-part-i-an-introduction-to-rigid-body-dynamics' },
        ],
    },

    // ── Game Engines ──
    unity: {
        id: 'unity',
        title: 'Unity',
        description: 'Unity is the most popular game engine for indie and mobile games. C# scripting, scene system, prefabs, physics, animation, and the Asset Store.',
        resources: [
            { type: 'official', title: 'Unity Learn', url: 'https://learn.unity.com/' },
            { type: 'video', title: 'Unity Full Course', url: 'https://www.youtube.com/watch?v=gB1F9G0JXOo' },
        ],
    },
    unreal: {
        id: 'unreal',
        title: 'Unreal Engine',
        description: 'Unreal Engine is the industry standard for AAA games. C++ and Blueprints, Nanite, Lumen, MetaHuman, and photorealistic rendering.',
        resources: [
            { type: 'official', title: 'Unreal Documentation', url: 'https://docs.unrealengine.com/' },
            { type: 'video', title: 'Unreal Engine 5 Course', url: 'https://www.youtube.com/watch?v=6UlU_FsicL8' },
        ],
    },
    godot: {
        id: 'godot',
        title: 'Godot',
        description: 'Godot is a free, open-source game engine. Scene system, GDScript, node-based architecture, 2D/3D support, and growing community.',
        resources: [
            { type: 'official', title: 'Godot Documentation', url: 'https://docs.godotengine.org/' },
            { type: 'video', title: 'Godot Full Course', url: 'https://www.youtube.com/watch?v=LOhfqjmasi0' },
        ],
    },

    // ── Game Design ──
    'game-design': {
        id: 'game-design',
        title: 'Game Design Fundamentals',
        description: 'Game loops, core mechanics, feedback systems, balance, difficulty curves, player motivation, and the MDA framework (Mechanics, Dynamics, Aesthetics).',
        resources: [
            { type: 'video', title: 'Game Design Fundamentals', url: 'https://www.youtube.com/watch?v=iKBs0wnRvCE' },
        ],
    },
    'level-design': {
        id: 'level-design',
        title: 'Level Design',
        description: 'Creating engaging game spaces. Flow, pacing, environmental storytelling, guiding players, and iterative playtesting.',
        resources: [
            { type: 'video', title: 'Level Design Principles', url: 'https://www.youtube.com/watch?v=iNEe3KhMvXI' },
        ],
    },

    // ── Graphics ──
    '2d-graphics': {
        id: '2d-graphics',
        title: '2D Graphics',
        description: 'Sprites, sprite sheets, tile maps, parallax scrolling, pixel art, animation (frame-by-frame, skeletal), and 2D lighting.',
        resources: [
            { type: 'video', title: '2D Game Art Guide', url: 'https://www.youtube.com/watch?v=lmbEpI0Gbtc' },
        ],
    },
    '3d-graphics': {
        id: '3d-graphics',
        title: '3D Graphics',
        description: 'Meshes, textures, materials, shaders, lighting (PBR), shadows, post-processing, LOD, and rendering pipelines (forward vs deferred).',
        resources: [
            { type: 'video', title: '3D Graphics Explained', url: 'https://www.youtube.com/watch?v=C8YtdC8mxTU' },
        ],
    },
    shaders: {
        id: 'shaders',
        title: 'Shaders',
        description: 'Vertex and fragment shaders, HLSL/GLSL, shader graphs (Unity/Unreal), cel shading, water effects, and custom visual effects.',
        resources: [
            { type: 'article', title: 'Book of Shaders', url: 'https://thebookofshaders.com/' },
        ],
    },

    // ── Animation ──
    animation: {
        id: 'animation',
        title: 'Animation',
        description: 'Skeletal animation, blend trees, state machines, IK (inverse kinematics), root motion, animation events, and animation curves.',
        resources: [
            { type: 'video', title: '12 Principles of Animation', url: 'https://www.youtube.com/watch?v=uDqjIdI4bF4' },
        ],
    },

    // ── Audio ──
    audio: {
        id: 'audio',
        title: 'Game Audio',
        description: 'Sound effects, music, spatial audio (3D), audio mixing, adaptive audio, middleware (FMOD, Wwise), and audio implementation.',
        resources: [
            { type: 'article', title: 'Game Audio Guide', url: 'https://www.gamedeveloper.com/audio/the-guide-to-implementing-2d-platformers' },
        ],
    },

    // ── AI ──
    'game-ai': {
        id: 'game-ai',
        title: 'Game AI',
        description: 'Pathfinding (A*, NavMesh), finite state machines, behavior trees, steering behaviors, decision making, and NPC intelligence.',
        resources: [
            { type: 'video', title: 'Game AI Basics', url: 'https://www.youtube.com/watch?v=6BrZryMz-ac' },
        ],
    },

    // ── Networking ──
    'multiplayer': {
        id: 'multiplayer',
        title: 'Multiplayer & Networking',
        description: 'Client-server architecture, peer-to-peer, state synchronization, lag compensation, prediction, rollback netcode, and matchmaking.',
        resources: [
            { type: 'article', title: 'Multiplayer Game Programming', url: 'https://gafferongames.com/' },
        ],
    },

    // ── Platforms ──
    'mobile-games': {
        id: 'mobile-games',
        title: 'Mobile Games',
        description: 'Touch controls, performance optimization for mobile, monetization (IAP, ads), app store publishing, and mobile-specific design patterns.',
        resources: [
            { type: 'article', title: 'Mobile Game Dev Guide', url: 'https://unity.com/solutions/mobile' },
        ],
    },
    'web-games': {
        id: 'web-games',
        title: 'Web Games',
        description: 'Browser-based games with HTML5 Canvas, WebGL, Phaser.js, Three.js, and WebGPU. Export from Unity/Godot to web.',
        resources: [
            { type: 'official', title: 'Phaser.js', url: 'https://phaser.io/' },
        ],
    },

    // ── Publishing ──
    'game-publishing': {
        id: 'game-publishing',
        title: 'Publishing & Distribution',
        description: 'Steam, itch.io, Epic Games Store, console publishing (Nintendo/PlayStation/Xbox), marketing, wishlisting, and launch strategies.',
        resources: [
            { type: 'official', title: 'Steamworks', url: 'https://partner.steamgames.com/' },
        ],
    },
};

export const GAME_DEV_SECTIONS: RoadmapSection[] = [
    {
        id: 'languages',
        title: 'Programming Languages',
        leftTopics: [
            { id: 'cpp', title: 'C++' },
            { id: 'csharp', title: 'C#' },
        ],
        rightTopics: [{ id: 'gdscript', title: 'GDScript' }],
    },
    {
        id: 'math',
        title: 'Math & Physics',
        leftTopics: [{ id: 'game-math', title: 'Game Math' }],
        rightTopics: [{ id: 'physics', title: 'Game Physics' }],
    },
    {
        id: 'engines',
        title: 'Game Engines',
        description: 'Pick one & master it',
        leftTopics: [
            { id: 'unity', title: 'Unity' },
            { id: 'unreal', title: 'Unreal Engine' },
        ],
        rightTopics: [{ id: 'godot', title: 'Godot' }],
    },
    {
        id: 'design',
        title: 'Game Design',
        leftTopics: [{ id: 'game-design', title: 'Design Fundamentals' }],
        rightTopics: [{ id: 'level-design', title: 'Level Design' }],
    },
    {
        id: 'graphics',
        title: 'Graphics',
        leftTopics: [
            { id: '2d-graphics', title: '2D Graphics' },
            { id: '3d-graphics', title: '3D Graphics' },
        ],
        rightTopics: [{ id: 'shaders', title: 'Shaders' }],
    },
    {
        id: 'animation-section',
        title: 'Animation',
        rightTopics: [{ id: 'animation', title: 'Animation' }],
    },
    {
        id: 'audio-section',
        title: 'Audio',
        rightTopics: [{ id: 'audio', title: 'Game Audio' }],
    },
    {
        id: 'ai-section',
        title: 'Game AI',
        rightTopics: [{ id: 'game-ai', title: 'Game AI' }],
    },
    {
        id: 'networking',
        title: 'Multiplayer',
        rightTopics: [{ id: 'multiplayer', title: 'Multiplayer & Networking' }],
    },
    {
        id: 'platforms',
        title: 'Platforms',
        leftTopics: [{ id: 'mobile-games', title: 'Mobile Games' }],
        rightTopics: [{ id: 'web-games', title: 'Web Games' }],
    },
    {
        id: 'publishing',
        title: 'Publishing',
        description: 'Ship your game',
        rightTopics: [{ id: 'game-publishing', title: 'Publishing & Distribution' }],
    },
];
