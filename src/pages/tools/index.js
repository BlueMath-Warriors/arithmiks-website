import * as React from "react";
import { SEO } from "../../components/seo";
import BandPageChrome from "../../components/shared/BandPageChrome";
import ToolsOverview from "../../components/ToolsOverview";
import { TOOL_ROUTES, toolPath } from "../../constants/toolRoutes";

// The design has no visible breadcrumb bar; the trail only feeds the
// BreadcrumbList structured data.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Tools", pathname: "/tools" },
];

const ToolsIndexPage = () => (
  <BandPageChrome>
    <ToolsOverview />
  </BandPageChrome>
);

export default ToolsIndexPage;

export const Head = () => {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free online tools by Arithmiks",
    itemListElement: TOOL_ROUTES.filter((t) => t.status === "live").map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tool.label,
      url: `https://arithmiks.com${toolPath(tool.slug)}`,
    })),
  };

  return (
    <SEO
      title="Free Online Tools - Arithmiks"
      description="Free online tools from Arithmiks: virus scanner, and more on the way. Practical utilities built by our engineering team — no signup, no tracking."
      pathname="/tools"
      breadcrumbItems={breadcrumbItems}
      extraSchemas={[itemListSchema]}
    />
  );
};
