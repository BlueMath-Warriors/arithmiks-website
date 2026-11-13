// Copy and data for /services/ai-mvp-development, taken from the design source.
const aiMvpDevelopment = {
  hero: {
    eyebrow: "AI MVP Development",
    title: { lead: "Your AI idea, tested in", accent: "2 weeks and live in 5 to 6" },
    intro: [
      "AI MVP development is a fast and focused process for rapidly prototyping a streamlined AI product. It validates technical feasibility, user acceptance, and eventual business value testing before investing in development.",
    ],
    primaryCta: { label: "Book a Free AI Consultation", href: "#contact", glyph: "→" },
    secondaryCta: { label: "See the 4 phases", href: "#process", glyph: "↓" },
    art: "ai-discovery",
    stackCtasOnMobile: true,
    ctaStackWidth: 600,
    cornerArtOnPhone: true,
    fillMeshOnPhone: false,
  },
  markdown: { href: "/services/ai-mvp-development.md", filename: "ai-mvp-development.md" },
  chapters: [
    { id: "challenges", label: "Why it matters" },
    { id: "about", label: "What it is" },
    { id: "cost", label: "Why test first" },
    { id: "process", label: "Offer" },
    { id: "outcomes", label: "Outcomes" },
    { id: "usecases", label: "Use cases" },
    { id: "faq", label: "FAQ" },
  ],
  sections: [
    {
      type: "challengesCells",
      eyebrow: "Why it matters",
      title: [{ grad: "Most companies use AI." }, { br: true }, "Few see it in earnings."],
      stackOnPhone: true,
      claimMaxWidth: "360px",
      openLastCell: true,
      stats: [
        {
          value: 39,
          claim: "of organizations report that AI is affecting their company’s earnings (EBIT).",
          source: "McKinsey",
          date: "State of AI, 2025",
          url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2025",
        },
        {
          value: 46,
          claim:
            "of AI projects are scrapped between proof of concept and rollout, by companies’ own estimate.",
          source: "S&P Global",
          date: "Voice of the Enterprise 2025",
          url: "https://www.spglobal.com/market-intelligence/en/news-insights/research/ai-experiences-rapid-adoption-but-with-mixed-outcomes-highlights-from-vote-ai-machine-learning",
        },
        {
          value: 63,
          claim: "of organizations lack the data practices AI needs, or aren’t sure they have them.",
          source: "Gartner",
          date: "AI-ready data survey, 2025",
          url: "https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk",
        },
      ],
      closing: [
        "How is there such a significant mismatch between adoption and economic impact? Most businesses skip the MVP phase. They spend large amounts of money on complex models they don't thoroughly test with data or against end-user needs.",
        "MVP is the only validated method to quickly test your data, manage compute costs, and transition from pilot to production-ready product.",
      ],
    },
    {
      type: "fitReveal",
      sectionId: "about",
      evenHead: true,
      eyebrow: "What it is",
      title: [{ grad: "Your AI vision," }, { br: true }, "working on your data"],
      intro:
        "AI MVP Development service can transform your AI vision into a functional and interactive model based on your business data. An important part of this service is:",
      cards: [
        {
          label: "01",
          art: "/services/ai-mvp/card-1.svg",
          title: "Focused Problem Solving",
          text: "Identifying the AI problem that needs to be solved, rather than conducting all the theoretical research.",
        },
        {
          label: "02",
          art: "/services/ai-mvp/card-2.svg",
          title: "Data-Driven Prototyping",
          text: "Training the model with business data and the processes of data engineering for a particular problem.",
        },
        {
          label: "03",
          art: "/services/ai-mvp/card-3.svg",
          title: "Real-World Testing",
          text: "Conduct a pilot test with a test user interface using real and direct data.",
        },
        {
          label: "04",
          art: "/services/ai-mvp/card-4.svg",
          title: "Agile Pivoting",
          text: "Provide exact figures to influence investment decisions, avoid unnecessary overheads, and ensure a safe pivot strategy before incurring additional expenses.",
        },
      ],
    },
    {
      type: "stakes",
      eyebrow: "Why test first",
      title: ["An untested idea ", { grad: "is a costly bet" }],
      lead: ["Skip the pilot and the cost adds up.", "Arithmiks tests it first."],
      cells: [
        {
          icon: "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm4.6-1.9L20 20M10.5 8v3M10.5 13.2v.01",
          label: "Day 1",
          claim: "You start without research",
        },
        {
          icon: "M4 17l5-5 4 4 7-8M15 8h5v5",
          label: "Launch",
          claim: "The product fails to take off",
        },
        {
          icon: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3m-8-9c0 1.7 3.6 3 8 3M17 15l4 4m0-4-4 4",
          label: "After launch",
          claim: "Data limits can’t be fixed",
        },
        {
          icon: "M3 7h18v10H3zM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6 10v.01M18 14v.01",
          label: "The result",
          claim: "The investment is wasted",
        },
      ],
      closing:
        "We help you find and fix low-cost issues early, so you seize the market opportunity without risking your investment.",
    },
    {
      type: "offers",
      tightOnDesktopOnly: true,
      sideRowOnNarrow: true,
      stackOnPhone: true,
      railMinHeight: 482,
      eyebrow: "Offer",
      title: ["Our AI MVP ", { grad: "offers" }],
      offers: [
        {
          n: "01",
          icon: "M9.8 6Q11.02 11.58 16.6 12.8Q11.02 14.02 9.8 19.6Q8.58 14.02 3 12.8Q8.58 11.58 9.8 6ZM17.8 2.5Q18.36 5.04 20.9 5.6Q18.36 6.16 17.8 8.7Q17.24 6.16 14.7 5.6Q17.24 5.04 17.8 2.5ZM18.6 16.4Q18.96 18.04 20.6 18.4Q18.96 18.76 18.6 20.4Q18.24 18.76 16.6 18.4Q18.24 18.04 18.6 16.4Z",
          title: "Discovery",
          tag: "Find the Problem Worth Solving",
          duration: "1 week",
          focusLabel: "Core focus",
          focus: [
            "Identify issues",
            "Prioritize opportunities",
            "AI solution options",
            "Compliance testing",
          ],
          deliverables: [
            {
              title: "AI possibilities and compliance",
              note: "2–3 pages on what AI can do and which rules apply.",
            },
            {
              title: "Product requirements document",
              note: "What we’re building and what it must do.",
            },
            { title: "Next steps", note: "Our recommendation for what happens next." },
          ],
        },
        {
          n: "02",
          icon: "M9 3.5h6M10 3.5v5.2L4.6 18a1.6 1.6 0 0 0 1.4 2.5h12a1.6 1.6 0 0 0 1.4-2.5L14 8.7V3.5M7.2 14h9.6",
          title: "AI Prototyping",
          tag: "See the AI Do the Hard Part",
          duration: "1 week",
          focusLabel: "Development",
          focus: ["Core AI process", "Simple interface", "Mechanism check", "Validation"],
          deliverables: [
            {
              title: "Functional proof of concept",
              note: "The core AI working, with an interface you can try.",
            },
            { title: "Idea validation", note: "A clear answer on whether the AI does the job." },
            {
              title: "Architecture",
              note: "How your data, the AI and the screens fit together.",
            },
          ],
        },
        {
          n: "03",
          icon: "m12 3 8.5 4.6L12 12.2 3.5 7.6 12 3Zm-8.5 8.7L12 16.3l8.5-4.6M3.5 15.8 12 20.4l8.5-4.6",
          title: "Build the MVP",
          tag: "Build It Around What’s Proven",
          duration: "3 to 4 weeks",
          focusLabel: "Process",
          focus: ["PoC feedback", "Secure authorization", "Code documentation"],
          deliverables: [
            { title: "Live AI MVP", note: "Your MVP, live and ready for real users." },
            {
              title: "Source code and docs",
              note: "Yours from day one, documented for your team.",
            },
            { title: "Adoption plan", note: "How your team moves from testing to daily use." },
            { title: "Next steps", note: "What to build next, and in what order." },
          ],
        },
        {
          n: "04",
          icon: "M3 12h4l2.5-6 5 12 2.5-6h4",
          title: "Monitor and Scale",
          tag: "Track It Live, Then Scale",
          duration: "1 to 2 months",
          focusLabel: "Core focus",
          focus: [
            "Live performance tracking",
            "Continuous feedback loop",
            "Scalability identification",
          ],
          deliverables: [
            { title: "Usage and spend tracking", note: "What it’s used for and what it costs." },
            {
              title: "Governance framework",
              note: "Who owns the AI and how its work is checked.",
            },
            { title: "Scale roadmap", note: "Where to extend it next." },
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
      title: ["Tangible results", { br: true }, { grad: "from your first AI test" }],
      outcomes: [
        { label: "Risk", title: "Financial Protection & Risk Mitigation" },
        { label: "Speed", title: "Accelerated Speed to Market" },
        { label: "Confidence", title: "Proven ROI for Stakeholder Confidence" },
        { label: "Efficiency", title: "Optimized Resource & Compute Allocation" },
        { label: "Insight", title: "Real User Feedback Before You Scale" },
      ],
      ctaLines: ["Ready to capture your AI market opportunity without the financial risk?"],
      ctaLabel: "Book Your Free AI Feasibility Call",
    },
    {
      type: "useCases",
      tabletStack: true,
      eyebrow: "Use cases",
      title: ["AI MVPs ", { grad: "in the real world" }],
      cases: [
        {
          icon: "M20.8 8.6a5 5 0 0 0-8.8-3.2A5 5 0 0 0 3.2 8.6c0 5.4 8.8 10.9 8.8 10.9s8.8-5.5 8.8-10.9ZM3.5 12h4l2-3 3 6 2-3h6",
          tag: "Healthcare",
          name: "Symptom checker pilot",
          text: "An NLP model tested on targeted symptom checking before it’s rolled out across the organization.",
        },
        {
          icon: "M3 4h2l2.4 11h10.2L20 8H6.5M10 20a1 1 0 1 0 0-.01M17 20a1 1 0 1 0 0-.01",
          tag: "Ecommerce & Logistics",
          name: "Sales & stock pilot",
          text: "AI piloted on one product category to measure its effect on profit, or on one regional warehouse to forecast stockouts before a global supply chain rollout.",
        },
        {
          icon: "M4 13v-1a8 8 0 0 1 16 0v1M4 13a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Zm16 0a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2ZM17 17c0 2-2 3-5 3",
          tag: "B2B SaaS",
          name: "Support triage pilot",
          text: "Install an AI triage agent to monitor and track the resolution time and CSAT for one specific software product line before full-embedding the bot across the company.",
        },
        {
          icon: "M12 3 5 6v5.2c0 4.3 2.9 7.9 7 9.3 4.1-1.4 7-5 7-9.3V6l-7-3ZM8.8 12l2.3 2.3 4.3-4.6",
          tag: "Finance",
          name: "Parallel fraud checks",
          text: "A fraud-checking model, as accurate as the existing one, run in parallel with live customer transactions.",
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
          question:
            "We don't have a massive, perfectly cleaned database. Can we still build an AI MVP?",
          answer: [
            "Yes. A hundred thousand labeled examples will suffice to create an MVP! Core ideas can be validated with a limited number of historical data records, public data, and/or synthetic data. We clearly state and determine exactly what minimum data is needed for the 1-week Discovery phase to avoid unnecessary costs associated with data cleaning.",
          ],
        },
        {
          question: "How do we prevent AI compute costs from spiraling out of control?",
          answer: [
            'We make your architecture work efficiently by avoiding expensive AI compute usage for less complex steps that can be easily handled with cheaper, faster models. During the "Monitor" phase, we precisely track the number of tokens used to establish a highly predictable cost-per-user baseline before you scale.',
          ],
        },
        {
          question: 'What happens if the AI gives the wrong answer or "hallucinates"?',
          answer: [
            "High confidentiality thresholds are implemented. The system will automatically perform a safe backup or send the task to a human reviewer if it lacks confidence. Your users' experience will be safeguarded because, in such cases, the system will either perform a safe backup or send the task to a human reviewer.",
          ],
        },
        {
          question: "Will our proprietary company data be fed into public models like ChatGPT?",
          answer: [
            'Absolutely not. We create safe and private settings. With hosted models such as OpenAI or Anthropic, we deploy them under enterprise-scale API contracts, with a "zero data retention" clause, and your data is never directly used to train their public models. Or, we can fully implement powerful open-source models on your private servers, with no data leaving your infrastructure.',
          ],
        },
        {
          question: "Who owns the Intellectual Property (IP) and the trained model?",
          answer: [
            "Indeed, you do. We are an engineering partner, not a platform. After completing the MVP development, you will receive 100% of the IP, custom code, integration workflows, and trained model.",
          ],
        },
      ],
    },
  ],
};

export default aiMvpDevelopment;
