/**
 * The four service groups and their 26 capabilities, as shown on /services.
 *
 * Every capability carries the copy the /services accordion renders: a one-line
 * `teaser`, the full `desc`, the "what you get" `tags`, and `relatedCaseStudy`
 * (a real slug from Case-Study/caseStudies.js) for its related-work link.
 *
 * `url` resolves through serviceRoutes, so capabilities with a page link to it
 * and the rest fall back to "#" until those pages exist — the same convention
 * the Footer uses for unbuilt routes.
 *
 * This is intentionally separate from SERVICE_NAV_GROUPS (header/footer nav),
 * which uses a different, more granular taxonomy. Keep both in sync when a
 * capability is added, renamed, or gets its own page.
 */
import { getServiceBySlug, servicePath } from "./serviceRoutes";

const slugify = (label) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * @param {string} label
 * @param {{ teaser: string, desc: string, tags: string[], relatedCaseStudy: string, slug?: string }} detail
 */
const item = (label, detail) => {
  const slug = detail.slug || slugify(label);
  const route = getServiceBySlug(slug);
  return {
    label,
    slug,
    teaser: detail.teaser,
    desc: detail.desc,
    tags: detail.tags,
    relatedCaseStudy: detail.relatedCaseStudy,
    hasPage: Boolean(route),
    url: route ? servicePath(slug) : "#",
  };
};

// Paths are 18x18, matching the design's own group glyphs.
export const SERVICE_CATEGORY_ICONS = {
  "ai-engineering-data":
    "M3 5.4c0-1.35 2.7-2.4 6-2.4s6 1.05 6 2.4-2.7 2.4-6 2.4-6-1.05-6-2.4Zm0 3.6c0 1.35 2.7 2.4 6 2.4s6-1.05 6-2.4m-12 3.6c0 1.35 2.7 2.4 6 2.4s6-1.05 6-2.4",
  "software-development": "M6.5 5 2.5 9l4 4M11.5 5l4 4-4 4",
  solutions: "M3 6.6 9 3.6l6 3-6 3-6-3Zm0 4.8 6 3 6-3",
  "product-engineering":
    "M9 3.2a5.8 5.8 0 1 0 0 11.6 5.8 5.8 0 0 0 0-11.6Zm0 4a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Z",
};

export const SERVICE_CATEGORIES = [
  {
    slug: "ai-engineering-data",
    number: "01",
    title: "AI Engineering & Data",
    description: "From the first AI conversation to a production system your team owns.",
    items: [
      item("AI Discovery, Strategy & Roadmap", {
        teaser: "Find where AI creates value, then map the path.",
        desc: "We review how your business runs, identify where AI can create real value, and turn the strongest opportunity into a roadmap with cost and timeline.",
        tags: ["Discovery call", "AI roadmap", "Delivery plan"],
        relatedCaseStudy: "go",
      }),
      item("AI MVP Development", {
        teaser: "A validated AI idea, built into a working product.",
        desc: "We validate the use case against your real data, then build an AI MVP with human-in-the-loop review, logging, and cost tracking built in.",
        tags: ["Working prototype", "Live AI MVP", "Adoption plan"],
        relatedCaseStudy: "quanta",
      }),
      item("AI Agents & Workflows", {
        teaser: "Agents that do real work inside your systems.",
        desc: "Agents that plan, call your tools, and complete multi-step tasks inside the systems you already run, with approvals where they matter.",
        tags: ["Tool calling", "Multi-step flows", "Human approval"],
        relatedCaseStudy: "go",
      }),
      item("AI Data Engineering", {
        teaser: "Pipelines that feed models reliable data.",
        desc: "Ingestion, transformation, and storage designed for AI workloads, so models train and run on data that is current, complete, and traceable.",
        tags: ["Ingestion", "Feature stores", "Lineage"],
        relatedCaseStudy: "media-infrastructure",
      }),
      item("AI Automation", {
        teaser: "Repetitive work taken off your team.",
        desc: "We automate the repetitive, rules-heavy work across operations, from document handling to routing and reporting, and measure the hours it returns.",
        tags: ["Process mapping", "Automation build", "Time saved"],
        relatedCaseStudy: "sbaloans",
      }),
      item("AI Knowledge Extraction", {
        teaser: "Answers pulled from your documents.",
        desc: "Turn contracts, manuals, and archives into structured, searchable knowledge, with every answer traced back to its source.",
        tags: ["Document parsing", "RAG search", "Source citations"],
        relatedCaseStudy: "media-infrastructure",
      }),
      item("MLOps & AI Infrastructure", {
        teaser: "Deploy, monitor, and scale models.",
        desc: "Deployment pipelines, monitoring, and model versioning that keep AI features stable, observable, and affordable in production.",
        tags: ["Model deployment", "Monitoring", "Cost control"],
        relatedCaseStudy: "quanta",
      }),
      item("Data Pre-processing", {
        teaser: "Raw sources cleaned and structured.",
        desc: "Cleaning, labeling, and structuring raw sources into datasets a model can actually learn from, with the pipeline documented and repeatable.",
        tags: ["Cleaning + labeling", "Pipelines", "Documentation"],
        relatedCaseStudy: "media-infrastructure",
      }),
      item("Data Modeling & Analytics", {
        teaser: "Models and dashboards built on your questions.",
        desc: "Feature engineering, model selection, and reporting built around the questions your business actually asks, with every metric defined.",
        tags: ["Feature engineering", "Evaluation", "Dashboards"],
        relatedCaseStudy: "qareeb",
      }),
    ],
  },
  {
    slug: "software-development",
    number: "02",
    title: "Software Development",
    description: "End-to-end engineering for web, mobile, and custom platforms.",
    items: [
      item("Web App Development", {
        teaser: "Internal tools to customer-facing products.",
        desc: "We design and build secure, maintainable web applications—from internal tools to customer-facing products—using modern stacks and engineering practices that support growth.",
        tags: ["Architecture review", "Modern stacks", "Design system"],
        relatedCaseStudy: "sbaloans",
      }),
      item("Mobile App Development", {
        teaser: "iOS and Android, discovery to store release.",
        desc: "From discovery to store release, we ship performant iOS and Android experiences with clear UX, offline-aware design, and maintainable codebases.",
        tags: ["iOS + Android", "Offline-aware UX", "Store release"],
        relatedCaseStudy: "lfgo",
      }),
      item("Custom Software Development", {
        teaser: "Systems that fit how your teams work.",
        desc: "We build tailored systems—integrations, line-of-business applications, and product extensions—that fit how your teams work, not the other way around.",
        tags: ["Integrations", "Line-of-business apps", "Product extensions"],
        relatedCaseStudy: "easybar",
      }),
      item("UI/UX Design", {
        teaser: "Flows, interfaces, and design systems.",
        desc: "User flows, interfaces, and design systems that reduce friction, improve conversion, and stay consistent across web and mobile touchpoints.",
        tags: ["User flows", "UI kit", "Usability testing"],
        relatedCaseStudy: "togather",
      }),
      item("DevOps Services", {
        slug: "devops",
        teaser: "CI/CD, observability, infrastructure as code.",
        desc: "CI/CD, observability, infrastructure as code, and release practices that shorten lead times while keeping production stable and auditable.",
        tags: ["CI/CD pipelines", "Observability", "IaC"],
        relatedCaseStudy: "go",
      }),
    ],
  },
  {
    slug: "solutions",
    number: "03",
    title: "Solutions",
    description: "Cloud, commerce, and intelligence that plug into what you run.",
    items: [
      item("AI & ML Solutions", {
        teaser: "Intelligent features inside your product.",
        desc: "Recommendation, prediction, and classification features designed, trained, and shipped inside the products your customers already use.",
        tags: ["Model selection", "Integration", "Evaluation"],
        relatedCaseStudy: "go",
      }),
      item("AI Chatbots & Customer Support", {
        teaser: "Support that answers from your own content.",
        desc: "Chat assistants grounded in your help content and data, with clean hand-off to a human when a question needs one.",
        tags: ["Grounded answers", "Human hand-off", "Analytics"],
        relatedCaseStudy: "swerv",
      }),
      item("Cloud Engineering", {
        teaser: "Cloud-native systems, built to scale.",
        desc: "Architecture and build of cloud-native services on AWS, Azure, or GCP, designed for scale, resilience, and predictable cost.",
        tags: ["Architecture", "Serverless + containers", "Resilience"],
        relatedCaseStudy: "quanta",
      }),
      item("Cloud Infra Management", {
        teaser: "AWS, Azure, or GCP, provisioned and secured.",
        desc: "Provisioning, scaling, and securing cloud environments on AWS, Azure, or GCP, with monitoring and cost reviews on a regular cadence.",
        tags: ["Provisioning", "Cost + scaling", "Security baseline"],
        relatedCaseStudy: "sbaloans",
      }),
      item("Digital Transformation", {
        teaser: "Legacy processes into connected workflows.",
        desc: "Modernizing legacy processes and systems into connected digital workflows.",
        tags: ["Process mapping", "Systems audit", "Migration plan"],
        relatedCaseStudy: "easybar",
      }),
      item("eCommerce Development", {
        teaser: "Storefronts and checkouts that convert.",
        desc: "Storefronts, catalogues, and checkout flows built or embedded into your brand site, connected to the inventory and payment systems you use.",
        tags: ["Storefront", "Checkout", "Integrations"],
        relatedCaseStudy: "ofertas",
      }),
    ],
  },
  {
    slug: "product-engineering",
    number: "04",
    title: "Product Engineering",
    description: "Discovery through modernisation, for products that keep evolving.",
    items: [
      item("Product Discovery", {
        teaser: "De-risk what you build before you build it.",
        desc: "Research and validation that de-risk what you build before you build it.",
        tags: ["User research", "Validation", "Scope options"],
        relatedCaseStudy: "expat",
      }),
      item("Interactive Product Designing", {
        teaser: "Clickable prototypes for testing and pitching.",
        desc: "Clickable prototypes for testing flows and pitching to stakeholders early.",
        tags: ["Clickable flows", "User testing", "Pitch-ready"],
        relatedCaseStudy: "ofertas",
      }),
      item("POC Development", {
        teaser: "Prove the hard part works, fast.",
        desc: "A focused proof of concept that tests the riskiest technical assumption before you commit a full budget to the build.",
        tags: ["Feasibility", "Working demo", "Go/no-go"],
        relatedCaseStudy: "quanta",
      }),
      item("Product Development", {
        teaser: "From scoped MVP to a product that grows.",
        desc: "A lean, launchable first version scoped to prove the idea, then the engineering to keep growing it release after release.",
        tags: ["Scoped build", "Launch plan", "Iteration"],
        relatedCaseStudy: "lfgo",
      }),
      item("Application Modernization", {
        teaser: "Move aging apps onto a modern stack.",
        desc: "Migrating legacy applications to modern frameworks and cloud infrastructure in stages, so the business keeps running throughout.",
        tags: ["Stack migration", "Cloud move", "Staged rollout"],
        relatedCaseStudy: "sbaloans",
      }),
      item("Software Re-engineering", {
        teaser: "Modernize aging systems without stalling.",
        desc: "Rebuilding or modernizing aging systems without stalling the business.",
        tags: ["System audit", "Incremental rewrite", "Parallel run"],
        relatedCaseStudy: "swerv",
      }),
    ],
  },
];

/** Running 01..26 number for a capability, used by the accordion rows. */
export const SERVICE_CAPABILITY_COUNT = SERVICE_CATEGORIES.reduce(
  (total, category) => total + category.items.length,
  0
);
