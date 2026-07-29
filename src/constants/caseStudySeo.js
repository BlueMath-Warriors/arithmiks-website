/**
 * Per–case study SEO: titles and descriptions for `/case-studies/<slug>`.
 * Keep in sync with `src/pages/case-studies/<slug>.js`; slugs must match filenames.
 */

const CASE_STUDY_SEO = {
  hakro: {
    title: "E-Commerce Platform Case Study | Hakro & Arithmiks",
    breadcrumbName: "Hakro",
    description:
      "Read this case study to see how Arithmiks built an embedded e-commerce platform for Hakro, letting dealers buy bulk products directly from seller sessions.",
  },
  easybar: {
    title: "ConTech Automation Case Study | Easybar & Arithmiks",
    breadcrumbName: "Easybar",
    description:
      "Read this case study to see how Arithmiks automated rebar design and ordering for Easybar, connecting buyers and suppliers on one platform.",
  },
  expat: {
    title: "AI Platform Case Study | Expat Haven Hub & Arithmiks",
    breadcrumbName: "Expat Haven Hub",
    description:
      "Read this case study to see how Arithmiks built an AI-powered, gamified platform helping digital nomads and expats access lifestyle insights.",
  },
  ofertas: {
    title: "Deal Discovery Case Study | Ofertas & Arithmiks",
    breadcrumbName: "Ofertas",
    description:
      "Read this case study to see how Arithmiks built Ofertas, a community-driven platform for discovering affiliate deals and coupons.",
  },
  togather: {
    title: "Community Platform Case Study | Togather & Arithmiks",
    breadcrumbName: "Togather",
    description:
      "Read this case study to see how Arithmiks built Togather, a platform helping churches and NGOs unify events, donations, and community engagement.",
  },
  go: {
    title: "Marketing Automation Case Study | GO & Arithmiks",
    breadcrumbName: "GO",
    description:
      "Read this case study to see how Arithmiks built an AI-powered marketing automation platform that handles content, publishing, and ads for agencies.",
  },
  swerv: {
    title: "SaaS Development Case Study | Swerv Automotive & Arithmiks",
    breadcrumbName: "Swerv",
    description:
      "Read this case study to see how Arithmiks built a SaaS platform for Swerv Automotive to automate vehicle acquisitions and centralize dealer data.",
  },
  sbaloans: {
    title: "FinTech Lending Case Study | sbaloansHQ & Arithmiks",
    breadcrumbName: "sbaloansHQ",
    description:
      "Read this case study to see how Arithmiks streamlined SBA loan processing for sbaloansHQ with centralized documents, tracking, and communication.",
  },
  lfgo: {
    title: "Web3 Platform Case Study | LFGO & Arithmiks",
    breadcrumbName: "LFGO",
    description:
      "Read this case study to see how Arithmiks built LFGO, a cross-chain token platform with seamless minting, launching, and wallet integration.",
  },
  qareeb: {
    title: "AI Meeting Intelligence Case Study | Qareeb & Arithmiks",
    breadcrumbName: "Qareeb",
    description:
      "Read this case study to see how Arithmiks built a bilingual AI meeting intelligence platform for Qareeb, turning conversations into a searchable knowledge base.",
  },
  mrsellernote: {
    title: "Loan Management Case Study | Mr. Seller Note & Arithmiks",
    breadcrumbName: "Mr. Seller Note",
    description:
      "Read this case study to see how Arithmiks automated multi-party loan management for Mr. Seller Note, from note creation to final settlement.",
  },
};

/** @param {string} slug */
export const getCaseStudySeo = (slug) => CASE_STUDY_SEO[slug] ?? null;
