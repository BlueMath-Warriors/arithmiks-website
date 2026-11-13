// Copy and data for /services/ai-squad, taken from the design source.
const aiSquad = {
  hero: {
    eyebrow: "AI Squad",
    title: { lead: "Your own AI team,", accent: "for one business goal" },
    intro: [
      "You may know how AI could help your business. The harder part is deciding what to build, how to measure its value and who takes it to a working prototype. An AI Squad brings business and engineering together to deliver it.",
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
  markdown: { href: "/services/ai-squad.md", filename: "ai-squad.md" },
  chapters: [
    { id: "challenges", label: "Why it matters" },
    { id: "about", label: "What it is" },
    { id: "squad", label: "Your squad" },
    { id: "risks", label: "Why act now" },
    { id: "process", label: "How it works" },
    { id: "outcomes", label: "Outcomes" },
    { id: "cases", label: "Real-world cases" },
    { id: "faq", label: "FAQ" },
  ],
  sections: [
    {
      type: "challengesFeature",
      eyebrow: "Why it matters",
      title: [{ grad: "Almost everyone uses AI." }, { br: true }, "Few make it count."],
      headMaxWidth: "760px",
      stat: {
        value: 88,
        claim:
          "of respondents use AI in at least one part of their business, yet the majority are still at the experimentation or pilot stage.",
        source: "McKinsey",
        date: "State of AI, 2025",
        url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2025",
      },
      aside: [
        "The difficulty is no longer adopting AI. It’s knowing how and where it can make a concrete impact.",
        "An AI Squad answers both: one team, one defined opportunity, and the KPIs to show what it’s worth.",
      ],
    },
    {
      type: "fit",
      sectionId: "about",
      tileHeadings: true,
      eyebrow: "What is an AI Squad?",
      title: [
        "Good AI ideas stall.",
        { br: true },
        { grad: "A squad keeps them moving.", above: 1000 },
      ],
      intro:
        "Not a one-off AI project. The squad aligns your commercial goals with technical delivery.",
      lead: {
        icon: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 9a6 6 0 0 1 12 0M16 4.3a3.5 3.5 0 0 1 0 6.4M17.5 14.3A6 6 0 0 1 21 20",
        label: "The AI Squad",
        question: "A small team with a defined purpose, market-fit criteria and system KPIs.",
        text: "An AI Squad brings your organisation’s talent and our engineering together on one AI project, builds the system and reviews the outcomes once it’s live.",
        textMaxWidth: "40ch",
        cta: "Meet the team",
        href: "#squad",
      },
      tiles: [
        {
          n: "01",
          icon: "M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm0 4.6v5m0 3.2h.01",
          title: "When AI projects lose momentum",
          text: "A good idea can still stall: tools applied without priority, experiments on unvalidated assumptions, and no engineering to take a successful test to production. Time goes into projects with no KPIs or measurable ROI.",
        },
        {
          n: "02",
          icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
          title: "Focused and measurable",
          text: "The squad focuses on one defined AI opportunity. Market-fit criteria, system KPIs and ROI goals are set up front, then reviewed once the system is live.",
        },
        {
          n: "03",
          icon: "M12 3.5 4.5 6.5v5.2c0 4.3 3.1 7.5 7.5 8.8 4.4-1.3 7.5-4.5 7.5-8.8V6.5L12 3.5Zm-3.2 8.8 2.3 2.3 4.3-4.6",
          title: "A real path to production",
          text: "As the work grows into a functional business system, senior engineers stay responsible for its architecture, quality and scalability, so a successful experiment becomes a production system that’s ready to scale.",
          wide: true,
        },
      ],
    },
    {
      type: "fitReveal",
      sectionId: "squad",
      evenHead: true,
      largeText: true,
      whiteSurface: true,
      eyebrow: "Meet your AI Squad",
      title: [{ grad: "Architecture, engineering" }, { br: true }, "and design in one team"],
      intro:
        "A single focused team covers architecture, engineering, and design. A system must be self-explanatory in its function. Those responsibilities are all embraced by your AI Squad.",
      cards: [
        {
          art: "/services/ai-squad/card-1.svg",
          title: "AI Architect",
          text: "Converts the business objective into a technical approach. The AI Architect defines system design, data flow, integrations, and guardrails, leading to a defined outcome.",
        },
        {
          art: "/services/ai-squad/card-2.svg",
          title: "AI Native Engineers",
          text: "Develop, validate, and deploy the solution, applying AI at all engineering stages. They integrate it with your current systems and stress-test it in real-world situations.",
        },
        {
          art: "/services/ai-squad/card-3.svg",
          title: "Designer",
          text: "The Designer clarifies workflows, interfaces, and human review points, so that your team understands and can utilize what they've created.",
        },
      ],
    },
    {
      type: "stakes",
      sectionId: "risks",
      tinted: true,
      eyebrow: "Why act now",
      title: ["Standing still ", { grad: "is a costly choice" }],
      lead: ["AI is now a baseline, not an experiment.", "Arithmiks gets you to production first."],
      cells: [
        {
          icon: "M12 3c2 3.5 5 5.5 5 9.5a5 5 0 0 1-10 0c0-2 1-3.4 2-4.5.3 1.6 1.2 2.6 2.4 3C11 8.5 11.3 5.6 12 3Z",
          label: "R&D capital",
          claim: "Capital burns on unguided experiments",
        },
        {
          icon: "M4 17l5-5 4 4 7-8M15 8h5v5",
          label: "Competition",
          claim: "Rivals ship production AI faster",
        },
        {
          icon: "M12 3.5 4.5 6.5v5.2c0 4.3 3.1 7.5 7.5 8.8 4.4-1.3 7.5-4.5 7.5-8.8V6.5L12 3.5ZM12 9v4M12 15.5v.01",
          label: "Security",
          claim: "Unmanaged AI adds risk and tech debt",
        },
        {
          icon: "M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm-3.6 8.8 2.5 2.5 4.8-5",
          label: "The advantage",
          claim: "Production-ready in weeks, not months",
        },
      ],
      closing:
        "We align your business goals to a leading industry solution, with security built in and a production-ready system delivered by senior engineers.",
    },
    {
      type: "offers",
      tightOnDesktopOnly: true,
      sideRowOnNarrow: true,
      stackOnPhone: true,
      railMinHeight: 482,
      eyebrow: "The Arithmiks AI Squad",
      title: ["From objective ", { grad: "to handoff" }],
      offers: [
        {
          n: "01",
          icon: "M9.8 6Q11.02 11.58 16.6 12.8Q11.02 14.02 9.8 19.6Q8.58 14.02 3 12.8Q8.58 11.58 9.8 6ZM17.8 2.5Q18.36 5.04 20.9 5.6Q18.36 6.16 17.8 8.7Q17.24 6.16 14.7 5.6Q17.24 5.04 17.8 2.5ZM18.6 16.4Q18.96 18.04 20.6 18.4Q18.96 18.76 18.6 20.4Q18.24 18.76 16.6 18.4Q18.24 18.04 18.6 16.4Z",
          title: "Prioritise Market Fit",
          tag: "A team built around your goals",
          duration: "1–2 weeks",
          focusLabel: "Core focus",
          focus: ["Market fit", "System KPIs", "Workload vs. business goals", "Success criteria"],
          deliverables: [
            { title: "AI Squad formation", note: "The right people, organised around your goal." },
            { title: "ROI metrics", note: "How the system’s value will be measured." },
            { title: "Timeline", note: "When each part of the work lands." },
          ],
        },
        {
          n: "02",
          icon: "M9 3.5h6M10 3.5v5.2L4.6 18a1.6 1.6 0 0 0 1.4 2.5h12a1.6 1.6 0 0 0 1.4-2.5L14 8.7V3.5M7.2 14h9.6",
          title: "Build a Production-Ready System",
          tag: "Model and build the solution with AI-native skills.",
          duration: "3–6 weeks",
          focusLabel: "Core focus",
          focus: [
            "Solution modelling",
            "AI-native development",
            "Senior-led architecture",
            "Quality and scale",
          ],
          deliverables: [
            { title: "Functional AI system", note: "Built for real users, not a demo." },
            { title: "Scalability", note: "Architecture that grows with demand." },
            { title: "Monitoring", note: "Visibility into how the system performs." },
          ],
        },
        {
          n: "03",
          icon: "m12 3 8.5 4.6L12 12.2 3.5 7.6 12 3Zm-8.5 8.7L12 16.3l8.5-4.6M3.5 15.8 12 20.4l8.5-4.6",
          title: "Hand Off",
          tag: "Compare expectations with delivery, then hand over ownership.",
          duration: "1–2 weeks",
          focusLabel: "Core focus",
          focus: ["Engineering documentation", "KPI review", "Expectations vs. delivery"],
          deliverables: [
            {
              title: "Expectation-to-results analysis",
              note: "System KPIs and goals compared with what was delivered.",
            },
            {
              title: "System handoff documentation",
              note: "Everything your engineers need to own it.",
            },
          ],
        },
      ],
    },
    {
      type: "impact",
      sectionId: "outcomes",
      compactOnPhone: false,
      ctaSpan: 3,
      padBottom: true,
      eyebrow: "Outcomes & business impact",
      title: ["What changes", { br: true }, { grad: "for your business" }],
      outcomes: [
        { label: "Focus", title: "AI investment focused on business goals" },
        { label: "Progress", title: "Measurable progress against KPIs and ROI" },
        { label: "Delivery", title: "Production-ready systems for real users" },
        { label: "Ownership", title: "Senior engineers own quality and scale" },
        { label: "Handoff", title: "A clear handoff with docs and KPI analysis" },
      ],
      ctaLines: ["Ready to move an AI opportunity from planning to production?"],
      ctaLabel: "Book a Consultation",
    },
    {
      type: "proofGrid",
      sectionId: "cases",
      eyebrow: "Real-world cases",
      title: [{ grad: "Proven by industry leaders." }, { br: true }, "Built for your team."],
      intro:
        "These examples show how top companies have used AI in their workflows, and how an Arithmiks AI Squad can build similar solutions for your team.",
      cta: { label: "Book a Consultation", href: "#contact" },
      approachLabel: "Arithmiks blueprint",
      rows: [
        {
          icon: "M12 3.5 4.5 6.5v5.2c0 4.3 3.1 7.5 7.5 8.8 4.4-1.3 7.5-4.5 7.5-8.8V6.5L12 3.5Zm-3.2 8.8 2.3 2.3 4.3-4.6",
          tag: "Insurance",
          name: "Insurance claims processing",
          claim: [
            "Simple claims stall during catastrophe spikes. ",
            {
              label: "Allianz",
              href: "https://www.allianz.com/en/mediacenter/news/articles/251103-when-the-storm-clears-so-should-the-claim-queue.html",
            },
            " built AI agents that check coverage, weather, fraud and payouts, with human approval.",
          ],
          approach: [
            "Approval gates on policy data",
            "A dashboard showing the reasoning behind every payout",
          ],
        },
        {
          icon: "M4 5.5h16V16H10l-4 3.5V16H4zM8 9.5h8M8 12.5h5",
          tag: "Financial services",
          name: "Internal knowledge assistant",
          claim: [
            { label: "Morgan Stanley", href: "https://openai.com/index/morgan-stanley/" },
            " backed its AI assistant with specific evaluation matrices and daily quality checks.",
          ],
          approach: [
            "Permissioned data pipelines",
            "Automated tests that catch errors",
            "Clean interfaces with precise sources",
          ],
        },
        {
          icon: "M4 19V5M4 19h16M7.5 15l4-4 3 3 5-6",
          tag: "Retail",
          name: "Demand forecasting",
          claim: [
            "Legacy seasonal models couldn’t keep up with demand shifts. ",
            {
              label: "Walmart",
              href: "https://medium.com/walmartglobaltech/building-a-machine-learning-based-demand-forecasting-platform-d8c0841c1f07",
            },
            " piloted machine-learning forecasting in some departments, then expanded it company-wide.",
          ],
          approach: [
            "Focus and scope first",
            "Models backtested on historical sales",
            "Scalable data pipelines",
            "An interactive review view for planners",
          ],
        },
        {
          icon: "M12 4v16M7 20h10M5 8h14M5 8l-2.5 6a2.5 2.5 0 0 0 5 0L5 8Zm14 0-2.5 6a2.5 2.5 0 0 0 5 0L19 8Z",
          tag: "Legal",
          name: "Legal research & drafting",
          claim: [
            "Legal teams need AI output they can verify. ",
            {
              label: "CoCounsel",
              href: "https://legal.thomsonreuters.com/en/products/cocounsel-legal",
            },
            " draws on trusted legal databases and links source citations inside document editors.",
          ],
          approach: [
            "Approved sources and access controls",
            "Drafting inside familiar apps like MS Word",
            "Every claim linked back to its source",
          ],
        },
        {
          icon: "M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z",
          tag: "Automotive",
          name: "Inbound call capture",
          claim: [
            "Showroom teams were missing incoming call leads. ",
            { label: "Autotorino", href: "https://zapier.com/customer-stories/autotorino" },
            "’s AI captures calls, classifies intent and fills in CRM lead records.",
          ],
          approach: [
            "Call-handling rules mapped",
            "Speech-to-text connected to your CRM",
            "Instant lead alerts for your sales team",
          ],
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
          question: "When should a business consider an AI Squad?",
          answer: [
            "When your organisation is ready to commit to an AI initiative but needs support organising the work, defining measurable outcomes, developing the system or getting it ready for production.",
          ],
        },
        {
          question: "Can the AI Squad take an initiative beyond experimentation?",
          answer: [
            "Yes. The engagement includes production-level architecture and development, monitoring, KPI analysis and engineering handoff.",
          ],
        },
        {
          question: "How is success measured?",
          answer: [
            "By measurable ROI. The team works to your business objectives and system KPIs, and at handoff, expectations are compared with what was delivered and how the system performs.",
          ],
        },
        {
          question: "How long does it take to move an AI project into production?",
          answer: [
            "An AI Squad engagement takes 5 to 10 weeks: 1–2 weeks to prioritise, 3–6 weeks to build, and 1–2 weeks for handoff and training.",
          ],
        },
        {
          question: "Who owns the AI system after handoff?",
          answer: [
            "Your team does. You get the full source code repository, technical documentation, and spend and token-usage tracking, so your internal team can maintain it.",
          ],
        },
      ],
    },
  ],
};

export default aiSquad;
