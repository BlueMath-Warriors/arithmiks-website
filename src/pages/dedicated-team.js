import * as React from "react";
import * as containerStyles from "../styles/global.module.css";
import DedicatedTeam from "../components/DedicatedTeam";
import { SEO } from "../components/seo";
const IndexPage = () => {
  return (
    <>
      <DedicatedTeam />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO
    title={"Dedicated Teams - Arithmiks"}
    description={
      "Experience the power of highly talented engineers working delicately on a project to unleash the excellence and deliverence."
    }
  />
);
