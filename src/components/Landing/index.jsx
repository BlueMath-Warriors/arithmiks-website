import React, { lazy, Suspense, useEffect, useRef } from "react";
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
import { gsap } from "gsap";
import { prefersReducedMotion } from "../../utils/animations";

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
  const heroRef = useRef(null);

  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined" || !heroRef.current) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        ".hero-headline",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );

      tl.fromTo(
        ".hero-description",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.5"
      );

      tl.fromTo(
        ".hero-cta",
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header white={false} />
      <section className={containerStyles.main_hero} ref={heroRef}>
        <TextContainer>
          <MainHead className="hero-headline">
            Grow Your Start
            <Uicon />
            p At An Early Stage or Scale Your Development Team With US
          </MainHead>
          <Description className="hero-description">
            We are a custom software development company that assists you in
            converting your ideas into wonderful software solutions. With our
            customer centric approach we build products that matter to users.
          </Description>
          <Buttons onClick={scrollToContact} className="hero-cta">
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
