import * as React from "react";
import { Link } from "gatsby";
import Header from "../../components/Landing/Header";
import Footer from "../../components/Landing/Footer";
import * as containerStyles from "../../styles/global.module.css";
import { SEO } from "../../components/seo";
import { SERVICE_ROUTES, servicePath } from "../../constants/serviceRoutes";

const mainStyle = {
  padding: "8rem 1.5rem 4rem",
  maxWidth: "42rem",
  margin: "0 auto",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const itemStyle = { marginBottom: "0.75rem" };

const introStyle = { marginBottom: "2rem", lineHeight: 1.6 };

const ServicesIndexPage = () => (
  <>
    <div className={containerStyles.header_div}>
      <Header white={true} fixed={true} />
    </div>
    <main style={mainStyle}>
      <h1 style={{ marginBottom: "1.5rem" }}>Services</h1>
      <p style={introStyle}>
        Explore how we help teams ship reliable software—from web and mobile
        applications to UI/UX, DevOps, and AI-ready data workflows.
      </p>
      <ul style={listStyle}>
        {SERVICE_ROUTES.map((s) => (
          <li key={s.slug} style={itemStyle}>
            <Link to={servicePath(s.slug)}>{s.label}</Link>
          </li>
        ))}
      </ul>
    </main>
    <Footer />
  </>
);

export default ServicesIndexPage;

export const Head = () => (
  <SEO
    title="Services - Arithmiks"
    description="Arithmiks services: web and mobile development, custom software, UI/UX design, DevOps, and AI and data solutions—built for scale and long-term maintainability."
    pathname="/services"
    breadcrumbItems={[
      { name: "Home", pathname: "/" },
      { name: "Services", pathname: "/services" },
    ]}
  />
);
