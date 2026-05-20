import * as React from "react";
import { SEO } from "../../components/seo";
import ToolPage from "../../components/ToolPage";
import VirusScanner from "../../components/tools/VirusScanner";
import { getToolBySlug, toolPath } from "../../constants/toolRoutes";
import { buildToolSchemas } from "../../utils/toolSchemas";

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
    extraSchemas={buildToolSchemas(tool)}
  >
    <meta name="keywords" content={tool.keywords.join(", ")} />
  </SEO>
);
