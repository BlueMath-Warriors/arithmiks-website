import React from "react";
import * as containerStyles from "../../../styles/global.module.css";
import ContactUs from "../../Landing/Contact-Us";
import Footer from "../../Landing/Footer";
import Header from "../../Landing/Header";
import EasyBarOverView from "./OverView";
import EasybarTestimonial from "./Testimonial";
import EasybarSolution from "./Solution";
import EasybarKeyFeatures from "./KeyFeatures";
import {
  HeroContent,
  SmallTxt,
  StudyTitle,
  StudyCaption,
  MoreButton,
  HeroImg,
  HeroShade,
} from "./index.styled";
import BtnArrow from "../../../images/arrow-right-blue.svg";
import HeroImage from "../../../images/easybar-hero.png";
const EasyBar = () => {
  return (
    <>
      <Header />
      <div className={containerStyles.easybar_hero}>
        <HeroContent>
          <SmallTxt>Web Application</SmallTxt>
          <StudyTitle>Easybar</StudyTitle>
          <StudyCaption>Marketplace for Rebars</StudyCaption>
          <MoreButton href="#contact-form">
            Tell Us More <BtnArrow />
          </MoreButton>
          <div style={{ position: "relative" }}>
            <HeroImg src={HeroImage} />
          </div>
        </HeroContent>
        <HeroShade />
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
