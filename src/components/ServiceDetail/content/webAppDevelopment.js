// Copy and data for /services/web-app-development, taken from the design source.
const webAppDevelopment = {
  hero: {
    eyebrow: "Web App Development",
    title: { lead: "Web apps that stay fast", accent: "long after launch" },
    intro: [
      "From SaaS products and customer portals to the internal tools your business runs on, one team designs and builds web apps that are fast, secure and easy to change, with a clickable prototype in weeks.",
    ],
    primaryCta: { label: "Discuss your web app", href: "#contact", glyph: "→" },
    secondaryCta: { label: "See our offers", href: "#process", glyph: "↓" },
    art: "web-app",
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
      title: ["Users judge web apps fast. ", { grad: "AI raises the bar." }],
      body: "Slow, clunky apps lose people before they see the value, and every extra second costs sign-ups and sales. Users now expect AI to save them steps, not add them.",
      conclusion: "So we build for speed first, then add AI where it removes work.",
      stats: [
        {
          claim:
            "of mobile visits are abandoned when a page takes longer than three seconds to load.",
          value: 53,
          label: "53%",
          bar: 53,
          source: "Google",
          date: "Mobile page speed, 2016",
          url: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-page-speed-new-industry-benchmarks/",
        },
        {
          claim: "more retail conversions from a site 0.1s faster.",
          value: 8,
          label: "8.4%",
          bar: 8,
          source: "Deloitte",
          date: "Milliseconds Make Millions, 2020",
          url: "https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html",
        },
        {
          claim: "of organizations now use AI in at least one business function.",
          value: 88,
          label: "88%",
          bar: 88,
          source: "McKinsey",
          date: "State of AI, 2025",
          url: "https://www.mckinsey.com/featured-insights/charts/ai-at-work-but-not-at-scale",
        },
      ],
    },
    {
      type: "fit",
      eyebrow: "What it is",
      title: [{ grad: "Web apps with AI built in," }, { br: true }, "not bolted on."],
      intro:
        "We design and build fast, secure web apps, with AI where it saves your users and team real work.",
      lead: {
        icon: "M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm-2.6 6.2a2.7 2.7 0 0 1 5.2.9c0 1.8-2.6 2.2-2.6 3.9m0 3h.01",
        label: "The real question",
        question: "“Where would AI save your users the most time?”",
        text: "AI only earns its place in a web app when it removes a step people repeat every day. We find that step first, then build the app around it, fast and secure from day one.",
        cta: "Discuss your web app",
      },
      tiles: [
        {
          n: "01",
          icon: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
          title: "Fast by default",
          text: "Pages load quickly on any device, with speed budgets set in discovery and checked on every single release, so visitors stay and buy.",
        },
        {
          n: "02",
          icon: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z",
          title: "AI where it helps",
          text: "Search, assistants and automation trained on your own content, so answers stay accurate and on brand, and your team spends far less time on the same routine questions.",
        },
        {
          n: "03",
          icon: "M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5",
          title: "Built to change",
          text: "A clean, documented codebase and a shared design system, so new features and AI upgrades ship in weeks, not quarters, and your own team can keep building on it long after we hand over the keys.",
          wide: true,
        },
      ],
    },
    {
      type: "offers",
      eyebrow: "Offers",
      title: ["Our web app ", { grad: "offers" }],
      offers: [
        {
          n: "01",
          icon: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2ZM9 4v14M15 6v14",
          title: "Discovery & Solution Design",
          tag: "Map the product, then click through it",
          duration: "4 to 6 weeks",
          focusLabel: "We’ll cover",
          focus: [
            "Goals and journeys",
            "AI opportunities",
            "Architecture",
            "UX and UI design",
            "Clickable prototype",
          ],
          deliverables: [
            { title: "Prioritized backlog", note: "Every feature ranked, with the MVP marked." },
            { title: "Architecture plan", note: "How the app, data and AI fit together." },
            { title: "Clickable prototype", note: "Key screens and flows, ready to try." },
          ],
        },
        {
          n: "02",
          icon: "M3 5h18v14H3zM3 9h18M9.5 12.5 8 14l1.5 1.5M14.5 12.5 16 14l-1.5 1.5",
          title: "Build the MVP",
          tag: "A working release every two weeks",
          duration: "8 to 12 weeks",
          focusLabel: "What gets built",
          focus: ["Frontend", "Backend and APIs", "AI features", "CI/CD pipeline", "Code reviews"],
          deliverables: [
            { title: "Release builds", note: "A staging link updated every two weeks." },
            { title: "Release notes", note: "What changed and why, every sprint." },
            { title: "Source code", note: "In your repository from day one." },
          ],
        },
        {
          n: "03",
          icon: "M4 4h6v6H4zM14 14h6v6h-6zM7 10v5a2 2 0 0 0 2 2h5",
          title: "Integrate & Validate",
          tag: "Connected, tested and ready to ship",
          duration: "2 to 3 weeks",
          focusLabel: "What we check",
          focus: [
            "Integrations",
            "Login and roles",
            "AI evals",
            "Load and speed",
            "Security review",
          ],
          deliverables: [
            { title: "Integration results", note: "Every connection tested end to end." },
            { title: "Performance baseline", note: "Load times under real traffic." },
            { title: "Release checklist", note: "Signed off before anything goes live." },
          ],
        },
        {
          n: "04",
          icon: "M3 17l6-6 4 4 8-8M15 7h6v6",
          title: "Launch & Evolve",
          tag: "Live, monitored and getting better",
          duration: "Ongoing",
          focusLabel: "This covers",
          focus: ["Deployment", "Monitoring", "Usage insights", "Model updates", "New features"],
          deliverables: [
            { title: "Launch summary", note: "What shipped and how it’s performing." },
            { title: "Monitoring dashboards", note: "Uptime, errors, speed and AI spend." },
            { title: "Improvement roadmap", note: "What to build next, and in what order." },
            { title: "Support plan", note: "Agreed response times for issues." },
          ],
        },
      ],
    },
    {
      type: "impact",
      eyebrow: "OUTCOMES",
      title: ["From slow, manual tools to", { br: true }, { grad: "web apps that work" }],
      outcomes: [
        "A web app that loads fast on any device",
        "AI features that save your users steps",
        "Search and answers grounded in your content",
        "Your tools and data connected through APIs",
        "Working software to review every two weeks",
        "A tested, secure release ready for real traffic",
        "Code, data and models your business owns",
      ],
      ctaLines: ["See how quickly you can reach", "these outcomes"],
      ctaLabel: "Book a Free Consultation",
    },
    {
      type: "value",
      title: "Where could a web app help?",
      text: [
        "We look for where slow pages and manual steps cost you customers,",
        "and where a fast web app with AI built in pays back.",
      ],
      areas: [
        "Turn visitors into customers",
        "Let customers serve themselves",
        "Put AI search on your content",
        "Replace manual admin work",
        "Own your code and data",
      ],
    },
    {
      type: "stack",
      eyebrow: "Technologies",
      title: ["Tools and technologies", { br: true }, { grad: "we build web apps with" }],
      groups: [
        {
          label: "Frontend",
          items: [
            { name: "React", logo: "react" },
            { name: "Next.js", logo: "nextdotjs" },
            { name: "Vue.js", logo: "vuedotjs" },
            { name: "Angular", logo: "angular" },
            { name: "TypeScript", logo: "typescript" },
            { name: "Tailwind CSS", logo: "tailwindcss" },
          ],
        },
        {
          label: "Backend and APIs",
          items: [
            { name: "Node.js", logo: "nodedotjs" },
            { name: "Python", logo: "python" },
            { name: "FastAPI", logo: "fastapi" },
            { name: ".NET", logo: "dotnet" },
            { name: "Laravel", logo: "laravel" },
            { name: "GraphQL", logo: "graphql" },
          ],
        },
        {
          label: "AI and data",
          items: [
            { name: "OpenAI", logo: "openai-dark" },
            { name: "Claude", logo: "claude" },
            { name: "Gemini", logo: "gemini-google" },
            { name: "PostgreSQL", logo: "postgresql" },
            { name: "MongoDB", logo: "mongodb" },
            { name: "Redis", logo: "redis" },
          ],
        },
        {
          label: "Cloud and DevOps",
          items: [
            { name: "AWS", logo: "amazonwebservices" },
            { name: "Google Cloud", logo: "googlecloud" },
            { name: "Azure", logo: "microsoftazure" },
            { name: "Docker", logo: "docker" },
            { name: "Kubernetes", logo: "kubernetes" },
            { name: "GitHub Actions", logo: "githubactions" },
          ],
        },
        {
          label: "Testing and quality",
          items: [
            { name: "Playwright", logo: "playwright" },
            { name: "Cypress", logo: "cypress" },
            { name: "Jest", logo: "jest" },
            { name: "Storybook", logo: "storybook" },
            { name: "Sentry", logo: "sentry" },
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
          question: "How long does a web app take to build?",
          answer: [
            "Most MVPs go live in 4 to 5 months: discovery and design first, then ",
            { text: "two-week sprints", href: "#fit" },
            ", then a short integration and validation phase. You get a ",
            { text: "firm timeline", href: "#fit" },
            " at the end of discovery.",
          ],
        },
        {
          question: "Do you add AI to every web app?",
          answer: [
            "No. We add AI where it removes real work, like search, support answers or report drafting. If a feature works better without AI, we’ll tell you in discovery.",
          ],
        },
        {
          question: "How much will it cost?",
          answer: [
            "It depends on scope, users, integrations and AI usage. Discovery ends with a ",
            { text: "roadmap and estimate in writing", href: "#fit" },
            ", so you know the cost before development starts.",
          ],
        },
        {
          question: "Will our data be used to train AI models?",
          answer: [
            "No. We use providers and settings that keep your data out of model training, and AI features answer from your own content.",
          ],
        },
        {
          question: "Can you work on our existing web app?",
          answer: [
            "Yes. We review the codebase first, fix what slows it down, then add features or AI in sprints without a full rebuild.",
          ],
        },
        {
          question: "What happens after launch?",
          answer: [
            "Ongoing support: bug fixes, ",
            { text: "security updates", href: "#process" },
            ", speed and AI cost monitoring, and new features planned from how people use the app.",
          ],
        },
      ],
    },
  ],
};

export default webAppDevelopment;
