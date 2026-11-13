import * as React from "react";
import { SEO } from "../../components/seo";
import BandPageChrome from "../../components/shared/BandPageChrome";
import VirusScanner from "../../components/tools/VirusScanner";
import { getToolBySlug, toolPath } from "../../constants/toolRoutes";
import { buildToolSchemas } from "../../utils/toolSchemas";

const slug = "virus-scanner";
const tool = getToolBySlug(slug);

// The design has no visible breadcrumb bar; the trail only feeds the
// BreadcrumbList structured data.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Tools", pathname: "/tools" },
  { name: tool.label, pathname: toolPath(slug) },
];

const VirusScannerPage = () => (
  <BandPageChrome darkHero>
    <VirusScanner tool={tool} />
  </BandPageChrome>
);

export default VirusScannerPage;

export const Head = () => (
  <SEO
    title={tool.seoTitle}
    description={tool.seoDescription}
    pathname={toolPath(slug)}
    breadcrumbItems={breadcrumbItems}
    extraSchemas={buildToolSchemas(tool)}
  >
    <meta name="keywords" content={tool.keywords.join(", ")} />
  </SEO>
);
