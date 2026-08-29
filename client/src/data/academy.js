export const academyCourses = [
  "Linux Fundamentals",
  "Linux Administration",
  "RHCSA Preparation",
  "RHCE Preparation",
  "Linux Security",
  "AWS for Linux Administrators",
  "AWS Fundamentals",
  "Ansible",
  "Terraform",
  "Docker",
  "Kubernetes",
  "DevOps",
];

export const academyAudience = [
  "Freshers",
  "Students",
  "Working Professionals",
  "NOC Engineers",
  "System Administrators",
  "Cloud Engineers",
  "Corporate Teams",
];

export const processSteps = [
  {
    step: "Assess",
    detail: "We review your current Linux, cloud and network footprint.",
    points: [
      "Full inventory of servers, cloud accounts and network topology",
      "Review of existing backup, DR and access-control practices",
      "Stakeholder interviews to understand growth and compliance needs",
      "Baseline scorecard covering performance, security and cost",
    ],
  },
  {
    step: "Identify",
    detail: "Gaps in performance, security and monitoring are documented.",
    points: [
      "Vulnerability and configuration scans across every host",
      "Performance bottlenecks flagged with supporting metrics",
      "Monitoring and alerting blind spots mapped out",
      "Findings ranked by business risk, not just technical severity",
    ],
  },
  {
    step: "Remediate",
    detail: "Critical issues are fixed before anything else is optimized.",
    points: [
      "High-severity issues resolved first, with a documented rollback plan",
      "Changes staged and tested before touching production",
      "Root-cause fixes, not just symptom patching",
      "Sign-off checklist shared with your team after every fix",
    ],
  },
  {
    step: "Secure",
    detail: "Hardening, access control and patching are brought current.",
    points: [
      "CIS-aligned OS hardening across all managed systems",
      "SSH, IAM and least-privilege access control review",
      "Patch management cadence set up and automated",
      "Secrets and key rotation policy put in place",
    ],
  },
  {
    step: "Monitor",
    detail: "24×7 visibility is put in place across the stack.",
    points: [
      "Centralized dashboards for infrastructure, apps and network",
      "24×7 alerting with clear on-call escalation paths",
      "Log aggregation for faster incident investigation",
      "SLA-backed response times for critical alerts",
    ],
  },
  {
    step: "Report",
    detail: "You receive clear, recurring reporting on infrastructure health.",
    points: [
      "Monthly infrastructure health and security posture report",
      "Trend tracking on performance, cost and incidents",
      "Plain-language summary for non-technical stakeholders",
      "Roadmap recommendations for the next optimization cycle",
    ],
  },
];

export const infraStages = [
  { n: "01", label: "Build", detail: "Provision Linux and cloud infrastructure that's built to last." },
  { n: "02", label: "Secure", detail: "Harden every layer, from SSH access to network policy." },
  { n: "03", label: "Automate", detail: "Replace manual work with repeatable, version-controlled automation." },
  { n: "04", label: "Monitor", detail: "Watch the systems that matter, around the clock." },
  { n: "05", label: "Optimize", detail: "Tune performance and cost as your infrastructure grows." },
];

export const futureVision = [
  {
    id: "managed-linux",
    index: "01",
    name: "Managed Linux",
    tag: "Where we operate today",
    summary:
      "The operational foundation everything else is built on — full lifecycle administration across your Linux fleet.",
    capabilities: [
      "Server administration & migration",
      "Patch management",
      "Performance optimization",
      "Production support",
    ],
  },
  {
    id: "cloud-operations",
    index: "02",
    name: "Cloud Operations",
    tag: "Extending beyond the server",
    summary:
      "Linux discipline applied to the cloud — provisioning, scaling and securing environments as one operating model.",
    capabilities: [
      "AWS architecture & provisioning",
      "IAM & access governance",
      "Auto Scaling & cost control",
      "Cloud migration",
    ],
  },
  {
    id: "devops",
    index: "03",
    name: "DevOps",
    tag: "Replacing manual work",
    summary:
      "Infrastructure defined as code, so environments are repeatable, versioned and reviewable instead of hand-configured.",
    capabilities: [
      "Ansible & Terraform",
      "CI/CD pipeline design",
      "GitOps workflows",
      "Environment standardization",
    ],
  },
  {
    id: "kubernetes",
    index: "04",
    name: "Kubernetes",
    tag: "Orchestrating the workload layer",
    summary:
      "Containerized services scheduled, scaled and self-healed, run with the same operational rigor as bare-metal Linux.",
    capabilities: [
      "Cluster setup & administration",
      "Workload scheduling",
      "Rolling deployments",
      "Cluster monitoring",
    ],
  },
  {
    id: "cloudops",
    index: "05",
    name: "CloudOps",
    tag: "Bringing it under one roof",
    summary:
      "Linux, cloud, DevOps and Kubernetes operated as a single practice — one team, one set of standards, one pane of glass.",
    capabilities: [
      "Unified monitoring & alerting",
      "Cross-stack incident response",
      "Capacity & cost planning",
      "Scheduled health reporting",
    ],
  },
  {
    id: "infrastructure-automation-platform",
    index: "06",
    name: "Infrastructure Automation Platform",
    tag: "Where we're headed",
    summary:
      "Nexora Cloud Control Center — turning our operational playbooks into a platform businesses can run on directly.",
    capabilities: [
      "Self-service provisioning",
      "Policy-driven automation",
      "Built-in security baselines",
      "Unified operations dashboard",
    ],
  },
];