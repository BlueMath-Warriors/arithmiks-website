import React, { useState, useEffect } from "react";
import * as containerStyles from "../../../../../styles/global.module.css";

import {
  FeatureContainer,
  FeatureCaption,
  FeatureDetail,
  FeatureTitle,
  FeatureImgContainer,
  OverviewImgContainer,
  FeatureImg,
  FeatureImgTag,
  FeatureOuterContainer,
} from "./index.styled";
import { HeroShade } from "../../index.styled";

const SbaloansFeature = (props) => {
  const { overview, left, title, caption, detail, img } = props;
  const isOverview = overview !== undefined ? overview : false;
  const [smallGradient, setSmallGradient] = useState(isSmallGradient());
  
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
        className={`${isOverview ? "" : containerStyles.easybar_overview}  ${
          !isOverview && (left ? containerStyles.left : containerStyles.right)
        }`}
        style={isOverview ? { backgroundColor: "#fff", backgroundImage: "none" } : {}}
      >
        <FeatureOuterContainer left={left} overview={isOverview}>
          {!left ? (
            <>
              <FeatureContainer overview={isOverview}>
                <FeatureTitle overview={isOverview}>{title}</FeatureTitle>
                {caption && <FeatureCaption overview={isOverview}>{caption}</FeatureCaption>}
                <FeatureDetail overview={isOverview}>{detail}</FeatureDetail>
              </FeatureContainer>
              {isOverview ? (
                <OverviewImgContainer>
                  {typeof img === 'string' ? (
                    <FeatureImgTag src={img} alt={title} overview={isOverview} />
                  ) : (
                    <FeatureImg as="div">
                      {img}
                    </FeatureImg>
                  )}
                </OverviewImgContainer>
              ) : (
                <FeatureImgContainer className={containerStyles.easybar_feature_right}>
                  {typeof img === 'string' ? (
                    <FeatureImgTag src={img} alt={title} />
                  ) : (
                    <FeatureImg as="div">
                      {img}
                    </FeatureImg>
                  )}
                </FeatureImgContainer>
              )}
            </>
          ) : (
            <>
              <FeatureImgContainer left>
                {typeof img === 'string' ? (
                  <FeatureImgTag src={img} alt={title} />
                ) : (
                  <FeatureImg as="div" left>
                    {img}
                  </FeatureImg>
                )}
              </FeatureImgContainer>
              <FeatureContainer left>
                <FeatureTitle left>{title}</FeatureTitle>
                {caption && <FeatureCaption left overview={isOverview}>{caption}</FeatureCaption>}
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

export default SbaloansFeature;

