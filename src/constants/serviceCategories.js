/**
 * The three service groups and their 15 capabilities, as shown on /services.
 * Same groups, services and order as the homepage "What we do" cards
 * (Homepage V2); SERVICE_NAV_GROUPS carries the nav/footer view of the same list.
 *
 * Every capability carries the copy the /services accordion renders: a one-line
 * `teaser`, the full `desc`, the "what you get" `tags`, and `relatedCaseStudy`
 * (a real slug from Case-Study/caseStudies.js) for its related-work link.
 *
 * `url` resolves through serviceRoutes, so capabilities with a page link to it
 * and the rest fall back to "#" until those pages exist.
 *
 * Entries marked DRAFT carry copy written for the V2 services that had none in
 * the designs — pending stakeholder review.
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
  "software-development": "M6.5 5 2.5 9l4 4M11.5 5l4 4-4 4",
  "ai-engineering-data":
    "M3 5.4c0-1.35 2.7-2.4 6-2.4s6 1.05 6 2.4-2.7 2.4-6 2.4-6-1.05-6-2.4Zm0 3.6c0 1.35 2.7 2.4 6 2.4s6-1.05 6-2.4m-12 3.6c0 1.35 2.7 2.4 6 2.4s6-1.05 6-2.4",
  solutions: "M3 6.6 9 3.6l6 3-6 3-6-3Zm0 4.8 6 3 6-3",
};

export const SERVICE_CATEGORIES = [
  {
    slug: "software-development",
    number: "01",
    title: "Software Development",
    description: "Web and custom software, designed and shipped by senior engineers.",
    items: [
      item("Web App Development", {
        teaser: "Internal tools to customer-facing products.",
        desc: "We design and build secure, maintainable web applications—from internal tools to customer-facing products—using modern stacks and engineering practices that support growth.",
        tags: ["Architecture review", "Modern stacks", "Design system"],
        relatedCaseStudy: "sbaloans",
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
      item("Application Modernisation", {
        slug: "application-modernization",
        teaser: "Move aging apps onto a modern stack.",
        desc: "Migrating legacy applications to modern frameworks and cloud infrastructure in stages, so the business keeps running throughout.",
        tags: ["Stack migration", "Cloud move", "Staged rollout"],
        relatedCaseStudy: "sbaloans",
      }),
    ],
  },
  {
    slug: "ai-engineering-data",
    number: "02",
    title: "AI Engineering & Data",
    description: "From a first AI roadmap to agents and automations running in production.",
    items: [
      item("AI Discovery, Strategy and Roadmap", {
        slug: "ai-discovery-strategy-roadmap",
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
      // DRAFT copy — pending review
      item("AI Squad", {
        teaser: "A senior AI team, embedded with yours.",
        desc: "A dedicated squad of AI engineers who join your roadmap, ship alongside your team, and leave the systems and know-how behind when they hand over.",
        tags: ["Dedicated engineers", "Shared roadmap", "Knowledge transfer"],
        relatedCaseStudy: "go",
      }),
      // DRAFT copy — pending review
      item("One-Problem Automation", {
        teaser: "One costly manual task, automated end to end.",
        desc: "We pick the single repetitive task that costs your team the most hours, automate it end to end, and measure the time it gives back before taking on the next.",
        tags: ["Process mapping", "Automation build", "Time saved"],
        relatedCaseStudy: "sbaloans",
      }),
      // DRAFT copy — pending review
      item("AI Agents, Workflows & Automations", {
        teaser: "Agents that do real work inside your systems.",
        desc: "Agents and multi-step workflows that plan, call your tools, and complete work inside the systems you already run, with human approval where it matters.",
        tags: ["Tool calling", "Multi-step flows", "Human approval"],
        relatedCaseStudy: "go",
      }),
    ],
  },
  {
    slug: "solutions",
    number: "03",
    title: "Solutions",
    description: "Ready-to-adapt AI solutions for the problems most teams share.",
    items: [
      // DRAFT copy — pending review
      item("AI Receptionist", {
        teaser: "Every call and message answered, day or night.",
        desc: "An AI receptionist that answers calls and messages, books appointments, and routes anything urgent to the right person, around the clock.",
        tags: ["Call + chat answering", "Booking", "Smart routing"],
        relatedCaseStudy: "swerv",
      }),
      // DRAFT copy — pending review
      item("AI Customer Support", {
        teaser: "Support that answers from your own content.",
        desc: "Support assistants grounded in your help content and data, with clean hand-off to a human when a question needs one.",
        tags: ["Grounded answers", "Human hand-off", "Analytics"],
        relatedCaseStudy: "swerv",
      }),
      // DRAFT copy — pending review
      item("AI Document Intelligence & Conversational DB", {
        teaser: "Ask your documents and database in plain English.",
        desc: "Extract structured data from contracts, forms, and archives, and let your team query documents and databases in plain English, with every answer traced to its source.",
        tags: ["Document parsing", "Plain-English queries", "Source citations"],
        relatedCaseStudy: "quanta",
      }),
      // DRAFT copy — pending review
      item("Data Anonymization for AI", {
        teaser: "Use real data with AI, without exposing people.",
        desc: "We detect and mask personal and sensitive data before it reaches a model, so your team can use real records with AI and stay compliant.",
        tags: ["PII detection", "Masking pipeline", "Compliance"],
        relatedCaseStudy: "clauselens",
      }),
      // DRAFT copy — pending review
      item("Digital Marketing", {
        teaser: "AI-assisted campaigns that reach the right people.",
        desc: "Campaigns, content, and automation planned around your audience, with AI speeding up the work and reporting that shows what pays back.",
        tags: ["Campaign planning", "Content + automation", "Reporting"],
        relatedCaseStudy: "go",
      }),
    ],
  },
];

/** Running 01..15 number for a capability, used by the accordion rows. */
export const SERVICE_CAPABILITY_COUNT = SERVICE_CATEGORIES.reduce(
  (total, category) => total + category.items.length,
  0
);
