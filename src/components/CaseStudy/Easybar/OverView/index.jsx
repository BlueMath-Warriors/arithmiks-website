import React from "react";

import EasybarFeature from "../KeyFeatures/Feaature";
import EasybarOverview from "../../../../images/easybar-overview.png";

const EasyBarOverView = () => {
  return (
    <>
      <EasybarFeature
        left={false}
        overview={true}
        title={"Overview"}
        caption={"The Challenge of Efficient Outreach"}
        detail={
          "In the vast digital landscape, the ability to connect with the right people is paramount. Whether it's for sales, marketing, or networking, having access to accurate and relevant email addresses can make all the difference. While many tools existed, they often catered to larger corporations with a focus on LinkedIn data or were cumbersome and costly."
        }
        img={EasybarOverview}
      />
    </>
  );
};

export default EasyBarOverView;
