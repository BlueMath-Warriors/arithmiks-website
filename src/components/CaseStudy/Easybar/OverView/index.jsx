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
        caption={"Design and place iron orders easily"}
        detail={
          "A marketplace to prepare professional iron orders for manufacturer. There is no need to waste time on questions, at EasyBar the order is accurate and clear at no cost."
        }
        img={EasybarOverview}
      />
    </>
  );
};

export default EasyBarOverView;
