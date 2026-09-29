// Metrics below are illustrative until replaced with measured figures
// (carried over from the design handoff).

const ASSET_ROOT = "/industries";
const photo = (name) => `${ASSET_ROOT}/photos/${name}.webp`;
const caseImage = (name) => `${ASSET_ROOT}/cases/${name}.webp`;
const logo = (file) => `${ASSET_ROOT}/logos/${file}`;

const CASE_STUDIES_INDEX_PATH = "/case-studies";

export const INDUSTRIES = [
  {
    key: "fin",
    name: "Fintech & Lending",
    iconPath: "M3 10h18M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18M12 3l9 5H3l9-5Z",
    photo: photo("fin"),
    cases: [
      {
        client: "SBA Loans HQ",
        capability: "Document AI",
        image: caseImage("sba"),
        logo: logo("sbaloans.webp"),
        casePath: "/case-studies/sbaloans",
        headline: "Loan files reviewed in minutes, not days",
        context:
          "Small-business lenders still move most applications through manual document checks, so one missing form can stall a file for a week.",
        does: [
          "Reads bank statements, tax returns and IDs, and extracts the fields underwriters need",
          "Checks each file against SBA eligibility rules and flags gaps",
          "Routes complete files to an underwriter with a one-page summary",
        ],
        metric: "−62%",
        metricLabel: "application review time",
        beforeAfter: "5 days → 2 days",
        timeframe: "First 90 days",
      },
    ],
  },
  {
    key: "auto",
    name: "Automotive & Mobility",
    iconPath: "M4 16v-3.5L6 8h12l2 4.5V16M4 16h16M4 16v2m16-2v2M7.5 13h.01m8.99 0h.01",
    photo: photo("auto"),
    cases: [
      {
        client: "Swerv Automotive",
        capability: "Workflow automation",
        image: caseImage("swerv"),
        logo: logo("swerv.svg"),
        casePath: "/case-studies/swerv",
        headline: "Every lead answered while it is still warm",
        context:
          "Independent dealers juggle inventory, leads and service bookings across disconnected tools, and response time decides who wins the sale.",
        does: [
          "Scores incoming leads and routes them to the right salesperson",
          "Keeps inventory listings in sync across every channel",
          "Drafts follow-ups from each customer's history",
        ],
        metric: "3×",
        metricLabel: "faster lead response",
        beforeAfter: "4 hrs → 80 min",
        timeframe: "First 60 days",
      },
    ],
  },
  {
    key: "retail",
    name: "Retail & Commerce",
    iconPath: "M5 8h14l-1 12H6L5 8Zm4 0V6a3 3 0 0 1 6 0v2",
    photo: photo("retail"),
    // Industries with several case studies rotate through them in the panel.
    cases: [
      {
        client: "Expat Haven Hub",
        capability: "AI research & community",
        image: caseImage("expat"),
        logo: logo("ehh.svg"),
        casePath: "/case-studies/expat",
        headline: "One place to research, decide and settle abroad",
        context:
          "Relocation research is scattered across government sites, cost-of-living tools and unverified groups, and country data goes stale before people decide.",
        does: [
          "Researches visas, tax and cost of living across 20+ countries",
          "Compares destinations side by side in one place",
          "Connects movers to a verified, trust-based city community",
        ],
        metric: "20+",
        metricLabel: "countries, human-reviewed",
        beforeAfter: "Dozens of tabs → one platform",
        timeframe: "Live product",
      },
      {
        client: "Ofertas",
        capability: "Ranking & moderation",
        image: caseImage("ofertas"),
        logo: logo("ofertas.svg"),
        casePath: "/case-studies/ofertas",
        headline: "The best deals rise to the top on their own",
        context:
          "Community marketplaces live or die on freshness, and duplicate or expired posts bury the deals people came for.",
        does: [
          "Ranks deals by value, votes and freshness",
          "Spots duplicates and expired offers before they go live",
          "Surfaces coupons and price drops automatically",
        ],
        metric: "+35%",
        metricLabel: "deal click-through",
        beforeAfter: "4.0% → 5.4%",
        timeframe: "First 90 days",
      },
    ],
  },
  {
    key: "legal",
    name: "Legal & Compliance",
    iconPath:
      "M12 4v16m-4 0h8M5 8h14M5 8l-2.5 6a3 3 0 0 0 5 0L5 8Zm14 0-2.5 6a3 3 0 0 0 5 0L19 8Z",
    photo: photo("legal"),
    cases: [
      {
        client: "ClauseLens",
        capability: "GenAI review",
        image: caseImage("clauselens-product"),
        logo: logo("clauselens.svg"),
        casePath: "/case-studies/clauselens",
        headline: "Contract review in about a minute",
        context:
          "Legal teams read standard contracts line by line to find the handful of clauses that carry real risk.",
        does: [
          "Extracts parties, dates, obligations and key terms",
          "Flags risky or unusual clauses against your playbook",
          "Traces every finding back to its source sentence",
        ],
        metric: "~1 min",
        metricLabel: "per contract review",
        beforeAfter: "2 hrs → about 1 min",
        timeframe: "Per document",
      },
    ],
  },
  {
    key: "data",
    name: "Data & SaaS",
    iconPath:
      "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
    photo: photo("data"),
    cases: [
      {
        client: "Quanta",
        capability: "Natural-language BI",
        image: caseImage("quanta-product"),
        logo: logo("quanta.svg"),
        casePath: "/case-studies/quanta",
        headline: "Answers from your data, no SQL required",
        context:
          "Most teams wait on analysts for simple questions because the data sits in databases only a few people can query.",
        does: [
          "Turns plain-English questions into safe database queries",
          "Keeps each tenant's data separate and permissioned",
          "Returns charts and summaries the team can share",
        ],
        metric: "3×",
        metricLabel: "faster answers to data questions",
        beforeAfter: "2 days → 4 hrs",
        timeframe: "First 60 days",
      },
    ],
  },
  {
    key: "mkt",
    name: "Marketing & Advertising",
    iconPath: "M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Zm13-3a5 5 0 0 1 0 8m3-11a9 9 0 0 1 0 14",
    photo: photo("mkt"),
    cases: [
      {
        client: "GO",
        capability: "Content automation",
        image: caseImage("go"),
        logo: logo("go.svg"),
        casePath: "/case-studies/go",
        headline: "More campaigns out the door, same team",
        context:
          "Agencies grow by adding clients, but every new account means more content to write, schedule and optimise by hand.",
        does: [
          "Drafts on-brand posts and ad copy from each client brief",
          "Schedules and publishes across channels from one queue",
          "Adjusts ad spend toward the variants that perform",
        ],
        metric: "2.5×",
        metricLabel: "content output per strategist",
        beforeAfter: "12 → 30 posts a week",
        timeframe: "First 60 days",
      },
    ],
  },
  {
    key: "media",
    name: "Media & Broadcasting",
    iconPath: "M3 6h18v12H3zM10 9.5v5l4-2.5-4-2.5Z",
    photo: photo("media"),
    cases: [
      {
        client: "Media Infrastructure",
        capability: "Video search",
        image: caseImage("media"),
        logo: null,
        casePath: "/case-studies/media-infrastructure",
        headline: "Any clip in the archive, found in seconds",
        context:
          "Broadcasters sit on decades of footage, but most of it is only findable by whoever remembers where it was filed.",
        does: [
          "Transcribes and tags footage by speaker, topic and scene",
          "Lets editors search the archive in plain language",
          "Links each result to the exact timestamp",
        ],
        metric: "−90%",
        metricLabel: "time to find a clip",
        beforeAfter: "30 min → under 3 min",
        timeframe: "First quarter",
      },
    ],
  },
  {
    key: "build",
    name: "Construction & Fabrication",
    iconPath: "M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6",
    photo: photo("build"),
    cases: [
      {
        client: "EasyBar",
        capability: "Estimating automation",
        image: caseImage("easybar"),
        logo: logo("easybar.svg"),
        casePath: "/case-studies/easybar",
        headline: "Rebar schedules from one shared spec",
        context:
          "Estimators rebuild bending schedules, quantities and weights by hand for every drawing revision, and one slip means wasted steel.",
        does: [
          "Reads the structural spec and generates bending schedules",
          "Calculates quantities and weights for every bar mark",
          "Updates the whole takeoff when a drawing changes",
        ],
        metric: "−70%",
        metricLabel: "estimating time per job",
        beforeAfter: "2 days → half a day",
        timeframe: "Per project",
      },
    ],
  },
];

export const HERO_STATS = [
  { value: 8, suffix: "+", label: "Industries served" },
  { value: 40, suffix: "+", label: "AI use cases delivered" },
  { text: "5–6", suffix: "weeks", label: "To a working pilot" },
  { value: 12, suffix: "", label: "Countries our clients operate in" },
];

export const LOOP_STEPS = [
  { title: "Data in", description: "Your documents, records and systems." },
  { title: "Model", description: "Built or prompted for your domain." },
  { title: "Decision", description: "A score, a draft or an extracted answer." },
  { title: "Human review", description: "Your team approves what matters.", isHumanInTheLoop: true },
  { title: "Action", description: "Written back into the tools you use." },
];
