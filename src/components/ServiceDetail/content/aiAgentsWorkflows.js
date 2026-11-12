// Copy and data for /services/ai-agents-workflows, taken from the design source.
// The route keeps its original slug; the Markdown rendition is named after the
// design, so its href is set here rather than derived from the slug.
const aiAgentsWorkflows = {
  hero: {
    eyebrow: "AI Agents, Workflows & Automations",
    title: { lead: "Automate the work", accent: "that slows your team down" },
    intro: [
      "Repetitive work eats hours: moving data between tools, sending follow-ups, updating records. Arithmiks builds AI agents and automated workflows around your business process, with n8n, Zapier or custom automation.",
    ],
    primaryCta: { label: "Book a Consultation", href: "#contact", glyph: "→" },
    secondaryCta: { label: "See how it works", href: "#process", glyph: "↓" },
    art: "ai-discovery",
    introMaxWidth: "660px",
    stackCtasOnMobile: true,
    ctaStackWidth: 600,
    cornerArtOnPhone: true,
    fillMeshOnPhone: false,
  },
  markdown: {
    href: "/services/ai-agents-workflows-automations.md",
    filename: "ai-agents-workflows-automations.md",
  },
  chapters: [
    { id: "challenges", label: "Why it matters" },
    { id: "cost", label: "Cost of inaction" },
    { id: "about", label: "What it covers" },
    { id: "process", label: "How we build" },
    { id: "outcomes", label: "Outcomes" },
    { id: "deliver", label: "What you get" },
    { id: "usecases", label: "Use cases" },
    { id: "faq", label: "FAQ" },
  ],
  sections: [
    {
      type: "challengesFeature",
      eyebrow: "Why it matters",
      title: [
        { grad: "Growth adds manual work." },
        { br: true },
        { keep: "Redesigned workflows remove it.", above: 760 },
      ],
      headMaxWidth: "1040px",
      stat: {
        value: 21,
        claim:
          "of companies implementing generative AI have completely overhauled their processes. Workflow redesign is strongly associated with business impact.",
        source: "McKinsey",
        date: "Research, 2025",
        url: "https://www.mckinsey.com/industries/industrials/our-insights/the-operating-model-advantage-why-ai-winners-are-rewiring-their-organizations",
      },
      aside: [
        "The question isn’t just whether AI can be added to a process. It’s whether parts of everyday teamwork can be done more efficiently.",
        "As a business grows, more customers, requests, data and processes mean more handoffs and more time spent on daily work.",
      ],
    },
    {
      type: "stakes",
      eyebrow: "The cost of inaction",
      title: ["Legacy processes ", { grad: "drag on operations" }],
      lead: ["Your team loses time to them every day.", "Arithmiks automates the routine."],
      leadMaxWidth: "400px",
      strongLabels: true,
      cells: [
        {
          icon: "M4 17l5-5 4 4 7-8M15 8h5v5",
          label: "Operational debt",
          claim: "More transactions, more manual data entry",
        },
        {
          icon: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
          label: "Speed",
          claim: "Competitors automate and move faster",
        },
        {
          icon: "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm4.6-1.9L20 20M10.5 8v3M10.5 13.2v.01",
          label: "Manual handoffs",
          claim: "Missed leads and incorrect entries",
        },
        {
          icon: "M3 7h18v10H3zM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6 10v.01M18 14v.01",
          label: "The result",
          claim: "Hidden costs that cut into margins",
        },
      ],
      closing:
        "As transactions grow, manual data entry grows with them and margins shrink. Meanwhile, competitors use automation to speed up loans, sales and customer inquiries.",
    },
    {
      type: "fitReveal",
      sectionId: "about",
      largeText: true,
      eyebrow: "What this service covers",
      title: [{ grad: "Agents, workflows" }, { br: true }, "and custom automation"],
      intro: "Three ways to take routine work off your team, chosen to fit your process.",
      cards: [
        {
          art: "/services/ai-agents/card-1.svg",
          title: "AI Agents",
          text: "An automatic system that carries out business process activities using information, tools and instructions.",
        },
        {
          art: "/services/ai-agents/card-2.svg",
          title: "Workflow Automation",
          text: "Successive steps are mapped so information and tasks move from one step to the next without manual action.",
        },
        {
          art: "/services/ai-agents/card-3.svg",
          title: "Custom Automation",
          text: "Customised workflows for the cases where standard workflow tools aren’t enough.",
        },
      ],
    },
    {
      type: "offers",
      tightOnDesktopOnly: true,
      sideRowOnNarrow: true,
      stackOnPhone: true,
      railMinHeight: 482,
      eyebrow: "How Arithmiks builds AI automation",
      title: ["From first workflow ", { grad: "to ongoing operation" }],
      offers: [
        {
          n: "01",
          icon: "M9.8 6Q11.02 11.58 16.6 12.8Q11.02 14.02 9.8 19.6Q8.58 14.02 3 12.8Q8.58 11.58 9.8 6ZM17.8 2.5Q18.36 5.04 20.9 5.6Q18.36 6.16 17.8 8.7Q17.24 6.16 14.7 5.6Q17.24 5.04 17.8 2.5ZM18.6 16.4Q18.96 18.04 20.6 18.4Q18.96 18.76 18.6 20.4Q18.24 18.76 16.6 18.4Q18.24 18.04 18.6 16.4Z",
          title: "Discover & Design",
          tag: "Map what to automate first",
          duration: "1–2 weeks",
          focusLabel: "Core focus",
          focus: [
            "Review existing tools",
            "Identify automatable steps",
            "Architecture plan",
            "Security rules",
            "Approval criteria",
          ],
          deliverables: [
            { title: "Tools evaluation", note: "A review of your existing tools." },
            { title: "Policy approval", note: "Security rules and approval criteria, agreed." },
          ],
        },
        {
          n: "02",
          icon: "M9 3.5h6M10 3.5v5.2L4.6 18a1.6 1.6 0 0 0 1.4 2.5h12a1.6 1.6 0 0 0 1.4-2.5L14 8.7V3.5M7.2 14h9.6",
          title: "Build the Workflow",
          tag: "Pilot first, then production",
          duration: "Pilot agent 3–4 weeks · Workflow 6–10 weeks",
          focusLabel: "Core focus",
          focus: ["Working pilot agent", "Production workflow", "Built-in human approval"],
          deliverables: [
            {
              title: "Agentic Hub",
              note: "The foundation that further agents and workflows are added to.",
            },
            { title: "Pilot agent", note: "A working agent with human approval breaks built in." },
          ],
        },
        {
          n: "03",
          icon: "m12 3 8.5 4.6L12 12.2 3.5 7.6 12 3Zm-8.5 8.7L12 16.3l8.5-4.6M3.5 15.8 12 20.4l8.5-4.6",
          title: "Expand",
          tag: "Add agents for more use cases",
          duration: "10 weeks onwards",
          focusLabel: "Core focus",
          focus: ["Additional agents", "More workflows", "Other suitable use cases"],
          deliverables: [
            {
              title: "Workflow mapping",
              note: "The next processes suited to automation, mapped.",
            },
            { title: "Agent entry", note: "New agents added to the Agentic Hub." },
          ],
        },
        {
          n: "04",
          icon: "M3 12h4l2.5-6 5 12 2.5-6h4",
          title: "Operate & Optimize",
          tag: "Keep it accurate and useful",
          duration: "1–2 weeks monthly",
          focusLabel: "Core focus",
          focus: ["Model performance reviews", "Prompt rule updates", "Data quality checks"],
          deliverables: [
            { title: "Monthly reports", note: "How the models and workflows performed." },
            { title: "Recommendations", note: "What to update or add next." },
          ],
        },
      ],
    },
    {
      type: "impact",
      sectionId: "outcomes",
      compactOnPhone: false,
      ctaSpan: 2,
      eyebrow: "Outcomes & business impact",
      title: ["Routine work,", { br: true }, { grad: "off your team’s plate" }],
      outcomes: [
        { label: "Effort", title: "Less manual, repetitive work for your team" },
        { label: "Flow", title: "Fewer process delays and follow-ups" },
        { label: "Consistency", title: "Routine processes that stay on track" },
        { label: "People", title: "More team time for work that needs judgment" },
        { label: "Scale", title: "Growing workloads without more manual effort" },
      ],
      extraCell: {
        label: "Technologies",
        chips: [
          { label: "n8n", href: "https://n8n.io/" },
          { label: "Zapier", href: "https://zapier.com/" },
          { label: "Custom Automation" },
        ],
      },
      ctaLines: ["Ready to automate the work that slows your team down?"],
      ctaLabel: "Book a Consultation",
    },
    {
      type: "deliver",
      title: "What you get",
      text: "Depending on the scope of the project, the engagement can include",
      items: [
        "AI and workflow assessment",
        "Architecture and blueprint",
        "Pilot agent or workflow",
        "Acceptance criteria",
        "Monitoring and approvals",
        "Cost and usage tracking",
        "Docs and operating guidance",
        "Adoption support",
      ],
    },
    {
      type: "useCases",
      tabletStack: true,
      eyebrow: "Real-world use cases",
      title: ["Regular processes, ", { grad: "handled automatically" }],
      cases: [
        {
          icon: "M4 19V5M4 19h16M7.5 15l4-4 3 3 5-6",
          tag: "Sales & Lead Operations",
          name: "Instant lead response",
          text: "Adds context from CRM history, drafts a response that fits it, and notifies salespeople within thirty seconds of a new lead.",
        },
        {
          icon: "M4 9.5 12 4l8 5.5M5.5 10v8M10 10v8M14 10v8M18.5 10v8M4 19.5h16",
          tag: "Finance & Lending",
          name: "Loan review and invoicing",
          text: "Checks bank statements, tax returns and IDs against eligibility rules, cutting review time by up to 62%. Matches PDF invoices to purchase orders and syncs them to Xero or QuickBooks.",
        },
        {
          icon: "M4 5.5h16V16H10l-4 3.5V16H4zM8 9.5h8M8 12.5h5",
          tag: "Customer Support",
          name: "Knowledge-base answers",
          text: "Handles support issues and answers questions from the company knowledge base, routing complicated problems to live representatives.",
        },
        {
          icon: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 9a6 6 0 0 1 12 0M18 8v6M15 11h6",
          tag: "HR & Employee Onboarding",
          name: "Automated onboarding",
          text: "Sends offer letters, starts the IT accounts process, and arranges training and onboarding checklists for new hires.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQs",
      title: [{ grad: "Questions we hear" }, { br: true }, "before week 1"],
      note: "Something we haven't covered? Ask us on the call.",
      items: [
        {
          question: "What are AI agents?",
          answer: [
            "AI agents are software systems built to perform tasks, using AI to process information.",
          ],
        },
        {
          question: "What is the difference between AI agents and conventional automation?",
          answer: [
            "Conventional automation follows a fixed set of rules and processes. Depending on how they are designed, AI agents can also take actions that need AI-based interpretation and decision-making.",
          ],
        },
        {
          question: "Can you automate an existing business process?",
          answer: [
            "Yes. Arithmiks can evaluate the workflow for automation opportunities, create a solution, test it and integrate it into the workflow.",
          ],
        },
        {
          question: "Do you use n8n and Zapier?",
          answer: [
            "Yes. Arithmiks works with n8n and Zapier, as well as custom automation where required.",
          ],
        },
        {
          question: "How do you handle security and sensitive corporate data?",
          answer: [
            "All workflows are designed with built-in privacy mechanisms. Tasks can be automated inside self-hosted instances, all handling of information follows enterprise security procedures, and approval checks keep people in control of critical actions.",
          ],
        },
      ],
    },
  ],
};

export default aiAgentsWorkflows;
