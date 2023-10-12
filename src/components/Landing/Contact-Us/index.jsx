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
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import Envelope from "../../../images/envelop-icon.svg";
import Map from "../../../images/map-icon.svg";
import PhoneCall from "../../../images/phone-call.svg";
import GreyLine from "../../../images/grey-line.svg";

import fb_icon from "../../../images/social-icons/fb.svg";
import InIcon from "../../../images/social-icons/in.svg";
import InWhiteIcon from "../../../images/social-icons/in-white.svg";
import insta_icon from "../../../images/social-icons/insta.svg";
import twitter_icon from "../../../images/social-icons/twitter.svg";
import BgImg from "../../../images/contact-left-bg.svg";

import InputForm from "./Input-Form";

const ContactUs = () => {
  const [inIcon, setInIcon] = useState(false);

  return (
    <section id="contact-form" className={containerStyles.contact_us}>
      <SmallTxt>CONTACT US</SmallTxt>
      <HeaderText>
        How can we <SecondaryColor>help you?</SecondaryColor>
      </HeaderText>
      <MainCard>
        <CardLeft>
          <CardDetails>
            <BackImage>
              <BgImg/>
            </BackImage>
            <LeftCardHeader>Get in touch</LeftCardHeader>

            <SubCard>
              <Circle>
                <Envelope />
              </Circle>
              <CardContent>
                <Caption>Email us</Caption>
                <a href="mailto: info@arithmiks.com">
                  <ContentText>info@arithmiks.com</ContentText>
                </a>
              </CardContent>
            </SubCard>

            <SubCard>
              <Circle>
                <PhoneCall />
              </Circle>
              <CardContent>
                <Caption>Phone number</Caption>
                <a href="tel: +92 324 9640277">
                  <ContentText>+92-324-9640277</ContentText>
                </a>
              </CardContent>
            </SubCard>

            <SubCard>
              <Circle>
                <Map />
              </Circle>
              <CardContent>
                <ContentText medium>
                  537, C Block, Faisal Town
                  <br />
                  Lahore, Pakistan
                </ContentText>
              </CardContent>
            </SubCard>
          </CardDetails>

          <CardFooter>
            <FooterTop>
              <GreyLine />
              <FooterText>Connect with us:</FooterText>
            </FooterTop>
            <FooterBottom>
              {/* <a href="/landing">
                <SocialContainer>
                  <SocialIcon src={fb_icon} />
                </SocialContainer>
              </a>
              <a href="/landing">
                <SocialContainer blue>
                  <SocialIcon src={twitter_icon} />
                </SocialContainer>
              </a> */}
              <a
                href="https://www.linkedin.com/company/arithmiks/"
                target="_blank"
              >
                <SocialContainer
                  onMouseLeave={() => setInIcon(false)}
                  onMouseEnter={() => setInIcon(true)}
                >
                  {inIcon ? <InWhiteIcon/> : <InIcon/>}
                </SocialContainer>
              </a>
              {/* <a href="/landing">
                <SocialContainer>
                  <SocialIcon src={insta_icon} />
                </SocialContainer>
              </a> */}
            </FooterBottom>
          </CardFooter>
        </CardLeft>
        <InputForm />
      </MainCard>
    </section>
  );
};

export default ContactUs;
