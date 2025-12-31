import React from "react";
import {
  CtaBtn,
  Description,
  MainHead,
  TextContainer,
  Buttons,
} from "./index.styled";
import Uicon from "../../images/u-icon.svg";
import * as containerStyles from "../../styles/global.module.css";
import EngagementModel from "./Engagement-Model";
import Services from "./Services-Section";
import About from "./About-Section";
import ContactUs from "./Contact-Us";
import Footer from "./Footer";
import CaseStudy from "./Case-Study";
import ClientLogos from "./Featured-Clients";
import Header from "../Landing/Header";
import HowItWorks from "./How-it-Works";

const LandingPage = () => {
  return (
    <>
      <Header white={false} />
      <section className={containerStyles.main_hero}>
        <TextContainer>
          <MainHead>
            Transform Your Start
            <Uicon />
            p With Al-Powered Solutions or Accelerate Your Development Team With Us
          </MainHead>
          <Description>
            We combine Al and custom software development to transform your ideas into smart, scalable<br />
            solutions. Our customer-centric approach ensures we build products that deliver real value to users.
          </Description>
          <Buttons
            onClick={() => {
              document
                .getElementById("contact-form")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <a>
              <CtaBtn fill fixed>
                Talk to an Al Expert
              </CtaBtn>
            </a>
            {/* <CtaBtn fixed>Learn More</CtaBtn> */}
          </Buttons>
        </TextContainer>
        <ClientLogos />
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
