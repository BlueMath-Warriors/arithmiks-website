import * as React from "react";
import Header from "../components/Landing/Header";
import Industries from "../components/Industries";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

// No visible breadcrumb bar (the design has none) — these still drive the
// BreadcrumbList structured data in <head>.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Industries", pathname: "/industries" },
];

const IndustriesPage = () => (
  <>
    <Header lightHero={true} />
    <main>
      <Industries />
    </main>
    <Footer />
  </>
);

export default IndustriesPage;

export const Head = () => (
  <SEO
    title="Industries - Arithmiks"
    description="AI products built for lenders, dealers, retailers, legal teams, SaaS platforms, agencies, broadcasters and fabricators — each started from the industry's real constraints and measured by what it changed."
    pathname="/industries"
    breadcrumbItems={breadcrumbItems}
  />
);
