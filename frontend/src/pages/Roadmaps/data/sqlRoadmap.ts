import type { Topic, RoadmapSection } from './frontendRoadmap';

export const SQL_TOPICS: Record<string, Topic> = {
    'what-is-sql': {
        id: 'what-is-sql',
        title: 'What is SQL?',
        description: 'SQL (Structured Query Language) is the standard language for managing and querying relational databases. Used by every major database system.',
        resources: [
            { type: 'article', title: 'SQL Introduction', url: 'https://www.w3schools.com/sql/sql_intro.asp' },
            { type: 'course', title: 'SQLBolt', url: 'https://sqlbolt.com/' },
        ],
    },
    'rdbms': {
        id: 'rdbms',
        title: 'Relational Databases',
        description: 'Tables, rows, columns, primary keys, foreign keys, relationships (1:1, 1:N, N:M), and how data is organized in relational database management systems.',
        resources: [
            { type: 'article', title: 'Relational Database Concepts', url: 'https://www.oracle.com/database/what-is-a-relational-database/' },
        ],
    },
    // ── Basic Queries ──
    'select': {
        id: 'select',
        title: 'SELECT & Filtering',
        description: 'SELECT, FROM, WHERE, AND/OR/NOT, IN, BETWEEN, LIKE, IS NULL, DISTINCT, ORDER BY, LIMIT/OFFSET, and aliasing with AS.',
        resources: [
            { type: 'course', title: 'SELECT Tutorial', url: 'https://sqlbolt.com/lesson/select_queries_introduction' },
        ],
    },
    'insert-update-delete': {
        id: 'insert-update-delete',
        title: 'INSERT, UPDATE, DELETE',
        description: 'Data manipulation: INSERT INTO for adding rows, UPDATE SET for modifying, DELETE FROM for removing. UPSERT (INSERT ON CONFLICT) patterns.',
        resources: [
            { type: 'article', title: 'DML Operations', url: 'https://www.w3schools.com/sql/sql_insert.asp' },
        ],
    },
    // ── Joins ──
    'joins': {
        id: 'joins',
        title: 'JOINs',
        description: 'INNER JOIN, LEFT/RIGHT/FULL OUTER JOIN, CROSS JOIN, self-joins, and NATURAL JOIN. The most important SQL concept for combining tables.',
        resources: [
            { type: 'article', title: 'SQL Joins Visualized', url: 'https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/' },
            { type: 'video', title: 'SQL Joins Explained', url: 'https://www.youtube.com/watch?v=9yeOJ0ZMUYw' },
        ],
    },
    // ── Aggregation ──
    'aggregation': {
        id: 'aggregation',
        title: 'Aggregation & Grouping',
        description: 'COUNT, SUM, AVG, MIN, MAX with GROUP BY and HAVING. ROLLUP, CUBE, GROUPING SETS for multi-level aggregation.',
        resources: [
            { type: 'course', title: 'Aggregates (SQLBolt)', url: 'https://sqlbolt.com/lesson/select_queries_with_aggregates' },
        ],
    },
    // ── Subqueries ──
    'subqueries': {
        id: 'subqueries',
        title: 'Subqueries',
        description: 'Scalar subqueries, correlated subqueries, EXISTS/NOT EXISTS, IN with subqueries, and subqueries in FROM (derived tables) and SELECT clauses.',
        resources: [
            { type: 'article', title: 'SQL Subqueries', url: 'https://www.w3schools.com/sql/sql_subqueries.asp' },
        ],
    },
    'ctes': {
        id: 'ctes',
        title: 'CTEs (Common Table Expressions)',
        description: 'WITH clause for readable, reusable query blocks. Recursive CTEs for hierarchical data (org charts, bill of materials, tree traversal).',
        resources: [
            { type: 'article', title: 'SQL CTEs', url: 'https://www.postgresql.org/docs/current/queries-with.html' },
        ],
    },
    // ── Window Functions ──
    'window-functions': {
        id: 'window-functions',
        title: 'Window Functions',
        description: 'ROW_NUMBER, RANK, DENSE_RANK, NTILE, LAG, LEAD, FIRST_VALUE, LAST_VALUE, SUM/AVG OVER(), running totals, and PARTITION BY.',
        resources: [
            { type: 'article', title: 'Window Functions Guide', url: 'https://mode.com/sql-tutorial/sql-window-functions' },
            { type: 'video', title: 'Window Functions', url: 'https://www.youtube.com/watch?v=MHBsPcxfnuw' },
        ],
    },
    // ── DDL ──
    'create-alter-drop': {
        id: 'create-alter-drop',
        title: 'CREATE, ALTER, DROP',
        description: 'DDL operations: CREATE TABLE, ALTER TABLE (ADD/DROP/MODIFY columns), DROP TABLE, TRUNCATE, and managing database objects.',
        resources: [
            { type: 'article', title: 'DDL Guide', url: 'https://www.w3schools.com/sql/sql_create_table.asp' },
        ],
    },
    'constraints': {
        id: 'constraints',
        title: 'Constraints',
        description: 'PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT. Enforcing data integrity at the database level.',
        resources: [
            { type: 'article', title: 'SQL Constraints', url: 'https://www.w3schools.com/sql/sql_constraints.asp' },
        ],
    },
    'data-types': {
        id: 'data-types',
        title: 'Data Types',
        description: 'INTEGER, BIGINT, DECIMAL, VARCHAR, TEXT, BOOLEAN, DATE, TIMESTAMP, UUID, JSON/JSONB, and choosing the right type.',
        resources: [
            { type: 'article', title: 'SQL Data Types', url: 'https://www.w3schools.com/sql/sql_datatypes.asp' },
        ],
    },
    // ── Indexes ──
    'indexes': {
        id: 'indexes',
        title: 'Indexes',
        description: 'B-tree indexes, composite indexes, unique indexes, partial indexes, covering indexes, and when indexes help vs hurt performance.',
        resources: [
            { type: 'article', title: 'SQL Indexes Explained', url: 'https://use-the-index-luke.com/' },
        ],
    },
    // ── Normalization ──
    'normalization': {
        id: 'normalization',
        title: 'Normalization',
        description: '1NF, 2NF, 3NF, BCNF — reducing data redundancy. Denormalization for read performance. Understanding when to normalize vs denormalize.',
        resources: [
            { type: 'video', title: 'Database Normalization', url: 'https://www.youtube.com/watch?v=GFQaEYEc8_8' },
        ],
    },
    // ── Views ──
    'views': {
        id: 'views',
        title: 'Views',
        description: 'CREATE VIEW for virtual tables. Updatable views, materialized views for caching expensive queries, and using views for security abstraction.',
        resources: [
            { type: 'article', title: 'SQL Views', url: 'https://www.w3schools.com/sql/sql_view.asp' },
        ],
    },
    // ── Transactions ──
    'transactions': {
        id: 'transactions',
        title: 'Transactions & ACID',
        description: 'BEGIN, COMMIT, ROLLBACK, SAVEPOINT. ACID properties (Atomicity, Consistency, Isolation, Durability). Isolation levels (READ COMMITTED, SERIALIZABLE).',
        resources: [
            { type: 'article', title: 'SQL Transactions', url: 'https://www.postgresql.org/docs/current/tutorial-transactions.html' },
        ],
    },
    // ── Stored Procedures ──
    'stored-procedures': {
        id: 'stored-procedures',
        title: 'Stored Procedures & Functions',
        description: 'Server-side logic: stored procedures, user-defined functions, triggers, and cursors. PL/pgSQL, T-SQL, and PL/SQL syntax differences.',
        resources: [
            { type: 'article', title: 'Stored Procedures', url: 'https://www.w3schools.com/sql/sql_stored_procedures.asp' },
        ],
    },
    // ── Performance ──
    'query-optimization': {
        id: 'query-optimization',
        title: 'Query Optimization',
        description: 'EXPLAIN plans, avoiding SELECT *, reducing joins, using indexes effectively, query rewriting, and understanding the query planner.',
        resources: [
            { type: 'article', title: 'Query Optimization', url: 'https://use-the-index-luke.com/' },
        ],
    },
    // ── Practice ──
    'sql-practice': {
        id: 'sql-practice',
        title: 'SQL Practice',
        description: 'Practice SQL skills: LeetCode SQL problems, HackerRank SQL, StrataScratch, DataLemur, and real-world datasets on Kaggle.',
        resources: [
            { type: 'course', title: 'LeetCode SQL', url: 'https://leetcode.com/problemset/database/' },
            { type: 'course', title: 'DataLemur SQL', url: 'https://datalemur.com/' },
            { type: 'course', title: 'HackerRank SQL', url: 'https://www.hackerrank.com/domains/sql' },
        ],
    },
};

export const SQL_SECTIONS: RoadmapSection[] = [
    {
        id: 'fundamentals',
        title: 'Fundamentals',
        leftTopics: [{ id: 'what-is-sql', title: 'What is SQL?' }],
        rightTopics: [{ id: 'rdbms', title: 'Relational Databases' }],
    },
    {
        id: 'basic-queries',
        title: 'Basic Queries',
        leftTopics: [{ id: 'select', title: 'SELECT & Filtering' }],
        rightTopics: [{ id: 'insert-update-delete', title: 'INSERT / UPDATE / DELETE' }],
    },
    {
        id: 'joins-section',
        title: 'JOINs',
        description: 'Combining tables',
        rightTopics: [{ id: 'joins', title: 'JOINs' }],
    },
    {
        id: 'aggregation-section',
        title: 'Aggregation',
        rightTopics: [{ id: 'aggregation', title: 'Aggregation & Grouping' }],
    },
    {
        id: 'advanced-queries',
        title: 'Advanced Queries',
        leftTopics: [
            { id: 'subqueries', title: 'Subqueries' },
            { id: 'ctes', title: 'CTEs' },
        ],
        rightTopics: [{ id: 'window-functions', title: 'Window Functions' }],
    },
    {
        id: 'ddl',
        title: 'Schema & DDL',
        leftTopics: [
            { id: 'create-alter-drop', title: 'CREATE / ALTER / DROP' },
            { id: 'data-types', title: 'Data Types' },
        ],
        rightTopics: [
            { id: 'constraints', title: 'Constraints' },
            { id: 'normalization', title: 'Normalization' },
        ],
    },
    {
        id: 'indexes-section',
        title: 'Indexes',
        rightTopics: [{ id: 'indexes', title: 'Indexes' }],
    },
    {
        id: 'views-section',
        title: 'Views',
        rightTopics: [{ id: 'views', title: 'Views' }],
    },
    {
        id: 'transactions-section',
        title: 'Transactions',
        rightTopics: [{ id: 'transactions', title: 'Transactions & ACID' }],
    },
    {
        id: 'procedures',
        title: 'Procedures & Functions',
        rightTopics: [{ id: 'stored-procedures', title: 'Stored Procedures' }],
    },
    {
        id: 'performance',
        title: 'Performance',
        rightTopics: [{ id: 'query-optimization', title: 'Query Optimization' }],
    },
    {
        id: 'practice',
        title: 'Practice',
        description: 'Master by doing',
        rightTopics: [{ id: 'sql-practice', title: 'SQL Practice' }],
    },
];
