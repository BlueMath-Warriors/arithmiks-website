import * as React from "react";
import * as containerStyles from "../styles/global.module.css";
import Header from "../components/Landing/Header";
import CaseStudy from "../components/Landing/Case-Study";
import ContactUs from "../components/Landing/Contact-Us";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";
const IndexPage = () => {
  return (
    <>
      <div className={containerStyles.header_div}>
        <Header white={true} fixed={true}/>
      </div>
      <CaseStudy />
      <ContactUs />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO
    title={"Case Studies - Arithmiks"}
  />
);
