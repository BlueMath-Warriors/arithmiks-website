import React, { useState, useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as containerStyles from "../../../../styles/global.module.css";

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
  HeroShade,
} from "./index.styled";

/**
 * @param {Object} props
 * @param {boolean} props.overview 
 * @param {boolean} props.left 
 * @param {string} props.title
 * @param {React.ReactNode} props.caption 
 * @param {string} props.detail 
 * @param {string|Object|React.ReactNode} props.img 
 */
const Feature = (props) => {
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

  const renderImage = (isLeft, isOv) => {
    const gatsbyImageData = img && typeof img === 'object' && img.childImageSharp ? getImage(img) : null;
    if (gatsbyImageData) {
      return (
        <GatsbyImage
          image={gatsbyImageData}
          alt={title}
          style={{ width: "100%", height: "auto" }}
        />
      );
    }
    if (typeof img === 'string') {
      return <FeatureImgTag src={img} alt={title} overview={isOv} />;
    }
    return (
      <FeatureImg as="div" left={isLeft}>
        {img}
      </FeatureImg>
    );
  };

  return (
    <>
      <div
        className={`${isOverview ? "" : containerStyles.easybar_overview}  ${!isOverview && (left ? containerStyles.left : containerStyles.right)
          }`}
        style={isOverview ? { backgroundColor: "#fff", backgroundImage: "none" } : {}}
      >
        <FeatureOuterContainer left={left} overview={isOverview}>
          {!left ? (
            <>
              <FeatureContainer overview={isOverview}>
                <FeatureTitle as={isOverview ? "h2" : "h3"} overview={isOverview}>
                  {title}
                </FeatureTitle>
                {caption && <FeatureCaption overview={isOverview}>{caption}</FeatureCaption>}
                <FeatureDetail overview={isOverview}>{detail}</FeatureDetail>
              </FeatureContainer>
              {isOverview ? (
                <OverviewImgContainer>
                  {renderImage(false, isOverview)}
                </OverviewImgContainer>
              ) : (
                <FeatureImgContainer className={containerStyles.easybar_feature_right}>
                  {renderImage(false, false)}
                </FeatureImgContainer>
              )}
            </>
          ) : (
            <>
              <FeatureImgContainer left>
                {renderImage(true, false)}
              </FeatureImgContainer>
              <FeatureContainer left>
                <FeatureTitle as="h3" left>
                  {title}
                </FeatureTitle>
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

export default Feature;
