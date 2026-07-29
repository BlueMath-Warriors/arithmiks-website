import * as React from "react";
import * as containerStyles from "../styles/global.module.css";
import Header from "../components/Landing/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import CaseStudy from "../components/Landing/Case-Study";
import ContactUs from "../components/Landing/Contact-Us";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
];

const IndexPage = () => {
  return (
    <>
      <div className={containerStyles.header_div}>
        <Header white={true} fixed={true}/>
      </div>
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        <CaseStudy titleAs="h1" />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO
    title="Case Studies - Arithmiks"
    description="Selected client work from Arithmiks: case studies across fintech, automotive, marketplaces, and internal platforms—discovery through delivery."
    pathname="/case-studies"
    breadcrumbItems={breadcrumbItems}
  />
);
