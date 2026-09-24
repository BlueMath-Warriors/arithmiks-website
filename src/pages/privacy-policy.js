import * as React from "react";
import Header from "../components/Landing/Header";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

// No visible breadcrumb bar (the design has none) — these still drive the
// BreadcrumbList structured data in <head>.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Privacy Policy", pathname: "/privacy-policy" },
];

const PrivacyPolicyPage = () => (
  <>
    <Header lightHero={true} />
    <main>
      <PrivacyPolicy />
    </main>
    <Footer />
  </>
);

export default PrivacyPolicyPage;

export const Head = () => (
  <SEO
    title="Privacy Policy - Arithmiks"
    description="What information Arithmiks collects, why we collect it, how we use and protect it, and the choices you have."
    pathname="/privacy-policy"
    breadcrumbItems={breadcrumbItems}
  />
);
