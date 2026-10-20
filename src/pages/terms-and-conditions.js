import * as React from "react";
import Header from "../components/Landing/Header";
import LegalPage from "../components/LegalPage";
import { TERMS_AND_CONDITIONS } from "../constants/legal/termsAndConditions";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

// No visible breadcrumb bar (the design has none) — these still drive the
// BreadcrumbList structured data in <head>.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Terms & Conditions", pathname: "/terms-and-conditions" },
];

const TermsAndConditionsPage = () => (
  <>
    <Header lightHero={true} />
    <main>
      <LegalPage policy={TERMS_AND_CONDITIONS} />
    </main>
    <Footer />
  </>
);

export default TermsAndConditionsPage;

export const Head = () => (
  <SEO
    title="Terms & Conditions - Arithmiks"
    description="The terms for using arithmiks.com and the basis on which Arithmiks discusses, scopes and quotes for software and AI work."
    pathname="/terms-and-conditions"
    breadcrumbItems={breadcrumbItems}
  />
);
