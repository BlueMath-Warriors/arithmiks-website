import React from "react";

import SbaloansFeature from "../KeyFeatures/Feaature";
import Problem from "./Problem";

const SbaloansOverView = () => {
  return (
    <>
      <SbaloansFeature
        left={false}
        overview={true}
        title={"Overview"}
        caption={
          <>
            <span style={{ color: "#000000" }}>Project</span>{" "}
            <span style={{ color: "#0957DE" }}>Overview</span>
          </>
        }
        detail={
          "SBA Loans HQ is a SaaS platform that centralizes loan consulting workflows, giving brokers and clients a fast, organized, and transparent way to manage small business loan applications."
        }
        img="/sbaloansFinancialSummary.svg"
      />
      <Problem />
    </>
  );
};

export default SbaloansOverView;

