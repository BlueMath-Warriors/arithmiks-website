import React from "react";
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
  CardDetails
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import Envelope from "../../../images/envelop-icon.svg";
import Map from "../../../images/map-icon.svg";
import PhoneCall from "../../../images/phone-call.svg";
import GreyLine from "../../../images/grey-line.svg";

import fb_icon from "../../../images/social-icons/fb.svg";
import in_icon from "../../../images/social-icons/in.svg";
import insta_icon from "../../../images/social-icons/insta.svg";
import twitter_icon from "../../../images/social-icons/twitter.svg";
import dribble_icon from "../../../images/social-icons/dribble.svg";
import bg_img from "../../../images/contact-left-bg.svg"

import InputForm from "./Input-Form";

const ContactUs = () => {
  return (
    <>
      <div className={containerStyles.contact_us}>
        <SmallTxt>CONTACT US</SmallTxt>
        <HeaderText>
          How can we <SecondaryColor>help you?</SecondaryColor>
        </HeaderText>
        <MainCard>
          <CardLeft>
            <CardDetails>
              <BackImage src={bg_img}/>
              <LeftCardHeader>Get in touch</LeftCardHeader>
              <SubCard>
                <Circle>
                  <CircleIcon src={Envelope} />
                </Circle>
                <CardContent>
                  <Caption>Email us</Caption>
                  <ContentText>info@arithmiks.com</ContentText>
                </CardContent>
              </SubCard>

              <SubCard>
                <Circle>
                  <CircleIcon src={PhoneCall} />
                </Circle>
                <CardContent>
                  <Caption>Phone number</Caption>
                  <ContentText>+1-202-555-0138</ContentText>
                </CardContent>
              </SubCard>


              <SubCard>
                <Circle>
                  <CircleIcon src={Map} />
                </Circle>
                <CardContent>
                  <ContentText medium>901 N Pitt Str., Suite 170<br/>Alexandria, VA 22314, USA</ContentText>
                </CardContent>
              </SubCard>
            </CardDetails>
            

            <CardFooter>
              <FooterTop>
                <FooterLine src={GreyLine}/>
                <FooterText>Connect with us:</FooterText>
              </FooterTop>
              <FooterBottom>
                <a href="/landing">
                  <SocialContainer>
                    <SocialIcon src={fb_icon}/>
                  </SocialContainer>
                </a>
                <a href="/landing">
                  <SocialContainer blue>
                    <SocialIcon src={twitter_icon}/>
                  </SocialContainer>
                </a>
                <a href="/landing">
                  <SocialContainer>
                    <SocialIcon src={in_icon}/>
                  </SocialContainer>
                </a>
                <a href="/landing">
                  <SocialContainer>
                    <SocialIcon src={insta_icon}/>
                  </SocialContainer>
                </a>
                <a href="/landing">
                  <SocialContainer>
                    <SocialIcon src={dribble_icon}/>
                  </SocialContainer>
                </a>

              </FooterBottom>
            </CardFooter>
          </CardLeft>
          <InputForm/>
        </MainCard>
      </div>
    </>
  );
};

export default ContactUs;
