import * as React from "react";
import Header from "../components/Landing/Header";
import ContactUs from "../components/Landing/Contact-Us";
import Footer from "../components/Landing/Footer";
import * as containerStyles from "../styles/global.module.css";
import { SEO } from "../components/seo";

const ContactPage = () => {
  return (
    <>
      <div className={containerStyles.header_div}>
        <Header white={true} />
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default ContactPage;

export const Head = () => (
  <SEO
    title="Contact - Arithmiks"
    description="If you have any questions, please e-mail us at services@arithmiks.com"
    pathname="/contact"
    breadcrumbItems={[
      { name: "Home", pathname: "/" },
      { name: "Contact", pathname: "/contact" },
    ]}
  />
);
