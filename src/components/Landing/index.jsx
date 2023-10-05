import React, { useRef, useState } from "react";
import {
  Background,
  ComingSoon,
  Content,
  CtaBtn,
  Description,
  Hero,
  Logo,
  MainHead,
  TextContainer,
  ImageIcon,
  Buttons,
} from "./index.styled";
import { StaticImage, getSrc } from "gatsby-plugin-image";
import u_icon from "../../images/u-icon.svg";
import * as containerStyles from "../../styles/global.module.css";
import EngagementModel from "./Engagement-Model";
import Services from "./Services-Section";
import About from "./About-Section";
import ContactUs from "./Contact-Us";
import Footer from "./Footer";
import CaseStudy from "./Case-Study";
import Header from "../Landing/Header";
import HowItWorks from "./How-it-Works";

const LandingPage = () => {
  return (
    <>
      <Header white={false} />
      <section className={containerStyles.main_hero}>
        <TextContainer>
          <MainHead>
            Grow Your Start
            <ImageIcon src={u_icon} alt="U icon" />p At An Early Stage or Scale
            Your Development Team With US
          </MainHead>
          <Description>
            We are a custom software development company that assists you in
            converting your ideas into wonderful software solutions. With our
            customer centeric approch we build products that matters to users.
          </Description>
          <Buttons>
            <a href="#contact-form">
              <CtaBtn fill fixed>
                Lets Talk
              </CtaBtn>
            </a>
            {/* <CtaBtn fixed>Learn More</CtaBtn> */}
          </Buttons>
        </TextContainer>
      </section>
      <About />
      <Services />
      <HowItWorks />
      <EngagementModel />
      <CaseStudy landing={true} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default LandingPage;
