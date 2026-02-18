import type { Topic, RoadmapSection } from './frontendRoadmap';

export const KUBERNETES_TOPICS: Record<string, Topic> = {
    // ── Fundamentals ──
    'what-is-k8s': {
        id: 'what-is-k8s',
        title: 'What is Kubernetes?',
        description: 'Kubernetes (K8s) is a container orchestration platform. Automates deployment, scaling, and management of containerized applications.',
        resources: [
            { type: 'official', title: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/home/' },
            { type: 'video', title: 'Kubernetes in 100 Seconds', url: 'https://www.youtube.com/watch?v=PziYflu8cB8' },
        ],
    },
    'architecture': {
        id: 'architecture',
        title: 'K8s Architecture',
        description: 'Control plane (API server, etcd, scheduler, controller manager) and worker nodes (kubelet, kube-proxy, container runtime).',
        resources: [
            { type: 'official', title: 'K8s Architecture', url: 'https://kubernetes.io/docs/concepts/architecture/' },
        ],
    },
    'kubectl': {
        id: 'kubectl',
        title: 'kubectl',
        description: 'The Kubernetes CLI. get, describe, apply, delete, logs, exec, port-forward. kubectl contexts, namespaces, and output formatting.',
        resources: [
            { type: 'official', title: 'kubectl Reference', url: 'https://kubernetes.io/docs/reference/kubectl/' },
        ],
    },

    // ── Core Objects ──
    'pods': {
        id: 'pods',
        title: 'Pods',
        description: 'The smallest deployable unit. Single or multi-container pods, init containers, sidecar pattern, and pod lifecycle.',
        resources: [
            { type: 'official', title: 'Pods', url: 'https://kubernetes.io/docs/concepts/workloads/pods/' },
        ],
    },
    'deployments': {
        id: 'deployments',
        title: 'Deployments & ReplicaSets',
        description: 'Declarative updates for pods. Rolling updates, rollbacks, scaling replicas, and deployment strategies (RollingUpdate, Recreate).',
        resources: [
            { type: 'official', title: 'Deployments', url: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/' },
        ],
    },
    'services-k8s': {
        id: 'services-k8s',
        title: 'Services',
        description: 'Networking abstraction for pods. ClusterIP (internal), NodePort (external), LoadBalancer (cloud), and ExternalName.',
        resources: [
            { type: 'official', title: 'Services', url: 'https://kubernetes.io/docs/concepts/services-networking/service/' },
        ],
    },

    // ── Config & Storage ──
    'configmaps-secrets': {
        id: 'configmaps-secrets',
        title: 'ConfigMaps & Secrets',
        description: 'ConfigMaps for non-sensitive configuration. Secrets for sensitive data. Mounting as env vars or volumes.',
        resources: [
            { type: 'official', title: 'ConfigMaps', url: 'https://kubernetes.io/docs/concepts/configuration/configmap/' },
        ],
    },
    'volumes-k8s': {
        id: 'volumes-k8s',
        title: 'Persistent Volumes',
        description: 'PersistentVolume (PV), PersistentVolumeClaim (PVC), StorageClasses, dynamic provisioning, and access modes.',
        resources: [
            { type: 'official', title: 'Persistent Volumes', url: 'https://kubernetes.io/docs/concepts/storage/persistent-volumes/' },
        ],
    },

    // ── Networking ──
    'ingress': {
        id: 'ingress',
        title: 'Ingress',
        description: 'HTTP/HTTPS routing to services. Ingress controllers (Nginx, Traefik), path-based routing, TLS termination, and annotations.',
        resources: [
            { type: 'official', title: 'Ingress', url: 'https://kubernetes.io/docs/concepts/services-networking/ingress/' },
        ],
    },
    'network-policies': {
        id: 'network-policies',
        title: 'Network Policies',
        description: 'Firewall rules for pod-to-pod communication. Ingress/egress rules, namespace isolation, and Calico/Cilium for enforcement.',
        resources: [
            { type: 'official', title: 'Network Policies', url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/' },
        ],
    },

    // ── Workloads ──
    'statefulsets': {
        id: 'statefulsets',
        title: 'StatefulSets',
        description: 'For stateful applications (databases). Stable network identity, ordered deployment, and persistent storage per pod.',
        resources: [
            { type: 'official', title: 'StatefulSets', url: 'https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/' },
        ],
    },
    'daemonsets': {
        id: 'daemonsets',
        title: 'DaemonSets & Jobs',
        description: 'DaemonSets run a pod on every node (logging, monitoring). Jobs and CronJobs for batch workloads.',
        resources: [
            { type: 'official', title: 'DaemonSets', url: 'https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/' },
        ],
    },

    // ── Scaling ──
    'hpa': {
        id: 'hpa',
        title: 'Autoscaling (HPA/VPA)',
        description: 'Horizontal Pod Autoscaler (HPA) scales replicas based on CPU/memory/custom metrics. Vertical Pod Autoscaler (VPA) adjusts resources.',
        resources: [
            { type: 'official', title: 'HPA', url: 'https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/' },
        ],
    },

    // ── Security ──
    'rbac': {
        id: 'rbac',
        title: 'RBAC',
        description: 'Role-Based Access Control. Roles, ClusterRoles, RoleBindings, service accounts, and least-privilege security.',
        resources: [
            { type: 'official', title: 'RBAC', url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/' },
        ],
    },

    // ── Helm ──
    'helm': {
        id: 'helm',
        title: 'Helm',
        description: 'The Kubernetes package manager. Charts, values.yaml, repositories, releases, and templating with Go templates.',
        resources: [
            { type: 'official', title: 'Helm Documentation', url: 'https://helm.sh/docs/' },
        ],
    },

    // ── Monitoring ──
    'monitoring-k8s': {
        id: 'monitoring-k8s',
        title: 'Monitoring & Logging',
        description: 'Prometheus for metrics, Grafana for dashboards, Loki for logs, and the EFK stack (Elasticsearch, Fluentd, Kibana).',
        resources: [
            { type: 'official', title: 'Prometheus', url: 'https://prometheus.io/' },
        ],
    },

    // ── Local Dev ──
    'local-dev': {
        id: 'local-dev',
        title: 'Local Development',
        description: 'Minikube, kind (Kubernetes in Docker), k3s, and Docker Desktop Kubernetes for local development and testing.',
        resources: [
            { type: 'official', title: 'Minikube', url: 'https://minikube.sigs.k8s.io/' },
        ],
    },
};

export const KUBERNETES_SECTIONS: RoadmapSection[] = [
    {
        id: 'fundamentals',
        title: 'Fundamentals',
        leftTopics: [
            { id: 'what-is-k8s', title: 'What is Kubernetes?' },
            { id: 'architecture', title: 'Architecture' },
        ],
        rightTopics: [
            { id: 'kubectl', title: 'kubectl' },
            { id: 'local-dev', title: 'Local Dev (Minikube)' },
        ],
    },
    {
        id: 'core',
        title: 'Core Objects',
        description: 'The building blocks',
        leftTopics: [
            { id: 'pods', title: 'Pods' },
            { id: 'deployments', title: 'Deployments' },
        ],
        rightTopics: [{ id: 'services-k8s', title: 'Services' }],
    },
    {
        id: 'config',
        title: 'Configuration & Storage',
        leftTopics: [{ id: 'configmaps-secrets', title: 'ConfigMaps & Secrets' }],
        rightTopics: [{ id: 'volumes-k8s', title: 'Persistent Volumes' }],
    },
    {
        id: 'networking',
        title: 'Networking',
        leftTopics: [{ id: 'ingress', title: 'Ingress' }],
        rightTopics: [{ id: 'network-policies', title: 'Network Policies' }],
    },
    {
        id: 'workloads',
        title: 'Advanced Workloads',
        leftTopics: [{ id: 'statefulsets', title: 'StatefulSets' }],
        rightTopics: [{ id: 'daemonsets', title: 'DaemonSets & Jobs' }],
    },
    {
        id: 'scaling',
        title: 'Autoscaling',
        rightTopics: [{ id: 'hpa', title: 'HPA / VPA' }],
    },
    {
        id: 'security',
        title: 'Security',
        rightTopics: [{ id: 'rbac', title: 'RBAC' }],
    },
    {
        id: 'helm-section',
        title: 'Package Management',
        rightTopics: [{ id: 'helm', title: 'Helm' }],
    },
    {
        id: 'monitoring',
        title: 'Monitoring & Logging',
        rightTopics: [{ id: 'monitoring-k8s', title: 'Prometheus / Grafana / Loki' }],
    },
];
