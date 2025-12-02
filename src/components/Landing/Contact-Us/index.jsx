import React, { useState } from "react";
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
import LinkedInIcon from "../../../images/social-icons/linkedin.svg";
import BgImg from "../../../images/bgImg.svg";

import InputForm from "./Input-Form";

const ContactUs = () => {
  const [inIcon, setInIcon] = useState(false);

  return (
    <section id="contact-form" className={containerStyles.contact_us}>
      <SmallTxt>CONTACT US</SmallTxt>
      <HeaderText>
        Get In <SecondaryColor>Touch</SecondaryColor>
      </HeaderText>
      <DescriptionText>
        Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </DescriptionText>
      <MainCard>
        <CardLeft>
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
                <a href="mailto: hello@arithmiks.com">
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
                <ContentText medium>
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
