import React, { useState, useEffect } from "react";
import * as containerStyles from "../../../../../styles/global.module.css";

import {
  FeatureContainer,
  FeatureCaption,
  FeatureDetail,
  FeatureTitle,
  FeatureImgContainer,
  FeatureImg,
  FeatureOuterContainer,
} from "./index.styled";
import { HeroShade } from "../../index.styled";

const EasybarFeature = (props) => {
  const { overview, left, title, caption, detail, img } = props;
  const [smallGradient, setSmallGradient] = useState(isSmallGradient());
  const isOverview = overview !== undefined ? overview : false;
  function isSmallGradient() {
    if (typeof window !== "undefined") {
      return window.innerWidth < 1440;
    }
    return false;
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowResize = () => {
        setSmallGradient(isSmallGradient());
      };
      handleWindowResize();

      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);

  return (
    <>
      <div
        className={`${containerStyles.easybar_overview}  ${
          left ? containerStyles.left : containerStyles.right
        }`}
      >
        <FeatureOuterContainer left={left}>
          {!left ? (
            <>
              <FeatureContainer>
                <FeatureTitle overview={isOverview}>{title}</FeatureTitle>
                {caption && <FeatureCaption>{caption}</FeatureCaption>}
                <FeatureDetail overview={isOverview}>{detail}</FeatureDetail>
              </FeatureContainer>
              <FeatureImgContainer className={containerStyles.easybar_feature_right}>
                <FeatureImg src={img} />
              </FeatureImgContainer>
            </>
          ) : (
            <>
              <FeatureImgContainer left>
                <FeatureImg left src={img} />
              </FeatureImgContainer>
              <FeatureContainer left>
                <FeatureTitle left>{title}</FeatureTitle>
                {caption && <FeatureCaption left>{caption}</FeatureCaption>}
                <FeatureDetail>{detail}</FeatureDetail>
              </FeatureContainer>
            </>
          )}
        </FeatureOuterContainer>
        <HeroShade />
      </div>
    </>
  );
};

export default EasybarFeature;
