import React, { lazy, Suspense } from "react";
import {
  CtaBtn,
  Description,
  MainHead,
  TextContainer,
  Buttons,
} from "./index.styled";
import Uicon from "../../images/u-icon.svg";
import * as containerStyles from "../../styles/global.module.css";
import Header from "../Landing/Header";
import About from "./About-Section";

const Services = lazy(() => import("./Services-Section"));
const HowItWorks = lazy(() => import("./How-it-Works"));
const EngagementModel = lazy(() => import("./Engagement-Model"));
const CaseStudy = lazy(() => import("./Case-Study"));
const ContactUs = lazy(() => import("./Contact-Us"));
const Footer = lazy(() => import("./Footer"));

const SectionLoader = () => (
  <div style={{ 
    minHeight: '400px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: '#f5f5f7'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid #e0e0e0',
      borderTopColor: '#1355FF',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    }} />
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const LandingPage = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header white={false} />
      <section className={containerStyles.main_hero}>
        <TextContainer>
          <MainHead>
            Grow Your Start
            <Uicon />
            p At An Early Stage or Scale Your Development Team With US
          </MainHead>
          <Description>
            We are a custom software development company that assists you in
            converting your ideas into wonderful software solutions. With our
            customer centric approach we build products that matter to users.
          </Description>
          <Buttons onClick={scrollToContact}>
            <CtaBtn as="button" fill="true" type="button">
              Let's Talk
            </CtaBtn>
          </Buttons>
        </TextContainer>
      </section>
      
      <About />
      
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <HowItWorks />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <EngagementModel />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CaseStudy landing={true} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactUs />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default LandingPage;
