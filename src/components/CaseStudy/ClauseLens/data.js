const ASSET_ROOT = "/case-studies/clauselens";
const tech = (name, file) => ({ name, icon: `${ASSET_ROOT}/tech/${file}.png` });

export const heroData = {
  category: "Product · Contract Intelligence",
  logoSrc: `${ASSET_ROOT}/logo.svg`,
  logoAlt: "ClauseLens",
  headline: { plain: "Contract review you can", highlight: "check line by line" },
  caption:
    "AI contract review that flags risks and extracts key terms in about a minute, with every finding traced to its source sentence.",
  liveUrl: "https://clauselens.arithmiks.com",
  tone: "warm",
  screenshot: true,
  heroImageSrc: `${ASSET_ROOT}/hero.webp`,
  heroImageAlt:
    "ClauseLens review screen: a contract page with flagged clauses beside risk findings",
};

// Grouped as in the project: AI and ML, backend, frontend, infrastructure.
export const techStackData = {
  technologies: [
    tech("Open AI", "openai"),
    tech("Anthropic", "anthropic"),
    tech("Gemini", "gemini"),
    tech("Groq", "groq"),
    tech("Docling", "docling"),
    tech("Qdrant", "qdrant"),
    tech("Python", "python"),
    tech("FastAPI", "fastapi"),
    tech("Celery", "celery"),
    tech("Redis", "redis"),
    tech("LibreOffice", "libreoffice"),
    tech("Next.js", "nextjs"),
    tech("Tailwind CSS", "tailwind"),
    tech("PostgreSQL", "postgresql"),
    tech("MinIO", "minio"),
    tech("Docker Compose", "docker"),
    tech("nginx", "nginx"),
    tech("FastEmbed", "fastembed"),
  ],
  specialIconNames: [],
};

export const overviewData = {
  name: "ClauseLens",
  detail:
    "ClauseLens is an AI contract review and document intelligence platform for teams who read agreements for a living. Upload a contract and it returns a structured, source-grounded analysis: document type, risky clauses, commercial terms, a plain-English summary, and answers to follow-up questions.",
  framed: true,
  imageSrc: `${ASSET_ROOT}/overview.webp`,
  imageAlt: "ClauseLens contract library: analysed contracts as cards with risk counts",
  problemData: {
    title: "The gap it closes",
    text: "One commercial contract takes a trained reviewer two to four hours, most of it spent finding standard clauses and checking them against market norms. Clause libraries miss anything phrased differently, and generic AI chat answers without showing its source. ClauseLens returns a first-pass review in about a minute, with every finding linked to the sentence behind it.",
  },
};

export const solutionData = {
  label: "Why you can rely on it",
  heading: { plain: "If there is no source,", highlight: "there is no claim" },
  description:
    "In legal work a wrong answer is worse than no answer, so every finding ClauseLens shows can be traced to the sentence it came from.",
  solutions: [
    {
      title: "Grounded, or dropped",
      detail:
        "Every extracted clause, term and obligation is re-matched against the real document text. If the source can't be found, the claim never reaches the reviewer.",
      iconPath:
        "M13 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21H11M13 3l5 5M13 3v5h5m0 0v2.5M8.5 12h3.5M8.5 15.5h2M16.5 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2.2-.8L20.5 21",
    },
    {
      title: "Rules back the model",
      detail:
        "An LLM scores each clause against a configurable taxonomy, and a deterministic rules engine overrides it when a hard rule matches, like a missing liability cap.",
      iconPath: "M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2",
    },
    {
      title: "Tested before it ships",
      detail:
        "Every model and prompt change runs against a golden dataset with an LLM-as-judge harness and an A/B runner, so regressions are caught before a real contract.",
      iconPath:
        "M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0l1.58 6.14a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96l-6.14 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0ZM20 3v4M22 5h-4M4 17v2M5 18H3",
      iconTransform: "translate(2.4 2.4) scale(.8)",
    },
  ],
  stats: [
    { value: "~1 min", label: "from upload to a fully checked report" },
    { value: "~4¢", label: "AI cost per document" },
    { value: "97%", label: "retrieval accuracy" },
    { value: "0", label: "valid findings dropped after the grounding fix" },
  ],
};

export const flowData = {
  heading: { plain: "What happens", highlight: "behind every review" },
  description:
    "Each contract is parsed, searched and analysed by specialized AI stages, and every finding is checked against the real text before a reviewer sees it.",
};

export const keyFeaturesData = {
  label: "Highlights",
  heading: "Key features",
  framed: true,
  features: [
    {
      title: "Grounded Risk Findings",
      description: "Every clause rated against market norms and traced to its source sentence.",
      image: `${ASSET_ROOT}/feature-findings.webp`,
      imageAlt:
        "ClauseLens findings: a flagged clause with why it was flagged, market norm and suggested position",
    },
    {
      title: "Key Terms, Extracted and Cited",
      description:
        "Renewal, liability, indemnity and payment terms in one table, each with its page.",
      image: `${ASSET_ROOT}/feature-keyterms.webp`,
      imageAlt: "ClauseLens key terms table with values, market norms and sources",
    },
    {
      title: "Obligations with Owners and Deadlines",
      description:
        "Who must do what, by when, and what triggers it, so a renewal notice or payment window never goes unnoticed.",
      image: `${ASSET_ROOT}/feature-obligations.webp`,
      imageAlt: "ClauseLens obligations list with owners, due dates and triggers",
    },
    {
      title: "Ask This Document",
      description:
        "Ask about one contract in plain English. Every answer cites the page, or says plainly that the answer is not in the document.",
      image: `${ASSET_ROOT}/feature-askdoc.webp`,
      imageAlt: "ClauseLens chat answering a question about one contract with citations",
    },
    {
      title: "Ask Across Your Library",
      description:
        "One question across a batch or your whole library, answered document by document with the section and page for every claim.",
      image: `${ASSET_ROOT}/feature-asklib.webp`,
      imageAlt: "ClauseLens answering one question across ten contracts",
    },
    {
      title: "Batch Upload and Parsing",
      description:
        "Drop in many PDFs or Word files at once. Each is parsed and checked in parallel, and a file that cannot be read says why.",
      image: `${ASSET_ROOT}/feature-batch.webp`,
      imageAlt: "ClauseLens analysing eight files with progress and upload errors",
    },
  ],
};
