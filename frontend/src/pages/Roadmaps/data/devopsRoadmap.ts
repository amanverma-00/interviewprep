import type { Topic, RoadmapSection } from './frontendRoadmap';

// ─── DevOps Topics ───────────────────────────────────────────────
export const DEVOPS_TOPICS: Record<string, Topic> = {
    // ── Languages ──
    python: {
        id: 'python',
        title: 'Python',
        description: 'Python is widely used in DevOps for scripting, automation, infrastructure management, and building CI/CD tools. Libraries like Fabric, Boto3, and Ansible make it essential.',
        resources: [
            { type: 'roadmap', title: 'Visit the Python Roadmap', url: 'https://roadmap.sh/python' },
            { type: 'video', title: 'Python for DevOps', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
            { type: 'official', title: 'Python Documentation', url: 'https://docs.python.org/3/' },
        ],
    },
    go: {
        id: 'go',
        title: 'Go',
        description: 'Go is the language of cloud infrastructure. Docker, Kubernetes, Terraform, and Prometheus are all written in Go. Its simplicity and concurrency make it ideal for DevOps tooling.',
        resources: [
            { type: 'official', title: 'Go Tour', url: 'https://go.dev/tour/' },
            { type: 'video', title: 'Go Full Course', url: 'https://www.youtube.com/watch?v=un6ZyFkqFKo' },
        ],
    },
    bash: {
        id: 'bash',
        title: 'Bash / Shell Scripting',
        description: 'Bash is the primary shell for Linux systems. Shell scripting is essential for automation, cron jobs, deployment scripts, and system administration tasks.',
        resources: [
            { type: 'official', title: 'Bash Reference Manual', url: 'https://www.gnu.org/software/bash/manual/bash.html' },
            { type: 'video', title: 'Bash Scripting Full Course', url: 'https://www.youtube.com/watch?v=tK9Oc6AEnR4' },
        ],
    },

    // ── OS Concepts ──
    linux: {
        id: 'linux',
        title: 'Linux',
        description: 'Linux is the foundation of DevOps. Most servers, containers, and cloud instances run Linux. Understanding file systems, permissions, package managers, and systemd is critical.',
        resources: [
            { type: 'course', title: 'Linux Journey', url: 'https://linuxjourney.com/' },
            { type: 'video', title: 'Linux Full Course', url: 'https://www.youtube.com/watch?v=sWbUDq4S6Y8' },
        ],
    },
    'process-management': {
        id: 'process-management',
        title: 'Process Management',
        description: 'Understanding process lifecycle, signals, PID management, background tasks, systemd services, and cgroups is essential for managing production workloads.',
        resources: [
            { type: 'article', title: 'Linux Process Management', url: 'https://tldp.org/LDP/intro-linux/html/chap_04.html' },
        ],
    },
    networking: {
        id: 'networking',
        title: 'Networking',
        description: 'TCP/IP, DNS, HTTP, TLS, firewalls (iptables/nftables), routing, load balancing, VPNs, and subnetting. Network knowledge is non-negotiable for DevOps.',
        resources: [
            { type: 'video', title: 'Computer Networking Full Course', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw' },
            { type: 'article', title: 'Networking 101', url: 'https://iximiuz.com/en/posts/computer-networking-101/' },
        ],
    },
    'file-systems': {
        id: 'file-systems',
        title: 'File Systems',
        description: 'Understanding Linux file systems (ext4, xfs, btrfs), mount points, permissions, inodes, and disk management is key for storage and data persistence in DevOps.',
        resources: [
            { type: 'article', title: 'Linux File Systems Explained', url: 'https://www.howtogeek.com/howto/33552/htg-explains-which-linux-file-system-should-you-choose/' },
        ],
    },

    // ── Version Control ──
    git: {
        id: 'git',
        title: 'Git',
        description: 'Git is essential for DevOps — version control, branching strategies, GitOps workflows, and infrastructure-as-code management all depend on Git proficiency.',
        resources: [
            { type: 'official', title: 'Git Documentation', url: 'https://git-scm.com/doc' },
            { type: 'course', title: 'Learn Git Branching', url: 'https://learngitbranching.js.org/' },
        ],
    },
    github: {
        id: 'github',
        title: 'GitHub / GitLab',
        description: 'GitHub and GitLab provide CI/CD, container registries, IaC repos, issue tracking, and collaboration. GitOps workflows depend heavily on these platforms.',
        resources: [
            { type: 'official', title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions' },
            { type: 'official', title: 'GitLab CI/CD Documentation', url: 'https://docs.gitlab.com/ee/ci/' },
        ],
    },

    // ── Containers ──
    docker: {
        id: 'docker',
        title: 'Docker',
        description: 'Docker is the standard for containerization. Learn Dockerfiles, multi-stage builds, volumes, networking, Docker Compose, and image optimization for production.',
        resources: [
            { type: 'official', title: 'Docker Documentation', url: 'https://docs.docker.com/' },
            { type: 'video', title: 'Docker Full Course', url: 'https://www.youtube.com/watch?v=pg19Z8LL06w' },
            { type: 'video', title: 'Docker in 100 Seconds', url: 'https://www.youtube.com/watch?v=Gjnup-PuquQ' },
        ],
    },
    podman: {
        id: 'podman',
        title: 'Podman',
        description: 'Podman is a daemonless container engine — a drop-in replacement for Docker. It runs rootless containers and is compatible with OCI standards.',
        resources: [
            { type: 'official', title: 'Podman Documentation', url: 'https://podman.io/docs' },
        ],
    },
    lxc: {
        id: 'lxc',
        title: 'LXC',
        description: 'LXC (Linux Containers) provides OS-level virtualization. More lightweight than VMs but heavier than Docker. Used for system containers needing full OS functionality.',
        resources: [
            { type: 'official', title: 'LXC Documentation', url: 'https://linuxcontainers.org/lxc/documentation/' },
        ],
    },

    // ── Container Orchestration ──
    kubernetes: {
        id: 'kubernetes',
        title: 'Kubernetes',
        description: 'Kubernetes is the industry standard for container orchestration. Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, RBAC, Helm, and operators.',
        resources: [
            { type: 'official', title: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/home/' },
            { type: 'video', title: 'Kubernetes Course for Beginners', url: 'https://www.youtube.com/watch?v=X48VuDVv0do' },
            { type: 'course', title: 'Kubernetes the Hard Way', url: 'https://github.com/kelseyhightower/kubernetes-the-hard-way' },
        ],
    },
    'docker-swarm': {
        id: 'docker-swarm',
        title: 'Docker Swarm',
        description: 'Docker Swarm is Docker\'s native clustering and orchestration tool. Simpler than Kubernetes but less feature-rich. Good for smaller deployments.',
        resources: [
            { type: 'official', title: 'Docker Swarm Documentation', url: 'https://docs.docker.com/engine/swarm/' },
        ],
    },
    helm: {
        id: 'helm',
        title: 'Helm',
        description: 'Helm is the package manager for Kubernetes. It uses charts to define, install, and upgrade complex K8s applications with templated manifests.',
        resources: [
            { type: 'official', title: 'Helm Documentation', url: 'https://helm.sh/docs/' },
        ],
    },

    // ── CI/CD ──
    'github-actions': {
        id: 'github-actions',
        title: 'GitHub Actions',
        description: 'GitHub Actions automates CI/CD workflows in GitHub. Build, test, and deploy on push, PR, schedule, or custom events with YAML workflow files.',
        resources: [
            { type: 'official', title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions' },
            { type: 'video', title: 'GitHub Actions Tutorial', url: 'https://www.youtube.com/watch?v=R8_veQiYBjI' },
        ],
    },
    jenkins: {
        id: 'jenkins',
        title: 'Jenkins',
        description: 'Jenkins is the most widely used open-source CI/CD server. Pipeline-as-code with Jenkinsfile, thousands of plugins, and distributed builds.',
        resources: [
            { type: 'official', title: 'Jenkins Documentation', url: 'https://www.jenkins.io/doc/' },
            { type: 'video', title: 'Jenkins Full Course', url: 'https://www.youtube.com/watch?v=FX322RVNGj4' },
        ],
    },
    'gitlab-ci': {
        id: 'gitlab-ci',
        title: 'GitLab CI',
        description: 'GitLab CI/CD is integrated directly into GitLab. Define pipelines in .gitlab-ci.yml with stages, jobs, artifacts, and built-in container registry.',
        resources: [
            { type: 'official', title: 'GitLab CI/CD Documentation', url: 'https://docs.gitlab.com/ee/ci/' },
        ],
    },
    'circle-ci': {
        id: 'circle-ci',
        title: 'CircleCI',
        description: 'CircleCI is a cloud-native CI/CD platform with fast builds, Docker support, parallelism, and orbs (reusable config packages).',
        resources: [
            { type: 'official', title: 'CircleCI Documentation', url: 'https://circleci.com/docs/' },
        ],
    },
    argocd: {
        id: 'argocd',
        title: 'ArgoCD',
        description: 'ArgoCD is a declarative GitOps continuous delivery tool for Kubernetes. It syncs the desired state in Git with the live state in your cluster.',
        resources: [
            { type: 'official', title: 'ArgoCD Documentation', url: 'https://argo-cd.readthedocs.io/en/stable/' },
            { type: 'video', title: 'ArgoCD Tutorial', url: 'https://www.youtube.com/watch?v=MeU5_k9ssrs' },
        ],
    },

    // ── Infrastructure as Code ──
    terraform: {
        id: 'terraform',
        title: 'Terraform',
        description: 'Terraform by HashiCorp is the leading IaC tool. Declarative HCL syntax, state management, modules, and support for all major cloud providers.',
        resources: [
            { type: 'official', title: 'Terraform Documentation', url: 'https://developer.hashicorp.com/terraform/docs' },
            { type: 'video', title: 'Terraform Full Course', url: 'https://www.youtube.com/watch?v=7xngnjfIlK4' },
        ],
    },
    ansible: {
        id: 'ansible',
        title: 'Ansible',
        description: 'Ansible is an agentless automation tool for configuration management, application deployment, and orchestration using YAML playbooks.',
        resources: [
            { type: 'official', title: 'Ansible Documentation', url: 'https://docs.ansible.com/' },
            { type: 'video', title: 'Ansible Full Course', url: 'https://www.youtube.com/watch?v=3RiVKs8GHYQ' },
        ],
    },
    pulumi: {
        id: 'pulumi',
        title: 'Pulumi',
        description: 'Pulumi lets you define infrastructure using real programming languages (Python, TypeScript, Go). Modern alternative to HCL-based tools.',
        resources: [
            { type: 'official', title: 'Pulumi Documentation', url: 'https://www.pulumi.com/docs/' },
        ],
    },
    cloudformation: {
        id: 'cloudformation',
        title: 'CloudFormation',
        description: 'AWS CloudFormation provides infrastructure as code for AWS resources using JSON or YAML templates. Tightly integrated with the AWS ecosystem.',
        resources: [
            { type: 'official', title: 'CloudFormation Documentation', url: 'https://docs.aws.amazon.com/cloudformation/' },
        ],
    },

    // ── Configuration Management ──
    chef: {
        id: 'chef',
        title: 'Chef',
        description: 'Chef is a configuration management tool that uses Ruby-based DSL (recipes and cookbooks) to automate infrastructure provisioning.',
        resources: [
            { type: 'official', title: 'Chef Documentation', url: 'https://docs.chef.io/' },
        ],
    },
    puppet: {
        id: 'puppet',
        title: 'Puppet',
        description: 'Puppet is a configuration management tool that uses declarative language to define system configuration. Agent-based architecture for large-scale management.',
        resources: [
            { type: 'official', title: 'Puppet Documentation', url: 'https://www.puppet.com/docs' },
        ],
    },

    // ── Monitoring & Observability ──
    prometheus: {
        id: 'prometheus',
        title: 'Prometheus',
        description: 'Prometheus is the standard for metrics collection in cloud-native environments. Pull-based model, PromQL, alerting, and native Kubernetes integration.',
        resources: [
            { type: 'official', title: 'Prometheus Documentation', url: 'https://prometheus.io/docs/' },
            { type: 'video', title: 'Prometheus Monitoring', url: 'https://www.youtube.com/watch?v=h4Sl21AKiDg' },
        ],
    },
    grafana: {
        id: 'grafana',
        title: 'Grafana',
        description: 'Grafana is the leading visualization and dashboarding platform. Connects to Prometheus, Loki, Elasticsearch, and 100+ data sources for rich monitoring dashboards.',
        resources: [
            { type: 'official', title: 'Grafana Documentation', url: 'https://grafana.com/docs/grafana/latest/' },
        ],
    },
    datadog: {
        id: 'datadog',
        title: 'Datadog',
        description: 'Datadog is a cloud monitoring SaaS platform combining metrics, traces, and logs in a unified view. APM, infrastructure monitoring, and log management.',
        resources: [
            { type: 'official', title: 'Datadog Documentation', url: 'https://docs.datadoghq.com/' },
        ],
    },
    elk: {
        id: 'elk',
        title: 'ELK Stack',
        description: 'The ELK Stack (Elasticsearch, Logstash, Kibana) is the most popular open-source log management solution. Centralized logging, search, and visualization.',
        resources: [
            { type: 'official', title: 'Elastic Documentation', url: 'https://www.elastic.co/guide/' },
            { type: 'video', title: 'ELK Stack Tutorial', url: 'https://www.youtube.com/watch?v=4X0WLg05ASc' },
        ],
    },
    jaeger: {
        id: 'jaeger',
        title: 'Jaeger',
        description: 'Jaeger is an open-source distributed tracing system for monitoring and troubleshooting microservices. Trace requests across service boundaries.',
        resources: [
            { type: 'official', title: 'Jaeger Documentation', url: 'https://www.jaegertracing.io/docs/' },
        ],
    },

    // ── Cloud Providers ──
    aws: {
        id: 'aws',
        title: 'AWS',
        description: 'Amazon Web Services is the largest cloud provider. Key DevOps services: EC2, ECS, EKS, Lambda, S3, RDS, CloudWatch, CodePipeline, IAM, and VPC.',
        resources: [
            { type: 'official', title: 'AWS Documentation', url: 'https://docs.aws.amazon.com/' },
            { type: 'video', title: 'AWS Full Course', url: 'https://www.youtube.com/watch?v=k1RI5locZE4' },
        ],
    },
    gcp: {
        id: 'gcp',
        title: 'Google Cloud',
        description: 'Google Cloud Platform offers GKE (managed Kubernetes), Cloud Run, Cloud Build, Pub/Sub, and BigQuery. Strong in data and ML workloads.',
        resources: [
            { type: 'official', title: 'GCP Documentation', url: 'https://cloud.google.com/docs' },
        ],
    },
    azure: {
        id: 'azure',
        title: 'Azure',
        description: 'Microsoft Azure provides AKS, Azure DevOps, Azure Functions, App Service, and tight integration with enterprise Windows environments and Active Directory.',
        resources: [
            { type: 'official', title: 'Azure Documentation', url: 'https://learn.microsoft.com/en-us/azure/' },
        ],
    },

    // ── Web Servers ──
    nginx: {
        id: 'nginx',
        title: 'Nginx',
        description: 'Nginx is a high-performance web server, reverse proxy, and load balancer. Essential for DevOps — handles SSL termination, caching, rate limiting, and routing.',
        resources: [
            { type: 'official', title: 'Nginx Documentation', url: 'https://nginx.org/en/docs/' },
            { type: 'video', title: 'NGINX Explained', url: 'https://www.youtube.com/watch?v=7VAI73roXaY' },
        ],
    },
    caddy: {
        id: 'caddy',
        title: 'Caddy',
        description: 'Caddy is a modern web server with automatic HTTPS via Let\'s Encrypt. Simple Caddyfile configuration, built-in reverse proxy, and zero-downtime reloads.',
        resources: [
            { type: 'official', title: 'Caddy Documentation', url: 'https://caddyserver.com/docs/' },
        ],
    },

    // ── GitOps ──
    gitops: {
        id: 'gitops',
        title: 'GitOps',
        description: 'GitOps uses Git as the single source of truth for infrastructure and applications. Changes are applied via pull requests, and tools like ArgoCD and Flux sync the desired state.',
        resources: [
            { type: 'article', title: 'What is GitOps? (GitLab)', url: 'https://about.gitlab.com/topics/gitops/' },
            { type: 'video', title: 'GitOps Explained', url: 'https://www.youtube.com/watch?v=f5EpcWp0THw' },
        ],
    },

    // ── Service Mesh ──
    istio: {
        id: 'istio',
        title: 'Istio',
        description: 'Istio is a service mesh providing traffic management, security, and observability for microservices. Sidecar proxy pattern with Envoy.',
        resources: [
            { type: 'official', title: 'Istio Documentation', url: 'https://istio.io/latest/docs/' },
        ],
    },
    linkerd: {
        id: 'linkerd',
        title: 'Linkerd',
        description: 'Linkerd is a lightweight, security-focused service mesh for Kubernetes. Simpler than Istio, with automatic mTLS, observability, and traffic management.',
        resources: [
            { type: 'official', title: 'Linkerd Documentation', url: 'https://linkerd.io/2/overview/' },
        ],
    },

    // ── Security ──
    'devsecops': {
        id: 'devsecops',
        title: 'DevSecOps',
        description: 'DevSecOps integrates security into the DevOps pipeline. SAST, DAST, container scanning, secret management, policy-as-code, and shift-left security.',
        resources: [
            { type: 'article', title: 'DevSecOps Guide (OWASP)', url: 'https://owasp.org/www-project-devsecops-guideline/' },
            { type: 'video', title: 'DevSecOps Explained', url: 'https://www.youtube.com/watch?v=J73MELGF6u0' },
        ],
    },
    vault: {
        id: 'vault',
        title: 'HashiCorp Vault',
        description: 'Vault manages secrets, encryption keys, and certificates. Dynamic secrets, secret rotation, and access policies for secure infrastructure.',
        resources: [
            { type: 'official', title: 'Vault Documentation', url: 'https://developer.hashicorp.com/vault/docs' },
        ],
    },
};

// ─── DevOps Sections ─────────────────────────────────────────────
export const DEVOPS_SECTIONS: RoadmapSection[] = [
    {
        id: 'languages',
        title: 'Learn a Language',
        description: 'Scripting & automation',
        leftTopics: [
            { id: 'python', title: 'Python' },
            { id: 'go', title: 'Go' },
        ],
        rightTopics: [
            { id: 'bash', title: 'Bash / Shell' },
        ],
    },
    {
        id: 'os',
        title: 'Operating System',
        description: 'Linux fundamentals',
        leftTopics: [
            { id: 'linux', title: 'Linux' },
            { id: 'process-management', title: 'Process Management' },
        ],
        rightTopics: [
            { id: 'networking', title: 'Networking' },
            { id: 'file-systems', title: 'File Systems' },
        ],
    },
    {
        id: 'vcs',
        title: 'Version Control',
        leftTopics: [
            { id: 'git', title: 'Git' },
        ],
        rightTopics: [
            { id: 'github', title: 'GitHub / GitLab' },
        ],
    },
    {
        id: 'containers',
        title: 'Containers',
        leftTopics: [
            { id: 'docker', title: 'Docker' },
        ],
        rightTopics: [
            { id: 'podman', title: 'Podman' },
            { id: 'lxc', title: 'LXC' },
        ],
    },
    {
        id: 'orchestration',
        title: 'Container Orchestration',
        leftTopics: [
            { id: 'kubernetes', title: 'Kubernetes' },
            { id: 'helm', title: 'Helm' },
        ],
        rightTopics: [
            { id: 'docker-swarm', title: 'Docker Swarm' },
        ],
    },
    {
        id: 'cicd',
        title: 'CI / CD',
        leftTopics: [
            { id: 'github-actions', title: 'GitHub Actions' },
            { id: 'jenkins', title: 'Jenkins' },
        ],
        rightTopics: [
            { id: 'gitlab-ci', title: 'GitLab CI' },
            { id: 'circle-ci', title: 'CircleCI' },
            { id: 'argocd', title: 'ArgoCD' },
        ],
    },
    {
        id: 'iac',
        title: 'Infrastructure as Code',
        leftTopics: [
            { id: 'terraform', title: 'Terraform' },
            { id: 'pulumi', title: 'Pulumi' },
        ],
        rightTopics: [
            { id: 'ansible', title: 'Ansible' },
            { id: 'cloudformation', title: 'CloudFormation' },
        ],
    },
    {
        id: 'config-mgmt',
        title: 'Configuration Management',
        leftTopics: [
            { id: 'chef', title: 'Chef' },
        ],
        rightTopics: [
            { id: 'puppet', title: 'Puppet' },
        ],
    },
    {
        id: 'monitoring',
        title: 'Monitoring & Observability',
        leftTopics: [
            { id: 'prometheus', title: 'Prometheus' },
            { id: 'grafana', title: 'Grafana' },
        ],
        rightTopics: [
            { id: 'datadog', title: 'Datadog' },
            { id: 'elk', title: 'ELK Stack' },
            { id: 'jaeger', title: 'Jaeger' },
        ],
    },
    {
        id: 'cloud',
        title: 'Cloud Providers',
        leftTopics: [
            { id: 'aws', title: 'AWS' },
        ],
        rightTopics: [
            { id: 'gcp', title: 'Google Cloud' },
            { id: 'azure', title: 'Azure' },
        ],
    },
    {
        id: 'web-servers',
        title: 'Web Servers',
        leftTopics: [
            { id: 'nginx', title: 'Nginx' },
        ],
        rightTopics: [
            { id: 'caddy', title: 'Caddy' },
        ],
    },
    {
        id: 'gitops-section',
        title: 'GitOps',
        rightTopics: [
            { id: 'gitops', title: 'GitOps Principles' },
        ],
    },
    {
        id: 'service-mesh',
        title: 'Service Mesh',
        leftTopics: [
            { id: 'istio', title: 'Istio' },
        ],
        rightTopics: [
            { id: 'linkerd', title: 'Linkerd' },
        ],
    },
    {
        id: 'security',
        title: 'Security',
        description: 'Shift left',
        leftTopics: [
            { id: 'devsecops', title: 'DevSecOps' },
        ],
        rightTopics: [
            { id: 'vault', title: 'HashiCorp Vault' },
        ],
    },
];
