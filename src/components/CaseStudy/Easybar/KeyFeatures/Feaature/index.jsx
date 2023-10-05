import React from "react";
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

const EasybarFeature = (props) => {
  const { left, title, caption, detail, img } = props;
  return (
    <>
      <div className={containerStyles.easybar_overview}>
        <FeatureOuterContainer>
          {!left ? (
            <>
              <FeatureContainer>
                <FeatureTitle>{title}</FeatureTitle>
                {caption && <FeatureCaption>{caption}</FeatureCaption>}
                <FeatureDetail>{detail}</FeatureDetail>
              </FeatureContainer>
              <FeatureImgContainer>
                <FeatureImg src={img} />
                <GradientContainer>
                  <GradiantImg src={Gradiant_2} />
                </GradientContainer>
              </FeatureImgContainer>
            </>
          ) : (
            <>
              <FeatureImgContainer left>
                <FeatureImg left src={img} />
                <GradientContainer left>
                  <GradiantImg src={Gradiant_4} left />
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
