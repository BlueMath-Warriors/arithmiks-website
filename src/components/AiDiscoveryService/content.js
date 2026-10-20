// Copy and data for /services/ai-discovery-strategy-roadmap, kept apart from
// the markup so the wording can change without touching layout code.

export const CHAPTERS = [
  { id: "challenges", label: "Why now" },
  { id: "about", label: "What it is" },
  { id: "process", label: "Process" },
  { id: "outcomes", label: "Outcomes" },
  { id: "work", label: "Selected work" },
  { id: "faq", label: "FAQ" },
];

// Figures as published, cited and linked to the primary source.
export const STATS = [
  {
    value: 88,
    claim: "of organizations now use AI in at least one business function.",
    source: "McKinsey",
    date: "State of AI 2025",
    url: "https://www.mckinsey.com/featured-insights/charts/ai-at-work-but-not-at-scale",
  },
  {
    value: 7,
    claim: "have managed to scale AI across their organization.",
    source: "McKinsey",
    date: "State of AI 2025",
    url: "https://www.mckinsey.com/featured-insights/charts/ai-at-work-but-not-at-scale",
  },
  {
    value: 72,
    claim:
      "of leading organizations identify managing data as one of the top challenges preventing them from scaling AI use cases.",
    source: "McKinsey",
    date: "The data dividend",
    url: "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-data-dividend-fueling-generative-ai",
  },
];

export const DIAGRAM_INPUTS = [
  "Business challenges",
  "Inefficient workflows",
  "Data problems",
  "An AI idea",
];

export const DIAGRAM_STAGES = [
  {
    title: "Discovery Call",
    duration: "1–2 days",
    bar: "linear-gradient(90deg,#5C8CFF,#1355FF)",
    rows: [
      {
        title: "AI Possibilities",
        note: "Where AI could potentially fit into your business.",
        icon: "M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm-2.6 6.2a2.7 2.7 0 0 1 5.2.9c0 1.8-2.6 2.2-2.6 3.9m0 3h.01",
      },
      {
        title: "AI Opportunities",
        note: "The areas with the strongest potential for improvement.",
        icon: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
      },
      {
        title: "Next Steps",
        note: "A practical direction for what to explore next.",
        icon: "M5 12h14m-5-5 5 5-5 5",
      },
    ],
  },
  {
    title: "AI Roadmap",
    duration: "1–2 weeks",
    bar: "linear-gradient(90deg,#1355FF,#A96FC8)",
    rows: [
      {
        title: "Feasibility",
        note: "Can AI realistically solve the problem?",
        icon: "M9 3h6l1 4 3.5 2-1 3.5 1 3.5L16 18l-1 3H9l-1-3-3.5-2 1-3.5-1-3.5L8 7l1-4Z",
      },
      {
        title: "Data & Integrations",
        note: "What data it needs and how it connects to your systems.",
        icon: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
      },
      {
        title: "Governance",
        note: "How the solution is managed and used.",
        icon: "M12 3 4 6.5v5c0 4.6 3.4 8 8 9.5 4.6-1.5 8-4.9 8-9.5v-5L12 3Z",
      },
      {
        title: "Solution Design",
        note: "What the AI solution looks like in practice.",
        icon: "M4 5h16v11H4Zm4 15h8M12 16v4",
      },
      {
        title: "Path to MVP",
        note: "Estimated time and cost to implementation.",
        icon: "M4 19h16M6 15l4-5 4 3 4-6",
      },
    ],
  },
  {
    title: "Build",
    duration: "5–6 weeks",
    bar: "linear-gradient(90deg,#A96FC8,#EC4A9E)",
    rows: [
      {
        title: "Working Prototype",
        note: "Tested against your real business data.",
        icon: "M8 4h8v4l4 9a2 2 0 0 1-1.8 3H5.8A2 2 0 0 1 4 17l4-9V4Zm0 0h8",
      },
      {
        title: "Live AI MVP",
        note: "Built around the agreed roadmap.",
        icon: "M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-9v2m0 14v2m9-9h-2M5 12H3",
      },
      {
        title: "Adoption Plan",
        note: "From testing toward everyday use.",
        icon: "M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-9 10a5 5 0 0 1 10 0",
      },
    ],
  },
];

export const OPPORTUNITIES = [
  {
    name: "Reducing repetitive manual work",
    icon: "M4 12a8 8 0 0 1 13.7-5.7M20 12a8 8 0 0 1-13.7 5.7M17.7 3v3.3h-3.3M6.3 21v-3.3h3.3",
  },
  { name: "Improving operational efficiency", icon: "M4 15a8 8 0 0 1 16 0M12 15l4.5-4.5M6 19h12" },
  { name: "Supporting faster, better decision-making", icon: "M6 3v7a4 4 0 0 0 4 4h9m-3-3 3 3-3 3" },
  {
    name: "Making better use of business data",
    icon: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  },
  { name: "Improving existing workflows", icon: "M4 6h16M4 12h16M4 18h10" },
  { name: "Automating parts of complex processes", icon: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z" },
];

// One icon per stage for the pinned panel: discover (three sparkles), plan
// (route map), build (stacked layers).
export const PHASES = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "1–2 Days",
    tagline: "Understand Your Business Before We Recommend AI",
    description:
      "Every business has different workflows, systems, challenges, and priorities. We begin by understanding yours. During the discovery process, we look at your business operations and identify areas where AI could potentially improve the way your team works.",
    focusLabel: "We'll explore",
    focus: [
      { title: "Business operations" },
      { title: "Repetitive workflows" },
      { title: "Process gaps" },
      { title: "AI opportunities" },
      { title: "Next steps" },
    ],
    deliverables: [
      { title: "Discovery Document", note: "A focused 2–3 page summary." },
      { title: "AI Possibilities", note: "Where AI could potentially fit into your business." },
      { title: "AI Opportunities", note: "The areas that may have the strongest potential for improvement." },
      { title: "Next Steps", note: "A practical direction for what to explore next." },
    ],
    icon: "M9.8 6Q11.02 11.58 16.6 12.8Q11.02 14.02 9.8 19.6Q8.58 14.02 3 12.8Q8.58 11.58 9.8 6ZM17.8 2.5Q18.36 5.04 20.9 5.6Q18.36 6.16 17.8 8.7Q17.24 6.16 14.7 5.6Q17.24 5.04 17.8 2.5ZM18.6 16.4Q18.96 18.04 20.6 18.4Q18.96 18.76 18.6 20.4Q18.24 18.76 16.6 18.4Q18.24 18.04 18.6 16.4Z",
  },
  {
    number: "02",
    title: "AI Roadmap",
    duration: "1–2 Weeks",
    tagline: "Turn the Right Opportunity Into a Clear Plan",
    description:
      "Once we've identified promising AI opportunities, we take the next step, understanding what it would actually take to build them. We assess the selected use case across the areas that can determine whether an AI initiative succeeds.",
    focusLabel: "We assess",
    focus: [
      { title: "Feasibility", note: "Can the proposed AI solution realistically solve the problem?" },
      {
        title: "Data & Integrations",
        note: "What data does the solution need, and how will it connect with your existing systems?",
      },
      { title: "Governance", note: "What should be considered around how the solution is managed and used?" },
      { title: "Solution Design", note: "What should the AI solution look like in practice?" },
      { title: "Path to MVP", note: "What does it take to move from the concept toward a production MVP?" },
    ],
    deliverables: [
      { title: "AI Roadmap", note: "A clear path from the selected opportunity toward implementation." },
      { title: "Solution", note: "A proposed approach for solving the identified business problem." },
      { title: "Delivery Plan", note: "Estimated time and cost for moving toward implementation." },
    ],
    icon: "M9 18.5 3.5 21V6l5.5-2.5 6 2.5L20.5 3.5v15L15 21l-6-2.5Zm0-15v15m6-12.5V21",
  },
  {
    number: "03",
    title: "Build",
    duration: "5–6 Weeks",
    tagline: "Validate the Opportunity With Real Data",
    description:
      "A roadmap gives you direction. A working prototype gives you evidence. Once the opportunity and roadmap are validated, we move into building. We test the selected use case against real business data and develop a working prototype that your team can use and evaluate. From there, we build an AI MVP based on the roadmap, with human-in-the-loop review and adoption support where required.",
    focusLabel: "Our in-house AI MVP approach includes",
    focus: [
      { title: "Multi-provider AI" },
      { title: "Logging" },
      { title: "Cost analysis" },
      { title: "Human-in-the-loop" },
      { title: "Adoption support" },
    ],
    deliverables: [
      { title: "Working Prototype", note: "A practical version of the selected use case to test and validate." },
      { title: "Live AI MVP", note: "A working MVP built around the agreed roadmap." },
      { title: "Adoption Plan", note: "A plan to help your team move from testing toward practical use." },
    ],
    icon: "m12 3 8.5 4.6L12 12.2 3.5 7.6 12 3Zm-8.5 8.7L12 16.3l8.5-4.6M3.5 15.8 12 20.4l8.5-4.6",
  },
];

export const OUTCOMES = [
  "A clear view of where AI can create business value",
  "Identified opportunities worth pursuing",
  "A feasibility assessment of the selected use case",
  "Defined data, integration, and governance requirements",
  "A proposed solution and implementation path",
  "Estimated time and cost for moving forward",
  "A clear path toward an AI MVP",
];

export const VALUE_AREAS = [
  "Automate repetitive work",
  "Improve operational efficiency",
  "Make better use of business data",
  "Improve workflows",
  "Support better decision-making",
];

// Answers are split into plain text and in-page links, so a phrase like
// "AI Roadmap stage" jumps to the section that explains it.
export const FAQS = [
  {
    question: "What is AI Discovery Strategy & Roadmap?",
    answer: [
      "It is a structured process for identifying potential ",
      { text: "AI opportunities", href: "#about" },
      " in your business, evaluating their ",
      { text: "feasibility", href: "#about" },
      ", and creating a practical ",
      { text: "roadmap for implementation", href: "#outcomes" },
      ".",
    ],
  },
  {
    question: "Do I need to already have an AI use case?",
    answer: [
      "No. You can come with a business challenge, an operational problem, or an idea you're considering. The ",
      { text: "discovery process", href: "#process" },
      " helps identify ",
      { text: "where AI may be useful", href: "#challenges" },
      ".",
    ],
  },
  {
    question: "How long does the process take?",
    answer: [
      "The ",
      { text: "Discovery stage", href: "#process" },
      " takes 1–2 days, the ",
      { text: "AI Roadmap", href: "#process" },
      " takes 1–2 weeks, and the ",
      { text: "Build stage", href: "#process" },
      " takes approximately 5–6 weeks.",
    ],
  },
  {
    question: "Will you assess our existing data?",
    answer: [
      "Yes. Data requirements and integrations are considered during the ",
      { text: "AI Roadmap stage", href: "#process" },
      ", and the selected use case is validated against ",
      { text: "real data", href: "#process" },
      " during the ",
      { text: "Build stage", href: "#process" },
      ".",
    ],
  },
  {
    question: "Will we know the estimated cost before development?",
    answer: [
      "Yes. The ",
      { text: "AI Roadmap", href: "#process" },
      " includes a ",
      { text: "delivery plan", href: "#process" },
      " with an estimated cost and timeline for implementation.",
    ],
  },
  {
    question: "What happens after the AI Roadmap?",
    answer: [
      "If the opportunity is validated and you're ready to move forward, the ",
      { text: "Build stage", href: "#process" },
      " can take the selected use case into prototyping and ",
      { text: "AI MVP development", href: "#process" },
      ".",
    ],
  },
  {
    question: "Do we need to use a specific AI provider?",
    answer: [
      "Not necessarily. The Build offering includes an in-house AI MVP template designed to work with multiple AI providers, giving you greater flexibility and visibility into AI costs.",
    ],
  },
];
