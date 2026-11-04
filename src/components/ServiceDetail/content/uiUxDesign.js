// Copy and data for /services/ui-ux-design, taken from the design source.
const uiUxDesign = {
  hero: {
    eyebrow: "UI/UX Design",
    title: { lead: "Interfaces people", accent: "understand instantly" },
    intro: [
      "From new products and redesigns to complex dashboards and internal tools, we research, design and test interfaces that make the next step obvious for your users.",
    ],
    primaryCta: { label: "Describe your project", href: "#contact", glyph: "→" },
    secondaryCta: { label: "See our expertise", href: "#process", glyph: "↓" },
    art: "ui-ux",
    stackCtasOnMobile: true,
    introMaxWidth: "min(560px, 52vw)",
    ctaGap: "40px",
  },
  chapters: [
    { id: "challenges", label: "Why it matters" },
    { id: "story", label: "Design process" },
    { id: "process", label: "Offers" },
    { id: "outcomes", label: "What we build" },
    { id: "work", label: "Selected work" },
    { id: "faq", label: "FAQ" },
  ],
  sections: [
    {
      type: "challengesSplit",
      compactTitle: true,
      statsTopGap: "40px",
      wrapSourcesOnPhone: false,
      headRowGap: "clamp(32px, 3.4vw, 48px)",
      eyebrow: "Why it matters",
      title: [{ grad: "People don’t read manuals." }, { br: true }, "They just leave."],
      stats: [
        {
          value: 400,
          label: "400%",
          claim: "potential lift in conversion rates from a better UX design.",
          source: {
            name: "Forrester",
            date: "Research on UX ROI",
            url: "https://www.forrester.com/report/The-Six-Steps-For-Justifying-Better-UX/RES117708",
          },
        },
        {
          value: 32,
          label: "32%",
          claim: "higher revenue growth for companies in the top quartile of design performance.",
          source: {
            name: "McKinsey",
            date: "The business value of design, 2018",
            url: "https://www.mckinsey.com/capabilities/mckinsey-design/our-insights/the-business-value-of-design",
          },
        },
      ],
      close: {
        label: "THE GAP",
        figure: "70%",
        claim:
          "average online cart abandonment rate, with checkout usability among the leading causes.",
        source: {
          name: "Baymard Institute",
          date: "Cart abandonment research",
          url: "https://baymard.com/lists/cart-abandonment-rate",
        },
        lead: "Most of that gap is design.",
        paragraphs: [
          "Confusing navigation, forms that ask too much, flows nobody tested with real users. Each one is small. Together they decide whether people finish what they came to do.",
          "It rarely shows up as one big failure. It shows up as drop-offs, support tickets and features nobody finds.",
        ],
        conclusion:
          "So we start with the people using it: research how they work, test early prototypes, and only hand over designs that have been shown to work.",
      },
    },
    {
      type: "story",
      eyebrow: "The design process",
      title: ["From first interview to a ", { grad: "tested interface" }],
      steps: [
        {
          visual: "interview",
          title: "User research",
          text: "We start by talking to the people who’ll use it. Interviews, session recordings and support tickets show us where the friction is before anyone draws a screen.",
        },
        {
          visual: "flow",
          title: "User flows & information architecture",
          text: "Every task becomes a path: the steps, the decisions and the dead ends. We map them so the structure is right before the visuals exist.",
        },
        {
          visual: "tokens",
          title: "Branding & design system",
          text: "Colour, type and tone are set once and built into reusable components, so every screen looks like your brand and designers and developers share one source of truth.",
        },
        {
          visual: "screens",
          title: "Interface design & testing",
          text: "With the brand and design system set, we design the interfaces, then test them with real users and fix where they hesitate before any code is written.",
        },
      ],
    },
    {
      type: "notes",
      eyebrow: "Offers",
      title: ["How a design ", { grad: "engagement runs" }],
      notes: [
        {
          title: "UX audit and discovery",
          duration: "1 to 2 weeks",
          text: "We review your product, interview its users and map where they get stuck. You leave with a prioritised fix list.",
          tags: ["Audit report", "User insights", "Priority list"],
        },
        {
          title: "Research and flows",
          duration: "2 to 3 weeks",
          text: "Interviews, analytics and competitor review become personas, journeys and a structure that matches how people work.",
          tags: ["Personas", "User flows", "Site map"],
        },
        {
          title: "Wireframes and prototype",
          duration: "2 to 4 weeks",
          text: "Lo-fi wireframes settle the layout, then a clickable prototype lets you walk the journey before any code exists.",
          tags: ["Lo-fi wireframes", "Clickable prototype", "Review notes"],
        },
        {
          title: "Visual design and design system",
          duration: "3 to 5 weeks",
          text: "Colour, type and components are defined once, then every screen is built from that system so it stays consistent.",
          tags: ["Hi-fi screens", "Design system", "Component library"],
        },
        {
          title: "Usability testing",
          duration: "1 to 2 weeks",
          text: "Real users complete real tasks on the prototype. We measure where they hesitate, fix it and test again.",
          tags: ["Test report", "Success metrics", "Fix list"],
        },
        {
          title: "Handoff and design QA",
          duration: "Through the build",
          text: "Developer-ready specs and assets, then design QA on each release so what ships matches the design.",
          tags: ["Dev specs", "Asset export", "Release QA"],
        },
      ],
    },
    {
      type: "buildTypes",
      eyebrow: "WHAT WE BUILD",
      title: ["What kind of design ", { grad: "do you need?" }],
      lines: ["Most projects start as one of these.", "Yours might combine a few."],
      types: [
        {
          icon: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3Z",
          name: "New product design",
        },
        {
          icon: "M4 12a8 8 0 0 1 13.7-5.7M20 12a8 8 0 0 1-13.7 5.7M17.7 3v3.3h-3.3M6.3 21v-3.3h3.3",
          name: "Product redesigns",
        },
        { icon: "M4 5h16v14H4zM4 9h16M9 9v10", name: "SaaS dashboards" },
        {
          icon: "M8 2.5h8a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 20V4A1.5 1.5 0 0 1 8 2.5ZM11 18.5h2",
          name: "Mobile app design",
        },
        {
          icon: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 16.5h7M16.5 13v7",
          name: "Design systems",
        },
        {
          icon: "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM15.3 15.3 20 20",
          name: "UX audits",
        },
      ],
      note: "Whether you’re starting from a sketch or improving a product people already use, we start from what your users need to get done.",
    },
    {
      type: "work",
      bandStyle: true,
      featured: [
        {
          slug: "sbaloans",
          tag: "SaaS",
          title: "SBA Loan Processing Platform",
          outcome:
            "A stalled web app finished: loan intake and processing in one workflow lenders can audit.",
        },
        {
          slug: "ofertas",
          tag: "E-Commerce",
          title: "Community Deals Marketplace",
          outcome: "Shoppers post and rank deals, with coupons and price drops surfaced automatically.",
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
          question: "How long does a design project take?",
          answer: [
            "It depends on where you start. A ",
            { text: "UX audit", href: "#process" },
            " takes 1 to 2 weeks, and a full product design usually runs 8 to 12 weeks from ",
            { text: "research to handoff", href: "#story" },
            ". You get a ",
            { text: "firm timeline", href: "#process" },
            " after discovery.",
          ],
        },
        {
          question: "Do we have to go through every stage?",
          answer: [
            "No. You can ",
            { text: "start from any stage", href: "#process" },
            ", whether that’s research, wireframes or a ",
            { text: "design system", href: "#story" },
            " for an ",
            { text: "existing product", href: "#outcomes" },
            ". A short audit first tells us where to focus.",
          ],
        },
        {
          question: "When will we see designs?",
          answer: [
            "Early. ",
            { text: "Lo-fi wireframes", href: "#process" },
            " arrive within the first few weeks, followed by a ",
            { text: "clickable prototype", href: "#story" },
            " you can tap through before anything is built.",
          ],
        },
        {
          question: "Will you test the designs with real users?",
          answer: [
            "Yes, and not just at the end. ",
            { text: "Testing runs from the first wireframe onwards", href: "#story" },
            ", so problems are fixed while they’re still cheap to change.",
          ],
        },
        {
          question: "Do you only design, or build too?",
          answer: [
            "Both. We can hand the designs to your developers with full specs, or our engineers build the product from them. Either way, we stay on for ",
            { text: "design QA", href: "#process" },
            " so the result matches what was tested.",
          ],
        },
        {
          question: "Who owns the design files?",
          answer: [
            "You do. The ",
            { text: "Figma files", href: "#story" },
            ", ",
            { text: "design system", href: "#story" },
            " and research are yours from day one, kept in your own workspace.",
          ],
        },
      ],
    },
  ],
};

export default uiUxDesign;
