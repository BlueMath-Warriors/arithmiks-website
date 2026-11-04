// Copy and data for /services/devops, taken from the design source.
const devops = {
  hero: {
    eyebrow: "DevOps Services",
    title: { lead: "Ship every day on", accent: "infrastructure that holds" },
    intro: [
      "From CI/CD pipelines and containers to monitoring and cloud cost control, one team sets up and runs the infrastructure your product depends on, with automated releases in weeks.",
    ],
    primaryCta: { label: "Discuss your infrastructure", href: "#contact", glyph: "→" },
    secondaryCta: { label: "See our offers", href: "#process", glyph: "↓" },
    art: "devops",
  },
  chapters: [
    { id: "challenges", label: "Why it matters" },
    { id: "fit", label: "What it is" },
    { id: "process", label: "Offers" },
    { id: "impact", label: "Outcomes" },
    { id: "stack", label: "Technologies" },
    { id: "faq", label: "FAQ" },
  ],
  sections: [
    {
      type: "challenges",
      eyebrow: "Why it matters",
      title: ["Downtime is expensive. ", { grad: "Cloud waste adds up." }],
      body: "Manual releases, missing alerts and oversized servers quietly cost uptime, budget and engineering time. With AI writing more code, pipelines must ship it safely.",
      conclusion: "So we automate releases first, then tune for uptime and cost.",
      stats: [
        {
          claim: "of outages now cost at least $100,000 in total losses.",
          value: 60,
          label: "60%",
          bar: 60,
          source: "Uptime Institute",
          date: "Outage Analysis, 2022",
          url: "https://uptimeinstitute.com/about-ui/press-releases/2022-outage-analysis-finds-downtime-costs-and-consequences-worsening",
        },
        {
          claim: "of cloud security failures through 2025 will be the customer’s fault.",
          value: 99,
          label: "99%",
          bar: 99,
          source: "Gartner",
          date: "Cloud security, 2019",
          url: "https://www.gartner.com/smarterwithgartner/is-the-cloud-secure",
        },
        {
          claim: "of cloud spend is estimated to be wasted.",
          value: 27,
          label: "27%",
          bar: 27,
          source: "Flexera",
          date: "State of the Cloud, 2024",
          url: "https://info.flexera.com/CM-REPORT-State-of-the-Cloud",
        },
      ],
    },
    {
      type: "infra",
      intro: {
        eyebrow: "What it is",
        title: ["Cloud infrastructure ", { grad: "built to ship and scale" }],
        lead: "We design, automate and run the cloud your SaaS lives on: pipelines, containers, data and monitoring.",
        body: "Every release is tested, every service watched, and AI workloads included.",
      },
      diagram: {
        source: {
          flex: "0 0 clamp(136px, 10.5vw, 168px)",
          icon: "M16 19v-1.5A3.5 3.5 0 0 0 12.5 14h-5A3.5 3.5 0 0 0 4 17.5V19M10 10.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM20 19v-1.4a3.2 3.2 0 0 0-2.4-3.1M15.5 4.2a3.2 3.2 0 0 1 0 6.1",
          label: "Traffic in",
          title: "Your users",
          text: "Web and mobile, from anywhere.",
        },
        edge: {
          flex: "0 0 clamp(156px, 12vw, 186px)",
          context: {
            label: "Edge",
            logos: [{ name: "Cloudflare", logo: "cloudflare" }],
            wideLogos: true,
          },
          card: {
            accent: "#5C8CFF",
            icon: "M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.1 4.5 4.5 0 0 0 7 18Z",
            title: "Cloudflare",
            tag: "DNS · CDN · WAF",
            text: "Caches content and blocks bad traffic before it reaches you.",
          },
        },
        network: {
          label: "Cloud network · AWS / GCP / Azure",
          iac: { label: "Terraform · IaC", logo: "terraform" },
          tiers: [
            {
              flex: "1 1 0",
              context: { label: "Gateways", logos: [{ name: "NGINX", logo: "nginx" }] },
              card: {
                accent: "#1355FF",
                icon: "M12 3 4 6.5v5.2c0 4.3 3.4 7.9 8 9.3 4.6-1.4 8-5 8-9.3V6.5L12 3ZM9 12l2 2 4-4",
                title: "Gateways",
                tag: "Entry",
                items: [
                  {
                    icon: "M3 12h4M7 12c3 0 4-6 8-6h4M7 12c3 0 4 6 8 6h4M7 12h12M17 4l2 2-2 2M17 16l2 2-2 2M17 10l2 2-2 2",
                    title: "Load balancer",
                    note: "TLS · health checks",
                  },
                  {
                    icon: "M5 12h14M12 5l7 7-7 7",
                    title: "API gateway",
                    note: "Auth · rate limits · routing",
                  },
                ],
              },
            },
            {
              flex: "1.55 1 0",
              context: {
                label: "Containers",
                logos: [
                  { name: "Docker", logo: "docker" },
                  { name: "Kubernetes", logo: "kubernetes" },
                  { name: "Helm", logo: "helm" },
                ],
              },
              card: {
                accent: "linear-gradient(90deg,#1355FF,#A96FC8)",
                icon: "M3 7h18v12H3zM3 7l2-3h14l2 3M8 10.5v5M12 10.5v5M16 10.5v5",
                title: "Compute",
                tag: "Kubernetes · autoscaling",
                workloads: ["Web app", "API", "Workers", "AI service"].map((label) => ({
                  label,
                  icon: "M3 7h18v12H3zM3 7l2-3h14l2 3M8 10.5v5M12 10.5v5M16 10.5v5",
                })),
                external: {
                  title: "Model APIs",
                  note: "outside your network",
                  logos: [
                    { name: "OpenAI", logo: "openai-dark" },
                    { name: "Claude", logo: "claude" },
                  ],
                },
              },
              pipeline: true,
            },
            {
              flex: "1.15 1 0",
              context: {
                label: "Data",
                logos: [
                  { name: "PostgreSQL", logo: "postgresql" },
                  { name: "Redis", logo: "redis" },
                ],
              },
              card: {
                accent: "linear-gradient(90deg,#A96FC8,#EC4A9E)",
                icon: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
                iconStops: ["#1355FF", "#A96FC8", "#EC4A9E"],
                title: "Data",
                tag: "Private subnet",
                items: [
                  {
                    icon: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6",
                    title: "PostgreSQL",
                    note: "Managed database",
                  },
                  { icon: "M13 3 5 14h6l-1 7 8-11h-6l1-7Z", title: "Redis", note: "Cache · queues" },
                  {
                    icon: "M3 8h18v11H3zM3 8l2-3h14l2 3M10 12h4",
                    title: "Object storage",
                    note: "Files · backups",
                  },
                ],
              },
            },
          ],
        },
        pipeline: {
          label: "CI/CD · push → build → deploy",
          logos: [
            { name: "GitHub Actions", logo: "githubactions" },
            { name: "Argo CD", logo: "argo" },
          ],
        },
        observability: {
          label: "Observability · every service reports in",
          signals: ["Logs", "Metrics", "Traces"],
          alert: "Alerts to on-call",
          logos: [
            { name: "Grafana", logo: "grafana" },
            { name: "Prometheus", logo: "prometheus" },
            { name: "Datadog", logo: "datadog" },
            { name: "Sentry", logo: "sentry" },
          ],
        },
      },
    },
    {
      type: "offers",
      eyebrow: "Offers",
      title: ["Our DevOps ", { grad: "offers" }],
      offers: [
        {
          n: "01",
          icon: "M14.1 5.55a2 2 0 0 0 1.79 0l3.66-1.83a1 1 0 0 1 1.45.9v12.76a1 1 0 0 1-.55.9l-4.56 2.27a2 2 0 0 1-1.79 0l-4.2-2.1a2 2 0 0 0-1.8 0l-3.65 1.83A1 1 0 0 1 3 19.38V6.62a1 1 0 0 1 .55-.9L8.1 3.45a2 2 0 0 1 1.8 0ZM15 5.76v15M9 3.24v15",
          title: "Assess Operations & Roadmap",
          tag: "Map how you ship today, then plan it",
          duration: "2 to 3 days",
          focusLabel: "We’ll cover",
          focus: [
            "Current setup",
            "Release process",
            "Cloud spend",
            "Security gaps",
            "Bottlenecks",
          ],
          deliverables: [
            { title: "Infrastructure audit", note: "What you run and where it hurts." },
            { title: "DevOps roadmap", note: "What to automate first, and why." },
            { title: "Estimate", note: "Timeline and cost for the setup." },
          ],
        },
        {
          n: "02",
          icon: "M10.45 12.25H7.25A4.5 4.5 0 0 0 2.903 17.915L3.499 20.137M4.999 17.539L3.499 20.137L0.901 18.637M5.859 21.03A4.5 4.5 0 0 0 11.75 16.75V7.75A4.5 4.5 0 0 1 13.068 4.568L14.694 2.942M14.694 5.942L14.694 2.942L11.694 2.942M17.415 3.403A4.5 4.5 0 0 1 16.25 12.25H13.05",
          title: "Set Up CI/CD & Infrastructure",
          tag: "Automated releases on infrastructure as code",
          duration: "2 to 4 weeks",
          focusLabel: "What gets built",
          focus: [
            "CI/CD pipelines",
            "Infrastructure as code",
            "Containers",
            "Environments",
            "Secrets",
          ],
          deliverables: [
            { title: "Pipelines", note: "Every push tested and deployed automatically." },
            { title: "Infrastructure code", note: "Your whole cloud, versioned in Git." },
            { title: "Runbooks", note: "How to deploy, roll back and scale." },
          ],
        },
        {
          n: "03",
          icon: "M12 3 5 6v5.2c0 4.3 2.9 7.9 7 9.3 4.1-1.4 7-5 7-9.3V6l-7-3ZM8.8 12l2.3 2.3 4.3-4.6",
          title: "Security & Reliability",
          tag: "Hardened, monitored and ready for traffic",
          duration: "1 to 2 weeks",
          focusLabel: "What we check",
          focus: ["Access control", "Vulnerability scans", "Backups", "Monitoring", "Load testing"],
          deliverables: [
            { title: "Security report", note: "Findings fixed, and what remains." },
            { title: "Monitoring and alerts", note: "Dashboards and on-call alerts in place." },
            { title: "Recovery plan", note: "Backups tested, restore times known." },
          ],
        },
        {
          n: "04",
          icon: "M4 15v-3a8 8 0 0 1 16 0v3M4 15a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2ZM20 15a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2ZM18 19c0 1.7-1.8 2.5-4 2.5h-1.5",
          title: "Support & Optimize",
          tag: "Live, watched and getting cheaper",
          duration: "Ongoing",
          focusLabel: "This covers",
          focus: ["Incident response", "Patching", "Cost tuning", "Scaling", "AI-assisted alerts"],
          deliverables: [
            { title: "Monthly health report", note: "Uptime, incidents and cloud spend." },
            { title: "Cost savings", note: "Right-sized resources, waste removed." },
            { title: "Improvement roadmap", note: "What to automate next." },
            { title: "Support plan", note: "Agreed response times for incidents." },
          ],
        },
      ],
    },
    {
      type: "impact",
      eyebrow: "OUTCOMES",
      title: ["From manual releases to", { br: true }, { grad: "infrastructure that runs itself" }],
      outcomes: [
        "Releases that ship on every merge",
        "Your whole cloud defined as code in Git",
        "Alerts that fire before users notice",
        "Rollbacks in minutes, not hours",
        "Cloud costs right-sized and tracked",
        "Security checks built into every pipeline",
        "Infrastructure your team owns and understands",
      ],
      ctaLines: ["See how quickly you can reach", "these outcomes"],
      ctaLabel: "Book a Free Consultation",
    },
    {
      type: "value",
      title: "Where could DevOps help?",
      text: [
        "We look for where manual releases and downtime cost you time,",
        "and where automation and AI-ready infrastructure pay back.",
      ],
      chipsPerRow: 3,
      areas: [
        "Ship without downtime",
        "Pass security reviews",
        "Cut cloud spend",
        "Run AI in production",
        "Recover in minutes",
      ],
    },
    {
      type: "stack",
      eyebrow: "Technologies",
      title: ["Tools and technologies", { br: true }, { grad: "we run infrastructure with" }],
      groups: [
        {
          label: "Cloud and edge",
          items: [
            { name: "AWS", logo: "amazonwebservices" },
            { name: "Google Cloud", logo: "googlecloud" },
            { name: "Azure", logo: "microsoftazure" },
            { name: "Cloudflare", logo: "cloudflare" },
            { name: "DigitalOcean", logo: "digitalocean" },
            { name: "Vercel", logo: "vercel" },
          ],
        },
        {
          label: "Containers",
          items: [
            { name: "Docker", logo: "docker" },
            { name: "Kubernetes", logo: "kubernetes" },
            { name: "Helm", logo: "helm" },
            { name: "Amazon ECS", logo: "amazonecs" },
            { name: "NGINX", logo: "nginx" },
            { name: "Traefik", logo: "traefikproxy" },
          ],
        },
        {
          label: "CI/CD",
          items: [
            { name: "GitHub Actions", logo: "githubactions" },
            { name: "GitLab CI", logo: "gitlab" },
            { name: "Jenkins", logo: "jenkins" },
            { name: "Argo CD", logo: "argo" },
            { name: "CircleCI", logo: "circleci" },
          ],
        },
        {
          label: "Infrastructure as code",
          items: [
            { name: "Terraform", logo: "terraform" },
            { name: "Pulumi", logo: "pulumi" },
            { name: "Ansible", logo: "ansible" },
          ],
        },
        {
          label: "Monitoring",
          items: [
            { name: "Prometheus", logo: "prometheus" },
            { name: "Grafana", logo: "grafana" },
            { name: "Datadog", logo: "datadog" },
            { name: "Sentry", logo: "sentry" },
            { name: "New Relic", logo: "newrelic" },
            { name: "OpenTelemetry", logo: "opentelemetry" },
          ],
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQs",
      title: [{ grad: "Questions we hear" }, { br: true }, "before we start"],
      note: "Something we haven't covered? Ask us on the call.",
      items: [
        {
          question: "How long does a DevOps setup take?",
          answer: [
            { text: "The assessment takes 2 to 3 days", href: "#process" },
            ". ",
            { text: "Setting up CI/CD and infrastructure", href: "#process" },
            " takes 2 to 4 weeks, then 1 to 2 weeks of ",
            { text: "security and reliability work", href: "#process" },
            ".",
          ],
        },
        {
          question: "What does the infrastructure look like?",
          answer: [
            "Traffic enters through ",
            { text: "Cloudflare", href: "#fit" },
            ", then a ",
            { text: "load balancer and API gateway", href: "#fit" },
            ", into ",
            { text: "containers on Kubernetes", href: "#fit" },
            ", with PostgreSQL, Redis and object storage in a ",
            { text: "private subnet", href: "#fit" },
            ".",
          ],
        },
        {
          question: "Can you work with our existing cloud?",
          answer: [
            "Yes. We start from what you run on ",
            { text: "AWS, Google Cloud or Azure", href: "#stack" },
            ", and improve it step by step without a risky migration.",
          ],
        },
        {
          question: "Will there be downtime during the setup?",
          answer: [
            "No. We build new pipelines alongside your current setup, test them, then switch over with a ",
            { text: "rollback plan", href: "#process" },
            " ready.",
          ],
        },
        {
          question: "How much will it cost?",
          answer: [
            "It depends on your stack and how much is automated today. The assessment ends with a ",
            { text: "roadmap and estimate in writing", href: "#process" },
            ".",
          ],
        },
        {
          question: "Can you run our AI features in production?",
          answer: [
            "Yes. Model APIs sit behind the same gateway, with usage, latency and ",
            { text: "AI spend", href: "#impact" },
            " tracked alongside the rest of your ",
            { text: "monitoring", href: "#stack" },
            ".",
          ],
        },
        {
          question: "What happens after the setup?",
          answer: [
            { text: "Ongoing support", href: "#process" },
            ": incident response, patching, scaling and cost tuning, with a ",
            { text: "monthly report", href: "#impact" },
            " on uptime, incidents and spend.",
          ],
        },
      ],
    },
  ],
};

export default devops;
