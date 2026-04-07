import * as React from "react";
import * as containerStyles from "../styles/global.module.css";
import Header from "../components/Landing/Header";
import About from "../components/Landing/About-Section";
import Services from "../components/Landing/Services-Section";
import ContactUs from "../components/Landing/Contact-Us";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

const AboutPage = () => {
  return (
    <>
      <div className={containerStyles.header_div}>
        <Header white={true} fixed={true} />
      </div>
      <About />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
};

export default AboutPage;

export const Head = () => (
  <SEO
    title="About Arithmiks"
    description="Learn how Arithmiks builds customer-centric software—from product discovery to delivery—and explore our services, culture, and how we partner with teams worldwide."
    pathname="/about"
    breadcrumbItems={[
      { name: "Home", pathname: "/" },
      { name: "About", pathname: "/about" },
    ]}
  />
);
