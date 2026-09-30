import { SERVICE_NAV_GROUPS } from "./serviceNavGroups";

/**
 * Sitemap page content. A link is one of:
 *  - { label, to }        an internal page
 *  - { label, external }  an off-site URL (opens in a new tab, marked ↗)
 *  - { label }            a page that does not exist yet (renders href="#",
 *                         the same convention the Footer uses)
 *
 * `column` (0-3) is where the design places the block on wide screens; the
 * blocks stay in the order below within a column.
 */

const SERVICES_INDEX_PATH = "/services";
const CASE_STUDIES_INDEX_PATH = "/case-studies";

const SERVICE_BLOCK_COLUMNS = {
  "ai-engineering-data": 0,
  "software-development": 0,
  solutions: 0,
  "product-engineering": 1,
};

const serviceBlocks = SERVICE_NAV_GROUPS.map((category, index) => {
  const links = category.items.map((service) =>
    service.hasPage ? { label: service.label, to: service.url } : { label: service.label }
  );
  return {
    id: index === 0 ? "services" : `services-${category.slug}`,
    title: category.title,
    to: SERVICES_INDEX_PATH,
    column: SERVICE_BLOCK_COLUMNS[category.slug],
    links: index === 0 ? [{ label: "Services overview", to: SERVICES_INDEX_PATH }, ...links] : links,
  };
});

export const BLOG_BLOCK_ID = "blog";

export const SITEMAP_BLOCKS = [
  ...serviceBlocks,
  {
    id: "products",
    title: "Our products",
    column: 1,
    links: [
      { label: "Quanta — BI platform", to: "/case-studies/quanta" },
      { label: "ClauseLens — AI contract review", to: "/case-studies/clauselens" },
      { label: "quanta.arithmiks.com", external: "https://quanta.arithmiks.com" },
      { label: "clauselens.arithmiks.com", external: "https://clauselens.arithmiks.com" },
    ],
  },
  {
    id: "work",
    title: "Work",
    to: "/clients",
    column: 1,
    links: [
      { label: "Clients", to: "/clients" },
      { label: "Industries", to: "/industries" },
    ],
  },
  {
    id: "casestudies",
    title: "Case studies",
    to: CASE_STUDIES_INDEX_PATH,
    column: 2,
    // Hakro has no page of its own, so it lands on the index.
    links: [
      { label: "AI-Powered Marketing Automation Platform", to: "/case-studies/go" },
      { label: "Searchable Broadcast Video Archive", to: "/case-studies/media-infrastructure" },
      { label: "Embedded E-Commerce Experience", to: CASE_STUDIES_INDEX_PATH },
      { label: "SBA Loan Processing Platform", to: "/case-studies/sbaloans" },
      { label: "Rebar Estimating & Fabrication Platform", to: "/case-studies/easybar" },
      { label: "Dealer Inventory Intelligence", to: "/case-studies/swerv" },
      { label: "Community Deals Marketplace", to: "/case-studies/ofertas" },
      { label: "Quanta — BI platform", to: "/case-studies/quanta" },
      { label: "ClauseLens — AI contract review", to: "/case-studies/clauselens" },
    ],
  },
  {
    id: "engagement",
    title: "Engagement models",
    to: "/how-we-work#models",
    column: 1,
    // Same list as the Footer, which remaps the design's models to the pages this site has.
    links: [
      { label: "AI readiness audit" },
      { label: "Fixed-scope project", to: "/fixed-price" },
      { label: "Dedicated team", to: "/dedicated-team" },
      { label: "Staff augmentation" },
    ],
  },
  {
    id: "company",
    title: "Company",
    to: "/about",
    column: 2,
    links: [
      { label: "About", to: "/about" },
      { label: "How we work", to: "/how-we-work" },
      { label: "Careers", to: "/careers" },
      { label: "Open roles", to: "/careers#roles" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    id: BLOG_BLOCK_ID,
    title: "Arithmiks Blog",
    to: "/blogs",
    column: 3,
    // Filled from the real posts at render time.
    links: [],
  },
  {
    id: "resources",
    title: "Resources",
    column: 2,
    links: [{ label: "Insights" }, { label: "AI readiness report" }, { label: "Search" }],
  },
  {
    id: "legal",
    title: "Legal",
    to: "/privacy-policy",
    column: 3,
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms-and-conditions" },
      { label: "AI Usage Policy", to: "/ai-usage-policy" },
      { label: "Cookie Policy", to: "/privacy-policy#cookies" },
      { label: "Sitemap", to: "/sitemap" },
    ],
  },
];

export const SITEMAP_COLUMN_COUNT = 4;
