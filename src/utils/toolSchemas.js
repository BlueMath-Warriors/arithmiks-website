import { toolPath } from "../constants/toolRoutes";

const SITE_URL = "https://arithmiks.com";

/**
 * Build the standard JSON-LD schema set for a tool page:
 * SoftwareApplication + FAQPage + HowTo. Every tool under /tools/<slug>
 * reuses this so SEO stays consistent and future tools inherit it for free.
 *
 * Pass a tool entry from TOOL_ROUTES — fields used:
 *   slug, label, seoDescription, faq[], howToSteps[], schema{...}
 *
 * @param {object} tool
 * @returns {object[]} array of JSON-LD objects to pass to <SEO extraSchemas>
 */
export function buildToolSchemas(tool) {
  if (!tool) return [];
  const pageUrl = `${SITE_URL}${toolPath(tool.slug)}`;
  const s = tool.schema || {};
  const schemas = [];

  schemas.push({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: s.appName || `Arithmiks ${tool.label}`,
    applicationCategory: s.applicationCategory || "UtilityApplication",
    operatingSystem: "Any (web)",
    url: pageUrl,
    description: tool.seoDescription,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    ...(Array.isArray(s.featureList) && s.featureList.length > 0
      ? { featureList: s.featureList }
      : {}),
    creator: {
      "@type": "Organization",
      name: "Arithmiks",
      url: SITE_URL,
    },
  });

  if (Array.isArray(tool.faq) && tool.faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: tool.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    });
  }

  if (Array.isArray(tool.howToSteps) && tool.howToSteps.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: s.howToName || `How to use the ${tool.label}`,
      description: s.howToDescription || tool.seoDescription,
      ...(s.howToTotalTime ? { totalTime: s.howToTotalTime } : {}),
      ...(Array.isArray(s.howToSupplies) && s.howToSupplies.length > 0
        ? {
            supply: s.howToSupplies.map((name) => ({
              "@type": "HowToSupply",
              name,
            })),
          }
        : {}),
      ...(Array.isArray(s.howToTools) && s.howToTools.length > 0
        ? {
            tool: s.howToTools.map((name) => ({
              "@type": "HowToTool",
              name,
            })),
          }
        : {}),
      step: tool.howToSteps.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.name,
        text: step.text,
        url: `${pageUrl}#step-${i + 1}`,
      })),
    });
  }

  return schemas;
}
