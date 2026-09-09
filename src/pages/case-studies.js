import * as React from "react";
import Header from "../components/Landing/Header";
import CaseStudiesIndex from "../components/CaseStudiesIndex";
import BookingFlow from "../components/Landing/Contact-Us/Booking-Flow";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

// The visible breadcrumb bar is intentionally absent (the design has none) —
// these still drive the BreadcrumbList structured data in <head>.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
];

const CaseStudiesPage = () => {
  return (
    <>
      <Header white={true} />
      <main>
        <CaseStudiesIndex />
        <BookingFlow />
      </main>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;

export const Head = () => (
  <SEO
    title="Case Studies - Arithmiks"
    description="Selected client work from Arithmiks: case studies across fintech, automotive, marketplaces, and internal platforms—discovery through delivery."
    pathname="/case-studies"
    breadcrumbItems={breadcrumbItems}
  />
);
