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
          "Redesigned store's front, created a more engaging and welcoming shopping experience for customers. improve page load times, accessibility, and search engine optimization for better visibility and usability."
        }
        img={Feature_1}
      />
      <UshazFeature
        left={true}
        title={"Product Sale Flow"}
        caption={""}
        detail={
          "Enhancing the product sale flow involves reducing steps, simplifying checkout, and implementing personalized shopping experiences to boost conversions."
        }
        img={Feature_2}
      />

      <UshazFeature
        left={false}
        mobile={true}
        title={"View in your space"}
        caption={""}
        detail={
          "3D models allow users to visualize products or objects in their real environment through augmented reality (AR)."
        }
        img={Feature_3}
      />

      <UshazFeature
        left={true}
        title={"Payment Integrations"}
        caption={""}
        detail={
          "Multiple payment options and integrations enable diverse and secure payment methods, ensuring a smooth checkout process for customers while maintaining data security."
        }
        img={Feature_4}
      />

    </>
  );
};

export default UshazKeyFeatures;
