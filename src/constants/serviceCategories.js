/**
 * The four service groups and their 18 capabilities, as shown on /services.
 *
 * Every capability carries the copy the /services accordion renders: a one-line
 * `teaser`, the full `desc`, the "what you get" `tags`, and `relatedCaseStudy`
 * (a real slug from Case-Study/caseStudies.js) for its related-work link.
 *
 * `url` resolves through serviceRoutes, so the six capabilities that have a
 * page link to it and the twelve that do not fall back to "#" until those
 * pages exist — the same convention the Footer uses for unbuilt routes.
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
  "software-development": "M6.5 5 2.5 9l4 4M11.5 5l4 4-4 4",
  "data-and-ai":
    "M3 5.4c0-1.35 2.7-2.4 6-2.4s6 1.05 6 2.4-2.7 2.4-6 2.4-6-1.05-6-2.4Zm0 3.6c0 1.35 2.7 2.4 6 2.4s6-1.05 6-2.4m-12 3.6c0 1.35 2.7 2.4 6 2.4s6-1.05 6-2.4",
  solutions: "M3 6.6 9 3.6l6 3-6 3-6-3Zm0 4.8 6 3 6-3",
  "product-engineering":
    "M9 3.2a5.8 5.8 0 1 0 0 11.6 5.8 5.8 0 0 0 0-11.6Zm0 4a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Z",
};

export const SERVICE_CATEGORIES = [
  {
    slug: "software-development",
    number: "01",
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
        relatedCaseStudy: "hakro",
      }),
      item("Software Quality Assurance", {
        teaser: "Test strategy and automation coverage.",
        desc: "Manual and automated testing built into delivery—test strategy, regression coverage, and release sign-off so quality is not the last thing anyone checks.",
        tags: ["Test strategy", "Automation suite", "Release sign-off"],
        relatedCaseStudy: "quanta",
      }),
      item("DevOps", {
        teaser: "CI/CD, observability, infrastructure as code.",
        desc: "CI/CD, observability, infrastructure as code, and release practices that shorten lead times while keeping production stable and auditable.",
        tags: ["CI/CD pipelines", "Observability", "IaC"],
        relatedCaseStudy: "go",
      }),
    ],
  },
  {
    slug: "data-and-ai",
    number: "02",
    title: "Data & AI",
    description: "From raw data to production-ready intelligence.",
    items: [
      item("AI & Data Solutions", {
        slug: "ai-data-solutions",
        teaser: "Preparation, modeling, MLOps-minded delivery.",
        desc: "Data preparation, modeling, MLOps-minded delivery, and visualization so stakeholders can act on reliable metrics and intelligent features.",
        tags: ["MLOps delivery", "Model evaluation", "Reliable metrics"],
        relatedCaseStudy: "go",
      }),
      item("Data Pre-Processing", {
        teaser: "Cleaning and structuring raw sources.",
        desc: "Cleaning, labelling, and structuring raw sources into datasets a model can actually learn from—with the pipeline documented and repeatable.",
        tags: ["Cleaning + labelling", "Pipelines", "Documentation"],
        relatedCaseStudy: "media-infrastructure",
      }),
      item("Data Modeling", {
        teaser: "Models built against your real questions.",
        desc: "Feature engineering, model selection, and evaluation against the questions your business actually asks—not benchmark scores in isolation.",
        tags: ["Feature engineering", "Evaluation", "Iteration"],
        relatedCaseStudy: "qareeb",
      }),
      item("Results & Visualizations", {
        teaser: "Dashboards stakeholders trust.",
        desc: "Dashboards and reporting layers that turn model output into decisions, with the definitions behind every number written down.",
        tags: ["Dashboards", "Reporting layer", "Metric definitions"],
        relatedCaseStudy: "quanta",
      }),
    ],
  },
  {
    slug: "solutions",
    number: "03",
    title: "Solutions",
    description: "Infrastructure, support, and delivery that keep teams moving.",
    items: [
      item("Cloud Infrastructure Management", {
        teaser: "AWS, Azure, or GCP—provisioned and secured.",
        desc: "Provisioning, scaling, and securing cloud environments on AWS, Azure, or GCP.",
        tags: ["Provisioning", "Cost + scaling", "Security baseline"],
        relatedCaseStudy: "sbaloans",
      }),
      item("Project Management", {
        teaser: "On scope, on budget, on time.",
        desc: "Dedicated PM support keeping delivery on scope, on budget, and on time.",
        tags: ["Dedicated PM", "Roadmap", "Reporting cadence"],
        relatedCaseStudy: "togather",
      }),
      item("Technical Support", {
        teaser: "Nothing breaks quietly after launch.",
        desc: "Ongoing maintenance and support after launch, so nothing breaks quietly.",
        tags: ["Maintenance", "Monitoring", "SLA options"],
        relatedCaseStudy: "hakro",
      }),
      item("Digital Transformation", {
        teaser: "Legacy processes into connected workflows.",
        desc: "Modernizing legacy processes and systems into connected digital workflows.",
        tags: ["Process mapping", "Systems audit", "Migration plan"],
        relatedCaseStudy: "easybar",
      }),
    ],
  },
  {
    slug: "product-engineering",
    number: "04",
    title: "Product Engineering",
    description: "Discovery-to-MVP work that gets ideas into users' hands.",
    items: [
      item("Product Discovery", {
        teaser: "De-risk what you build before you build it.",
        desc: "Research and validation that de-risk what you build before you build it.",
        tags: ["User research", "Validation", "Scope options"],
        relatedCaseStudy: "expat",
      }),
      item("Interactive Prototyping", {
        teaser: "Clickable prototypes for testing and pitching.",
        desc: "Clickable prototypes for testing flows and pitching stakeholders early.",
        tags: ["Clickable flows", "User testing", "Pitch-ready"],
        relatedCaseStudy: "ofertas",
      }),
      item("MVP", {
        teaser: "A lean first version, scoped to prove the idea.",
        desc: "A lean, launchable first version scoped to prove the idea fast.",
        tags: ["Scoped build", "Launch plan", "Feedback loop"],
        relatedCaseStudy: "lfgo",
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

/** Running 01..18 number for a capability, used by the accordion rows. */
export const SERVICE_CAPABILITY_COUNT = SERVICE_CATEGORIES.reduce(
  (total, category) => total + category.items.length,
  0
);
