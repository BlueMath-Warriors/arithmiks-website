// Copy and data for /services/one-problem-automation, taken from the design source.
const oneProblemAutomation = {
  hero: {
    eyebrow: "One-Problem Automation",
    title: { lead: "Automate one problem.", accent: "Start with clear value." },
    intro: [
      "Teams lose hours to repetitive work without noticing. The hard part is knowing which workflow is worth automating. One-Problem Automation finds one high-value process and improves it with AI automation.",
    ],
    primaryCta: { label: "Book a Free Consultation", href: "#contact", glyph: "→" },
    secondaryCta: { label: "See how it works", href: "#process", glyph: "↓" },
    art: "ai-discovery",
    introMaxWidth: "660px",
    stackCtasOnMobile: true,
    ctaStackWidth: 600,
    cornerArtOnPhone: true,
    fillMeshOnPhone: false,
  },
  markdown: { href: "/services/one-problem-automation.md", filename: "one-problem-automation.md" },
  chapters: [
    { id: "challenges", label: "Why it matters" },
    { id: "cost", label: "Cost of delay" },
    { id: "process", label: "How it works" },
    { id: "outcomes", label: "Outcomes" },
    { id: "usecases", label: "Use cases" },
    { id: "faq", label: "FAQ" },
  ],
  sections: [
    {
      type: "challengesCells",
      eyebrow: "Why it matters",
      title: [{ grad: "Using AI isn’t enough." }, { br: true }, "The workflow has to change."],
      headMaxWidth: "1040px",
      stackOnPhone: true,
      stackOnTablet: true,
      claimMaxWidth: "360px",
      openLastCell: true,
      stats: [
        {
          value: 3,
          suffix: "×",
          claim:
            "AI high performers are nearly three times as likely as others to have fundamentally redesigned individual workflows.",
          source: "McKinsey",
          date: "State of AI, 2025",
          url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2025",
        },
        {
          value: 88,
          claim: "of organizations regularly use AI in at least one business function.",
          source: "McKinsey",
          date: "State of AI, 2025",
          url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2025",
        },
        {
          value: 39,
          claim: "of organizations report that AI is affecting their company’s earnings (EBIT).",
          source: "McKinsey",
          date: "State of AI, 2025",
          url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2025",
        },
      ],
      closing: [
        "Using AI doesn’t always mean better business outcomes. Workflow redesign is a key attribute of companies reporting strong AI results.",
        "The first step for any business is to look at where work takes too much time, and where automation can help.",
      ],
    },
    {
      type: "fit",
      sectionId: "cost",
      tileHeadings: true,
      eyebrow: "Risks of inaction",
      title: ["Every week of delay ", { grad: "has a cost" }],
      lead: {
        icon: "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm4.6-1.9L20 20",
        label: "The first step",
        question: "Find the Right Workflow",
        text: "Arithmiks collaborates with your team to find opportunities to reduce manual effort and generate measurable ROIs. It’s a reasonable idea, but repetitive processes are not always faster. Manual data entry, periodic checks, data duplicated between systems, rework and repeats.",
        textMaxWidth: "40ch",
        cta: "See how it works",
        href: "#process",
      },
      tiles: [
        {
          n: "01",
          icon: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
          title: "Agility Lag & Scaling Bottlenecks",
          text: "Your competitors are already leveraging automated tools, and you’re still manually processing orders, servicing clients, and synchronizing data. Growth pushes additional resources to keep up.",
          fullTitle: true,
        },
        {
          n: "02",
          icon: "M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm0 4.6v5m0 3.2h.01",
          title: "Operational Friction",
          text: "With average data transfer, data entry mistakes, no records, and no internal switching.",
        },
        {
          n: "03",
          icon: "M12 3.5 4.5 6.5v5.2c0 4.3 3.1 7.5 7.5 8.8 4.4-1.3 7.5-4.5 7.5-8.8V6.5L12 3.5Zm-3.2 8.8 2.3 2.3 4.3-4.6",
          title: "The Arithmiks Advantage",
          text: "Avoid the risks of trial and error. Arithmiks identifies the biggest operational leverage opportunity and rolls out a working, production-level automation in days.",
          wide: true,
        },
      ],
    },
    {
      type: "offers",
      tightOnDesktopOnly: true,
      sideRowOnNarrow: true,
      stackOnPhone: true,
      railMinHeight: 482,
      eyebrow: "How it works",
      title: ["A flat $1,000, ", { grad: "delivered in 1 week" }],
      offers: [
        {
          n: "01",
          icon: "M9.8 6Q11.02 11.58 16.6 12.8Q11.02 14.02 9.8 19.6Q8.58 14.02 3 12.8Q8.58 11.58 9.8 6ZM17.8 2.5Q18.36 5.04 20.9 5.6Q18.36 6.16 17.8 8.7Q17.24 6.16 14.7 5.6Q17.24 5.04 17.8 2.5ZM18.6 16.4Q18.96 18.04 20.6 18.4Q18.96 18.76 18.6 20.4Q18.24 18.76 16.6 18.4Q18.24 18.04 18.6 16.4Z",
          title: "Discover & Blueprint",
          tag: "Understand the workflow first",
          duration: "1 day",
          focusLabel: "Core focus",
          focus: ["Team workshop", "Existing workflow", "Automation potential", "Possible ROI"],
          deliverables: [
            {
              title: "Automation Blueprint",
              note: "How the chosen workflow will be automated.",
            },
            { title: "Recommended Tools", note: "The tools best suited to it." },
          ],
        },
        {
          n: "02",
          icon: "M9 3.5h6M10 3.5v5.2L4.6 18a1.6 1.6 0 0 0 1.4 2.5h12a1.6 1.6 0 0 0 1.4-2.5L14 8.7V3.5M7.2 14h9.6",
          title: "Build & Test",
          tag: "Automate it, then prove it",
          duration: "Within the 1-week core delivery",
          focusLabel: "Core focus",
          focus: ["Automate the chosen workflow", "Validate in real business situations"],
          deliverables: [
            { title: "Working AI-automated workflow", note: "Ready for testing." },
            { title: "Real-world validation", note: "Validated in real business situations." },
          ],
        },
        {
          n: "03",
          icon: "m12 3 8.5 4.6L12 12.2 3.5 7.6 12 3Zm-8.5 8.7L12 16.3l8.5-4.6M3.5 15.8 12 20.4l8.5-4.6",
          title: "Integrate & Replace",
          tag: "Switch over with your team",
          duration: "Additional 1–2 weeks",
          focusLabel: "Core focus",
          focus: ["Testing", "Execution plan", "Client involvement"],
          deliverables: [
            { title: "Automated Workflow", note: "Replacing the existing manual process." },
            { title: "Team Handoff", note: "Your team takes it over." },
            { title: "Documentation", note: "How it works and how to run it." },
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
      title: ["One workflow fixed,", { br: true }, { grad: "value you can measure" }],
      outcomes: [
        { label: "Effort", title: "Fewer repetitive tasks in the chosen workflow" },
        { label: "Speed", title: "Routine work without delays or handoffs" },
        { label: "People", title: "More team time for judgment and expertise" },
        { label: "ROI", title: "Automation’s effect on the process, measured" },
      ],
      extraCell: {
        label: "Tools",
        chips: [
          { label: "n8n", href: "https://n8n.io/" },
          { label: "Zapier", href: "https://zapier.com/" },
          { label: "Custom workflows" },
        ],
      },
      ctaLines: ["Does your team spend too much time managing a workflow?"],
      ctaLabel: "Book a Free Consultation",
    },
    {
      type: "proofGrid",
      sectionId: "usecases",
      eyebrow: "Real-world use cases",
      title: [{ grad: "Public results," }, { br: true }, "matched to your workflow"],
      intro: "Published industry results, each matched to a focused Arithmiks workflow.",
      cta: { label: "Book a Free Consultation", href: "#contact" },
      approachLabel: "Arithmiks approach",
      rows: [
        {
          icon: "M8 10.5v-3a4 4 0 0 1 7.6-1.7M5.5 10.5h13V20h-13zM12 14.2v2.3",
          name: "IT access recovery",
          claim: [
            { label: "Delivery Hero", href: "https://n8n.io/case-studies/delivery-hero/" },
            " cut account lockout handling from 35 minutes to 20, saving 200 employee hours.",
          ],
          approach: [
            "Your communication and identity apps connected",
            "Approval requests sent to managers",
            "Automatic API resets triggered",
          ],
        },
        {
          icon: "M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z",
          name: "Call quality review",
          claim: [
            { label: "Smith.ai", href: "https://smith.ai" },
            " freed up 250+ coaching hours with algorithmic transcript anomaly detection.",
          ],
          approach: [
            "Your compliance standards applied to every call",
            "Automatic filters flag calls for reviewers",
          ],
        },
        {
          icon: "M4 5h16l-6 7.5V19l-4-2v-4.5L4 5Z",
          name: "Lead intake & routing",
          claim: [
            { label: "Autotorino", href: "https://zapier.com/customer-stories/autotorino" },
            "’s 74 locations recovered 2,394 hours of CRM management in one year.",
          ],
          approach: [
            "Leads from forms, ads and emails in one flow",
            "Standardised and synchronised",
            "Fed cleanly into your CRM",
          ],
        },
        {
          icon: "M4 8h13M13.5 4.5 17 8l-3.5 3.5M20 16H7M10.5 12.5 7 16l3.5 3.500",
          name: "Cross-team handoffs",
          claim: [
            { label: "Just Eat Spain", href: "https://zapier.com/customer-stories/just-eat-spain" },
            " removed manual handoffs across five teams and cut restaurant onboarding time in half.",
          ],
          approach: [
            "Tasks assigned automatically",
            "Exceptions flagged as they happen",
            "Onboarding status documented across your pipeline",
          ],
        },
        {
          icon: "M4 5.5h16V16H10l-4 3.5V16H4zM8 9.5h8M8 12.5h5",
          name: "Internal service requests",
          claim: [
            {
              label: "Palo Alto Networks",
              href: "https://zapier.com/customer-stories/palo-alto-networks",
            },
            " saves $150,000 a year by using AI to read and analyse Slack messages and provision software automatically.",
          ],
          approach: [
            "Chat requests turned into workflows",
            "Accounts created automatically",
            "Approval kept for sensitive requests",
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
          question: "What kind of workflow can be automated?",
          answer: [
            "Repetitive tasks such as data entry or moving data from one source to another. Arithmiks reviews the workflow and identifies what can be automated.",
          ],
        },
        {
          question: "Is our business data secure during automation?",
          answer: [
            "Security depends on the tools, systems and data involved. Their requirements are reviewed before anything is built.",
          ],
        },
        {
          question: "Will automation replace our employees?",
          answer: [
            "This service aims to reduce the repetitive work in one process, so your people can concentrate on tasks that need judgment and expertise. According to McKinsey’s 2026 survey, two-thirds of respondents reported little or no change in overall employment over the past year because of AI, and just 14% reported a decline. How you use the freed-up capacity is up to you.",
          ],
        },
        {
          question: "Do we need to choose the automation tool?",
          answer: [
            "No. Arithmiks can suggest a solution for your workflow, whether it’s n8n, Zapier or a custom solution.",
          ],
        },
        {
          question: "How does Arithmiks choose what to automate?",
          answer: [
            "Arithmiks automates time-draining, manual workflows and prioritizes opportunities with measurable business value.",
          ],
        },
      ],
    },
  ],
};

export default oneProblemAutomation;
