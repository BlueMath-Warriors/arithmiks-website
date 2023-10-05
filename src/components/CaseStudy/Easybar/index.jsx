import React from "react";
import * as containerStyles from "../../../styles/global.module.css";
import ContactUs from "../../Landing/Contact-Us";
import Footer from "../../Landing/Footer";
import Header from "../../Landing/Header";
import EasyBarOverView from "./OverView";
import EasybarTestimonial from "./Testimonial";
import EasybarSolution from "./Solution";
import EasybarKeyFeatures from "./KeyFeatures";
import { GradientContainer, GradiantImg, HeroContent, SmallTxt, StudyTitle, StudyCaption, MoreButton, BtnIcon, ImgContainer, HeroImg, HeroShade } from "./index.styled";
import Gradiant_1 from "../../../images/gradiants/gradiant-1.svg";
import BtnArrow from "../../../images/arrow-right-blue.svg"
import HeroImage from "../../../images/easybar-hero.png"
const EasyBar = () => {
  return (
    <>
      <Header />
      <div className={containerStyles.easybar_hero}>
        <HeroContent>
          <SmallTxt>Web Application</SmallTxt>
          <StudyTitle>Easybar</StudyTitle>
          <StudyCaption>Marketplace for Rebars</StudyCaption>
          <MoreButton>Tell Us More <BtnIcon src={BtnArrow}/></MoreButton>
          <ImgContainer>
            <HeroImg src={HeroImage}/>
            <GradientContainer>
              <GradiantImg src={Gradiant_1} />
            </GradientContainer>
          </ImgContainer>
        </HeroContent>
        <HeroShade></HeroShade>
      </div>
      <EasyBarOverView />
      <EasybarTestimonial />
      <EasybarSolution />
      <EasybarKeyFeatures />
      <ContactUs />
      <Footer />
    </>
  );
};

export default EasyBar;
