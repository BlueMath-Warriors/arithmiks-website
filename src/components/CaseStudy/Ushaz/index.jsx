import React from "react";
import * as containerStyles from "../../../styles/global.module.css";
import ContactUs from "../../Landing/Contact-Us";
import Footer from "../../Landing/Footer";
import Header from "../../Landing/Header";
import UshazOverView from "./OverView";
import UshazTestimonial from "./Testimonial";
import UshazKeyFeatures from "./KeyFeatures";
import {
  GradientContainer,
  GradiantImg,
  HeroContent,
  SmallTxt,
  StudyTitle,
  StudyCaption,
  MoreButton,
  BtnIcon,
  HeroImg,
  HeroShade,
} from "../Easybar/index.styled";
import Gradiant_1 from "../../../images/gradiants/gradiant-1.svg";
import BtnArrow from "../../../images/arrow-right-blue.svg";
import HeroImage from "../../../images/ushaz-hero.png";
const Ushaz = () => {
  return (
    <>
      <Header />
      <div className={containerStyles.easybar_hero}>
        <HeroContent>
          <SmallTxt>Web Application</SmallTxt>
          <StudyTitle>Ushaz</StudyTitle>
          <StudyCaption>Artisan Treasures Unleashed</StudyCaption>
          <MoreButton href="#contact-form">
            Tell Us More <BtnArrow/>
          </MoreButton>
          <div style={{ position: "relative" }}>
            <HeroImg src={HeroImage} />
          </div>
        </HeroContent>
        <HeroShade></HeroShade>
      </div>
      <UshazOverView />
      <UshazTestimonial />
      <UshazKeyFeatures />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Ushaz;
