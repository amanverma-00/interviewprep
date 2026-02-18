import type { Topic, RoadmapSection } from './frontendRoadmap';

export const CS_TOPICS: Record<string, Topic> = {
    // ── Programming ──
    'programming-fundamentals': {
        id: 'programming-fundamentals',
        title: 'Programming Fundamentals',
        description: 'Variables, data types, control flow (if/else, loops), functions, scope, recursion, and basic I/O. The absolute foundation of computer science.',
        resources: [
            { type: 'course', title: 'CS50 (Harvard)', url: 'https://cs50.harvard.edu/x/' },
            { type: 'video', title: 'Programming Fundamentals', url: 'https://www.youtube.com/watch?v=zOjov-2OZ0E' },
        ],
    },
    'oop': {
        id: 'oop',
        title: 'Object-Oriented Programming',
        description: 'Classes, objects, inheritance, polymorphism, encapsulation, abstraction, interfaces, and design patterns. The dominant programming paradigm.',
        resources: [
            { type: 'video', title: 'OOP Explained', url: 'https://www.youtube.com/watch?v=m_MQYyJpIjg' },
        ],
    },
    'functional-programming': {
        id: 'functional-programming',
        title: 'Functional Programming',
        description: 'Pure functions, immutability, higher-order functions, map/filter/reduce, closures, and lambda calculus. Increasingly important in modern languages.',
        resources: [
            { type: 'video', title: 'Functional Programming', url: 'https://www.youtube.com/watch?v=e-5obm1G_FY' },
        ],
    },

    // ── Data Structures ──
    'arrays-strings': {
        id: 'arrays-strings',
        title: 'Arrays & Strings',
        description: 'Contiguous memory, indexing, slicing, dynamic arrays, string manipulation, and two-pointer techniques. The most common data structures.',
        resources: [
            { type: 'article', title: 'Arrays (GeeksforGeeks)', url: 'https://www.geeksforgeeks.org/array-data-structure/' },
        ],
    },
    'linked-lists': {
        id: 'linked-lists',
        title: 'Linked Lists',
        description: 'Singly linked, doubly linked, circular. Insertion, deletion, reversal, cycle detection (Floyd\'s), and merge operations.',
        resources: [
            { type: 'video', title: 'Linked Lists', url: 'https://www.youtube.com/watch?v=njTh_OwMljA' },
        ],
    },
    'stacks-queues': {
        id: 'stacks-queues',
        title: 'Stacks & Queues',
        description: 'LIFO (stacks) and FIFO (queues). Implementations, priority queues, deques, and applications (expression evaluation, BFS).',
        resources: [
            { type: 'video', title: 'Stacks & Queues', url: 'https://www.youtube.com/watch?v=wjI1WNcIntg' },
        ],
    },
    'hash-tables': {
        id: 'hash-tables',
        title: 'Hash Tables',
        description: 'Hash functions, collision resolution (chaining, open addressing), load factor, and O(1) average lookup. The most practical data structure.',
        resources: [
            { type: 'video', title: 'Hash Tables', url: 'https://www.youtube.com/watch?v=KyUTuwz_b7Q' },
        ],
    },
    'trees': {
        id: 'trees',
        title: 'Trees',
        description: 'Binary trees, BSTs, balanced trees (AVL, Red-Black), tree traversals (inorder, preorder, postorder, level-order), and B-trees for databases.',
        resources: [
            { type: 'video', title: 'Binary Trees', url: 'https://www.youtube.com/watch?v=fAAZixBzIAI' },
        ],
    },
    'heaps': {
        id: 'heaps',
        title: 'Heaps',
        description: 'Min-heap, max-heap, heap property, heapify, priority queue implementation, and heap sort. Key for scheduling and top-K problems.',
        resources: [
            { type: 'video', title: 'Heaps Explained', url: 'https://www.youtube.com/watch?v=t0Cq6tVNRBA' },
        ],
    },
    'graphs': {
        id: 'graphs',
        title: 'Graphs',
        description: 'Directed/undirected, weighted, adjacency list/matrix, BFS, DFS, topological sort, shortest path (Dijkstra\'s, Bellman-Ford), and MST (Kruskal\'s, Prim\'s).',
        resources: [
            { type: 'video', title: 'Graph Algorithms', url: 'https://www.youtube.com/watch?v=tWVWeAqZ0WU' },
        ],
    },
    'tries': {
        id: 'tries',
        title: 'Tries',
        description: 'Prefix trees for string operations. Autocomplete, spell checking, IP routing, and word search. Space-efficient with proper implementation.',
        resources: [
            { type: 'video', title: 'Tries Explained', url: 'https://www.youtube.com/watch?v=oobqoCJlHA0' },
        ],
    },

    // ── Algorithms ──
    'sorting': {
        id: 'sorting',
        title: 'Sorting Algorithms',
        description: 'Bubble, selection, insertion, merge sort, quick sort, heap sort, counting sort, radix sort. Time/space complexity analysis for each.',
        resources: [
            { type: 'video', title: 'Sorting Algorithms Visualized', url: 'https://www.youtube.com/watch?v=kPRA0W1kECg' },
        ],
    },
    'searching': {
        id: 'searching',
        title: 'Searching Algorithms',
        description: 'Linear search, binary search, and binary search variations. Search in rotated arrays, search in 2D matrices, and interpolation search.',
        resources: [
            { type: 'video', title: 'Binary Search', url: 'https://www.youtube.com/watch?v=s4DPM8ct1pI' },
        ],
    },
    'recursion': {
        id: 'recursion',
        title: 'Recursion & Backtracking',
        description: 'Recursive thinking, base cases, call stack, memoization, and backtracking (N-Queens, Sudoku, permutations, combinations).',
        resources: [
            { type: 'video', title: 'Recursion Explained', url: 'https://www.youtube.com/watch?v=IJDJ0kBx2LM' },
        ],
    },
    'dynamic-programming': {
        id: 'dynamic-programming',
        title: 'Dynamic Programming',
        description: 'Overlapping subproblems, optimal substructure, memoization (top-down), tabulation (bottom-up). Classic problems: knapsack, LCS, coin change.',
        resources: [
            { type: 'video', title: 'DP for Beginners', url: 'https://www.youtube.com/watch?v=oBt53YbR9Kk' },
        ],
    },
    'greedy': {
        id: 'greedy',
        title: 'Greedy Algorithms',
        description: 'Making locally optimal choices. Activity selection, Huffman coding, fractional knapsack, and interval scheduling.',
        resources: [
            { type: 'video', title: 'Greedy Algorithms', url: 'https://www.youtube.com/watch?v=bC7o8P_Ste4' },
        ],
    },
    'complexity': {
        id: 'complexity',
        title: 'Big O & Complexity',
        description: 'Time complexity (O(1), O(log n), O(n), O(n log n), O(n²)), space complexity, amortized analysis, and best/average/worst case.',
        resources: [
            { type: 'video', title: 'Big O Notation', url: 'https://www.youtube.com/watch?v=BgLTDT03QtU' },
        ],
    },

    // ── OS ──
    'operating-systems': {
        id: 'operating-systems',
        title: 'Operating Systems',
        description: 'Processes, threads, scheduling (FCFS, SJF, Round Robin), memory management (paging, segmentation), virtual memory, and file systems.',
        resources: [
            { type: 'course', title: 'OSTEP (Free Book)', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/' },
        ],
    },
    'concurrency': {
        id: 'concurrency',
        title: 'Concurrency',
        description: 'Threads, mutexes, semaphores, deadlocks, race conditions, producer-consumer, readers-writers, and concurrent data structures.',
        resources: [
            { type: 'video', title: 'Concurrency Explained', url: 'https://www.youtube.com/watch?v=olYdb0DdGtM' },
        ],
    },

    // ── Networking ──
    'networking': {
        id: 'networking',
        title: 'Computer Networking',
        description: 'OSI model, TCP/IP, HTTP/HTTPS, DNS, sockets, REST, WebSockets, and how data travels across the internet.',
        resources: [
            { type: 'video', title: 'Networking Full Course', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw' },
        ],
    },

    // ── Databases ──
    'databases': {
        id: 'databases',
        title: 'Database Fundamentals',
        description: 'Relational vs NoSQL, ACID properties, SQL basics, indexing, normalization, transactions, and database design principles.',
        resources: [
            { type: 'course', title: 'Databases (Stanford)', url: 'https://online.stanford.edu/courses/soe-ydatabases-databases' },
        ],
    },

    // ── System Design ──
    'system-design': {
        id: 'system-design',
        title: 'System Design Basics',
        description: 'Scalability, load balancing, caching, CDNs, databases (SQL vs NoSQL), message queues, microservices, and CAP theorem.',
        resources: [
            { type: 'article', title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
            { type: 'video', title: 'System Design Course', url: 'https://www.youtube.com/watch?v=F2FmTdLtb_4' },
        ],
    },
};

export const CS_SECTIONS: RoadmapSection[] = [
    {
        id: 'programming',
        title: 'Programming Paradigms',
        leftTopics: [{ id: 'programming-fundamentals', title: 'Programming Fundamentals' }],
        rightTopics: [
            { id: 'oop', title: 'OOP' },
            { id: 'functional-programming', title: 'Functional Programming' },
        ],
    },
    {
        id: 'data-structures',
        title: 'Data Structures',
        description: 'Build the toolkit',
        leftTopics: [
            { id: 'arrays-strings', title: 'Arrays & Strings' },
            { id: 'linked-lists', title: 'Linked Lists' },
            { id: 'stacks-queues', title: 'Stacks & Queues' },
            { id: 'hash-tables', title: 'Hash Tables' },
        ],
        rightTopics: [
            { id: 'trees', title: 'Trees' },
            { id: 'heaps', title: 'Heaps' },
            { id: 'graphs', title: 'Graphs' },
            { id: 'tries', title: 'Tries' },
        ],
    },
    {
        id: 'algorithms',
        title: 'Algorithms',
        leftTopics: [
            { id: 'sorting', title: 'Sorting' },
            { id: 'searching', title: 'Searching' },
            { id: 'recursion', title: 'Recursion & Backtracking' },
        ],
        rightTopics: [
            { id: 'dynamic-programming', title: 'Dynamic Programming' },
            { id: 'greedy', title: 'Greedy Algorithms' },
            { id: 'complexity', title: 'Big O & Complexity' },
        ],
    },
    {
        id: 'os',
        title: 'Operating Systems',
        leftTopics: [{ id: 'operating-systems', title: 'OS Concepts' }],
        rightTopics: [{ id: 'concurrency', title: 'Concurrency' }],
    },
    {
        id: 'networking-section',
        title: 'Networking',
        rightTopics: [{ id: 'networking', title: 'Computer Networking' }],
    },
    {
        id: 'databases-section',
        title: 'Databases',
        rightTopics: [{ id: 'databases', title: 'Database Fundamentals' }],
    },
    {
        id: 'system-design-section',
        title: 'System Design',
        rightTopics: [{ id: 'system-design', title: 'System Design Basics' }],
    },
];
