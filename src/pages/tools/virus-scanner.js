import * as React from "react";
import { SEO } from "../../components/seo";
import ToolPage from "../../components/ToolPage";
import VirusScanner from "../../components/VirusScanner";
import { getToolBySlug, toolPath } from "../../constants/toolRoutes";

const slug = "virus-scanner";
const tool = getToolBySlug(slug);

const VirusScannerPage = () => (
  <ToolPage
    slug={slug}
    headline={tool.headline}
    intro={tool.intro}
    trustBadges={[
      "ClamAV + YARA + AI",
      "Up to 1 GB",
      "Deleted after scan",
      "No signup",
    ]}
    faq={tool.faq}
  >
    <VirusScanner howToSteps={tool.howToSteps} />
  </ToolPage>
);

export default VirusScannerPage;

const siteUrl = "https://arithmiks.com";
const pageUrl = `${siteUrl}${toolPath(slug)}`;

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Arithmiks Virus Scanner",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Any (web)",
  url: pageUrl,
  description: tool.seoDescription,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "ClamAV signature scanning",
    "YARA behavioral rule matching",
    "AI-assisted threat analysis",
    "Archive inspection with nested paths",
    "Files deleted after scan",
  ],
  creator: {
    "@type": "Organization",
    name: "Arithmiks",
    url: siteUrl,
  },
};

const faqSchema = {
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
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to scan a file for viruses online",
  description:
    "Step-by-step guide to check any file for malware using the Arithmiks virus scanner.",
  totalTime: "PT1M",
  supply: [{ "@type": "HowToSupply", name: "A file you want to scan" }],
  tool: [{ "@type": "HowToTool", name: "A web browser" }],
  step: tool.howToSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
    url: `${pageUrl}#step-${i + 1}`,
  })),
};

export const Head = () => (
  <SEO
    title={tool.seoTitle}
    description={tool.seoDescription}
    pathname={toolPath(slug)}
    breadcrumbItems={[
      { name: "Home", pathname: "/" },
      { name: "Tools", pathname: "/tools" },
      { name: tool.label, pathname: toolPath(slug) },
    ]}
    extraSchemas={[softwareApplicationSchema, faqSchema, howToSchema]}
  >
    <meta name="keywords" content={tool.keywords.join(", ")} />
  </SEO>
);
