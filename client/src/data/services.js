export const services = [
  {
    id: "managed-linux",
    index: "01",
    name: "Managed Linux",
    tag: "RHEL · Rocky Linux · Ubuntu · Debian",
    summary:
      "Full lifecycle administration for your Linux estate — from a single production box to a multi-region fleet.",
    metrics: [
      { label: "Distros supported", value: "5+" },
      { label: "Patch cadence", value: "Scheduled" },
      { label: "Coverage", value: "24×7" },
    ],
    capabilities: [
      "Server administration",
      "Server migration",
      "Performance optimization",
      "Patch management",
      "Backup configuration",
      "Production support",
      "Monitoring",
    ],
  },
  {
    id: "cloud-aws",
    index: "02",
    name: "Cloud & AWS",
    tag: "EC2 · VPC · IAM · S3 · Auto Scaling",
    summary:
      "We design, provision and operate AWS environments built for security, cost-efficiency and predictable scale.",
    metrics: [
      { label: "Core services", value: "EC2 / VPC / S3" },
      { label: "Scaling", value: "Auto Scaling" },
      { label: "Focus", value: "Cost + Security" },
    ],
    capabilities: [
      "Cloud architecture & provisioning",
      "VPC & network design",
      "IAM & access governance",
      "Auto Scaling configuration",
      "Cost optimization reviews",
      "Cloud migration",
      "Cloud security hardening",
    ],
  },
  {
    id: "devops-automation",
    index: "03",
    name: "DevOps & Automation",
    tag: "Ansible · Terraform · CI/CD",
    summary:
      "One automation, hundreds of servers. We replace manual configuration with repeatable, version-controlled infrastructure.",
    metrics: [
      { label: "Playbooks", value: "Ansible" },
      { label: "Provisioning", value: "Terraform" },
      { label: "Pipelines", value: "CI/CD" },
    ],
    capabilities: [
      "Infrastructure as Code",
      "Configuration management",
      "CI/CD pipeline design",
      "Release automation",
      "Environment standardization",
      "GitOps workflows",
    ],
  },
  {
    id: "infra-security",
    index: "04",
    name: "Infrastructure Security",
    tag: "SELinux · Firewalld · Hardening",
    summary:
      "Security treated as infrastructure, not an afterthought — hardened at the OS, network and access layer.",
    metrics: [
      { label: "Hardening", value: "CIS-aligned" },
      { label: "Access control", value: "Least privilege" },
      { label: "Scanning", value: "OpenSCAP" },
    ],
    capabilities: [
      "Linux hardening",
      "SSH security",
      "SELinux policy tuning",
      "Firewall configuration",
      "Vulnerability remediation",
      "Security patching",
      "Compliance support",
    ],
  },
  {
    id: "noc-monitoring",
    index: "05",
    name: "24×7 Monitoring & NOC",
    tag: "Prometheus · Grafana · Zabbix",
    summary:
      "Round-the-clock visibility into your infrastructure, with a NOC team watching what matters before it becomes an incident.",
    metrics: [
      { label: "Coverage", value: "24×7×365" },
      { label: "Alerting", value: "Real-time" },
      { label: "Reporting", value: "Scheduled" },
    ],
    capabilities: [
      "Infrastructure monitoring",
      "Application uptime tracking",
      "Alert triage & escalation",
      "Incident response",
      "Capacity planning",
      "Monthly health reports",
    ],
  },
  {
    id: "backup-dr",
    index: "06",
    name: "Backup & Disaster Recovery",
    tag: "Verification · Replication · Recovery",
    summary:
      "Backups you can trust, because they're tested — not just taken.",
    metrics: [
      { label: "Verification", value: "Scheduled" },
      { label: "Replication", value: "Configured" },
      { label: "Recovery testing", value: "Periodic" },
    ],
    capabilities: [
      "Backup strategy design",
      "Automated backup configuration",
      "Restore verification",
      "Offsite replication",
      "Recovery time planning",
      "Business continuity documentation",
    ],
  },
  {
    id: "containers-k8s",
    index: "07",
    name: "Containers & Kubernetes",
    tag: "Docker · Kubernetes",
    summary:
      "Containerized workloads, orchestrated properly — from image builds to production clusters.",
    metrics: [
      { label: "Runtime", value: "Docker" },
      { label: "Orchestration", value: "Kubernetes" },
      { label: "Delivery", value: "CI/CD" },
    ],
    capabilities: [
      "Containerization strategy",
      "Docker image standards",
      "Kubernetes cluster setup",
      "Workload scheduling",
      "Cluster monitoring",
      "Rolling deployments",
    ],
  },
  {
    id: "training",
    index: "08",
    name: "Linux & Cloud Training",
    tag: "Nexora Cloud Academy",
    summary:
      "Structured, hands-on training for the same Linux and cloud skills our engineers use in production.",
    metrics: [
      { label: "Format", value: "Hands-on" },
      { label: "Tracks", value: "Linux / Cloud / DevOps" },
      { label: "Audience", value: "Teams & individuals" },
    ],
    capabilities: [
      "Linux fundamentals & administration",
      "RHCSA / RHCE preparation",
      "AWS for Linux administrators",
      "Ansible & Terraform workshops",
      "Docker & Kubernetes training",
      "Corporate team programs",
    ],
  },
];
