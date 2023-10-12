import React from "react";

import EasybarFeature from "../KeyFeatures/Feaature";
import UshazOverview from "../../../../images/ushaz-overview.png";

const UshazOverView = () => {
  return (
    <>
      <EasybarFeature
        left={false}
        overview={true}
        title={"Overview"}
        caption={"Celebrating Artistry Around the World"}
        detail={
          "Discover the essence of global craftsmanship at Ushaz. Our mission is to bridge cultures by showcasing the intricate artistry of traditional artisans. Explore a world of creativity and heritage, where each piece tells a story of generations past."
        }
        img={UshazOverview}
      />
    </>
  );
};

export default UshazOverView;
