import React from "react";
import * as containerStyles from "../../../../styles/global.module.css";
import { MainCaption, PrimaryHeading, Secondary } from "../../Easybar/KeyFeatures/index.styled";
import UshazFeature from "./Feaature";
import Feature_1 from "../../../../images/ushaz-feature-1.png";
import Feature_2 from "../../../../images/ushaz-feature-2.png";
import Feature_3 from "../../../../images/ushaz-feature-3.png";
import Feature_4 from "../../../../images/ushaz-feature-4.png";

const UshazKeyFeatures = () => {
  return (
    <>
      <div className={containerStyles.easybar_key_features}>
        <PrimaryHeading>
          Key <Secondary>Features</Secondary>
        </PrimaryHeading>
        <MainCaption>
          Unlocking the Power of Easybar & Exploring Our Core Features
        </MainCaption>
      </div>
      <UshazFeature
        left={false}
        title={"Redesigned the Store's Front"}
        caption={""}
        detail={
          "aLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        img={Feature_1}
      />
      <UshazFeature
        left={true}
        title={"Table Sale Flow"}
        caption={""}
        detail={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        }
        img={Feature_2}
      />

      <UshazFeature
        left={false}
        mobile={true}
        title={"View in your space"}
        caption={""}
        detail={
          "aLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
        img={Feature_3}
      />

      <UshazFeature
        left={true}
        title={"3D modeling"}
        caption={""}
        detail={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        }
        img={Feature_4}
      />

    </>
  );
};

export default UshazKeyFeatures;
