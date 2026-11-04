// Copy and data for /services/custom-software-development, taken from the design source.
const customSoftwareDevelopment = {
  hero: {
    eyebrow: "Custom Software Development",
    title: { lead: "AI-powered software", accent: "that fits how you work" },
    intro: [
      "From internal platforms and AI-powered workflows to customer portals and integrations, we design and build software around the way your business runs, with AI where it pays back.",
    ],
    primaryCta: { label: "Describe your project", href: "#contact", glyph: "→" },
    secondaryCta: { label: "See our expertise", href: "#process", glyph: "↓" },
    art: "custom-software",
    stackCtasOnMobile: true,
    introMaxWidth: "min(620px, 56vw)",
  },
  chapters: [
    { id: "challenges", label: "Why it matters" },
    { id: "fit", label: "What it is" },
    { id: "process", label: "Offers" },
    { id: "impact", label: "Outcomes" },
    { id: "usecases", label: "Use cases" },
    { id: "faq", label: "FAQ" },
  ],
  sections: [
    {
      type: "challenges",
      deep: true,
      wrapSourcesOnPhone: false,
      extraStat: {
        claim: "the estimated cost of poor software quality to US organizations in 2022.",
        figure: "$2.41T",
        source: {
          name: "CISQ",
          date: "Cost of Poor Software Quality, 2022",
          url: "https://www.it-cisq.org/the-cost-of-poor-quality-software-in-the-us-a-2022-report/",
        },
      },
      eyebrow: "Why it matters",
      title: [{ grad: "Most software projects don’t fail on code." }, " They fail on fit."],
      body: "Scope drifts, systems don’t connect and AI pilots never reach daily use. The cost builds quietly, in lost hours.",
      conclusion: "So we map the work, then add AI where it fits.",
      stats: [
        {
          claim: "average budget overrun on large IT projects, which deliver 56% less value.",
          value: 45,
          label: "45%",
          bar: 45,
          source: "McKinsey & Oxford",
          date: "Large-scale IT projects, 2012",
          url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value",
        },
        {
          claim: "of projects land on time and budget.",
          value: 31,
          label: "31%",
          bar: 31,
          source: "Standish Group",
          date: "CHAOS Report 2020",
          url: "https://www.standishgroup.com/",
        },
      ],
    },
    {
      type: "fitReveal",
      eyebrow: "The service",
      title: [{ grad: "Software and AI shaped" }, { br: true }, "around the way you work"],
      intro:
        "Each phase ends with something to review: a plan, a prototype, then working, AI-ready software.",
      cards: [
        {
          label: "What it is",
          art: "/services/custom/card-1.svg",
          title: "Software built for one business",
          text: "Designed around how your team works, with AI built into the steps that slow it down. You own the code and the models.",
          link: { href: "#contact", label: "Describe your project" },
        },
        {
          label: "Platforms",
          art: "/services/custom/card-2.svg",
          title: "Internal platforms",
          text: "One system that replaces spreadsheets and subscriptions, with AI that drafts reports and flags issues for you.",
        },
        {
          label: "Integrations",
          art: "/services/custom/card-3.svg",
          title: "Integrations & APIs",
          text: "The layer that connects your ERP, CRM and payments to AI models, so data and actions move on their own.",
        },
        {
          label: "Portals",
          art: "/services/custom/card-4.svg",
          title: "Customer portals",
          text: "A place customers log into to order, track and get answers from an AI assistant trained on your own docs.",
        },
      ],
    },
    {
      type: "offers",
      eyebrow: "Offers",
      title: ["Our custom software ", { grad: "offers" }],
      offers: [
        {
          n: "01",
          icon: "M4 5h16v14H4zM4 9h16M9 9v10",
          title: "Discovery & Design",
          tag: "Agree what to build, then click through it",
          duration: "3 to 5 weeks",
          focusLabel: "We’ll cover",
          focus: [
            "Workflows and users",
            "AI use cases",
            "Architecture",
            "UX design",
            "Clickable prototype",
          ],
          deliverables: [
            {
              title: "Product Requirements Document",
              note: "What we’re building, who it’s for and what it must do.",
            },
            { title: "Roadmap and estimate", note: "Milestones, cost and where AI fits." },
            { title: "Clickable prototype", note: "The key screens, ready to try." },
          ],
        },
        {
          n: "02",
          icon: "m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5.5l-3 13",
          title: "Build",
          tag: "Working software every two weeks",
          duration: "3 to 5 months",
          focusLabel: "What gets built",
          focus: ["Web app", "Backend and APIs", "AI features", "Integrations", "Admin panel"],
          deliverables: [
            { title: "Sprint builds", note: "A staging link updated every two weeks." },
            { title: "Sprint demos", note: "A short walkthrough of what changed and why." },
            { title: "Source code", note: "In your repository from day one." },
          ],
        },
        {
          n: "03",
          icon: "M12 3 5 6v5.2c0 4.3 2.9 7.9 7 9.3 4.1-1.4 7-5 7-9.3V6l-7-3ZM8.8 12l2.3 2.3 4.3-4.6",
          title: "QA & Launch",
          tag: "Tested, then released safely",
          duration: "2 to 4 weeks",
          focusLabel: "What we check",
          focus: [
            "Automated tests",
            "AI evals",
            "Security review",
            "User acceptance",
            "Staged release",
          ],
          deliverables: [
            { title: "Test and security reports", note: "What was tested, including AI accuracy." },
            { title: "Live release", note: "Rolled out in stages, with monitoring on." },
            { title: "Handover documentation", note: "Code, environments and how to release." },
          ],
        },
        {
          n: "04",
          icon: "M19.5 12a7.5 7.5 0 0 1-12.8 5.3M4.5 12a7.5 7.5 0 0 1 12.8-5.3M17.3 3.5v3.2h-3.2M6.7 20.5v-3.2h3.2",
          title: "Support & Growth",
          tag: "Keep it fast and secure as you grow",
          duration: "Ongoing",
          focusLabel: "This covers",
          focus: ["Bug fixes", "Monitoring", "Model updates", "Security updates", "New features"],
          deliverables: [
            { title: "Support plan", note: "Agreed response times for issues." },
            { title: "Monthly health report", note: "Uptime, errors, usage and AI spend." },
            { title: "Release roadmap", note: "What to build next, and in what order." },
            {
              title: "Security updates",
              note: "Patches and dependency upgrades, applied on a schedule.",
            },
          ],
        },
      ],
    },
    {
      type: "impact",
      eyebrow: "OUTCOMES",
      title: ["From manual work to", { br: true }, { grad: "software that fits" }],
      outcomes: [
        "Software that fits how your business runs",
        "Manual work handed to AI and automation",
        "Your existing tools connected and in sync",
        "AI answers grounded in your own data",
        "Working software to review every two weeks",
        "A tested, secure release your team can use",
        "Code and data your business fully owns",
      ],
      ctaLines: ["See how quickly you can reach", "these outcomes"],
      ctaLabel: "Book a Free Consultation",
    },
    {
      type: "value",
      title: "Where could custom software help?",
      text: [
        "We look for the places where off-the-shelf tools slow your team down,",
        "and where software and AI built for you pay back.",
      ],
      areas: [
        "Replace spreadsheets and manual steps",
        "Connect the tools you already use",
        "Give customers a self-serve portal",
        "Automate steps with AI",
        "Own your code and data",
      ],
    },
    {
      type: "useCases",
      eyebrow: "Use cases",
      title: ["Custom software, ", { grad: "with AI built in" }],
      cases: [
        {
          icon: "M4.02 18.9L7.98 14.6M10.27 14.31L13.23 16.19M15.56 15.94L19.94 11.56M1.5 20a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0ZM7.5 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0ZM13 17a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0ZM19.5 10.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0ZM15.5 1.2Q16.36 3.64 18.8 4.5Q16.36 5.36 15.5 7.8Q14.64 5.36 12.2 4.5Q14.64 3.64 15.5 1.2ZM5.5 4.2Q6.1 5.9 7.8 6.5Q6.1 7.1 5.5 8.8Q4.9 7.1 3.2 6.5Q4.9 5.9 5.5 4.2Z",
          tag: "Make AI features dependable",
          name: "AI harness engineering",
          text: "Evals, guardrails and source checks keep answers right, and per-call limits show where the money goes.",
        },
        {
          icon: "M9.8 6Q11.02 11.58 16.6 12.8Q11.02 14.02 9.8 19.6Q8.58 14.02 3 12.8Q8.58 11.58 9.8 6ZM17.8 2.5Q18.36 5.04 20.9 5.6Q18.36 6.16 17.8 8.7Q17.24 6.16 14.7 5.6Q17.24 5.04 17.8 2.5ZM18.6 16.4Q18.96 18.04 20.6 18.4Q18.96 18.76 18.6 20.4Q18.24 18.76 16.6 18.4Q18.24 18.04 18.6 16.4Z",
          tag: "Launch your own AI product",
          name: "AI SaaS",
          text: "A workspace per customer, safe access to their own data and usage you can bill. We built Quanta and ClauseLens this way.",
        },
        {
          icon: "M3.5 18.5h10.5v2.5H3.5ZM8.75 18.5 5.4 8.3M7.4 6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0ZM7.4 6h4.1M11.5 4.2h1.8v3.6h-1.8ZM13.3 4.6l2.6-2.1 4.6 2M13.3 7.4l2.6 2.1 4.6-2",
          tag: "Let back-office work run itself",
          name: "AI automation",
          text: "Documents and emails are read and routed into your CRM, ERP or finance tools, with a person approving the steps that matter.",
        },
        {
          icon: "M12 3 3 7.5l9 4.5 9-4.5L12 3ZM3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5",
          tag: "A pipeline that fits how you sell",
          name: "Custom CRM",
          text: "Your stages and fields, AI-drafted follow-ups, and alerts on deals that have gone quiet before they go cold.",
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
          question: "How long does custom software take to build?",
          answer: [
            "Most first releases go live in 4 to 6 months. ",
            { text: "Discovery and design", href: "#fit" },
            " come first, then development in ",
            { text: "two-week sprints", href: "#fit" },
            " with testing alongside. You get a ",
            { text: "firm timeline", href: "#fit" },
            " at the end of discovery.",
          ],
        },
        {
          question: "Should we build custom or buy off-the-shelf?",
          answer: [
            "If an ",
            { text: "off-the-shelf tool", href: "#challenges" },
            " already covers your process, we’ll tell you. Custom makes sense when your workflow is what sets you apart, or when you’re paying for several tools stitched together. Discovery answers this before you commit.",
          ],
        },
        {
          question: "How much will it cost?",
          answer: [
            "It depends on scope, users, integrations and AI usage. Discovery ends with a ",
            { text: "roadmap and estimate in writing", href: "#fit" },
            ", so you know the cost upfront.",
          ],
        },
        {
          question: "Can you work with our existing systems?",
          answer: [
            "Yes. Most projects connect to tools you already run, such as an ",
            { text: "ERP, CRM, accounting or payment system", href: "#process" },
            ". We build those ",
            { text: "integrations with monitoring", href: "#process" },
            ", so your data stays in sync.",
          ],
        },
        {
          question: "Who owns the code?",
          answer: [
            "You do. The code, designs, prompts and infrastructure are ",
            { text: "yours from day one", href: "#fit" },
            ", and we hand over the documentation and access you need to keep building.",
          ],
        },
        {
          question: "What happens after launch?",
          answer: [
            "We offer ongoing support: bug fixes, ",
            { text: "security updates", href: "#process" },
            ", AI accuracy and cost monitoring, and new features planned from how your team uses it.",
          ],
        },
      ],
    },
  ],
};

export default customSoftwareDevelopment;
