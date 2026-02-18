import type { Topic, RoadmapSection } from './frontendRoadmap';

// ─── Machine Learning Topics ─────────────────────────────────────
export const ML_TOPICS: Record<string, Topic> = {
    // ── Mathematics ──
    'linear-algebra': {
        id: 'linear-algebra',
        title: 'Linear Algebra',
        description: 'Vectors, matrices, eigenvalues, SVD, and matrix decomposition. Every ML algorithm operates on vectors and matrices — linear algebra is the language of ML.',
        resources: [
            { type: 'course', title: 'Essence of Linear Algebra (3Blue1Brown)', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' },
            { type: 'course', title: 'MIT 18.06 Linear Algebra', url: 'https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/' },
        ],
    },
    calculus: {
        id: 'calculus',
        title: 'Calculus & Optimization',
        description: 'Derivatives, gradients, chain rule, partial derivatives, and gradient descent. Training any model is fundamentally an optimization problem solved with calculus.',
        resources: [
            { type: 'course', title: 'Essence of Calculus (3Blue1Brown)', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr' },
        ],
    },
    'probability-stats': {
        id: 'probability-stats',
        title: 'Probability & Statistics',
        description: 'Distributions, Bayes\' theorem, MLE, MAP, hypothesis testing, confidence intervals, and statistical tests. The backbone of model evaluation and inference.',
        resources: [
            { type: 'course', title: 'Statistics (Khan Academy)', url: 'https://www.khanacademy.org/math/statistics-probability' },
            { type: 'video', title: 'StatQuest Fundamentals', url: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9' },
        ],
    },

    // ── Programming ──
    python: {
        id: 'python',
        title: 'Python',
        description: 'Python is the dominant language in ML. NumPy for numerics, Pandas for data, Matplotlib/Seaborn for visualization, and the entire scientific Python ecosystem.',
        resources: [
            { type: 'roadmap', title: 'Visit the Python Roadmap', url: 'https://roadmap.sh/python' },
            { type: 'official', title: 'Python Documentation', url: 'https://docs.python.org/3/' },
        ],
    },
    numpy: {
        id: 'numpy',
        title: 'NumPy',
        description: 'NumPy provides fast n-dimensional array operations, broadcasting, linear algebra, and random number generation. The foundation of all numerical Python.',
        resources: [
            { type: 'official', title: 'NumPy Documentation', url: 'https://numpy.org/doc/' },
        ],
    },
    pandas: {
        id: 'pandas',
        title: 'Pandas',
        description: 'Pandas provides DataFrames for data manipulation. Loading data, cleaning, groupby, merge, pivot, and time series operations.',
        resources: [
            { type: 'official', title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
        ],
    },
    matplotlib: {
        id: 'matplotlib',
        title: 'Matplotlib & Seaborn',
        description: 'Matplotlib for base plotting and Seaborn for statistical visualizations. Essential for EDA, model evaluation plots, and communicating results.',
        resources: [
            { type: 'official', title: 'Matplotlib Documentation', url: 'https://matplotlib.org/' },
            { type: 'official', title: 'Seaborn Documentation', url: 'https://seaborn.pydata.org/' },
        ],
    },

    // ── Data Preprocessing ──
    'data-cleaning': {
        id: 'data-cleaning',
        title: 'Data Cleaning',
        description: 'Handling missing values (imputation), removing duplicates, fixing data types, handling outliers, and dealing with inconsistent data. Garbage in → garbage out.',
        resources: [
            { type: 'article', title: 'Data Cleaning with Python', url: 'https://realpython.com/python-data-cleaning-numpy-pandas/' },
        ],
    },
    'feature-engineering': {
        id: 'feature-engineering',
        title: 'Feature Engineering',
        description: 'Creating informative features from raw data. Encoding categoricals (one-hot, label, target), scaling (StandardScaler, MinMax), binning, polynomial features, and interactions.',
        resources: [
            { type: 'course', title: 'Feature Engineering (Kaggle)', url: 'https://www.kaggle.com/learn/feature-engineering' },
        ],
    },
    'feature-selection': {
        id: 'feature-selection',
        title: 'Feature Selection',
        description: 'Selecting the most relevant features. Filter methods (correlation, variance), wrapper methods (RFE), embedded methods (Lasso, tree importance), and dimensionality reduction.',
        resources: [
            { type: 'article', title: 'Feature Selection Techniques', url: 'https://machinelearningmastery.com/feature-selection-with-real-and-categorical-data/' },
        ],
    },
    'train-test-split': {
        id: 'train-test-split',
        title: 'Train/Test Split & Cross-Validation',
        description: 'Splitting data into train/validation/test sets. K-fold cross-validation, stratified splits, time-series splits, and avoiding data leakage.',
        resources: [
            { type: 'article', title: 'Cross-Validation (Scikit-learn)', url: 'https://scikit-learn.org/stable/modules/cross_validation.html' },
        ],
    },

    // ── Supervised Learning ──
    'linear-regression': {
        id: 'linear-regression',
        title: 'Linear Regression',
        description: 'The simplest ML algorithm — fit a line/plane to data. OLS, cost function (MSE), gradient descent, regularization (Ridge, Lasso, ElasticNet), and assumptions.',
        resources: [
            { type: 'video', title: 'Linear Regression (StatQuest)', url: 'https://www.youtube.com/watch?v=nk2CQITm_eo' },
        ],
    },
    'logistic-regression': {
        id: 'logistic-regression',
        title: 'Logistic Regression',
        description: 'Binary classification using the sigmoid function. Log loss, decision boundary, multiclass (softmax), regularization, and interpretation of coefficients.',
        resources: [
            { type: 'video', title: 'Logistic Regression (StatQuest)', url: 'https://www.youtube.com/watch?v=yIYKR4sgzI8' },
        ],
    },
    'decision-trees': {
        id: 'decision-trees',
        title: 'Decision Trees',
        description: 'Tree-based models split data based on feature thresholds. Gini impurity, information gain, pruning, and interpretation. Foundation for ensemble methods.',
        resources: [
            { type: 'video', title: 'Decision Trees (StatQuest)', url: 'https://www.youtube.com/watch?v=7VeUPuFGJHk' },
        ],
    },
    'random-forest': {
        id: 'random-forest',
        title: 'Random Forests',
        description: 'Ensemble of decision trees with bagging. Reduces variance, handles nonlinearity, feature importance, and out-of-bag error estimation.',
        resources: [
            { type: 'video', title: 'Random Forests (StatQuest)', url: 'https://www.youtube.com/watch?v=J4Wdy0Wc_xQ' },
        ],
    },
    'gradient-boosting': {
        id: 'gradient-boosting',
        title: 'Gradient Boosting (XGBoost / LightGBM)',
        description: 'The king of tabular ML. Sequential tree building, learning rate, regularization, and production-ready implementations: XGBoost, LightGBM, CatBoost.',
        resources: [
            { type: 'video', title: 'Gradient Boost (StatQuest)', url: 'https://www.youtube.com/watch?v=3CC4N4z3GJc' },
            { type: 'official', title: 'XGBoost Documentation', url: 'https://xgboost.readthedocs.io/' },
        ],
    },
    svm: {
        id: 'svm',
        title: 'Support Vector Machines',
        description: 'SVMs find the optimal hyperplane to separate classes. Kernel trick (RBF, polynomial), margin maximization, and support vectors. Strong for high-dimensional data.',
        resources: [
            { type: 'video', title: 'SVM (StatQuest)', url: 'https://www.youtube.com/watch?v=efR1C6CvhmE' },
        ],
    },
    knn: {
        id: 'knn',
        title: 'K-Nearest Neighbors',
        description: 'KNN classifies by majority vote of nearest neighbors. Distance metrics (Euclidean, Manhattan), choosing K, curse of dimensionality, and scaling importance.',
        resources: [
            { type: 'video', title: 'KNN Explained', url: 'https://www.youtube.com/watch?v=HVXime0nQeI' },
        ],
    },
    'naive-bayes': {
        id: 'naive-bayes',
        title: 'Naive Bayes',
        description: 'Probabilistic classifier based on Bayes\' theorem with independence assumption. Gaussian, Multinomial, and Bernoulli variants. Fast, good for text classification.',
        resources: [
            { type: 'video', title: 'Naive Bayes (StatQuest)', url: 'https://www.youtube.com/watch?v=O2L2Uv9pdDA' },
        ],
    },

    // ── Unsupervised Learning ──
    'k-means': {
        id: 'k-means',
        title: 'K-Means Clustering',
        description: 'Partition data into K clusters by minimizing within-cluster variance. Choosing K (elbow method, silhouette), initialization (K-Means++), and limitations.',
        resources: [
            { type: 'video', title: 'K-Means (StatQuest)', url: 'https://www.youtube.com/watch?v=4b5d3muPQmA' },
        ],
    },
    hierarchical: {
        id: 'hierarchical',
        title: 'Hierarchical Clustering',
        description: 'Agglomerative (bottom-up) and divisive (top-down) clustering. Dendrograms, linkage methods (single, complete, average, Ward), and determining cluster count.',
        resources: [
            { type: 'video', title: 'Hierarchical Clustering', url: 'https://www.youtube.com/watch?v=7xHsRkOdVwo' },
        ],
    },
    dbscan: {
        id: 'dbscan',
        title: 'DBSCAN',
        description: 'Density-based clustering that finds arbitrary-shaped clusters. Handles noise, no need to specify K, eps and min_samples parameters.',
        resources: [
            { type: 'video', title: 'DBSCAN Explained', url: 'https://www.youtube.com/watch?v=RDZUdRSDOok' },
        ],
    },
    pca: {
        id: 'pca',
        title: 'PCA (Dimensionality Reduction)',
        description: 'Principal Component Analysis reduces dimensions while preserving variance. Eigenvalue decomposition, explained variance ratio, and visualization.',
        resources: [
            { type: 'video', title: 'PCA (StatQuest)', url: 'https://www.youtube.com/watch?v=FgakZw6K1QQ' },
        ],
    },

    // ── Model Evaluation ──
    'classification-metrics': {
        id: 'classification-metrics',
        title: 'Classification Metrics',
        description: 'Accuracy, precision, recall, F1-score, ROC-AUC, PR curve, confusion matrix, log loss, and when to use which metric based on the problem.',
        resources: [
            { type: 'video', title: 'Confusion Matrix (StatQuest)', url: 'https://www.youtube.com/watch?v=Kdsp6soqA7o' },
        ],
    },
    'regression-metrics': {
        id: 'regression-metrics',
        title: 'Regression Metrics',
        description: 'MSE, RMSE, MAE, R², adjusted R², MAPE, and residual analysis. Understanding which metric to optimize for different business problems.',
        resources: [
            { type: 'article', title: 'Regression Metrics Guide', url: 'https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics' },
        ],
    },
    'bias-variance': {
        id: 'bias-variance',
        title: 'Bias-Variance Tradeoff',
        description: 'The fundamental tension in ML: underfitting (high bias) vs overfitting (high variance). Learning curves, regularization, and model complexity selection.',
        resources: [
            { type: 'video', title: 'Bias-Variance (StatQuest)', url: 'https://www.youtube.com/watch?v=EuBBz3bI-aA' },
        ],
    },
    'hyperparameter-tuning': {
        id: 'hyperparameter-tuning',
        title: 'Hyperparameter Tuning',
        description: 'Grid search, random search, Bayesian optimization (Optuna), and automated hyperparameter tuning. Cross-validated scoring for robust optimization.',
        resources: [
            { type: 'official', title: 'Optuna Documentation', url: 'https://optuna.org/' },
            { type: 'article', title: 'Hyperparameter Tuning (Scikit-learn)', url: 'https://scikit-learn.org/stable/modules/grid_search.html' },
        ],
    },

    // ── Deep Learning ──
    'neural-networks': {
        id: 'neural-networks',
        title: 'Neural Networks',
        description: 'Perceptrons, layers, activation functions (ReLU, sigmoid, tanh, softmax), forward/back propagation, batch normalization, dropout, and weight initialization.',
        resources: [
            { type: 'course', title: 'Neural Networks (3Blue1Brown)', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi' },
            { type: 'course', title: 'Deep Learning Specialization', url: 'https://www.coursera.org/specializations/deep-learning' },
        ],
    },
    cnn: {
        id: 'cnn',
        title: 'CNNs',
        description: 'Convolutional Neural Networks for image data. Convolution layers, pooling, feature maps, transfer learning, and architectures (ResNet, VGG, EfficientNet).',
        resources: [
            { type: 'video', title: 'CNN Explained', url: 'https://www.youtube.com/watch?v=YRhxdVk_sIs' },
        ],
    },
    rnn: {
        id: 'rnn',
        title: 'RNNs / LSTMs / GRUs',
        description: 'Recurrent networks for sequential data. Vanishing gradients, LSTM gates, GRU, bidirectional RNNs, and applications in time series and NLP.',
        resources: [
            { type: 'article', title: 'Understanding LSTMs', url: 'https://colah.github.io/posts/2015-08-Understanding-LSTMs/' },
        ],
    },
    transformers: {
        id: 'transformers',
        title: 'Transformers',
        description: 'Self-attention, multi-head attention, positional encoding, encoder-decoder. The architecture behind BERT, GPT, Vision Transformers, and modern AI.',
        resources: [
            { type: 'article', title: 'The Illustrated Transformer', url: 'https://jalammar.github.io/illustrated-transformer/' },
        ],
    },
    pytorch: {
        id: 'pytorch',
        title: 'PyTorch',
        description: 'PyTorch is the most popular DL framework. Tensors, autograd, nn.Module, DataLoader, GPU training, and the research-to-production pipeline.',
        resources: [
            { type: 'official', title: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/' },
            { type: 'video', title: 'PyTorch Full Course', url: 'https://www.youtube.com/watch?v=V_xro1bcAuA' },
        ],
    },
    tensorflow: {
        id: 'tensorflow',
        title: 'TensorFlow / Keras',
        description: 'TensorFlow + Keras for building and training models. Sequential and functional API, callbacks, TensorBoard, SavedModel, and TFLite for mobile.',
        resources: [
            { type: 'official', title: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/tutorials' },
        ],
    },

    // ── Scikit-learn ──
    'scikit-learn': {
        id: 'scikit-learn',
        title: 'Scikit-learn',
        description: 'The standard ML library for Python. Consistent API (fit/predict/transform), pipelines, preprocessing, model selection, and evaluation utilities.',
        resources: [
            { type: 'official', title: 'Scikit-learn Documentation', url: 'https://scikit-learn.org/stable/' },
            { type: 'video', title: 'Scikit-learn Tutorial', url: 'https://www.youtube.com/watch?v=0B5eIE_1vpU' },
        ],
    },

    // ── MLOps ──
    mlflow: {
        id: 'mlflow',
        title: 'MLflow',
        description: 'MLflow tracks experiments, manages models, and handles deployment. Experiment tracking, model registry, and reproducibility for production ML.',
        resources: [
            { type: 'official', title: 'MLflow Documentation', url: 'https://mlflow.org/docs/latest/index.html' },
        ],
    },
    'model-deployment': {
        id: 'model-deployment',
        title: 'Model Deployment',
        description: 'Serving models via REST APIs (Flask/FastAPI), containerization (Docker), cloud endpoints (SageMaker, Vertex AI), model optimization, and monitoring in production.',
        resources: [
            { type: 'article', title: 'ML Deployment Guide', url: 'https://neptune.ai/blog/how-to-serve-machine-learning-models' },
        ],
    },
};

// ─── Machine Learning Sections ───────────────────────────────────
export const ML_SECTIONS: RoadmapSection[] = [
    {
        id: 'math',
        title: 'Mathematics',
        description: 'The foundation',
        leftTopics: [
            { id: 'linear-algebra', title: 'Linear Algebra' },
            { id: 'calculus', title: 'Calculus & Optimization' },
        ],
        rightTopics: [
            { id: 'probability-stats', title: 'Probability & Statistics' },
        ],
    },
    {
        id: 'programming',
        title: 'Python & Libraries',
        leftTopics: [
            { id: 'python', title: 'Python' },
            { id: 'numpy', title: 'NumPy' },
        ],
        rightTopics: [
            { id: 'pandas', title: 'Pandas' },
            { id: 'matplotlib', title: 'Matplotlib & Seaborn' },
        ],
    },
    {
        id: 'preprocessing',
        title: 'Data Preprocessing',
        leftTopics: [
            { id: 'data-cleaning', title: 'Data Cleaning' },
            { id: 'feature-engineering', title: 'Feature Engineering' },
        ],
        rightTopics: [
            { id: 'feature-selection', title: 'Feature Selection' },
            { id: 'train-test-split', title: 'Train/Test & Cross-Val' },
        ],
    },
    {
        id: 'supervised',
        title: 'Supervised Learning',
        description: 'Classification & Regression',
        leftTopics: [
            { id: 'linear-regression', title: 'Linear Regression' },
            { id: 'logistic-regression', title: 'Logistic Regression' },
            { id: 'decision-trees', title: 'Decision Trees' },
            { id: 'random-forest', title: 'Random Forests' },
        ],
        rightTopics: [
            { id: 'gradient-boosting', title: 'XGBoost / LightGBM' },
            { id: 'svm', title: 'SVM' },
            { id: 'knn', title: 'KNN' },
            { id: 'naive-bayes', title: 'Naive Bayes' },
        ],
    },
    {
        id: 'unsupervised',
        title: 'Unsupervised Learning',
        description: 'Clustering & Reduction',
        leftTopics: [
            { id: 'k-means', title: 'K-Means' },
            { id: 'hierarchical', title: 'Hierarchical' },
        ],
        rightTopics: [
            { id: 'dbscan', title: 'DBSCAN' },
            { id: 'pca', title: 'PCA' },
        ],
    },
    {
        id: 'evaluation',
        title: 'Model Evaluation',
        leftTopics: [
            { id: 'classification-metrics', title: 'Classification Metrics' },
            { id: 'regression-metrics', title: 'Regression Metrics' },
        ],
        rightTopics: [
            { id: 'bias-variance', title: 'Bias-Variance Tradeoff' },
            { id: 'hyperparameter-tuning', title: 'Hyperparameter Tuning' },
        ],
    },
    {
        id: 'sklearn-section',
        title: 'Scikit-learn',
        rightTopics: [
            { id: 'scikit-learn', title: 'Scikit-learn' },
        ],
    },
    {
        id: 'deep-learning',
        title: 'Deep Learning',
        leftTopics: [
            { id: 'neural-networks', title: 'Neural Networks' },
            { id: 'cnn', title: 'CNNs' },
            { id: 'rnn', title: 'RNNs / LSTMs' },
        ],
        rightTopics: [
            { id: 'transformers', title: 'Transformers' },
            { id: 'pytorch', title: 'PyTorch' },
            { id: 'tensorflow', title: 'TensorFlow / Keras' },
        ],
    },
    {
        id: 'mlops',
        title: 'MLOps',
        description: 'Production ML',
        leftTopics: [
            { id: 'mlflow', title: 'MLflow' },
        ],
        rightTopics: [
            { id: 'model-deployment', title: 'Model Deployment' },
        ],
    },
];
