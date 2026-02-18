import type { Topic, RoadmapSection } from './frontendRoadmap';

export const MLOPS_TOPICS: Record<string, Topic> = {
    // ── Foundations ──
    'what-is-mlops': {
        id: 'what-is-mlops',
        title: 'What is MLOps?',
        description: 'MLOps applies DevOps principles to machine learning. Automate training, testing, deploying, and monitoring ML models in production. Bridge between ML and operations.',
        resources: [
            { type: 'article', title: 'MLOps Guide (Google)', url: 'https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning' },
            { type: 'video', title: 'MLOps Explained', url: 'https://www.youtube.com/watch?v=ZVWg18AXXuE' },
        ],
    },
    'ml-lifecycle': {
        id: 'ml-lifecycle',
        title: 'ML Lifecycle',
        description: 'Data collection → Feature engineering → Training → Evaluation → Deployment → Monitoring → Retraining. The iterative cycle that MLOps automates.',
        resources: [
            { type: 'article', title: 'ML Lifecycle', url: 'https://ml-ops.org/content/mlops-principles' },
        ],
    },
    'ml-fundamentals': {
        id: 'ml-fundamentals',
        title: 'ML Fundamentals',
        description: 'Supervised/unsupervised learning, model training, evaluation metrics, overfitting, cross-validation, and feature engineering. Essential ML knowledge for ops.',
        resources: [
            { type: 'course', title: 'Machine Learning (Andrew Ng)', url: 'https://www.coursera.org/learn/machine-learning' },
        ],
    },

    // ── Version Control ──
    'data-versioning': {
        id: 'data-versioning',
        title: 'Data Versioning',
        description: 'Version control for datasets and models. DVC (Data Version Control), LakeFS, and Git LFS. Track data lineage and reproducibility.',
        resources: [
            { type: 'official', title: 'DVC Documentation', url: 'https://dvc.org/doc' },
        ],
    },
    'model-registry': {
        id: 'model-registry',
        title: 'Model Registry',
        description: 'Central repository for trained models. Versioning, staging (dev/staging/prod), metadata tracking, and model lineage. MLflow Model Registry, Weights & Biases.',
        resources: [
            { type: 'official', title: 'MLflow Model Registry', url: 'https://mlflow.org/docs/latest/model-registry.html' },
        ],
    },

    // ── Experiment Tracking ──
    mlflow: {
        id: 'mlflow',
        title: 'MLflow',
        description: 'MLflow tracks experiments, packages models, and manages deployment. Tracking server, projects, models, and the model registry.',
        resources: [
            { type: 'official', title: 'MLflow Documentation', url: 'https://mlflow.org/docs/latest/' },
            { type: 'video', title: 'MLflow Tutorial', url: 'https://www.youtube.com/watch?v=ksYIt1rOJig' },
        ],
    },
    wandb: {
        id: 'wandb',
        title: 'Weights & Biases',
        description: 'W&B provides experiment tracking, dataset versioning, model monitoring, hyperparameter sweeps, and collaborative dashboards.',
        resources: [
            { type: 'official', title: 'W&B Documentation', url: 'https://docs.wandb.ai/' },
        ],
    },

    // ── Feature Stores ──
    'feature-store': {
        id: 'feature-store',
        title: 'Feature Stores',
        description: 'Centralized feature management for ML. Feast (open-source), Tecton, and Databricks Feature Store. Feature serving, versioning, and reuse across models.',
        resources: [
            { type: 'official', title: 'Feast Documentation', url: 'https://docs.feast.dev/' },
        ],
    },

    // ── Data Pipelines ──
    'data-pipelines': {
        id: 'data-pipelines',
        title: 'Data Pipelines',
        description: 'Automated data ingestion, transformation, and validation. Apache Airflow, Prefect, and Dagster for orchestrating ML data workflows.',
        resources: [
            { type: 'official', title: 'Apache Airflow', url: 'https://airflow.apache.org/' },
        ],
    },
    'data-validation': {
        id: 'data-validation',
        title: 'Data Validation',
        description: 'Automated data quality checks. Great Expectations, TensorFlow Data Validation (TFDV), and Pandera. Schema enforcement and drift detection.',
        resources: [
            { type: 'official', title: 'Great Expectations', url: 'https://greatexpectations.io/' },
        ],
    },

    // ── Training ──
    'training-pipelines': {
        id: 'training-pipelines',
        title: 'Training Pipelines',
        description: 'Automated model training workflows. Kubeflow Pipelines, MLflow Projects, and SageMaker Pipelines. Reproducible, scalable training.',
        resources: [
            { type: 'official', title: 'Kubeflow Pipelines', url: 'https://www.kubeflow.org/docs/components/pipelines/' },
        ],
    },
    'distributed-training': {
        id: 'distributed-training',
        title: 'Distributed Training',
        description: 'Training across multiple GPUs and nodes. Data parallelism, model parallelism, PyTorch DDP, Horovod, and DeepSpeed.',
        resources: [
            { type: 'official', title: 'PyTorch DDP', url: 'https://pytorch.org/tutorials/intermediate/ddp_tutorial.html' },
        ],
    },
    'hyperparameter-tuning': {
        id: 'hyperparameter-tuning',
        title: 'Hyperparameter Tuning',
        description: 'Automated hyperparameter optimization. Optuna, Ray Tune, bayesian optimization, and grid/random search at scale.',
        resources: [
            { type: 'official', title: 'Optuna', url: 'https://optuna.org/' },
            { type: 'official', title: 'Ray Tune', url: 'https://docs.ray.io/en/latest/tune/' },
        ],
    },

    // ── Model Serving ──
    'model-serving': {
        id: 'model-serving',
        title: 'Model Serving',
        description: 'Serving predictions via REST/gRPC APIs. TensorFlow Serving, TorchServe, Triton Inference Server, and BentoML for packaging.',
        resources: [
            { type: 'official', title: 'TF Serving', url: 'https://www.tensorflow.org/tfx/guide/serving' },
            { type: 'official', title: 'BentoML', url: 'https://docs.bentoml.com/' },
        ],
    },
    'model-optimization': {
        id: 'model-optimization',
        title: 'Model Optimization',
        description: 'Quantization (INT8, FP16), pruning, knowledge distillation, ONNX Runtime, TensorRT, and model compilation for faster inference.',
        resources: [
            { type: 'official', title: 'ONNX Runtime', url: 'https://onnxruntime.ai/' },
        ],
    },
    'batch-vs-realtime': {
        id: 'batch-vs-realtime',
        title: 'Batch vs Real-time Inference',
        description: 'Batch inference for large-scale offline predictions. Real-time inference for low-latency serving. Stream processing with Kafka for near-real-time.',
        resources: [
            { type: 'article', title: 'Batch vs Real-time ML', url: 'https://neptune.ai/blog/batch-vs-real-time-predictions' },
        ],
    },

    // ── Containerization ──
    docker: {
        id: 'docker',
        title: 'Docker for ML',
        description: 'Containerizing ML models and dependencies. Reproducible environments, GPU support (nvidia-docker), multi-stage builds, and slim images.',
        resources: [
            { type: 'official', title: 'Docker Documentation', url: 'https://docs.docker.com/' },
        ],
    },
    kubernetes: {
        id: 'kubernetes',
        title: 'Kubernetes for ML',
        description: 'Orchestrating ML workloads on Kubernetes. Kubeflow, Seldon Core, KServe, GPU scheduling, and auto-scaling inference endpoints.',
        resources: [
            { type: 'official', title: 'Kubeflow', url: 'https://www.kubeflow.org/' },
        ],
    },

    // ── CI/CD for ML ──
    'ci-cd-ml': {
        id: 'ci-cd-ml',
        title: 'CI/CD for ML',
        description: 'Continuous integration and deployment for ML. Automated testing (data tests, model tests), model validation gates, and deployment pipelines.',
        resources: [
            { type: 'article', title: 'CI/CD for ML (Google)', url: 'https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning' },
        ],
    },
    'a-b-testing': {
        id: 'a-b-testing',
        title: 'A/B Testing & Canary',
        description: 'Testing model versions in production. A/B testing, canary deployments, shadow mode (dark launching), and multi-armed bandits.',
        resources: [
            { type: 'article', title: 'A/B Testing for ML', url: 'https://neptune.ai/blog/ab-testing-machine-learning' },
        ],
    },

    // ── Monitoring ──
    'model-monitoring': {
        id: 'model-monitoring',
        title: 'Model Monitoring',
        description: 'Monitoring model performance in production. Data drift, concept drift, prediction quality degradation, and automated retraining triggers.',
        resources: [
            { type: 'official', title: 'Evidently AI', url: 'https://www.evidentlyai.com/' },
            { type: 'official', title: 'Whylabs', url: 'https://whylabs.ai/' },
        ],
    },
    'observability': {
        id: 'observability',
        title: 'ML Observability',
        description: 'Logging predictions, tracking latency/throughput, alerting on anomalies, and dashboard visualization. Prometheus, Grafana, and Datadog for ML.',
        resources: [
            { type: 'official', title: 'Prometheus', url: 'https://prometheus.io/' },
        ],
    },

    // ── Cloud Platforms ──
    sagemaker: {
        id: 'sagemaker',
        title: 'AWS SageMaker',
        description: 'End-to-end ML platform on AWS. Studio, training jobs, endpoints, pipelines, Feature Store, and model monitoring. The most comprehensive cloud ML service.',
        resources: [
            { type: 'official', title: 'SageMaker Documentation', url: 'https://docs.aws.amazon.com/sagemaker/' },
        ],
    },
    'vertex-ai': {
        id: 'vertex-ai',
        title: 'Google Vertex AI',
        description: 'Google\'s unified ML platform. AutoML, custom training, Vertex Pipelines, Model Registry, Feature Store, and TensorBoard integration.',
        resources: [
            { type: 'official', title: 'Vertex AI Documentation', url: 'https://cloud.google.com/vertex-ai/docs' },
        ],
    },
};

export const MLOPS_SECTIONS: RoadmapSection[] = [
    {
        id: 'foundations',
        title: 'Foundations',
        leftTopics: [
            { id: 'what-is-mlops', title: 'What is MLOps?' },
            { id: 'ml-lifecycle', title: 'ML Lifecycle' },
        ],
        rightTopics: [{ id: 'ml-fundamentals', title: 'ML Fundamentals' }],
    },
    {
        id: 'versioning',
        title: 'Version Control',
        leftTopics: [{ id: 'data-versioning', title: 'Data Versioning' }],
        rightTopics: [{ id: 'model-registry', title: 'Model Registry' }],
    },
    {
        id: 'experiment',
        title: 'Experiment Tracking',
        leftTopics: [{ id: 'mlflow', title: 'MLflow' }],
        rightTopics: [{ id: 'wandb', title: 'Weights & Biases' }],
    },
    {
        id: 'features',
        title: 'Feature Engineering',
        rightTopics: [{ id: 'feature-store', title: 'Feature Stores' }],
    },
    {
        id: 'data',
        title: 'Data Pipelines',
        leftTopics: [{ id: 'data-pipelines', title: 'Orchestration' }],
        rightTopics: [{ id: 'data-validation', title: 'Data Validation' }],
    },
    {
        id: 'training',
        title: 'Training',
        leftTopics: [
            { id: 'training-pipelines', title: 'Training Pipelines' },
        ],
        rightTopics: [
            { id: 'distributed-training', title: 'Distributed Training' },
            { id: 'hyperparameter-tuning', title: 'HP Tuning' },
        ],
    },
    {
        id: 'serving',
        title: 'Model Serving',
        leftTopics: [
            { id: 'model-serving', title: 'Serving Infrastructure' },
            { id: 'model-optimization', title: 'Model Optimization' },
        ],
        rightTopics: [{ id: 'batch-vs-realtime', title: 'Batch vs Real-time' }],
    },
    {
        id: 'infra',
        title: 'Infrastructure',
        leftTopics: [{ id: 'docker', title: 'Docker for ML' }],
        rightTopics: [{ id: 'kubernetes', title: 'Kubernetes for ML' }],
    },
    {
        id: 'cicd',
        title: 'CI/CD for ML',
        leftTopics: [{ id: 'ci-cd-ml', title: 'CI/CD Pipelines' }],
        rightTopics: [{ id: 'a-b-testing', title: 'A/B Testing & Canary' }],
    },
    {
        id: 'monitoring',
        title: 'Monitoring',
        description: 'Keep models healthy',
        leftTopics: [{ id: 'model-monitoring', title: 'Model Monitoring' }],
        rightTopics: [{ id: 'observability', title: 'ML Observability' }],
    },
    {
        id: 'cloud',
        title: 'Cloud ML Platforms',
        leftTopics: [{ id: 'sagemaker', title: 'AWS SageMaker' }],
        rightTopics: [{ id: 'vertex-ai', title: 'Google Vertex AI' }],
    },
];
