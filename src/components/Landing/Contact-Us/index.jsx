import React, { useState, useEffect, useRef } from "react";
import {
  Caption,
  CardLeft,
  Circle,
  CircleIcon,
  HeaderText,
  LeftCardHeader,
  MainCard,
  SecondaryColor,
  SmallTxt,
  SubCard,
  CardContent,
  ContentText,
  CardFooter,
  FooterTop,
  FooterLine,
  FooterText,
  FooterBottom,
  SocialContainer,
  SocialIcon,
  BackImage,
  CardDetails,
  DescriptionText,
  LinkedInButton,
  LinkedInIconWrapper,
  LinkedInButtonText,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import EmailIcon from "../../../images/email.svg";
import OfficeIcon from "../../../images/office.svg";
import CareerIcon from "../../../images/career.svg";

import fb_icon from "../../../images/social-icons/fb.svg";
import InIcon from "../../../images/social-icons/in.svg";
import InWhiteIcon from "../../../images/social-icons/in-white.svg";
import insta_icon from "../../../images/social-icons/insta.svg";
import twitter_icon from "../../../images/social-icons/twitter.svg";
import LinkedInIcon from "../../../images/social-icons/in.svg";
import BgImg from "../../../images/bgImg.svg";

import InputForm from "./Input-Form";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../../../utils/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactUs = () => {
  const [inIcon, setInIcon] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".contact-left",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-card",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".contact-form",
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-card",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact-form" className={containerStyles.contact_us} ref={sectionRef}>
      <SmallTxt className="contact-header">CONTACT US</SmallTxt>
      <HeaderText className="contact-header">
        Get In <SecondaryColor>Touch</SecondaryColor>
      </HeaderText>
      <DescriptionText className="contact-header">
        Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </DescriptionText>
      <MainCard className="contact-card">
        <CardLeft className="contact-left">
          <CardDetails>
            <BackImage>
              <BgImg/>
            </BackImage>
            <LeftCardHeader>Contact Information</LeftCardHeader>

            <SubCard>
              <Circle>
                <EmailIcon />
              </Circle>
              <CardContent>
                <Caption>Email</Caption>
                <a href="mailto: services@arithmiks.com">
                  <ContentText>services@arithmiks.com</ContentText>
                </a>
              </CardContent>
            </SubCard>

            <SubCard>
              <Circle>
                <OfficeIcon />
              </Circle>
              <CardContent>
                <Caption>Office</Caption>
                <ContentText>
                Lahore, Pakistan
                </ContentText>
              </CardContent>
            </SubCard>

            <SubCard>
              <Circle>
                <CareerIcon />
              </Circle>
              <CardContent>
                <Caption>Careers</Caption>
                <a href="mailto: hr@arithmiks.com">
                  <ContentText>hr@arithmiks.com</ContentText>
                </a>
              </CardContent>
            </SubCard>
          </CardDetails>

          <CardFooter>
            <FooterTop>
              <FooterText>Connect with us</FooterText>
            </FooterTop>
            <FooterBottom>
              <a
                href="https://www.linkedin.com/company/arithmiks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInButton>
                  <LinkedInIconWrapper>
                    <LinkedInIcon />
                  </LinkedInIconWrapper>
                  <LinkedInButtonText>Follow us on LinkedIn</LinkedInButtonText>
                </LinkedInButton>
              </a>
            </FooterBottom>
          </CardFooter>
        </CardLeft>
        <InputForm />
      </MainCard>
    </section>
  );
};

export default ContactUs;
