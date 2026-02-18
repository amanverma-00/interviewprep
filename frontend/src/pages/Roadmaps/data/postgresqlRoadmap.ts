import type { Topic, RoadmapSection } from './frontendRoadmap';

// ─── PostgreSQL Topics ───────────────────────────────────────────
export const POSTGRESQL_TOPICS: Record<string, Topic> = {
    // ── Fundamentals ──
    'what-is-postgresql': {
        id: 'what-is-postgresql',
        title: 'What is PostgreSQL?',
        description: 'PostgreSQL is the most advanced open-source relational database. ACID compliance, extensibility, JSON support, full-text search, and a rich ecosystem of extensions.',
        resources: [
            { type: 'official', title: 'PostgreSQL About', url: 'https://www.postgresql.org/about/' },
            { type: 'video', title: 'PostgreSQL in 100 Seconds', url: 'https://www.youtube.com/watch?v=n2Fluyr3lbc' },
        ],
    },
    'installation': {
        id: 'installation',
        title: 'Installation & Setup',
        description: 'Installing PostgreSQL on Linux, macOS, and Windows. pgAdmin, psql CLI, connection configuration (pg_hba.conf), and initial setup.',
        resources: [
            { type: 'official', title: 'PostgreSQL Downloads', url: 'https://www.postgresql.org/download/' },
            { type: 'article', title: 'Getting Started', url: 'https://www.postgresql.org/docs/current/tutorial-start.html' },
        ],
    },
    'psql': {
        id: 'psql',
        title: 'psql CLI',
        description: 'The psql command-line interface. Meta-commands (\\dt, \\d, \\l, \\c), query execution, scripting, output formatting, and tab completion.',
        resources: [
            { type: 'official', title: 'psql Documentation', url: 'https://www.postgresql.org/docs/current/app-psql.html' },
        ],
    },

    // ── SQL Fundamentals ──
    'sql-basics': {
        id: 'sql-basics',
        title: 'SQL Basics',
        description: 'SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY, LIMIT, GROUP BY, HAVING, and DISTINCT. The foundation of all database operations.',
        resources: [
            { type: 'official', title: 'SQL Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial-sql.html' },
            { type: 'course', title: 'SQLBolt', url: 'https://sqlbolt.com/' },
        ],
    },
    joins: {
        id: 'joins',
        title: 'JOINs',
        description: 'INNER, LEFT, RIGHT, FULL OUTER, and CROSS JOINs. Self-joins, natural joins, and lateral joins. Understanding join algorithms (nested loop, hash, merge).',
        resources: [
            { type: 'article', title: 'SQL Joins Visualized', url: 'https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/' },
        ],
    },
    'subqueries-ctes': {
        id: 'subqueries-ctes',
        title: 'Subqueries & CTEs',
        description: 'Correlated and uncorrelated subqueries, Common Table Expressions (WITH clauses), recursive CTEs for hierarchical data, and materializing CTEs.',
        resources: [
            { type: 'official', title: 'WITH Queries (CTEs)', url: 'https://www.postgresql.org/docs/current/queries-with.html' },
        ],
    },
    'window-functions': {
        id: 'window-functions',
        title: 'Window Functions',
        description: 'ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, NTILE, FIRST_VALUE, LAST_VALUE, running totals, and moving averages. Advanced analytics without self-joins.',
        resources: [
            { type: 'official', title: 'Window Functions', url: 'https://www.postgresql.org/docs/current/tutorial-window.html' },
            { type: 'video', title: 'Window Functions Explained', url: 'https://www.youtube.com/watch?v=MHBsPcxfnuw' },
        ],
    },
    'aggregate-functions': {
        id: 'aggregate-functions',
        title: 'Aggregate Functions',
        description: 'COUNT, SUM, AVG, MIN, MAX, ARRAY_AGG, STRING_AGG, BOOL_AND, BOOL_OR, and custom aggregates. GROUP BY with ROLLUP, CUBE, and GROUPING SETS.',
        resources: [
            { type: 'official', title: 'Aggregate Functions', url: 'https://www.postgresql.org/docs/current/functions-aggregate.html' },
        ],
    },

    // ── Data Types ──
    'data-types': {
        id: 'data-types',
        title: 'Data Types',
        description: 'Integer, serial, text, varchar, boolean, date/time, UUID, arrays, ENUM, composite types, and range types. Choosing the right type matters for performance.',
        resources: [
            { type: 'official', title: 'Data Types', url: 'https://www.postgresql.org/docs/current/datatype.html' },
        ],
    },
    json: {
        id: 'json',
        title: 'JSON & JSONB',
        description: 'JSON for storage and JSONB for indexed, binary JSON. Operators (->>, @>, ?), indexing JSONB with GIN, and when to use JSON vs normalized tables.',
        resources: [
            { type: 'official', title: 'JSON Functions', url: 'https://www.postgresql.org/docs/current/functions-json.html' },
        ],
    },
    arrays: {
        id: 'arrays',
        title: 'Arrays',
        description: 'PostgreSQL native array types. Array operators, ANY/ALL, array_agg, unnest, and GIN indexing for array containment queries.',
        resources: [
            { type: 'official', title: 'Arrays', url: 'https://www.postgresql.org/docs/current/arrays.html' },
        ],
    },

    // ── Schema Design ──
    'schema-design': {
        id: 'schema-design',
        title: 'Schema Design',
        description: 'Normalization (1NF-5NF), denormalization tradeoffs, naming conventions, constraints (PK, FK, UNIQUE, CHECK, NOT NULL), and default values.',
        resources: [
            { type: 'article', title: 'PostgreSQL Schema Design', url: 'https://www.postgresql.org/docs/current/ddl.html' },
        ],
    },
    constraints: {
        id: 'constraints',
        title: 'Constraints & Triggers',
        description: 'Primary keys, foreign keys (CASCADE, SET NULL), unique constraints, check constraints, exclusion constraints, and triggers for automated actions.',
        resources: [
            { type: 'official', title: 'Constraints', url: 'https://www.postgresql.org/docs/current/ddl-constraints.html' },
            { type: 'official', title: 'Triggers', url: 'https://www.postgresql.org/docs/current/trigger-definition.html' },
        ],
    },

    // ── Indexing ──
    'btree-index': {
        id: 'btree-index',
        title: 'B-tree Indexes',
        description: 'The default index type. Supports equality and range queries. Composite indexes, covering indexes (INCLUDE), partial indexes, and index-only scans.',
        resources: [
            { type: 'official', title: 'Index Types', url: 'https://www.postgresql.org/docs/current/indexes-types.html' },
        ],
    },
    'gin-gist': {
        id: 'gin-gist',
        title: 'GIN & GiST Indexes',
        description: 'GIN for JSONB, arrays, and full-text search. GiST for geometric data, ranges, and text similarity (pg_trgm). Choosing the right index type.',
        resources: [
            { type: 'official', title: 'GIN Indexes', url: 'https://www.postgresql.org/docs/current/gin.html' },
            { type: 'official', title: 'GiST Indexes', url: 'https://www.postgresql.org/docs/current/gist.html' },
        ],
    },
    'index-strategies': {
        id: 'index-strategies',
        title: 'Index Strategies',
        description: 'When to index, multi-column indexes (column order matters), expression indexes, partial indexes, concurrent index creation, and index maintenance (REINDEX).',
        resources: [
            { type: 'article', title: 'PostgreSQL Index Guide', url: 'https://www.postgresqltutorial.com/postgresql-indexes/' },
        ],
    },

    // ── Query Performance ──
    'explain-analyze': {
        id: 'explain-analyze',
        title: 'EXPLAIN / EXPLAIN ANALYZE',
        description: 'Reading query execution plans. Seq Scan, Index Scan, Bitmap Scan, Nested Loop, Hash Join, Merge Join, Sort, and identifying performance bottlenecks.',
        resources: [
            { type: 'official', title: 'EXPLAIN Documentation', url: 'https://www.postgresql.org/docs/current/using-explain.html' },
            { type: 'article', title: 'Reading Explain Plans', url: 'https://thoughtbot.com/blog/reading-an-explain-analyze-query-plan' },
        ],
    },
    'query-optimization': {
        id: 'query-optimization',
        title: 'Query Optimization',
        description: 'Identifying slow queries (pg_stat_statements), rewriting queries, avoiding N+1, using CTEs vs subqueries, and the query planner\'s cost model.',
        resources: [
            { type: 'article', title: 'Query Optimization Tips', url: 'https://www.cybertec-postgresql.com/en/postgresql-query-optimization/' },
        ],
    },
    vacuum: {
        id: 'vacuum',
        title: 'VACUUM & ANALYZE',
        description: 'VACUUM reclaims dead tuple space (MVCC artifact). ANALYZE updates statistics for the query planner. Autovacuum configuration and monitoring.',
        resources: [
            { type: 'official', title: 'VACUUM', url: 'https://www.postgresql.org/docs/current/sql-vacuum.html' },
        ],
    },

    // ── Advanced Features ──
    'full-text-search': {
        id: 'full-text-search',
        title: 'Full-Text Search',
        description: 'tsvector, tsquery, GIN indexes, dictionaries, ranking (ts_rank), and building search functionality without external tools like Elasticsearch.',
        resources: [
            { type: 'official', title: 'Full Text Search', url: 'https://www.postgresql.org/docs/current/textsearch.html' },
        ],
    },
    'stored-procedures': {
        id: 'stored-procedures',
        title: 'Functions & Procedures',
        description: 'PL/pgSQL for server-side logic. Functions (RETURNS), procedures (no return), language options (SQL, PL/pgSQL, PL/Python), and performance considerations.',
        resources: [
            { type: 'official', title: 'PL/pgSQL', url: 'https://www.postgresql.org/docs/current/plpgsql.html' },
        ],
    },
    views: {
        id: 'views',
        title: 'Views & Materialized Views',
        description: 'Views for query abstraction. Materialized views for cached complex queries with REFRESH. Updatable views and security (security definer/invoker).',
        resources: [
            { type: 'official', title: 'Views', url: 'https://www.postgresql.org/docs/current/sql-createview.html' },
            { type: 'official', title: 'Materialized Views', url: 'https://www.postgresql.org/docs/current/sql-creatematerializedview.html' },
        ],
    },
    partitioning: {
        id: 'partitioning',
        title: 'Table Partitioning',
        description: 'Declarative partitioning by range, list, or hash. Partition pruning, managing partitions, and when partitioning improves (or hurts) performance.',
        resources: [
            { type: 'official', title: 'Table Partitioning', url: 'https://www.postgresql.org/docs/current/ddl-partitioning.html' },
        ],
    },

    // ── Security ──
    'roles-permissions': {
        id: 'roles-permissions',
        title: 'Roles & Permissions',
        description: 'CREATE ROLE, GRANT, REVOKE, role inheritance, row-level security (RLS), column-level privileges, and pg_hba.conf for connection authentication.',
        resources: [
            { type: 'official', title: 'Roles', url: 'https://www.postgresql.org/docs/current/user-manag.html' },
        ],
    },
    rls: {
        id: 'rls',
        title: 'Row-Level Security',
        description: 'RLS policies restrict which rows users can see/modify. Used by Supabase for multi-tenant security. CREATE POLICY with USING and WITH CHECK clauses.',
        resources: [
            { type: 'official', title: 'Row Security Policies', url: 'https://www.postgresql.org/docs/current/ddl-rowsecurity.html' },
        ],
    },
    'ssl-encryption': {
        id: 'ssl-encryption',
        title: 'SSL & Encryption',
        description: 'SSL/TLS for encrypted connections. pgcrypto for column-level encryption. Certificate-based authentication and password encryption methods (scram-sha-256).',
        resources: [
            { type: 'official', title: 'SSL Support', url: 'https://www.postgresql.org/docs/current/ssl-tcp.html' },
        ],
    },

    // ── Backup & Recovery ──
    'backup-restore': {
        id: 'backup-restore',
        title: 'Backup & Restore',
        description: 'pg_dump for logical backups, pg_basebackup for physical backups, custom format vs plain SQL, and restoration strategies.',
        resources: [
            { type: 'official', title: 'Backup and Restore', url: 'https://www.postgresql.org/docs/current/backup.html' },
        ],
    },
    'wal-pitr': {
        id: 'wal-pitr',
        title: 'WAL & Point-in-Time Recovery',
        description: 'Write-Ahead Logging (WAL) ensures data durability. Continuous archiving and PITR to recover to any point in time. Critical for production databases.',
        resources: [
            { type: 'official', title: 'Continuous Archiving and PITR', url: 'https://www.postgresql.org/docs/current/continuous-archiving.html' },
        ],
    },

    // ── Replication & HA ──
    'streaming-replication': {
        id: 'streaming-replication',
        title: 'Streaming Replication',
        description: 'Asynchronous and synchronous streaming replication. Primary/standby setup, replication slots, monitoring lag, and promoting standbys.',
        resources: [
            { type: 'official', title: 'Replication', url: 'https://www.postgresql.org/docs/current/high-availability.html' },
        ],
    },
    'logical-replication': {
        id: 'logical-replication',
        title: 'Logical Replication',
        description: 'Publication/subscription model for selective table replication. Cross-version replication, data integration, and eventual consistency patterns.',
        resources: [
            { type: 'official', title: 'Logical Replication', url: 'https://www.postgresql.org/docs/current/logical-replication.html' },
        ],
    },
    'ha-failover': {
        id: 'ha-failover',
        title: 'High Availability & Failover',
        description: 'Patroni for automated failover, PgBouncer for connection pooling, HAProxy for load balancing, and cloud-managed HA solutions.',
        resources: [
            { type: 'official', title: 'Patroni', url: 'https://patroni.readthedocs.io/' },
        ],
    },

    // ── Extensions ──
    extensions: {
        id: 'extensions',
        title: 'Extensions',
        description: 'PostgreSQL\'s extension ecosystem: PostGIS (geospatial), pg_trgm (similarity), pgvector (AI embeddings), TimescaleDB (time series), Citus (distributed), and more.',
        resources: [
            { type: 'official', title: 'Available Extensions', url: 'https://www.postgresql.org/docs/current/contrib.html' },
        ],
    },
    pgvector: {
        id: 'pgvector',
        title: 'pgvector',
        description: 'pgvector adds vector similarity search to PostgreSQL. Store embeddings, perform cosine/L2/inner product similarity searches. Popular for RAG applications.',
        resources: [
            { type: 'official', title: 'pgvector', url: 'https://github.com/pgvector/pgvector' },
        ],
    },

    // ── Monitoring ──
    monitoring: {
        id: 'monitoring',
        title: 'Monitoring & Tuning',
        description: 'pg_stat_statements for slow queries, pg_stat_activity for connections, postgresql.conf tuning (shared_buffers, work_mem, effective_cache_size), and monitoring tools.',
        resources: [
            { type: 'official', title: 'Monitoring Stats', url: 'https://www.postgresql.org/docs/current/monitoring-stats.html' },
            { type: 'article', title: 'PostgreSQL Tuning', url: 'https://pgtune.leopard.in.ua/' },
        ],
    },
};

// ─── PostgreSQL Sections ─────────────────────────────────────────
export const POSTGRESQL_SECTIONS: RoadmapSection[] = [
    {
        id: 'fundamentals',
        title: 'Getting Started',
        leftTopics: [
            { id: 'what-is-postgresql', title: 'What is PostgreSQL?' },
            { id: 'installation', title: 'Installation & Setup' },
        ],
        rightTopics: [
            { id: 'psql', title: 'psql CLI' },
        ],
    },
    {
        id: 'sql',
        title: 'SQL Fundamentals',
        description: 'Write queries',
        leftTopics: [
            { id: 'sql-basics', title: 'SQL Basics' },
            { id: 'joins', title: 'JOINs' },
        ],
        rightTopics: [
            { id: 'subqueries-ctes', title: 'Subqueries & CTEs' },
            { id: 'window-functions', title: 'Window Functions' },
            { id: 'aggregate-functions', title: 'Aggregate Functions' },
        ],
    },
    {
        id: 'types',
        title: 'Data Types',
        leftTopics: [
            { id: 'data-types', title: 'Core Data Types' },
        ],
        rightTopics: [
            { id: 'json', title: 'JSON & JSONB' },
            { id: 'arrays', title: 'Arrays' },
        ],
    },
    {
        id: 'schema',
        title: 'Schema Design',
        leftTopics: [
            { id: 'schema-design', title: 'Schema Design' },
        ],
        rightTopics: [
            { id: 'constraints', title: 'Constraints & Triggers' },
        ],
    },
    {
        id: 'indexing',
        title: 'Indexing',
        description: 'Performance key',
        leftTopics: [
            { id: 'btree-index', title: 'B-tree Indexes' },
        ],
        rightTopics: [
            { id: 'gin-gist', title: 'GIN & GiST' },
            { id: 'index-strategies', title: 'Index Strategies' },
        ],
    },
    {
        id: 'performance',
        title: 'Query Performance',
        leftTopics: [
            { id: 'explain-analyze', title: 'EXPLAIN ANALYZE' },
            { id: 'query-optimization', title: 'Query Optimization' },
        ],
        rightTopics: [
            { id: 'vacuum', title: 'VACUUM & ANALYZE' },
        ],
    },
    {
        id: 'advanced',
        title: 'Advanced Features',
        leftTopics: [
            { id: 'full-text-search', title: 'Full-Text Search' },
            { id: 'stored-procedures', title: 'Functions & Procedures' },
        ],
        rightTopics: [
            { id: 'views', title: 'Views & Materialized Views' },
            { id: 'partitioning', title: 'Table Partitioning' },
        ],
    },
    {
        id: 'security',
        title: 'Security',
        leftTopics: [
            { id: 'roles-permissions', title: 'Roles & Permissions' },
            { id: 'rls', title: 'Row-Level Security' },
        ],
        rightTopics: [
            { id: 'ssl-encryption', title: 'SSL & Encryption' },
        ],
    },
    {
        id: 'backup',
        title: 'Backup & Recovery',
        leftTopics: [
            { id: 'backup-restore', title: 'Backup & Restore' },
        ],
        rightTopics: [
            { id: 'wal-pitr', title: 'WAL & PITR' },
        ],
    },
    {
        id: 'replication',
        title: 'Replication & HA',
        leftTopics: [
            { id: 'streaming-replication', title: 'Streaming Replication' },
            { id: 'logical-replication', title: 'Logical Replication' },
        ],
        rightTopics: [
            { id: 'ha-failover', title: 'HA & Failover' },
        ],
    },
    {
        id: 'extensions-section',
        title: 'Extensions',
        leftTopics: [
            { id: 'extensions', title: 'Extension Ecosystem' },
        ],
        rightTopics: [
            { id: 'pgvector', title: 'pgvector (AI)' },
        ],
    },
    {
        id: 'monitoring-section',
        title: 'Monitoring & Tuning',
        rightTopics: [
            { id: 'monitoring', title: 'Monitoring & Tuning' },
        ],
    },
];
