const ASSET_ROOT = "/case-studies/quanta";
const tech = (name, file) => ({ name, icon: `${ASSET_ROOT}/tech/${file}.png` });

export const heroData = {
  category: "Product · BI Platform",
  logoSrc: `${ASSET_ROOT}/logo.svg`,
  logoAlt: "Quanta",
  logoHeight: "clamp(56px, 4.4vw, 80px)",
  headline: { plain: "Your database, answering in", highlight: "plain English" },
  caption:
    "A multi-tenant BI platform that lets any team query their own database in plain English, no SQL required.",
  liveUrl: "https://quanta.arithmiks.com",
  screenshot: true,
  heroImageSrc: `${ASSET_ROOT}/hero.webp`,
  heroImageAlt: "Quanta dashboard: charts and tables built from plain-English questions",
};

export const techStackData = {
  technologies: [
    tech("Python", "python"),
    tech("FastAPI", "fastapi"),
    tech("PostgreSQL", "postgresql"),
    tech("React", "react"),
    tech("TypeScript", "typescript"),
    tech("OpenAI", "openai"),
    tech("Anthropic", "anthropic"),
    tech("Docker", "docker"),
  ],
  specialIconNames: [],
};

export const overviewData = {
  detail:
    "Quanta is a multi-tenant BI platform for teams without a SQL expert. Each org gets its own Postgres/MySQL workspace, roles, AI credits, and plain-English queries. Live in production, security tested.",
  framed: true,
  imageSrc: `${ASSET_ROOT}/overview.webp`,
  imageAlt: "Quanta schema view: connected tables and their relationships",
  problemData: {
    title: "The Problem",
    text: "Teams face two bad options: enterprise BI—powerful but per-seat priced, needing a semantic model before the first chart—or raw SQL clients—free, immediate, but only usable by schema experts, leaving others waiting. Quanta keeps the directness of querying your own database, minus the SQL requirement.",
  },
};

export const solutionData = {
  label: "Built for trust",
  heading: { plain: "Safe enough to run on", highlight: "production data" },
  description:
    "Quanta connects to live databases, so every design decision starts from one rule: answering questions must never put the data at risk.",
  solutions: [
    {
      title: "Read-only by design",
      detail:
        "Every AI-written query is parsed and checked before it runs, then executed inside a read-only transaction. Quanta answers questions; it never changes your data.",
      iconPath: "M12 3 4.5 6v5.4c0 4.4 3.1 7.9 7.5 9.6 4.4-1.7 7.5-5.2 7.5-9.6V6L12 3Zm-2.6 9.1 1.9 1.9 3.4-3.6",
    },
    {
      title: "Private databases stay private",
      detail:
        "Connect databases on a private subnet through an SSH bastion, with strict per-connection policies. Nothing has to be opened to the internet.",
      iconPath: "M6.5 10.5V8a5.5 5.5 0 0 1 11 0v2.5M5 10.5h14v9.5H5v-9.5Zm7 4v2",
    },
    {
      title: "AI cost that stays predictable",
      detail:
        "A compact schema representation keeps every prompt small, cutting AI planning cost by around 60% with no change to what users see.",
      iconPath: "M4 16V8m4 8V4m4 12v-6m4 6V6m4 10V10",
    },
  ],
};

export const flowData = {
  heading: { plain: "What happens", highlight: "behind every answer" },
  description:
    "A plain-English question passes through planning, generation and two independent safety checks before a single row is read.",
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  framed: true,
  features: [
    {
      title: "1. Conversational Query Assistant",
      description:
        "Ask in plain English, get validated SQL, results, and a suggested chart with one click to pin it to a dashboard.",
      image: `${ASSET_ROOT}/feature-assistant.webp`,
    },
    {
      title: "2. AI Dashboard Generation",
      description:
        "Complete widgets proposed and pre-verified against the real schema before they're ever offered.",
      image: `${ASSET_ROOT}/feature-generation.webp`,
    },
    {
      title: "3. Dashboard Builder",
      description:
        "Resizable widgets, 11 visualization types, tabs, and export to image or PDF.",
      image: `${ASSET_ROOT}/feature-builder.webp`,
    },
    {
      title: "4. Secure Connections",
      description:
        "Credentials encrypted at rest, with private databases reached safely through an SSH bastion.",
      image: `${ASSET_ROOT}/feature-connections.webp`,
    },
    {
      title: "5. Public Sharing",
      description:
        "Any dashboard publishes to a read-only link with no account required and credentials never touching the client.",
      image: `${ASSET_ROOT}/feature-sharing.webp`,
    },
    {
      title: "6. Workspaces and Roles",
      description:
        "Per-organization workspaces with owner and member roles and AI credit limits.",
      image: `${ASSET_ROOT}/feature-members.webp`,
    },
  ],
};
