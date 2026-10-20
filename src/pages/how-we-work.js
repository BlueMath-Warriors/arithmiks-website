import * as React from "react";
import Header from "../components/Landing/Header";
import HowWeWork from "../components/HowWeWork";
import { isStageHeroActive } from "../components/HowWeWork/Hero";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

// No visible breadcrumb bar (the design has none) — these still drive the
// BreadcrumbList structured data in <head>.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "How we work", pathname: "/how-we-work" },
];

const HowWeWorkPage = () => (
  <>
    <Header lightHero={true} transparentWhile={isStageHeroActive} />
    <main>
      <HowWeWork />
    </main>
    <Footer />
  </>
);

export default HowWeWorkPage;

export const Head = () => (
  <SEO
    title="How We Work - Arithmiks"
    description="How Arithmiks takes a product from first call to production: five stages, one senior team, a working artefact at every step, and four engagement models compared side by side."
    pathname="/how-we-work"
    breadcrumbItems={breadcrumbItems}
  />
);
