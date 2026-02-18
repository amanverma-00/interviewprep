import type { Topic, RoadmapSection } from './frontendRoadmap';

export const DOCKER_TOPICS: Record<string, Topic> = {
    // ── Fundamentals ──
    'what-is-docker': {
        id: 'what-is-docker',
        title: 'What is Docker?',
        description: 'Docker packages applications into containers — lightweight, portable, self-sufficient units. Containers vs VMs, and the container revolution.',
        resources: [
            { type: 'official', title: 'Docker Overview', url: 'https://docs.docker.com/get-started/overview/' },
            { type: 'video', title: 'Docker in 100 Seconds', url: 'https://www.youtube.com/watch?v=Gjnup-PuquQ' },
        ],
    },
    'installation': {
        id: 'installation',
        title: 'Docker Installation',
        description: 'Docker Desktop (Mac/Windows), Docker Engine (Linux), Docker CLI, and verifying installation. Docker vs Podman.',
        resources: [
            { type: 'official', title: 'Install Docker', url: 'https://docs.docker.com/get-docker/' },
        ],
    },

    // ── Images ──
    'images': {
        id: 'images',
        title: 'Docker Images',
        description: 'Images are read-only templates. Layers, tagging, Docker Hub, pulling/pushing images, and image inspection.',
        resources: [
            { type: 'official', title: 'Images', url: 'https://docs.docker.com/engine/reference/commandline/images/' },
        ],
    },
    'dockerfile': {
        id: 'dockerfile',
        title: 'Dockerfile',
        description: 'FROM, RUN, COPY, ADD, WORKDIR, EXPOSE, CMD, ENTRYPOINT, ARG, ENV. Multi-stage builds for smaller images.',
        resources: [
            { type: 'official', title: 'Dockerfile Reference', url: 'https://docs.docker.com/reference/dockerfile/' },
            { type: 'article', title: 'Dockerfile Best Practices', url: 'https://docs.docker.com/build/building/best-practices/' },
        ],
    },
    'multi-stage': {
        id: 'multi-stage',
        title: 'Multi-Stage Builds',
        description: 'Build in one stage, copy artifacts to a minimal runtime image. Dramatically reduces final image size. Essential for production.',
        resources: [
            { type: 'official', title: 'Multi-Stage Builds', url: 'https://docs.docker.com/build/building/multi-stage/' },
        ],
    },

    // ── Containers ──
    'containers': {
        id: 'containers',
        title: 'Containers',
        description: 'Running containers: docker run, start, stop, exec, logs, inspect. Port mapping (-p), environment variables (-e), and detached mode (-d).',
        resources: [
            { type: 'official', title: 'Run Containers', url: 'https://docs.docker.com/engine/reference/run/' },
        ],
    },

    // ── Volumes & Networking ──
    'volumes': {
        id: 'volumes',
        title: 'Volumes & Storage',
        description: 'Named volumes, bind mounts, tmpfs mounts. Persisting data beyond container lifecycle and sharing data between containers.',
        resources: [
            { type: 'official', title: 'Volumes', url: 'https://docs.docker.com/storage/volumes/' },
        ],
    },
    'networking': {
        id: 'networking',
        title: 'Docker Networking',
        description: 'Bridge, host, overlay, none networks. Container-to-container communication, DNS resolution, and exposing services.',
        resources: [
            { type: 'official', title: 'Networking', url: 'https://docs.docker.com/network/' },
        ],
    },

    // ── Docker Compose ──
    'docker-compose': {
        id: 'docker-compose',
        title: 'Docker Compose',
        description: 'Define multi-container applications in YAML. Services, networks, volumes, depends_on, healthchecks, and environment files.',
        resources: [
            { type: 'official', title: 'Compose Documentation', url: 'https://docs.docker.com/compose/' },
            { type: 'video', title: 'Docker Compose Tutorial', url: 'https://www.youtube.com/watch?v=HG6yIjZapSA' },
        ],
    },

    // ── Registry ──
    'registry': {
        id: 'registry',
        title: 'Container Registries',
        description: 'Docker Hub, GitHub Container Registry (ghcr.io), AWS ECR, Google Artifact Registry. Pushing, pulling, and private registries.',
        resources: [
            { type: 'official', title: 'Docker Hub', url: 'https://hub.docker.com/' },
        ],
    },

    // ── Security ──
    'security-docker': {
        id: 'security-docker',
        title: 'Docker Security',
        description: 'Non-root users, read-only filesystems, secrets management, scanning for vulnerabilities (Trivy, Snyk), and security best practices.',
        resources: [
            { type: 'official', title: 'Security', url: 'https://docs.docker.com/engine/security/' },
        ],
    },

    // ── Optimization ──
    'optimization': {
        id: 'optimization',
        title: 'Image Optimization',
        description: 'Minimize layers, use .dockerignore, choose slim/alpine base images, leverage build cache, and reduce attack surface.',
        resources: [
            { type: 'article', title: 'Image Optimization', url: 'https://docs.docker.com/build/building/best-practices/' },
        ],
    },

    // ── Orchestration ──
    'orchestration': {
        id: 'orchestration',
        title: 'Container Orchestration',
        description: 'Why orchestration: scaling, self-healing, rolling updates. Docker Swarm (simple) vs Kubernetes (production-grade).',
        resources: [
            { type: 'article', title: 'Orchestration Overview', url: 'https://docs.docker.com/get-started/orchestration/' },
        ],
    },

    // ── CI/CD ──
    'ci-cd-docker': {
        id: 'ci-cd-docker',
        title: 'Docker in CI/CD',
        description: 'Building images in CI pipelines, GitHub Actions with Docker, caching layers, and automated deployment with container registries.',
        resources: [
            { type: 'article', title: 'Docker + CI/CD', url: 'https://docs.docker.com/build/ci/' },
        ],
    },
};

export const DOCKER_SECTIONS: RoadmapSection[] = [
    {
        id: 'fundamentals',
        title: 'Fundamentals',
        leftTopics: [{ id: 'what-is-docker', title: 'What is Docker?' }],
        rightTopics: [{ id: 'installation', title: 'Installation' }],
    },
    {
        id: 'images-section',
        title: 'Images & Dockerfile',
        leftTopics: [
            { id: 'images', title: 'Docker Images' },
            { id: 'dockerfile', title: 'Dockerfile' },
        ],
        rightTopics: [{ id: 'multi-stage', title: 'Multi-Stage Builds' }],
    },
    {
        id: 'containers-section',
        title: 'Containers',
        rightTopics: [{ id: 'containers', title: 'Running Containers' }],
    },
    {
        id: 'storage-network',
        title: 'Storage & Networking',
        leftTopics: [{ id: 'volumes', title: 'Volumes' }],
        rightTopics: [{ id: 'networking', title: 'Networking' }],
    },
    {
        id: 'compose',
        title: 'Docker Compose',
        description: 'Multi-container apps',
        rightTopics: [{ id: 'docker-compose', title: 'Docker Compose' }],
    },
    {
        id: 'registry-section',
        title: 'Registries',
        rightTopics: [{ id: 'registry', title: 'Container Registries' }],
    },
    {
        id: 'security-section',
        title: 'Security & Optimization',
        leftTopics: [{ id: 'security-docker', title: 'Security' }],
        rightTopics: [{ id: 'optimization', title: 'Image Optimization' }],
    },
    {
        id: 'production',
        title: 'Production',
        leftTopics: [{ id: 'orchestration', title: 'Orchestration' }],
        rightTopics: [{ id: 'ci-cd-docker', title: 'CI/CD' }],
    },
];
