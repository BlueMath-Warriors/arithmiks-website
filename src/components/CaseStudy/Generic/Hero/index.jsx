import React from "react";
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
 * @param {string} props.heroImageSrc 
 * @param {string} props.heroImageAlt 
 */
const Hero = ({
  category,
  logoSrc,
  logoAlt = "Logo",
  caption,
  heroImageSrc,
  heroImageAlt = "Hero Image",
}) => {
  return (
    <div className={containerStyles.easybar_hero}>
      <HeroContent>
        <SmallTxt>{category}</SmallTxt>
        <LogoImage src={logoSrc} alt={logoAlt} />
        <StudyCaption>{caption}</StudyCaption>
        <div style={{ position: "relative" }}>
          <HeroImg src={heroImageSrc} alt={heroImageAlt} />
        </div>
      </HeroContent>
      <HeroShade />
    </div>
  );
};

export default Hero;
