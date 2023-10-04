import React from "react";
import * as containerStyles from "../../../../styles/global.module.css";
import ContactUs from "../../../Landing/Contact-Us";
import Footer from "../../../Landing/Footer";
import Header from "../../../Landing/Header";

import {OverviewContainer, OverviewCaption, OverviewDetail, FeatureTitle, OverViewImgContainer, Gradiant2, GradientContainer, BackImage } from "./index.styled"
import { HeroShade } from "../index.styled";
import Gradiant_1 from "../../../../images/gradiants/gradiant-1.svg";
import Gradiant_2 from "../../../../images/gradiants/gradiant-2.svg";

import BtnArrow from "../../../../images/arrow-right-blue.svg";
import HeroImage from "../../../../images/easybar-hero.png";
const EasyBarOverView = () => {
  return (
    <>
      <div className={containerStyles.easybar_overview}>
        <OverviewContainer>
          <FeatureTitle overview>Overview</FeatureTitle>
          <OverviewCaption>The Challenge of Efficient Outreach</OverviewCaption>
          <OverviewDetail>
            In the vast digital landscape, the ability to connect with the right
            people is paramount. Whether it's for sales, marketing, or
            networking, having access to accurate and relevant email addresses
            can make all the difference. While many tools existed, they often
            catered to larger corporations with a focus on LinkedIn data or were
            cumbersome and costly.
          </OverviewDetail>
        </OverviewContainer>
        <OverViewImgContainer>
          <BackImage></BackImage>
          <GradientContainer>
          <Gradiant2 src={Gradiant_2} />
          </GradientContainer>
        </OverViewImgContainer>
        <HeroShade/>
      </div>
    </>
  );
};

export default EasyBarOverView;
