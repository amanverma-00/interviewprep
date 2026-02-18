import type { Topic, RoadmapSection } from './frontendRoadmap';

// ─── Data Analyst Topics ─────────────────────────────────────────
export const DATA_ANALYST_TOPICS: Record<string, Topic> = {
    // ── Fundamentals ──
    'what-is-data-analytics': {
        id: 'what-is-data-analytics',
        title: 'What is Data Analytics?',
        description: 'Data analytics examines raw data to find trends, answer questions, and support decision-making. It spans descriptive, diagnostic, predictive, and prescriptive analytics.',
        resources: [
            { type: 'article', title: 'What is Data Analytics? (IBM)', url: 'https://www.ibm.com/topics/data-analytics' },
            { type: 'video', title: 'Data Analytics Full Course', url: 'https://www.youtube.com/watch?v=yZvFH7B6gKI' },
        ],
    },
    'types-of-analytics': {
        id: 'types-of-analytics',
        title: 'Types of Analytics',
        description: 'The four types of analytics: Descriptive (what happened), Diagnostic (why it happened), Predictive (what will happen), and Prescriptive (what should we do).',
        resources: [
            { type: 'article', title: 'Four Types of Data Analytics', url: 'https://www.ibm.com/think/topics/descriptive-predictive-prescriptive-analytics' },
        ],
    },
    'data-lifecycle': {
        id: 'data-lifecycle',
        title: 'Data Analytics Lifecycle',
        description: 'The process from data collection → cleaning → exploration → analysis → visualization → communication. Understanding this end-to-end workflow is foundational.',
        resources: [
            { type: 'article', title: 'Data Analytics Process', url: 'https://www.datacamp.com/blog/what-is-data-analytics-a-complete-guide' },
        ],
    },

    // ── Spreadsheets ──
    excel: {
        id: 'excel',
        title: 'Excel',
        description: 'Microsoft Excel is the most widely used data analysis tool. VLOOKUP, pivot tables, conditional formatting, data validation, Power Query, and advanced formulas.',
        resources: [
            { type: 'course', title: 'Excel Skills for Business (Coursera)', url: 'https://www.coursera.org/specializations/excel' },
            { type: 'video', title: 'Excel Full Course', url: 'https://www.youtube.com/watch?v=Vl0H-qTclOg' },
        ],
    },
    'google-sheets': {
        id: 'google-sheets',
        title: 'Google Sheets',
        description: 'Google Sheets offers collaborative spreadsheet capabilities. QUERY function, Apps Script automation, and real-time collaboration make it essential for team analytics.',
        resources: [
            { type: 'official', title: 'Google Sheets Help', url: 'https://support.google.com/docs/topic/9054603' },
        ],
    },

    // ── SQL ──
    sql: {
        id: 'sql',
        title: 'SQL',
        description: 'SQL is the language of data. SELECT, JOIN, GROUP BY, window functions, subqueries, CTEs, and aggregations. Every data analyst must be proficient in SQL.',
        resources: [
            { type: 'roadmap', title: 'Visit the SQL Roadmap', url: 'https://roadmap.sh/sql' },
            { type: 'course', title: 'SQL Tutorial (Mode)', url: 'https://mode.com/sql-tutorial' },
            { type: 'video', title: 'SQL Full Course', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY' },
            { type: 'course', title: 'SQLBolt Interactive', url: 'https://sqlbolt.com/' },
        ],
    },
    'joins-subqueries': {
        id: 'joins-subqueries',
        title: 'JOINs & Subqueries',
        description: 'Understanding INNER, LEFT, RIGHT, FULL, and CROSS JOINs along with correlated and uncorrelated subqueries is essential for complex data retrieval.',
        resources: [
            { type: 'article', title: 'SQL Joins Visualized', url: 'https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/' },
        ],
    },
    'window-functions': {
        id: 'window-functions',
        title: 'Window Functions',
        description: 'Window functions (ROW_NUMBER, RANK, LAG, LEAD, running totals) perform calculations across related rows without collapsing the result set. Critical for advanced analysis.',
        resources: [
            { type: 'course', title: 'Window Functions Tutorial (Mode)', url: 'https://mode.com/sql-tutorial/sql-window-functions' },
            { type: 'video', title: 'SQL Window Functions Explained', url: 'https://www.youtube.com/watch?v=MHBsPcxfnuw' },
        ],
    },
    ctes: {
        id: 'ctes',
        title: 'CTEs & Temp Tables',
        description: 'Common Table Expressions (CTEs) and temporary tables organize complex queries into readable steps. WITH clauses make queries modular and maintainable.',
        resources: [
            { type: 'article', title: 'SQL CTEs Explained', url: 'https://learnsql.com/blog/what-is-cte/' },
        ],
    },

    // ── Python ──
    python: {
        id: 'python',
        title: 'Python',
        description: 'Python is the primary programming language for data analysis. It provides powerful libraries for data manipulation, visualization, statistics, and machine learning.',
        resources: [
            { type: 'roadmap', title: 'Visit the Python Roadmap', url: 'https://roadmap.sh/python' },
            { type: 'video', title: 'Python for Data Analysis', url: 'https://www.youtube.com/watch?v=GPVsHOlRBBI' },
            { type: 'official', title: 'Python Documentation', url: 'https://docs.python.org/3/' },
        ],
    },
    pandas: {
        id: 'pandas',
        title: 'Pandas',
        description: 'Pandas is the core library for data manipulation in Python. DataFrames, Series, groupby, merge, pivot tables, and time series operations.',
        resources: [
            { type: 'official', title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
            { type: 'video', title: 'Pandas Complete Tutorial', url: 'https://www.youtube.com/watch?v=vmEHCJofslg' },
        ],
    },
    numpy: {
        id: 'numpy',
        title: 'NumPy',
        description: 'NumPy provides support for numerical computing with powerful array operations, linear algebra, and mathematical functions. Foundation for all scientific Python.',
        resources: [
            { type: 'official', title: 'NumPy Documentation', url: 'https://numpy.org/doc/' },
        ],
    },
    jupyter: {
        id: 'jupyter',
        title: 'Jupyter Notebooks',
        description: 'Jupyter Notebooks provide an interactive environment for data analysis combining code, visualizations, and narrative text. Industry standard for exploration.',
        resources: [
            { type: 'official', title: 'Jupyter Documentation', url: 'https://jupyter.org/documentation' },
            { type: 'video', title: 'Jupyter Notebook Tutorial', url: 'https://www.youtube.com/watch?v=HW29067qVWk' },
        ],
    },

    // ── Statistics ──
    'descriptive-stats': {
        id: 'descriptive-stats',
        title: 'Descriptive Statistics',
        description: 'Mean, median, mode, standard deviation, variance, percentiles, and distributions. The foundation of understanding data and summarizing datasets.',
        resources: [
            { type: 'course', title: 'Statistics & Probability (Khan Academy)', url: 'https://www.khanacademy.org/math/statistics-probability' },
            { type: 'video', title: 'Statistics Fundamentals', url: 'https://www.youtube.com/watch?v=xxpc-HPKN28' },
        ],
    },
    'probability': {
        id: 'probability',
        title: 'Probability',
        description: 'Probability theory, Bayes\' theorem, conditional probability, distributions (normal, binomial, Poisson), and expected values. Essential for predictive analytics.',
        resources: [
            { type: 'course', title: 'Probability (Khan Academy)', url: 'https://www.khanacademy.org/math/statistics-probability/probability-library' },
        ],
    },
    'hypothesis-testing': {
        id: 'hypothesis-testing',
        title: 'Hypothesis Testing',
        description: 'Hypothesis testing determines if results are statistically significant. P-values, confidence intervals, t-tests, chi-square tests, ANOVA, and A/B testing.',
        resources: [
            { type: 'article', title: 'Hypothesis Testing Guide', url: 'https://www.statisticshowto.com/probability-and-statistics/hypothesis-testing/' },
            { type: 'video', title: 'Hypothesis Testing Explained', url: 'https://www.youtube.com/watch?v=0oc49DyA3hU' },
        ],
    },
    regression: {
        id: 'regression',
        title: 'Regression Analysis',
        description: 'Linear regression, multiple regression, and logistic regression model relationships between variables. Essential for prediction and trend analysis.',
        resources: [
            { type: 'video', title: 'Regression Analysis Full Course', url: 'https://www.youtube.com/watch?v=zPG4NjIkCjc' },
        ],
    },

    // ── Data Visualization ──
    matplotlib: {
        id: 'matplotlib',
        title: 'Matplotlib',
        description: 'Matplotlib is Python\'s foundational plotting library. Line plots, bar charts, histograms, scatter plots, and customizable visualizations.',
        resources: [
            { type: 'official', title: 'Matplotlib Documentation', url: 'https://matplotlib.org/stable/contents.html' },
        ],
    },
    seaborn: {
        id: 'seaborn',
        title: 'Seaborn',
        description: 'Seaborn provides high-level statistical visualizations built on Matplotlib. Heatmaps, pair plots, categorical plots, and beautiful default themes.',
        resources: [
            { type: 'official', title: 'Seaborn Documentation', url: 'https://seaborn.pydata.org/' },
        ],
    },
    tableau: {
        id: 'tableau',
        title: 'Tableau',
        description: 'Tableau is the leading BI visualization tool. Drag-and-drop interface, interactive dashboards, calculated fields, and sharing via Tableau Public or Server.',
        resources: [
            { type: 'official', title: 'Tableau Learning', url: 'https://www.tableau.com/learn' },
            { type: 'video', title: 'Tableau Full Course', url: 'https://www.youtube.com/watch?v=aHaOIvR00So' },
        ],
    },
    'power-bi': {
        id: 'power-bi',
        title: 'Power BI',
        description: 'Microsoft Power BI is a business intelligence tool for creating interactive reports and dashboards. DAX formulas, Power Query, and integration with Excel and Azure.',
        resources: [
            { type: 'official', title: 'Power BI Documentation', url: 'https://learn.microsoft.com/en-us/power-bi/' },
            { type: 'video', title: 'Power BI Full Course', url: 'https://www.youtube.com/watch?v=AGrl-H87pRU' },
        ],
    },
    plotly: {
        id: 'plotly',
        title: 'Plotly',
        description: 'Plotly creates interactive web-based visualizations in Python. Supports complex charts like 3D plots, maps, and animated visualizations with Dash for web apps.',
        resources: [
            { type: 'official', title: 'Plotly Python Documentation', url: 'https://plotly.com/python/' },
        ],
    },

    // ── Data Cleaning ──
    'data-cleaning': {
        id: 'data-cleaning',
        title: 'Data Cleaning',
        description: 'Data cleaning handles missing values, duplicates, outliers, wrong data types, and inconsistent formatting. Up to 80% of an analyst\'s time is spent on cleaning.',
        resources: [
            { type: 'article', title: 'Data Cleaning with Python', url: 'https://realpython.com/python-data-cleaning-numpy-pandas/' },
            { type: 'video', title: 'Data Cleaning Tutorial', url: 'https://www.youtube.com/watch?v=bDhvCp3_lYw' },
        ],
    },
    'data-transformation': {
        id: 'data-transformation',
        title: 'Data Transformation',
        description: 'Transforming data through normalization, encoding, feature engineering, aggregation, and reshaping prepares it for analysis and modeling.',
        resources: [
            { type: 'article', title: 'Data Transformation Guide', url: 'https://towardsdatascience.com/data-transformation-in-python-2b41d3e56fa4/' },
        ],
    },

    // ── BI Tools & Reporting ──
    'dashboard-design': {
        id: 'dashboard-design',
        title: 'Dashboard Design',
        description: 'Effective dashboards tell a story. Layout principles, KPI selection, chart type selection, color theory, interactivity, and audience-appropriate design.',
        resources: [
            { type: 'article', title: 'Dashboard Design Best Practices', url: 'https://www.geckoboard.com/best-practice/dashboard-design/' },
        ],
    },
    'storytelling': {
        id: 'storytelling',
        title: 'Data Storytelling',
        description: 'Data storytelling combines data, visuals, and narrative to communicate insights effectively. Structure findings, create compelling presentations, and drive action.',
        resources: [
            { type: 'video', title: 'Data Storytelling (Cole Nussbaumer)', url: 'https://www.youtube.com/watch?v=8EMW7io4rSI' },
            { type: 'article', title: 'Storytelling with Data', url: 'https://www.storytellingwithdata.com/' },
        ],
    },

    // ── Databases ──
    postgresql: {
        id: 'postgresql',
        title: 'PostgreSQL',
        description: 'PostgreSQL is the most advanced open-source database. Full-text search, JSON support, window functions, and extensions like PostGIS make it ideal for analysts.',
        resources: [
            { type: 'official', title: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/' },
        ],
    },
    mysql: {
        id: 'mysql',
        title: 'MySQL',
        description: 'MySQL is the most popular open-source database, widely used in business data stores. Simple, reliable, and well-documented.',
        resources: [
            { type: 'official', title: 'MySQL Documentation', url: 'https://dev.mysql.com/doc/' },
        ],
    },
    bigquery: {
        id: 'bigquery',
        title: 'BigQuery',
        description: 'Google BigQuery is a serverless data warehouse for fast SQL queries on large datasets. Ideal for analytics on petabytes of data without managing infrastructure.',
        resources: [
            { type: 'official', title: 'BigQuery Documentation', url: 'https://cloud.google.com/bigquery/docs' },
            { type: 'video', title: 'BigQuery for Data Analysts', url: 'https://www.youtube.com/watch?v=jx2RO0nTJCg' },
        ],
    },
    snowflake: {
        id: 'snowflake',
        title: 'Snowflake',
        description: 'Snowflake is a cloud data warehouse with automatic scaling, data sharing, and separation of compute and storage. Popular for enterprise analytics.',
        resources: [
            { type: 'official', title: 'Snowflake Documentation', url: 'https://docs.snowflake.com/' },
        ],
    },

    // ── ETL ──
    etl: {
        id: 'etl',
        title: 'ETL / ELT',
        description: 'Extract, Transform, Load (ETL) and Extract, Load, Transform (ELT) pipelines move data from sources to analytical systems. Understanding data pipelines is essential.',
        resources: [
            { type: 'article', title: 'ETL vs ELT', url: 'https://www.ibm.com/topics/etl' },
            { type: 'video', title: 'ETL Explained', url: 'https://www.youtube.com/watch?v=OW5OgsLpDCQ' },
        ],
    },
    dbt: {
        id: 'dbt',
        title: 'dbt',
        description: 'dbt (data build tool) transforms data in the warehouse using SQL SELECT statements. It brings software engineering practices (version control, testing, documentation) to analytics.',
        resources: [
            { type: 'official', title: 'dbt Documentation', url: 'https://docs.getdbt.com/' },
            { type: 'video', title: 'dbt Tutorial', url: 'https://www.youtube.com/watch?v=5rNquRnNb4E' },
        ],
    },
};

// ─── Data Analyst Sections ───────────────────────────────────────
export const DATA_ANALYST_SECTIONS: RoadmapSection[] = [
    {
        id: 'fundamentals',
        title: 'Fundamentals',
        description: 'What is Data Analytics?',
        rightTopics: [
            { id: 'what-is-data-analytics', title: 'What is Data Analytics?' },
            { id: 'types-of-analytics', title: 'Types of Analytics' },
            { id: 'data-lifecycle', title: 'Analytics Lifecycle' },
        ],
    },
    {
        id: 'spreadsheets',
        title: 'Spreadsheets',
        description: 'Your first tool',
        leftTopics: [
            { id: 'excel', title: 'Excel' },
        ],
        rightTopics: [
            { id: 'google-sheets', title: 'Google Sheets' },
        ],
    },
    {
        id: 'sql-section',
        title: 'SQL',
        description: 'The language of data',
        leftTopics: [
            { id: 'sql', title: 'SQL Fundamentals' },
            { id: 'joins-subqueries', title: 'JOINs & Subqueries' },
        ],
        rightTopics: [
            { id: 'window-functions', title: 'Window Functions' },
            { id: 'ctes', title: 'CTEs & Temp Tables' },
        ],
    },
    {
        id: 'python-section',
        title: 'Python',
        leftTopics: [
            { id: 'pandas', title: 'Pandas' },
            { id: 'numpy', title: 'NumPy' },
        ],
        rightTopics: [
            { id: 'jupyter', title: 'Jupyter Notebooks' },
        ],
    },
    {
        id: 'statistics',
        title: 'Statistics',
        description: 'Foundation of analysis',
        leftTopics: [
            { id: 'descriptive-stats', title: 'Descriptive Statistics' },
            { id: 'probability', title: 'Probability' },
        ],
        rightTopics: [
            { id: 'hypothesis-testing', title: 'Hypothesis Testing' },
            { id: 'regression', title: 'Regression Analysis' },
        ],
    },
    {
        id: 'cleaning',
        title: 'Data Cleaning',
        description: '80% of the work',
        leftTopics: [
            { id: 'data-cleaning', title: 'Cleaning Techniques' },
        ],
        rightTopics: [
            { id: 'data-transformation', title: 'Transformation' },
        ],
    },
    {
        id: 'viz-python',
        title: 'Visualization (Python)',
        leftTopics: [
            { id: 'matplotlib', title: 'Matplotlib' },
            { id: 'seaborn', title: 'Seaborn' },
        ],
        rightTopics: [
            { id: 'plotly', title: 'Plotly' },
        ],
    },
    {
        id: 'viz-tools',
        title: 'BI Visualization Tools',
        description: 'No-code dashboards',
        leftTopics: [
            { id: 'tableau', title: 'Tableau' },
        ],
        rightTopics: [
            { id: 'power-bi', title: 'Power BI' },
        ],
    },
    {
        id: 'reporting',
        title: 'Reporting & Communication',
        leftTopics: [
            { id: 'dashboard-design', title: 'Dashboard Design' },
        ],
        rightTopics: [
            { id: 'storytelling', title: 'Data Storytelling' },
        ],
    },
    {
        id: 'databases',
        title: 'Databases',
        leftTopics: [
            { id: 'postgresql', title: 'PostgreSQL' },
            { id: 'mysql', title: 'MySQL' },
        ],
        rightTopics: [
            { id: 'bigquery', title: 'BigQuery' },
            { id: 'snowflake', title: 'Snowflake' },
        ],
    },
    {
        id: 'etl-section',
        title: 'Data Pipelines',
        description: 'ETL / ELT',
        leftTopics: [
            { id: 'etl', title: 'ETL / ELT' },
        ],
        rightTopics: [
            { id: 'dbt', title: 'dbt' },
        ],
    },
];
