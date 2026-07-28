import * as React from "react";
import LandingPage from "../components/Landing";
import { SEO } from "../components/seo";
import heroBg from "../images/hero-bg.webp";

const IndexPage = () => {
  return <LandingPage />;
};

export default IndexPage;

export const Head = () => (
  <>
    <link rel="preload" as="image" href={heroBg} fetchpriority="high" />
    <SEO
      title="Arithmiks - Custom Software Development Company"
      description="Arithmiks is a customer-centric software development partner: web and mobile apps, custom software, UI/UX, and delivery practices that turn ideas into products users rely on."
      pathname="/"
    />
  </>
);
