import * as React from "react";
import Header from "../components/Landing/Header";
import LegalPage from "../components/LegalPage";
import { AI_USAGE_POLICY } from "../constants/legal/aiUsagePolicy";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

// No visible breadcrumb bar (the design has none) — these still drive the
// BreadcrumbList structured data in <head>.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "AI Usage Policy", pathname: "/ai-usage-policy" },
];

const AiUsagePolicyPage = () => (
  <>
    <Header lightHero={true} />
    <main>
      <LegalPage policy={AI_USAGE_POLICY} />
    </main>
    <Footer />
  </>
);

export default AiUsagePolicyPage;

export const Head = () => (
  <SEO
    title="AI Usage Policy - Arithmiks"
    description="How Arithmiks uses AI in its own work and in the products it builds, how client data is protected, and the uses we decline."
    pathname="/ai-usage-policy"
    breadcrumbItems={breadcrumbItems}
  />
);
