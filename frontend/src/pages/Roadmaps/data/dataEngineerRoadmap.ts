import type { Topic, RoadmapSection } from './frontendRoadmap';

// ─── Data Engineer Topics ────────────────────────────────────────
export const DATA_ENGINEER_TOPICS: Record<string, Topic> = {
    // ── Programming ──
    python: {
        id: 'python',
        title: 'Python',
        description: 'Python is the primary language for data engineering. Libraries like PySpark, Airflow, Pandas, and SQLAlchemy power modern data pipelines.',
        resources: [
            { type: 'roadmap', title: 'Visit the Python Roadmap', url: 'https://roadmap.sh/python' },
            { type: 'video', title: 'Python for Data Engineering', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
        ],
    },
    sql: {
        id: 'sql',
        title: 'SQL',
        description: 'SQL is essential for data engineers. Advanced querying, window functions, CTEs, stored procedures, query optimization, and DDL/DML operations at scale.',
        resources: [
            { type: 'roadmap', title: 'Visit the SQL Roadmap', url: 'https://roadmap.sh/sql' },
            { type: 'course', title: 'SQL Tutorial (Mode)', url: 'https://mode.com/sql-tutorial' },
        ],
    },
    java: {
        id: 'java',
        title: 'Java / Scala',
        description: 'Java and Scala are used extensively in big data ecosystems — Spark, Kafka, Flink, and Hadoop are all JVM-based. Scala is particularly popular for Spark development.',
        resources: [
            { type: 'official', title: 'Scala Documentation', url: 'https://docs.scala-lang.org/' },
            { type: 'video', title: 'Java Full Course', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' },
        ],
    },
    bash: {
        id: 'bash',
        title: 'Bash / Shell',
        description: 'Shell scripting automates data pipeline tasks — scheduling, file processing, environment setup, and orchestrating ETL workflows on Linux servers.',
        resources: [
            { type: 'video', title: 'Bash Scripting Full Course', url: 'https://www.youtube.com/watch?v=tK9Oc6AEnR4' },
        ],
    },

    // ── Databases ──
    postgresql: {
        id: 'postgresql',
        title: 'PostgreSQL',
        description: 'PostgreSQL is the most advanced open-source RDBMS. Partitioning, indexing strategies, JSONB, full-text search, and extensions for analytical workloads.',
        resources: [
            { type: 'official', title: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/' },
        ],
    },
    mysql: {
        id: 'mysql',
        title: 'MySQL',
        description: 'MySQL is widely used in transactional systems that feed data pipelines. Understanding replication, partitioning, and optimization is important.',
        resources: [
            { type: 'official', title: 'MySQL Documentation', url: 'https://dev.mysql.com/doc/' },
        ],
    },
    mongodb: {
        id: 'mongodb',
        title: 'MongoDB',
        description: 'MongoDB is a document-oriented NoSQL database. Flexible schemas, aggregation framework, change streams, and sharding for high-volume data ingestion.',
        resources: [
            { type: 'official', title: 'MongoDB University', url: 'https://university.mongodb.com/' },
        ],
    },
    cassandra: {
        id: 'cassandra',
        title: 'Cassandra',
        description: 'Apache Cassandra is a distributed NoSQL database designed for massive write throughput. Wide-column store, eventual consistency, and linear scalability.',
        resources: [
            { type: 'official', title: 'Cassandra Documentation', url: 'https://cassandra.apache.org/doc/latest/' },
        ],
    },
    redis: {
        id: 'redis',
        title: 'Redis',
        description: 'Redis serves as a caching layer, message broker, and real-time data store in data engineering pipelines. Pub/Sub, streams, and sorted sets.',
        resources: [
            { type: 'official', title: 'Redis Documentation', url: 'https://redis.io/docs/' },
        ],
    },

    // ── Data Warehouses ──
    snowflake: {
        id: 'snowflake',
        title: 'Snowflake',
        description: 'Snowflake is a cloud data warehouse with separation of compute and storage. Auto-scaling, data sharing, Time Travel, zero-copy cloning, and Snowpipe for streaming.',
        resources: [
            { type: 'official', title: 'Snowflake Documentation', url: 'https://docs.snowflake.com/' },
            { type: 'video', title: 'Snowflake Full Course', url: 'https://www.youtube.com/watch?v=s6FMjXuqCKo' },
        ],
    },
    bigquery: {
        id: 'bigquery',
        title: 'BigQuery',
        description: 'Google BigQuery is a serverless, highly scalable data warehouse. Columnar storage, streaming inserts, ML integration, and petabyte-scale querying.',
        resources: [
            { type: 'official', title: 'BigQuery Documentation', url: 'https://cloud.google.com/bigquery/docs' },
        ],
    },
    redshift: {
        id: 'redshift',
        title: 'Amazon Redshift',
        description: 'Amazon Redshift is AWS\'s cloud data warehouse. Columnar storage, massively parallel processing, Redshift Spectrum for S3 queries, and tight AWS integration.',
        resources: [
            { type: 'official', title: 'Redshift Documentation', url: 'https://docs.aws.amazon.com/redshift/' },
        ],
    },

    // ── ETL / ELT ──
    etl: {
        id: 'etl',
        title: 'ETL vs ELT',
        description: 'ETL extracts, transforms, then loads data. ELT loads raw data first, then transforms in the warehouse. Modern architectures favor ELT with tools like dbt.',
        resources: [
            { type: 'article', title: 'ETL vs ELT', url: 'https://www.ibm.com/topics/etl' },
        ],
    },
    dbt: {
        id: 'dbt',
        title: 'dbt (data build tool)',
        description: 'dbt transforms data in the warehouse using SQL. Version-controlled models, testing, documentation, incremental builds, and software engineering practices for analytics.',
        resources: [
            { type: 'official', title: 'dbt Documentation', url: 'https://docs.getdbt.com/' },
            { type: 'video', title: 'dbt Tutorial', url: 'https://www.youtube.com/watch?v=5rNquRnNb4E' },
        ],
    },
    'data-modeling': {
        id: 'data-modeling',
        title: 'Data Modeling',
        description: 'Dimensional modeling (star schema, snowflake schema), data vault 2.0, normalization/denormalization, slowly changing dimensions (SCDs), and fact/dimension tables.',
        resources: [
            { type: 'article', title: 'Dimensional Modeling Guide', url: 'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/' },
        ],
    },

    // ── Orchestration ──
    airflow: {
        id: 'airflow',
        title: 'Apache Airflow',
        description: 'Airflow is the most popular workflow orchestrator. DAGs, operators, sensors, XComs, task dependencies, scheduling, and monitoring data pipelines.',
        resources: [
            { type: 'official', title: 'Airflow Documentation', url: 'https://airflow.apache.org/docs/' },
            { type: 'video', title: 'Airflow Full Course', url: 'https://www.youtube.com/watch?v=K9AnJ9_ZAXE' },
        ],
    },
    prefect: {
        id: 'prefect',
        title: 'Prefect',
        description: 'Prefect is a modern workflow orchestration tool. Pythonic API, automatic retries, observability, and cloud-native deployment. Easier than Airflow for many use cases.',
        resources: [
            { type: 'official', title: 'Prefect Documentation', url: 'https://docs.prefect.io/' },
        ],
    },
    dagster: {
        id: 'dagster',
        title: 'Dagster',
        description: 'Dagster is a data orchestrator focused on software-defined assets. Type system, testability, and a unified view of data pipelines, ML models, and dbt.',
        resources: [
            { type: 'official', title: 'Dagster Documentation', url: 'https://docs.dagster.io/' },
        ],
    },

    // ── Big Data Processing ──
    spark: {
        id: 'spark',
        title: 'Apache Spark',
        description: 'Spark is the standard for distributed data processing. RDDs, DataFrames, Spark SQL, MLlib, and Structured Streaming. PySpark is the Python interface.',
        resources: [
            { type: 'official', title: 'Spark Documentation', url: 'https://spark.apache.org/docs/latest/' },
            { type: 'video', title: 'PySpark Full Course', url: 'https://www.youtube.com/watch?v=_C8kWso4ne4' },
        ],
    },
    flink: {
        id: 'flink',
        title: 'Apache Flink',
        description: 'Flink is a stream-processing framework for real-time data pipelines. Event time processing, exactly-once semantics, and both batch and stream processing.',
        resources: [
            { type: 'official', title: 'Flink Documentation', url: 'https://flink.apache.org/docs/' },
        ],
    },
    hadoop: {
        id: 'hadoop',
        title: 'Hadoop / HDFS',
        description: 'Hadoop pioneered distributed computing with MapReduce and HDFS. While Spark has replaced MapReduce, HDFS and YARN remain relevant in many data ecosystems.',
        resources: [
            { type: 'official', title: 'Hadoop Documentation', url: 'https://hadoop.apache.org/docs/stable/' },
        ],
    },

    // ── Streaming ──
    kafka: {
        id: 'kafka',
        title: 'Apache Kafka',
        description: 'Kafka is a distributed event streaming platform. Topics, partitions, consumer groups, exactly-once delivery, Kafka Connect, and Kafka Streams for real-time pipelines.',
        resources: [
            { type: 'official', title: 'Kafka Documentation', url: 'https://kafka.apache.org/documentation/' },
            { type: 'video', title: 'Kafka Full Course', url: 'https://www.youtube.com/watch?v=PzPXRmVHMxI' },
        ],
    },
    'kafka-connect': {
        id: 'kafka-connect',
        title: 'Kafka Connect',
        description: 'Kafka Connect provides scalable data integration. Source and sink connectors move data between Kafka and external systems (databases, S3, Elasticsearch) without code.',
        resources: [
            { type: 'official', title: 'Kafka Connect Documentation', url: 'https://docs.confluent.io/platform/current/connect/' },
        ],
    },
    kinesis: {
        id: 'kinesis',
        title: 'AWS Kinesis',
        description: 'AWS Kinesis collects, processes, and analyzes real-time streaming data. Data Streams, Firehose, and Analytics for serverless stream processing on AWS.',
        resources: [
            { type: 'official', title: 'Kinesis Documentation', url: 'https://docs.aws.amazon.com/kinesis/' },
        ],
    },

    // ── Data Lake ──
    'data-lake': {
        id: 'data-lake',
        title: 'Data Lake',
        description: 'Data lakes store raw data in its native format. S3, GCS, or ADLS as storage layers. Lakehouse architecture combines lake flexibility with warehouse capabilities.',
        resources: [
            { type: 'article', title: 'Data Lake vs Data Warehouse', url: 'https://aws.amazon.com/compare/the-difference-between-a-data-lake-and-a-data-warehouse/' },
        ],
    },
    delta: {
        id: 'delta',
        title: 'Delta Lake',
        description: 'Delta Lake adds ACID transactions, schema enforcement, and time travel to data lakes. Open-source from Databricks, works with Spark and other engines.',
        resources: [
            { type: 'official', title: 'Delta Lake Documentation', url: 'https://docs.delta.io/' },
        ],
    },
    iceberg: {
        id: 'iceberg',
        title: 'Apache Iceberg',
        description: 'Iceberg is an open table format for large analytic datasets. Hidden partitioning, schema evolution, time travel, and engine-agnostic (Spark, Flink, Trino, Presto).',
        resources: [
            { type: 'official', title: 'Iceberg Documentation', url: 'https://iceberg.apache.org/docs/latest/' },
        ],
    },

    // ── Cloud ──
    aws: {
        id: 'aws',
        title: 'AWS Data Services',
        description: 'AWS data services: S3, Glue, Athena, EMR, Redshift, Lake Formation, Step Functions, and Lambda for building cloud-native data platforms.',
        resources: [
            { type: 'official', title: 'AWS Data Analytics', url: 'https://aws.amazon.com/big-data/datalakes-and-analytics/' },
        ],
    },
    gcp: {
        id: 'gcp',
        title: 'GCP Data Services',
        description: 'GCP data services: BigQuery, Dataflow, Dataproc, Pub/Sub, Cloud Composer (managed Airflow), and Cloud Storage for data engineering workflows.',
        resources: [
            { type: 'official', title: 'GCP Data Analytics', url: 'https://cloud.google.com/solutions/smart-analytics' },
        ],
    },

    // ── Infrastructure ──
    docker: {
        id: 'docker',
        title: 'Docker',
        description: 'Docker containerizes data pipeline components for consistent, reproducible environments. Essential for deploying Airflow, Spark, and other data tools.',
        resources: [
            { type: 'official', title: 'Docker Documentation', url: 'https://docs.docker.com/' },
        ],
    },
    cicd: {
        id: 'cicd',
        title: 'CI/CD for Data',
        description: 'CI/CD for data pipelines: automated testing, data quality checks, schema validation, blue-green deployments, and GitOps for infrastructure-as-code.',
        resources: [
            { type: 'article', title: 'CI/CD for Data Pipelines', url: 'https://www.datacamp.com/blog/ci-cd-for-machine-learning' },
        ],
    },
    'data-quality': {
        id: 'data-quality',
        title: 'Data Quality & Governance',
        description: 'Data quality frameworks (Great Expectations, Soda), data contracts, lineage tracking, data catalogs, and governance policies ensure trustworthy data.',
        resources: [
            { type: 'official', title: 'Great Expectations', url: 'https://greatexpectations.io/expectations/' },
            { type: 'article', title: 'Data Quality Guide', url: 'https://www.metaplane.dev/blog/data-quality-metrics-for-data-warehouses' },
        ],
    },
};

// ─── Data Engineer Sections ──────────────────────────────────────
export const DATA_ENGINEER_SECTIONS: RoadmapSection[] = [
    {
        id: 'programming',
        title: 'Programming Languages',
        leftTopics: [
            { id: 'python', title: 'Python' },
            { id: 'sql', title: 'SQL' },
        ],
        rightTopics: [
            { id: 'java', title: 'Java / Scala' },
            { id: 'bash', title: 'Bash / Shell' },
        ],
    },
    {
        id: 'databases',
        title: 'Databases',
        description: 'SQL & NoSQL',
        leftTopics: [
            { id: 'postgresql', title: 'PostgreSQL' },
            { id: 'mysql', title: 'MySQL' },
        ],
        rightTopics: [
            { id: 'mongodb', title: 'MongoDB' },
            { id: 'cassandra', title: 'Cassandra' },
            { id: 'redis', title: 'Redis' },
        ],
    },
    {
        id: 'warehouses',
        title: 'Data Warehouses',
        leftTopics: [
            { id: 'snowflake', title: 'Snowflake' },
            { id: 'bigquery', title: 'BigQuery' },
        ],
        rightTopics: [
            { id: 'redshift', title: 'Amazon Redshift' },
        ],
    },
    {
        id: 'etl-section',
        title: 'ETL / ELT',
        leftTopics: [
            { id: 'etl', title: 'ETL vs ELT' },
            { id: 'dbt', title: 'dbt' },
        ],
        rightTopics: [
            { id: 'data-modeling', title: 'Data Modeling' },
        ],
    },
    {
        id: 'orchestration',
        title: 'Orchestration',
        leftTopics: [
            { id: 'airflow', title: 'Apache Airflow' },
        ],
        rightTopics: [
            { id: 'prefect', title: 'Prefect' },
            { id: 'dagster', title: 'Dagster' },
        ],
    },
    {
        id: 'big-data',
        title: 'Big Data Processing',
        leftTopics: [
            { id: 'spark', title: 'Apache Spark' },
        ],
        rightTopics: [
            { id: 'flink', title: 'Apache Flink' },
            { id: 'hadoop', title: 'Hadoop / HDFS' },
        ],
    },
    {
        id: 'streaming',
        title: 'Streaming',
        leftTopics: [
            { id: 'kafka', title: 'Apache Kafka' },
            { id: 'kafka-connect', title: 'Kafka Connect' },
        ],
        rightTopics: [
            { id: 'kinesis', title: 'AWS Kinesis' },
        ],
    },
    {
        id: 'data-lake',
        title: 'Data Lake & Lakehouse',
        leftTopics: [
            { id: 'data-lake', title: 'Data Lake' },
        ],
        rightTopics: [
            { id: 'delta', title: 'Delta Lake' },
            { id: 'iceberg', title: 'Apache Iceberg' },
        ],
    },
    {
        id: 'cloud',
        title: 'Cloud Platforms',
        leftTopics: [
            { id: 'aws', title: 'AWS Data Services' },
        ],
        rightTopics: [
            { id: 'gcp', title: 'GCP Data Services' },
        ],
    },
    {
        id: 'infra',
        title: 'Infrastructure & Quality',
        leftTopics: [
            { id: 'docker', title: 'Docker' },
            { id: 'cicd', title: 'CI/CD for Data' },
        ],
        rightTopics: [
            { id: 'data-quality', title: 'Data Quality & Governance' },
        ],
    },
];
