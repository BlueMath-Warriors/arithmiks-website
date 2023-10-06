import React, {useState, useEffect} from "react";
import * as containerStyles from "../../../../../styles/global.module.css";

import {
  FeatureContainer,
  FeatureCaption,
  FeatureDetail,
  FeatureTitle,
  FeatureImgContainer,
  GradiantImg,
  GradientContainer,
  FeatureImg,
  FeatureOuterContainer,
} from "./index.styled";
import { HeroShade } from "../../index.styled";
import Gradiant_2 from "../../../../../images/gradiants/gradiant-2.svg";
import Gradiant_4 from "../../../../../images/gradiants/gradiant-4.svg";
import Gradiant_Small from "../../../../../images/gradiants/gradiant-small.svg"

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
      <div className={containerStyles.easybar_overview}>
        <FeatureOuterContainer left={left}>
          {!left ? (
            <>
              <FeatureContainer>
                <FeatureTitle overview={isOverview}>{title}</FeatureTitle>
                {caption && <FeatureCaption>{caption}</FeatureCaption>}
                <FeatureDetail overview={isOverview}>{detail}</FeatureDetail>
              </FeatureContainer>
              <FeatureImgContainer>
                <FeatureImg src={img} />
                <GradientContainer>
                  <GradiantImg src={smallGradient ? Gradiant_Small : Gradiant_2} />
                </GradientContainer>
              </FeatureImgContainer>
            </>
          ) : (
            <>
              <FeatureImgContainer left>
                <FeatureImg left src={img} />
                <GradientContainer left>
                  <GradiantImg src={smallGradient ? Gradiant_Small : Gradiant_4} left />
                </GradientContainer>
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
