export const techGroups = [
  {
    label: "Linux",
    items: ["RHEL", "Rocky Linux", "AlmaLinux", "Ubuntu", "Debian"],
  },
  {
    label: "Cloud",
    items: ["AWS", "Azure", "GCP"],
  },
  {
    label: "Automation",
    items: ["Ansible", "Terraform"],
  },
  {
    label: "Monitoring",
    items: ["Prometheus", "Grafana", "Zabbix", "CloudWatch"],
  },
  {
    label: "DevOps",
    items: ["Docker", "Kubernetes", "GitHub", "GitLab", "Jenkins"],
  },
  {
    label: "Security",
    items: ["SELinux", "Firewalld", "OpenSCAP"],
  },
];

export const marqueeTechnologies = techGroups.flatMap((g) => g.items);
