import React, {useRef, useState} from "react";
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
import Header from "../Landing/Header"
import HowItWorks from "./How-it-Works";

const LandingPage = () => {
  return (
    // <Background>
    //   <Content>
    //     <Logo>
    //       <StaticImage src="../../images/logo.png" alt="arithmiks logo" />
    //     </Logo>
    //     <ComingSoon>
    //       <p>Coming Soon</p>
    //     </ComingSoon>
    //   </Content>
    // </Background>
    <>
    <Header white={false}/>
      <div className={containerStyles.main_hero}>
        <TextContainer>
          <MainHead>
            Grow Your Start
              <ImageIcon src={u_icon} alt="U icon" />
            p At An Early Stage or Scale Your Development Team With US
          </MainHead>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown
          </Description>
          <Buttons>
            <CtaBtn fill fixed>Lets Talk</CtaBtn>
            <CtaBtn fixed>Learn More</CtaBtn>
          </Buttons>
        </TextContainer>
      </div>
      <About/>
      <Services/>
      <HowItWorks/>
      <EngagementModel/>
      <CaseStudy/>
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default LandingPage;
