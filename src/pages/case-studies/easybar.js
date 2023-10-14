import * as React from "react";
import EasyBar from "../../components/CaseStudy/Easybar"
import { SEO } from "../../components/seo";
const IndexPage = () => {
  return (
    <EasyBar/>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO
    title={"Easybar - Arithmiks"}
  />
);
