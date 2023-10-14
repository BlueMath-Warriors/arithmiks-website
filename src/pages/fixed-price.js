import * as React from "react";
import * as containerStyles from "../styles/global.module.css";
import FixedPrice from "../components/FixedPrice";
import { SEO } from "../components/seo";
const IndexPage = () => {
  return (
    <>
      <FixedPrice />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO
    title={"Fixed Price Projects - Arithmiks"}
    description={
      "Your Vision, Our Fixed-Price Precision. It is well-suited for projects with clear requirements and short time-to-market."
    }
  />
);
