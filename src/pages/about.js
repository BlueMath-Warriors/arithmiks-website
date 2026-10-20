import * as React from "react";
import Header from "../components/Landing/Header";
import About from "../components/About";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

// No visible breadcrumb bar (the design has none) — these still drive the
// BreadcrumbList structured data in <head>.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "About", pathname: "/about" },
];

const AboutPage = () => (
  <>
    <Header lightHero={true} />
    <main>
      <About />
    </main>
    <Footer />
  </>
);

export default AboutPage;

export const Head = () => (
  <SEO
    title="About Arithmiks"
    description="Learn how Arithmiks builds customer-centric software—from product discovery to delivery—and explore our services, culture, and how we partner with teams worldwide."
    pathname="/about"
    breadcrumbItems={breadcrumbItems}
  />
);
