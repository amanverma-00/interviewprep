import type { Topic, RoadmapSection } from './frontendRoadmap';

// ─── AI Engineer Topics ──────────────────────────────────────────
export const AI_ENGINEER_TOPICS: Record<string, Topic> = {
    // ── Foundations ──
    'ai-fundamentals': {
        id: 'ai-fundamentals',
        title: 'AI Fundamentals',
        description: 'Understanding what AI is, its history, types (narrow AI vs AGI), and how modern AI systems work. Foundation for everything else in the AI engineer path.',
        resources: [
            { type: 'article', title: 'What is Artificial Intelligence?', url: 'https://www.ibm.com/topics/artificial-intelligence' },
            { type: 'video', title: 'AI in 100 Seconds', url: 'https://www.youtube.com/watch?v=PeMlggyqz0Y' },
            { type: 'course', title: 'AI For Everyone (Andrew Ng)', url: 'https://www.coursera.org/learn/ai-for-everyone' },
        ],
    },
    'ml-fundamentals': {
        id: 'ml-fundamentals',
        title: 'ML Fundamentals',
        description: 'Machine learning basics: supervised vs unsupervised learning, training/test splits, overfitting, bias-variance tradeoff, and model evaluation metrics.',
        resources: [
            { type: 'course', title: 'Machine Learning (Andrew Ng)', url: 'https://www.coursera.org/learn/machine-learning' },
            { type: 'video', title: 'ML in 100 Seconds', url: 'https://www.youtube.com/watch?v=PeMlggyqz0Y' },
        ],
    },
    'math-for-ai': {
        id: 'math-for-ai',
        title: 'Math for AI',
        description: 'Linear algebra (vectors, matrices, eigenvalues), calculus (gradients, chain rule), probability & statistics, and optimization. The mathematical backbone of AI.',
        resources: [
            { type: 'course', title: 'Mathematics for Machine Learning', url: 'https://www.coursera.org/specializations/mathematics-machine-learning' },
            { type: 'video', title: 'Linear Algebra (3Blue1Brown)', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' },
        ],
    },

    // ── Programming ──
    python: {
        id: 'python',
        title: 'Python',
        description: 'Python is the primary language for AI engineering. Learn fundamentals, data structures, OOP, and the scientific Python ecosystem (NumPy, Pandas, Matplotlib).',
        resources: [
            { type: 'roadmap', title: 'Visit the Python Roadmap', url: 'https://roadmap.sh/python' },
            { type: 'video', title: 'Python Full Course', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
            { type: 'official', title: 'Python Documentation', url: 'https://docs.python.org/3/' },
        ],
    },
    'jupyter-notebooks': {
        id: 'jupyter-notebooks',
        title: 'Jupyter Notebooks',
        description: 'Jupyter provides an interactive environment for AI experimentation, combining code, visualizations, and documentation. Industry standard for prototyping.',
        resources: [
            { type: 'official', title: 'Jupyter Documentation', url: 'https://jupyter.org/documentation' },
        ],
    },

    // ── LLMs ──
    'how-llms-work': {
        id: 'how-llms-work',
        title: 'How LLMs Work',
        description: 'Large Language Models use transformer architecture to predict next tokens. Understanding tokenization, attention mechanisms, context windows, and inference is essential.',
        resources: [
            { type: 'article', title: 'What are Large Language Models?', url: 'https://www.cloudflare.com/learning/ai/what-is-large-language-model/' },
            { type: 'video', title: 'How GPT Works (3Blue1Brown)', url: 'https://www.youtube.com/watch?v=wjZofJX0v4M' },
            { type: 'article', title: 'The Illustrated Transformer', url: 'https://jalammar.github.io/illustrated-transformer/' },
        ],
    },
    'transformer-architecture': {
        id: 'transformer-architecture',
        title: 'Transformer Architecture',
        description: 'The transformer is the architecture behind GPT, BERT, and all modern LLMs. Self-attention, multi-head attention, positional encoding, and the encoder-decoder structure.',
        resources: [
            { type: 'article', title: 'Attention Is All You Need (Paper)', url: 'https://arxiv.org/abs/1706.03762' },
            { type: 'video', title: 'Transformers Explained', url: 'https://www.youtube.com/watch?v=SZorAJ4I-sA' },
        ],
    },
    tokenization: {
        id: 'tokenization',
        title: 'Tokenization',
        description: 'Tokenization converts text into numerical tokens that models process. BPE, WordPiece, SentencePiece, and tiktoken. Understanding token limits and costs is practical knowledge.',
        resources: [
            { type: 'article', title: 'How Tokenizers Work', url: 'https://huggingface.co/docs/transformers/tokenizer_summary' },
        ],
    },

    // ── Working with LLM APIs ──
    'openai-api': {
        id: 'openai-api',
        title: 'OpenAI API',
        description: 'The OpenAI API provides access to GPT-4, GPT-4o, DALL-E, Whisper, and embeddings. Chat completions, function calling, structured outputs, and streaming.',
        resources: [
            { type: 'official', title: 'OpenAI API Documentation', url: 'https://platform.openai.com/docs' },
            { type: 'video', title: 'OpenAI API Tutorial', url: 'https://www.youtube.com/watch?v=c-g6epk3fFE' },
        ],
    },
    'anthropic-api': {
        id: 'anthropic-api',
        title: 'Anthropic API',
        description: 'The Anthropic API provides access to Claude models. System prompts, tool use, vision, extended thinking, and the Messages API for building AI applications.',
        resources: [
            { type: 'official', title: 'Anthropic API Documentation', url: 'https://docs.anthropic.com/' },
        ],
    },
    'open-source-llms': {
        id: 'open-source-llms',
        title: 'Open Source LLMs',
        description: 'Open-source models like Llama, Mistral, Gemma, and Qwen can be self-hosted. Ollama, vLLM, and Hugging Face make local deployment accessible.',
        resources: [
            { type: 'official', title: 'Hugging Face Models', url: 'https://huggingface.co/models' },
            { type: 'official', title: 'Ollama', url: 'https://ollama.com/' },
        ],
    },

    // ── Prompt Engineering ──
    'prompt-engineering': {
        id: 'prompt-engineering',
        title: 'Prompt Engineering',
        description: 'Prompt engineering designs effective instructions for LLMs. Techniques include zero-shot, few-shot, chain-of-thought, system prompts, and structured output prompting.',
        resources: [
            { type: 'official', title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
            { type: 'article', title: 'Anthropic Prompt Engineering', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering' },
            { type: 'course', title: 'ChatGPT Prompt Engineering (DeepLearning.AI)', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/' },
        ],
    },
    'advanced-prompting': {
        id: 'advanced-prompting',
        title: 'Advanced Prompting',
        description: 'Advanced techniques: chain-of-thought, ReAct, tree-of-thought, self-consistency, prompt chaining, meta-prompting, and constitutional AI prompting.',
        resources: [
            { type: 'article', title: 'Prompt Engineering Guide', url: 'https://www.promptingguide.ai/' },
        ],
    },

    // ── RAG ──
    'embeddings': {
        id: 'embeddings',
        title: 'Embeddings',
        description: 'Embeddings convert text into dense vector representations. Used for semantic search, similarity, clustering, and RAG. Models: OpenAI, Cohere, Sentence-Transformers.',
        resources: [
            { type: 'article', title: 'What are Embeddings?', url: 'https://vickiboykis.com/what_are_embeddings/' },
            { type: 'video', title: 'Embeddings Explained', url: 'https://www.youtube.com/watch?v=wgfSDrqYMJ4' },
        ],
    },
    'vector-databases': {
        id: 'vector-databases',
        title: 'Vector Databases',
        description: 'Vector databases store and query embeddings for similarity search. Pinecone, Weaviate, Chroma, Qdrant, and pgvector. Essential infrastructure for RAG systems.',
        resources: [
            { type: 'article', title: 'What is a Vector Database?', url: 'https://www.pinecone.io/learn/vector-database/' },
            { type: 'official', title: 'Pinecone Documentation', url: 'https://docs.pinecone.io/' },
        ],
    },
    rag: {
        id: 'rag',
        title: 'RAG (Retrieval-Augmented Generation)',
        description: 'RAG combines retrieval from a knowledge base with LLM generation. Chunking strategies, retrieval pipelines, re-ranking, and hybrid search for accurate, grounded responses.',
        resources: [
            { type: 'article', title: 'RAG Explained', url: 'https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/' },
            { type: 'video', title: 'RAG from Scratch', url: 'https://www.youtube.com/watch?v=sVcwVQRHIc8' },
        ],
    },

    // ── AI Agents ──
    'ai-agents': {
        id: 'ai-agents',
        title: 'AI Agents',
        description: 'AI agents use LLMs to reason, plan, and execute actions autonomously. Tool use, multi-step reasoning, memory, and the ReAct pattern enable complex task completion.',
        resources: [
            { type: 'article', title: 'LLM Agents (Lilian Weng)', url: 'https://lilianweng.github.io/posts/2023-06-23-agent/' },
            { type: 'video', title: 'AI Agents Explained', url: 'https://www.youtube.com/watch?v=sal78ACtGTc' },
        ],
    },
    'function-calling': {
        id: 'function-calling',
        title: 'Function Calling / Tool Use',
        description: 'Function calling lets LLMs invoke external tools — APIs, databases, calculators, code execution. The bridge between language understanding and real-world actions.',
        resources: [
            { type: 'official', title: 'OpenAI Function Calling', url: 'https://platform.openai.com/docs/guides/function-calling' },
            { type: 'official', title: 'Anthropic Tool Use', url: 'https://docs.anthropic.com/en/docs/build-with-claude/tool-use' },
        ],
    },
    langchain: {
        id: 'langchain',
        title: 'LangChain',
        description: 'LangChain is a framework for building LLM applications — chains, agents, memory, retrieval, and tool integrations. The most popular AI application framework.',
        resources: [
            { type: 'official', title: 'LangChain Documentation', url: 'https://python.langchain.com/docs/get_started/introduction' },
            { type: 'video', title: 'LangChain Crash Course', url: 'https://www.youtube.com/watch?v=lG7Uxts9SXs' },
        ],
    },
    langgraph: {
        id: 'langgraph',
        title: 'LangGraph',
        description: 'LangGraph builds stateful, multi-actor AI applications as graphs. Cycles, branches, persistence, and human-in-the-loop for production-grade agent systems.',
        resources: [
            { type: 'official', title: 'LangGraph Documentation', url: 'https://langchain-ai.github.io/langgraph/' },
        ],
    },
    crewai: {
        id: 'crewai',
        title: 'CrewAI',
        description: 'CrewAI enables multi-agent systems where AI agents with different roles collaborate. Role-based agents, task delegation, and crew orchestration.',
        resources: [
            { type: 'official', title: 'CrewAI Documentation', url: 'https://docs.crewai.com/' },
        ],
    },

    // ── Fine-Tuning ──
    'fine-tuning': {
        id: 'fine-tuning',
        title: 'Fine-Tuning',
        description: 'Fine-tuning adapts pre-trained models to specific tasks or domains. Full fine-tuning, LoRA, QLoRA, and RLHF. When to fine-tune vs prompt engineering vs RAG.',
        resources: [
            { type: 'official', title: 'OpenAI Fine-Tuning Guide', url: 'https://platform.openai.com/docs/guides/fine-tuning' },
            { type: 'video', title: 'Fine-Tuning LLMs', url: 'https://www.youtube.com/watch?v=eC6Hd1hFvos' },
        ],
    },
    lora: {
        id: 'lora',
        title: 'LoRA / QLoRA',
        description: 'LoRA (Low-Rank Adaptation) enables efficient fine-tuning by training small adapter layers. QLoRA adds quantization for even lower memory usage. Democratizes fine-tuning.',
        resources: [
            { type: 'article', title: 'LoRA Explained', url: 'https://huggingface.co/docs/peft/conceptual_guides/lora' },
        ],
    },

    // ── LLMOps ──
    'model-evaluation': {
        id: 'model-evaluation',
        title: 'Model Evaluation',
        description: 'Evaluating LLM outputs: accuracy, hallucination detection, toxicity, bias, perplexity, BLEU/ROUGE scores, and human evaluation. Automated evals with LLM-as-judge.',
        resources: [
            { type: 'article', title: 'LLM Evaluation Guide', url: 'https://www.confident-ai.com/blog/llm-evaluation-metrics-everything-you-need-for-llm-evaluation' },
        ],
    },
    'model-monitoring': {
        id: 'model-monitoring',
        title: 'LLMOps & Monitoring',
        description: 'Production LLM monitoring: latency, cost tracking, prompt versioning, A/B testing, drift detection, and observability. Tools: LangSmith, Langfuse, Weights & Biases.',
        resources: [
            { type: 'official', title: 'LangSmith Documentation', url: 'https://docs.smith.langchain.com/' },
            { type: 'official', title: 'Langfuse Documentation', url: 'https://langfuse.com/docs' },
        ],
    },

    // ── Deployment ──
    'api-deployment': {
        id: 'api-deployment',
        title: 'API Deployment',
        description: 'Deploying AI applications as APIs using FastAPI, Flask, or serverless functions. Streaming responses, rate limiting, authentication, and scaling.',
        resources: [
            { type: 'official', title: 'FastAPI Documentation', url: 'https://fastapi.tiangolo.com/' },
            { type: 'video', title: 'Deploy ML Models with FastAPI', url: 'https://www.youtube.com/watch?v=h5wLuVDr0oc' },
        ],
    },
    'edge-deployment': {
        id: 'edge-deployment',
        title: 'Edge / Local Deployment',
        description: 'Running AI models locally or at the edge. ONNX Runtime, TensorRT, quantization (GPTQ, GGUF), and tools like Ollama for local LLM inference.',
        resources: [
            { type: 'official', title: 'Ollama', url: 'https://ollama.com/' },
            { type: 'official', title: 'ONNX Runtime', url: 'https://onnxruntime.ai/' },
        ],
    },

    // ── AI Safety & Ethics ──
    'ai-safety': {
        id: 'ai-safety',
        title: 'AI Safety & Ethics',
        description: 'Responsible AI: bias detection, fairness, transparency, privacy, content filtering, guardrails, red-teaming, and regulatory compliance (EU AI Act).',
        resources: [
            { type: 'article', title: 'Anthropic\'s Core Views on AI Safety', url: 'https://www.anthropic.com/research/core-views-on-ai-safety' },
            { type: 'article', title: 'Responsible AI Practices (Google)', url: 'https://ai.google/responsibility/responsible-ai-practices/' },
        ],
    },
};

// ─── AI Engineer Sections ────────────────────────────────────────
export const AI_ENGINEER_SECTIONS: RoadmapSection[] = [
    {
        id: 'foundations',
        title: 'Foundations',
        description: 'AI & ML basics',
        leftTopics: [
            { id: 'ai-fundamentals', title: 'AI Fundamentals' },
            { id: 'ml-fundamentals', title: 'ML Fundamentals' },
        ],
        rightTopics: [
            { id: 'math-for-ai', title: 'Math for AI' },
        ],
    },
    {
        id: 'programming',
        title: 'Programming',
        leftTopics: [
            { id: 'python', title: 'Python' },
        ],
        rightTopics: [
            { id: 'jupyter-notebooks', title: 'Jupyter Notebooks' },
        ],
    },
    {
        id: 'llms',
        title: 'LLMs (Large Language Models)',
        leftTopics: [
            { id: 'how-llms-work', title: 'How LLMs Work' },
            { id: 'transformer-architecture', title: 'Transformer Architecture' },
        ],
        rightTopics: [
            { id: 'tokenization', title: 'Tokenization' },
        ],
    },
    {
        id: 'llm-apis',
        title: 'Working with LLM APIs',
        leftTopics: [
            { id: 'openai-api', title: 'OpenAI API' },
            { id: 'anthropic-api', title: 'Anthropic API' },
        ],
        rightTopics: [
            { id: 'open-source-llms', title: 'Open Source LLMs' },
        ],
    },
    {
        id: 'prompting',
        title: 'Prompt Engineering',
        leftTopics: [
            { id: 'prompt-engineering', title: 'Prompt Engineering' },
        ],
        rightTopics: [
            { id: 'advanced-prompting', title: 'Advanced Prompting' },
        ],
    },
    {
        id: 'rag-section',
        title: 'RAG',
        description: 'Retrieval-Augmented Generation',
        leftTopics: [
            { id: 'embeddings', title: 'Embeddings' },
            { id: 'vector-databases', title: 'Vector Databases' },
        ],
        rightTopics: [
            { id: 'rag', title: 'RAG Pipelines' },
        ],
    },
    {
        id: 'agents',
        title: 'AI Agents',
        leftTopics: [
            { id: 'ai-agents', title: 'AI Agents' },
            { id: 'function-calling', title: 'Function Calling' },
        ],
        rightTopics: [
            { id: 'langchain', title: 'LangChain' },
            { id: 'langgraph', title: 'LangGraph' },
            { id: 'crewai', title: 'CrewAI' },
        ],
    },
    {
        id: 'fine-tuning-section',
        title: 'Fine-Tuning',
        leftTopics: [
            { id: 'fine-tuning', title: 'Fine-Tuning Basics' },
        ],
        rightTopics: [
            { id: 'lora', title: 'LoRA / QLoRA' },
        ],
    },
    {
        id: 'llmops',
        title: 'LLMOps',
        description: 'Production AI',
        leftTopics: [
            { id: 'model-evaluation', title: 'Model Evaluation' },
        ],
        rightTopics: [
            { id: 'model-monitoring', title: 'LLMOps & Monitoring' },
        ],
    },
    {
        id: 'deployment',
        title: 'Deployment',
        leftTopics: [
            { id: 'api-deployment', title: 'API Deployment' },
        ],
        rightTopics: [
            { id: 'edge-deployment', title: 'Edge / Local' },
        ],
    },
    {
        id: 'safety',
        title: 'AI Safety & Ethics',
        rightTopics: [
            { id: 'ai-safety', title: 'Safety & Ethics' },
        ],
    },
];
