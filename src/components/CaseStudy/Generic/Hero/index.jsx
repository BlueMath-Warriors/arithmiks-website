import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as containerStyles from "../../../../styles/global.module.css";
import {
  HeroContent,
  SmallTxt,
  LogoImage,
  StudyCaption,
  HeroImg,
  HeroShade,
} from "./index.styled";

/**
 * @param {Object} props
 * @param {string} props.category 
 * @param {string} props.logoSrc 
 * @param {string} props.logoAlt 
 * @param {React.ReactNode} props.caption 
 * @param {Object} [props.heroImageData] - gatsbyImageData from GraphQL query
 * @param {string} [props.heroImageSrc] - fallback static path
 * @param {string} props.heroImageAlt 
 */
const Hero = ({
  category,
  logoSrc,
  logoAlt = "Logo",
  caption,
  heroImageData,
  heroImageSrc,
  heroImageAlt = "Hero Image",
}) => {
  const gatsbyImage = heroImageData ? getImage(heroImageData) : null;

  return (
    <div className={containerStyles.easybar_hero}>
      <HeroContent>
        <SmallTxt>{category}</SmallTxt>
        <LogoImage src={logoSrc} alt={logoAlt} />
        <StudyCaption>{caption}</StudyCaption>
        <div style={{ position: "relative" }}>
          {gatsbyImage ? (
            <GatsbyImage
              image={gatsbyImage}
              alt={heroImageAlt}
              loading="eager"
              style={{
                marginTop: "12px",
                marginBottom: "-45px",
                width: "100%",
                display: "block",
              }}
            />
          ) : (
            <HeroImg src={heroImageSrc} alt={heroImageAlt} />
          )}
        </div>
      </HeroContent>
      <HeroShade />
    </div>
  );
};

export default Hero;
