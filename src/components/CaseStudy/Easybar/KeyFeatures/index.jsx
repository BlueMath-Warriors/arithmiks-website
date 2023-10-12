import React from "react";
import * as containerStyles from "../../../../styles/global.module.css";
import { MainCaption, PrimaryHeading, Secondary } from "./index.styled";
import EasybarFeature from "./Feaature";
import Feature_1 from "../../../../images/easybar-feature-1.png";
import Feature_2 from "../../../../images/easybar-feature-2.png";
import Feature_3 from "../../../../images/easybar-feature-3.png";
import Feature_4 from "../../../../images/easybar-feature-4.png";
import Feature_5 from "../../../../images/easybar-feature-5.png";
import Feature_6 from "../../../../images/easybar-feature-6.png";

const EasybarKeyFeatures = () => {
  return (
    <>
      <div className={containerStyles.easybar_solution}>
        <PrimaryHeading>
          Key <Secondary>Features</Secondary>
        </PrimaryHeading>
        <MainCaption>
          Unlocking the Power of Easybar & Exploring Our Core Features
        </MainCaption>
      </div>
      <EasybarFeature
        left={false}
        title={"Design Dynamic Rebars"}
        caption={""}
        detail={
          "aLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        img={Feature_1}
      />
      <EasybarFeature
        left={true}
        title={"Design Dynamic Nets"}
        caption={""}
        detail={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        }
        img={Feature_2}
      />

      <EasybarFeature
        left={false}
        title={"Design Dynamic Cages"}
        caption={""}
        detail={
          "aLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
        img={Feature_3}
      />

      <EasybarFeature
        left={true}
        title={"Easy-to-Use Ordering Interface "}
        caption={""}
        detail={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        }
        img={Feature_4}
      />

      <EasybarFeature
        left={false}
        title={"EasyBar Admin Panel"}
        caption={""}
        detail={
          "aLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        img={Feature_5}
      />

      <EasybarFeature
        left={true}
        title={"Order Management"}
        caption={""}
        detail={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. "
        }
        img={Feature_6}
      />
    </>
  );
};

export default EasybarKeyFeatures;
