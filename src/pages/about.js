import * as React from "react";
import * as containerStyles from "../styles/global.module.css";
import Header from "../components/Landing/Header";
import About from "../components/Landing/About-Section";
import Services from "../components/Landing/Services-Section";
import ContactUs from "../components/Landing/Contact-Us";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

const pageTitleStyle = {
  fontFamily: "Poppins, sans-serif",
  fontSize: "clamp(2rem, 4vw, 2.75rem)",
  fontWeight: 700,
  color: "#061237",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  margin: 0,
};

const aboutIntroStyle = {
  paddingTop: "120px",
  paddingBottom: "24px",
  paddingLeft: "24px",
  paddingRight: "24px",
  maxWidth: "1120px",
  margin: "0 auto",
};

const AboutPage = () => {
  return (
    <>
      <div className={containerStyles.header_div}>
        <Header white={true} fixed={true} />
      </div>
      <main style={aboutIntroStyle}>
        <h1 style={pageTitleStyle}>About Arithmiks</h1>
      </main>
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
