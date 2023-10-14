import * as React from "react";
import LandingPage from "../components/Landing";
import { SEO } from "../components/seo";

const IndexPage = () => {
  return <LandingPage />;
};

export default IndexPage;

export const Head = () => <SEO />;
