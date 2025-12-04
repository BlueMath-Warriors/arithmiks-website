import React from "react";
import * as containerStyles from "../../../styles/global.module.css";
import ContactUs from "../../Landing/Contact-Us";
import Footer from "../../Landing/Footer";
import Header from "../../Landing/Header";
import SbaloansTechStack from "./TechStack";
import SbaloansOverView from "./OverView";
import SbaloansTestimonial from "./Testimonial";
import SbaloansSolution from "./Solution";
import SbaloansKeyFeatures from "./KeyFeatures";
import {
  HeroContent,
  SmallTxt,
  LogoImage,
  StudyCaption,
  HeroImg,
  HeroShade,
} from "./index.styled";

const Sbaloans = () => {
  return (
    <>
      <Header />
      <div className={containerStyles.easybar_hero}>
        <HeroContent>
          <SmallTxt>Web Application / SaaS</SmallTxt>
          <LogoImage src="/sbaloans.svg" alt="sbaloansHQ" />
          <StudyCaption>SBA Loans HQ streamlines SBA loans with centralized<br />documents, tracking, and communication.</StudyCaption>
          <div style={{ position: "relative" }}>
            <HeroImg src="/sbaloansMemorandum.svg" alt="Sbaloans Memorandum" />
          </div>
        </HeroContent>
        <HeroShade />
      </div>
      <SbaloansTechStack />
      <SbaloansOverView />
      <SbaloansTestimonial />
      <SbaloansSolution />
      <SbaloansKeyFeatures />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Sbaloans;

