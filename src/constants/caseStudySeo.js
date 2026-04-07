/**
 * Per–case study SEO: titles and descriptions for `/case-studies/<slug>`.
 * Keep in sync with `src/pages/case-studies/<slug>.js`; slugs must match filenames.
 */

const CASE_STUDY_SEO = {
  hakro: {
    title: "Hakro - Arithmiks",
    breadcrumbName: "Hakro",
    description:
      "Case study: how Arithmiks partnered with Hakro on product discovery, engineering, and delivery for a scalable software initiative.",
  },
  easybar: {
    title: "Easybar - Arithmiks",
    breadcrumbName: "Easybar",
    description:
      "Case study: custom platform work for Easybar—UX, implementation, and integrations aligned with business goals.",
  },
  expat: {
    title: "Expat Haven Hub - Arithmiks",
    breadcrumbName: "Expat Haven Hub",
    description:
      "Case study: Expat Haven Hub—building digital experiences for expat communities with Arithmiks.",
  },
  ofertas: {
    title: "Ofertas - Arithmiks",
    breadcrumbName: "Ofertas",
    description:
      "Case study: Ofertas—software delivery, product support, and engineering collaboration with Arithmiks.",
  },
  togather: {
    title: "Togather - Arithmiks",
    breadcrumbName: "Togather",
    description:
      "Case study: Togather—end-to-end design and development partnership with Arithmiks.",
  },
  go: {
    title: "GO - Arithmiks",
    breadcrumbName: "GO",
    description:
      "Case study: GO—custom software delivery and product engineering with Arithmiks.",
  },
  swerv: {
    title: "Swerv - Arithmiks",
    breadcrumbName: "Swerv",
    description:
      "Case study: Swerv Automotive—digital product development and engineering support.",
  },
  sbaloans: {
    title: "sbaloansHQ - Arithmiks",
    breadcrumbName: "sbaloansHQ",
    description:
      "Case study: sbaloansHQ—fintech and lending platform design and development with Arithmiks.",
  },
  lfgo: {
    title: "LFGO - Arithmiks",
    breadcrumbName: "LFGO",
    description:
      "Case study: LFGO—building and shipping product capabilities together with Arithmiks.",
  },
};

/** @param {string} slug */
export const getCaseStudySeo = (slug) => CASE_STUDY_SEO[slug] ?? null;
