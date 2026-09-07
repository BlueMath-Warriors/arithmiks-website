/**
 * The full service taxonomy shown in the Header's Services mega-menu, the
 * homepage "What we do" accordion, and the Footer — one source of truth for
 * all three, matching the redesigned homepage. This is intentionally
 * separate from SERVICE_CATEGORIES (which powers the /services index page
 * with a different shape and a different, smaller grouping) — the two are
 * not interchangeable and diverged on purpose when the homepage adopted a
 * more granular taxonomy than the /services page currently has content for.
 *
 * Slugs with no dedicated page yet still get an entry (hasPage: false) so
 * nav/footer render correctly; see the deferred-pages list in
 * docs/superpowers/specs/2026-09-07-homepage-redesign-design.md (§8) for
 * what still needs building.
 */
import { getServiceBySlug, servicePath } from "./serviceRoutes";

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

export const SERVICE_NAV_GROUPS = [
  {
    slug: "ai-engineering-data",
    title: "AI Engineering & Data",
    url: servicePath("ai-engineering-data"),
    items: [
      item("AI Discovery, Strategy & Roadmap"),
      item("AI MVP Development"),
      item("AI Agents & Workflows"),
      item("AI Data Engineering"),
      item("AI Automation"),
      item("AI Knowledge Extraction"),
      item("MLOps & AI Infrastructure"),
      item("Data Pre-processing"),
      item("Data Modeling & Analytics"),
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    url: servicePath("software-development"),
    items: [
      item("Web App Development", "web-app-development"),
      item("Mobile App Development", "mobile-app-development"),
      item("Custom Software Development", "custom-software-development"),
      item("UI/UX Design", "ui-ux-design"),
      item("DevOps Services", "devops-services"),
    ],
  },
  {
    slug: "solutions",
    title: "Solutions",
    url: servicePath("solutions"),
    items: [
      item("AI & ML Solutions"),
      item("AI Chatbots & Customer Support"),
      item("Cloud Engineering"),
      item("Cloud Infra Management"),
      item("Digital Transformation"),
      item("eCommerce Development"),
    ],
  },
  {
    slug: "product-engineering",
    title: "Product Engineering",
    url: servicePath("product-engineering"),
    items: [
      item("Product Discovery"),
      item("Interactive Product Designing"),
      item("POC Development"),
      item("Product Development"),
      item("Application Modernization"),
      item("Software Re-engineering"),
    ],
  },
];
