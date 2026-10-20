import * as React from "react";
import Header from "../components/Landing/Header";
import LegalPage from "../components/LegalPage";
import { COPYRIGHT_NOTICE } from "../constants/legal/copyright";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

// No visible breadcrumb bar (the design has none) — these still drive the
// BreadcrumbList structured data in <head>.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Copyright", pathname: "/copyright" },
];

const CopyrightPage = () => (
  <>
    <Header lightHero={true} />
    <main>
      <LegalPage policy={COPYRIGHT_NOTICE} />
    </main>
    <Footer />
  </>
);

export default CopyrightPage;

export const Head = () => (
  <SEO
    title="Copyright Notice - Arithmiks"
    description="Who owns the content on arithmiks.com, what you may reuse, how client work appears on the site, and how to report infringement."
    pathname="/copyright"
    breadcrumbItems={breadcrumbItems}
  />
);
