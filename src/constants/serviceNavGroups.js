/**
 * The service taxonomy shown in the Header's Services mega-menu, the homepage
 * "What we do" cards, and the Footer — one source of truth for all three,
 * matching Homepage V2. SERVICE_CATEGORIES (the /services page) mirrors the
 * same groups with richer per-service copy; keep both in sync when a service
 * is added, renamed, or gets its own page.
 *
 * Services V2 dropped from the nav (Mobile App Development, AI Automation,
 * Cloud Engineering, …) keep their live pages — they are only unlisted here.
 * Services with no page yet still get an entry (hasPage: false) and link to "#".
 */
import { SERVICE_ROUTES, getServiceBySlug, servicePath } from "./serviceRoutes";

const slugify = (label) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const item = (label, slugOverride) => {
  const slug = slugOverride || slugify(label);
  return {
    label,
    slug,
    url: servicePath(slug),
    hasPage: Boolean(getServiceBySlug(slug)),
  };
};

// Category hubs have no page of their own yet; resolving through
// getServiceBySlug keeps this correct if one gets built later.
const category = ({ slug, title, icon, blurb, flagship = false }, items) => ({
  slug,
  title,
  icon,
  blurb,
  flagship,
  url: servicePath(slug),
  hasPage: Boolean(getServiceBySlug(slug)),
  items,
});

// Icon paths (24x24 viewBox) and blurbs are ported verbatim from the design.
export const SERVICE_NAV_GROUPS = [
  category(
    {
      slug: "ai-engineering-data",
      title: "AI Engineering & Data",
      icon: "M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 5c0 1.7 3.6 3 8 3s8-1.3 8-3M4 17c0 1.7 3.6 3 8 3s8-1.3 8-3M4 7v10m16-10v10",
      blurb: "From a first AI roadmap to agents and automations running in production.",
      flagship: true,
    },
    [
      // The label reads "and" in V2 but the live page keeps its "&" slug.
      item("AI Discovery, Strategy and Roadmap", "ai-discovery-strategy-roadmap"),
      item("AI MVP Development"),
      item("AI Squad"),
      item("One-Problem Automation"),
      // The label slugifies to "ai-agents-workflows-automations"; the live page
      // keeps its original route.
      item("AI Agents, Workflows & Automations", "ai-agents-workflows"),
    ]
  ),
  category(
    {
      slug: "software-development",
      title: "Software Development",
      icon: "M9 7 5 11l4 4M15 7l4 4-4 4",
      blurb: "Web and custom software, designed and shipped by senior engineers.",
    },
    [
      item("Web App Development"),
      item("Custom Software Development"),
      item("UI/UX Design", "ui-ux-design"),
      // The live route is /services/devops, not the label's own slug.
      item("DevOps Services", "devops"),
      // The entry opens the Mobile App Development page (a product decision),
      // so the Application Modernization page is listed only as an unlisted service.
      item("Application Modernisation", "mobile-app-development"),
    ]
  ),
  category(
    {
      slug: "solutions",
      title: "Solutions",
      icon: "M12 4 4 8l8 4 8-4-8-4Zm-8 8 8 4 8-4",
      blurb: "Ready-to-adapt AI solutions for the problems most teams share.",
    },
    [
      item("AI Receptionist"),
      item("AI Customer Support"),
      item("AI Document Intelligence & Conversational DB"),
      item("Data Anonymization for AI"),
      item("Digital Marketing"),
    ]
  ),
];

const NAV_SERVICE_SLUGS = new Set(
  SERVICE_NAV_GROUPS.flatMap((group) => group.items.map((svc) => svc.slug))
);

/**
 * Live service pages the nav no longer lists. The sitemap and site search
 * still surface them so they stay discoverable and crawlable.
 */
export const UNLISTED_SERVICES = SERVICE_ROUTES.filter(
  (route) => !NAV_SERVICE_SLUGS.has(route.slug)
).map((route) => ({ label: route.label, slug: route.slug, url: servicePath(route.slug) }));
