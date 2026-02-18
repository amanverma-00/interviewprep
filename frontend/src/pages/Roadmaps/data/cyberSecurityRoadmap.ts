import type { Topic, RoadmapSection } from './frontendRoadmap';

export const CYBER_SECURITY_TOPICS: Record<string, Topic> = {
    // ── Fundamentals ──
    'security-fundamentals': {
        id: 'security-fundamentals',
        title: 'Security Fundamentals',
        description: 'CIA triad (Confidentiality, Integrity, Availability), defense in depth, least privilege, zero trust, and the security mindset.',
        resources: [
            { type: 'article', title: 'Cybersecurity Guide', url: 'https://www.nist.gov/cybersecurity' },
            { type: 'video', title: 'Cybersecurity Full Course', url: 'https://www.youtube.com/watch?v=U_P23SqJaDc' },
        ],
    },
    'networking-basics': {
        id: 'networking-basics',
        title: 'Networking Fundamentals',
        description: 'OSI model, TCP/IP, DNS, HTTP/HTTPS, subnetting, firewalls, VPNs, proxies, and packet analysis. Networking is the foundation of security.',
        resources: [
            { type: 'video', title: 'Computer Networking Full Course', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw' },
            { type: 'course', title: 'Networking Fundamentals', url: 'https://www.professormesser.com/network-plus/n10-008/n10-008-video/n10-008-training-course/' },
        ],
    },
    'os-fundamentals': {
        id: 'os-fundamentals',
        title: 'Operating Systems',
        description: 'Linux (primary for security), Windows internals, file systems, processes, services, user management, permissions, and system hardening.',
        resources: [
            { type: 'course', title: 'Linux Journey', url: 'https://linuxjourney.com/' },
        ],
    },
    'cryptography': {
        id: 'cryptography',
        title: 'Cryptography',
        description: 'Symmetric (AES), asymmetric (RSA, ECC), hashing (SHA, bcrypt), digital signatures, TLS/SSL, PKI, and certificate management.',
        resources: [
            { type: 'video', title: 'Cryptography Explained', url: 'https://www.youtube.com/watch?v=jhXCTbFnK8o' },
        ],
    },

    // ── Security Domains ──
    'web-security': {
        id: 'web-security',
        title: 'Web Application Security',
        description: 'OWASP Top 10: XSS, SQL injection, CSRF, SSRF, broken authentication, insecure deserialization, and security headers (CSP, HSTS, CORS).',
        resources: [
            { type: 'official', title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
            { type: 'course', title: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security' },
        ],
    },
    'network-security': {
        id: 'network-security',
        title: 'Network Security',
        description: 'Firewalls (iptables, pf), IDS/IPS (Snort, Suricata), network segmentation, DMZ, WAF, DDoS protection, and VPN configurations.',
        resources: [
            { type: 'video', title: 'Network Security', url: 'https://www.youtube.com/watch?v=E03gh1huvW4' },
        ],
    },
    'cloud-security': {
        id: 'cloud-security',
        title: 'Cloud Security',
        description: 'AWS/Azure/GCP security: IAM, security groups, VPC, secrets management, CloudTrail logging, and the shared responsibility model.',
        resources: [
            { type: 'article', title: 'AWS Security Best Practices', url: 'https://docs.aws.amazon.com/security/' },
        ],
    },

    // ── Offensive Security ──
    'reconnaissance': {
        id: 'reconnaissance',
        title: 'Reconnaissance',
        description: 'Information gathering: OSINT, subdomain enumeration, port scanning (Nmap), Google dorking, Shodan, and social engineering reconnaissance.',
        resources: [
            { type: 'article', title: 'OSINT Framework', url: 'https://osintframework.com/' },
        ],
    },
    nmap: {
        id: 'nmap',
        title: 'Nmap',
        description: 'Nmap is the essential network scanning tool. Port scanning, service detection, OS fingerprinting, NSE scripts, and stealth scan techniques.',
        resources: [
            { type: 'official', title: 'Nmap Documentation', url: 'https://nmap.org/docs.html' },
        ],
    },
    'vulnerability-scanning': {
        id: 'vulnerability-scanning',
        title: 'Vulnerability Scanning',
        description: 'Automated vulnerability assessment. Nessus, OpenVAS, Nikto for web servers, and interpreting scan results for remediation prioritization.',
        resources: [
            { type: 'official', title: 'OpenVAS', url: 'https://www.openvas.org/' },
        ],
    },
    'penetration-testing': {
        id: 'penetration-testing',
        title: 'Penetration Testing',
        description: 'Simulating attacks to find vulnerabilities. Methodology (PTES, OWASP), scoping, exploitation, post-exploitation, and reporting.',
        resources: [
            { type: 'course', title: 'TryHackMe', url: 'https://tryhackme.com/' },
            { type: 'course', title: 'Hack The Box', url: 'https://www.hackthebox.com/' },
        ],
    },
    metasploit: {
        id: 'metasploit',
        title: 'Metasploit Framework',
        description: 'The most popular exploitation framework. Modules, payloads, encoders, post-exploitation, Meterpreter, and automated exploitation.',
        resources: [
            { type: 'official', title: 'Metasploit Documentation', url: 'https://docs.metasploit.com/' },
        ],
    },
    'burp-suite': {
        id: 'burp-suite',
        title: 'Burp Suite',
        description: 'Burp Suite is the leading web application security testing tool. Proxy, Scanner, Repeater, Intruder, and automated vulnerability scanning.',
        resources: [
            { type: 'official', title: 'Burp Suite Documentation', url: 'https://portswigger.net/burp/documentation' },
        ],
    },

    // ── Defensive Security ──
    'incident-response': {
        id: 'incident-response',
        title: 'Incident Response',
        description: 'Preparation, detection, containment, eradication, recovery, and lessons learned. IR plans, playbooks, and communication procedures.',
        resources: [
            { type: 'article', title: 'NIST IR Guide', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final' },
        ],
    },
    siem: {
        id: 'siem',
        title: 'SIEM',
        description: 'Security Information and Event Management. Splunk, ELK, and Azure Sentinel for log aggregation, correlation rules, alerting, and threat detection.',
        resources: [
            { type: 'official', title: 'Splunk', url: 'https://www.splunk.com/' },
        ],
    },
    'digital-forensics': {
        id: 'digital-forensics',
        title: 'Digital Forensics',
        description: 'Disk forensics, memory forensics (Volatility), network forensics, chain of custody, evidence collection, and forensic imaging.',
        resources: [
            { type: 'official', title: 'Autopsy', url: 'https://www.autopsy.com/' },
        ],
    },
    'malware-analysis': {
        id: 'malware-analysis',
        title: 'Malware Analysis',
        description: 'Static and dynamic analysis. Sandboxing, reverse engineering, disassembly (Ghidra, IDA), behavioral analysis, and malware classification.',
        resources: [
            { type: 'official', title: 'Ghidra', url: 'https://ghidra-sre.org/' },
        ],
    },

    // ── Governance ──
    'compliance': {
        id: 'compliance',
        title: 'Compliance & Frameworks',
        description: 'NIST CSF, ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR. Understanding regulatory requirements and implementing security controls.',
        resources: [
            { type: 'official', title: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' },
        ],
    },
    'risk-management': {
        id: 'risk-management',
        title: 'Risk Management',
        description: 'Risk assessment, threat modeling (STRIDE, DREAD), vulnerability management programs, risk registers, and risk acceptance vs mitigation.',
        resources: [
            { type: 'article', title: 'Threat Modeling', url: 'https://owasp.org/www-community/Threat_Modeling' },
        ],
    },

    // ── Certifications ──
    certifications: {
        id: 'certifications',
        title: 'Certifications',
        description: 'CompTIA Security+, CEH, OSCP, CISSP, eJPT, and PNPT. Industry certifications validate skills and boost career progression.',
        resources: [
            { type: 'official', title: 'CompTIA Security+', url: 'https://www.comptia.org/certifications/security' },
            { type: 'official', title: 'OSCP', url: 'https://www.offsec.com/courses/pen-200/' },
        ],
    },
};

export const CYBER_SECURITY_SECTIONS: RoadmapSection[] = [
    {
        id: 'fundamentals',
        title: 'Fundamentals',
        leftTopics: [
            { id: 'security-fundamentals', title: 'Security Fundamentals' },
            { id: 'networking-basics', title: 'Networking' },
        ],
        rightTopics: [
            { id: 'os-fundamentals', title: 'Operating Systems' },
            { id: 'cryptography', title: 'Cryptography' },
        ],
    },
    {
        id: 'domains',
        title: 'Security Domains',
        leftTopics: [
            { id: 'web-security', title: 'Web App Security' },
            { id: 'network-security', title: 'Network Security' },
        ],
        rightTopics: [
            { id: 'cloud-security', title: 'Cloud Security' },
        ],
    },
    {
        id: 'recon',
        title: 'Reconnaissance',
        leftTopics: [{ id: 'reconnaissance', title: 'Reconnaissance' }],
        rightTopics: [
            { id: 'nmap', title: 'Nmap' },
            { id: 'vulnerability-scanning', title: 'Vulnerability Scanning' },
        ],
    },
    {
        id: 'offensive',
        title: 'Offensive Security',
        description: 'Red Team',
        leftTopics: [
            { id: 'penetration-testing', title: 'Penetration Testing' },
            { id: 'metasploit', title: 'Metasploit' },
        ],
        rightTopics: [
            { id: 'burp-suite', title: 'Burp Suite' },
        ],
    },
    {
        id: 'defensive',
        title: 'Defensive Security',
        description: 'Blue Team',
        leftTopics: [
            { id: 'incident-response', title: 'Incident Response' },
            { id: 'siem', title: 'SIEM' },
        ],
        rightTopics: [
            { id: 'digital-forensics', title: 'Digital Forensics' },
            { id: 'malware-analysis', title: 'Malware Analysis' },
        ],
    },
    {
        id: 'governance',
        title: 'Governance & Risk',
        leftTopics: [{ id: 'compliance', title: 'Compliance & Frameworks' }],
        rightTopics: [{ id: 'risk-management', title: 'Risk Management' }],
    },
    {
        id: 'certs',
        title: 'Certifications',
        rightTopics: [{ id: 'certifications', title: 'Security+, OSCP, CISSP' }],
    },
];
