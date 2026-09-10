/**
 * Site-wide search index and ranking, shared by the header's search overlay
 * and the mobile menu's inline search — one index, one ranking rule, built
 * once and reused. Ranking matches the design source: a prefix match on the
 * title outranks a mid-title match, which outranks a category match, which
 * outranks a description match.
 */
import { SERVICE_NAV_GROUPS } from "./serviceNavGroups";
import { PRODUCTS } from "./products";
import { caseStudies } from "../components/Landing/Case-Study/caseStudies.js";

const PAGES = [
  { title: "About", cat: "Page", desc: "Who we are and how we got here.", url: "/about" },
  { title: "Contact", cat: "Page", desc: "Start a conversation with us.", url: "/contact" },
  {
    title: "Case Studies",
    cat: "Page",
    desc: "Real products we have shipped for clients.",
    url: "/case-studies",
  },
  { title: "Blog", cat: "Page", desc: "What we are learning about shipping AI.", url: "/blogs" },
];

export const buildSearchIndex = () => {
  const caseStudyItems = caseStudies.map((c) => ({
    title: c.title,
    cat: c.tag,
    desc: c.description,
    url: c.hasDetailPage ? `/case-studies/${c.slug}` : "/case-studies",
    img: c.dashboardImg,
  }));

  const serviceItems = SERVICE_NAV_GROUPS.flatMap((category) => [
    {
      title: category.title,
      cat: "Services",
      desc: `Every service under ${category.title}.`,
      url: category.hasPage ? category.url : "#",
      img: null,
    },
    ...category.items.map((svc) => ({
      title: svc.label,
      cat: category.title,
      desc: `Part of ${category.title}.`,
      url: svc.hasPage ? svc.url : "#",
      img: null,
    })),
  ]);

  const productItems = PRODUCTS.map((p) => ({
    title: p.name,
    cat: "Product",
    desc: p.description,
    url: p.caseStudyUrl,
    img: null,
  }));

  return [...caseStudyItems, ...serviceItems, ...productItems, ...PAGES];
};

const MAX_RESULTS = 12;

/** @param {ReturnType<typeof buildSearchIndex>} index @param {string} query */
export const searchSite = (index, query) => {
  const term = query.trim().toLowerCase();
  if (!term) return [];

  return index
    .map((it) => {
      const title = it.title.toLowerCase();
      const cat = it.cat.toLowerCase();
      const desc = it.desc.toLowerCase();
      let score = 0;
      if (title.indexOf(term) === 0) score = 100;
      else if (title.indexOf(term) > -1) score = 70;
      else if (cat.indexOf(term) > -1) score = 40;
      else if (desc.indexOf(term) > -1) score = 20;
      return { item: it, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS)
    .map((x) => x.item);
};
