import * as React from "react";
import Header from "../components/Landing/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactUs from "../components/Landing/Contact-Us";
import Footer from "../components/Landing/Footer";
import * as containerStyles from "../styles/global.module.css";
import { SEO } from "../components/seo";

const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Contact", pathname: "/contact" },
];

const ContactPage = () => {
  return (
    <>
      <div className={containerStyles.header_div}>
        <Header white={true} />
      </div>
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        <ContactUs primaryTitleAs="h1" />
      </main>
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
    breadcrumbItems={breadcrumbItems}
  />
);
