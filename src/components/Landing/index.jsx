import React from "react";
import {
  Background,
  ComingSoon,
  Content,
  CtaBtn,
  Description,
  Header,
  HeaderContainer,
  Hero,
  Logo,
  MainHead,
  Menu,
  MenuItem,
  TextContainer,
} from "./index.styled";
import { StaticImage, getSrc } from "gatsby-plugin-image";
import heroBG from "../../images/hero-bg.png";
import * as containerStyles from "../../styles/global.module.css";
import EngagementModel from "./Engagement-Model";
import Services from "./Services-Section";
import About from "./About-Section";

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
      <Header>
        <HeaderContainer>
          <a href="https://arithmiks.com">
            <StaticImage src="../../images/logo-sm.png" alt="arithmiks logo" />
          </a>
          <Menu>
            <MenuItem active>Home</MenuItem>
            <MenuItem>Company</MenuItem>
            <MenuItem>Service</MenuItem>
            <MenuItem>Case Study</MenuItem>
            <MenuItem>Tech Stack</MenuItem>
          </Menu>
          <CtaBtn>Get In Touch</CtaBtn>
        </HeaderContainer>
      </Header>
      <div className={containerStyles.main_hero}>
        <TextContainer>
          <MainHead>
            Grow Your Start
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="51"
              viewBox="0 0 43 51"
              fill="none"
            >
              <path
                d="M0.071331 13.09C0.138294 13.2417 0.248585 13.3707 0.388668 13.4613C0.528755 13.5519 0.692547 13.6001 0.859951 13.6H6.87996V32.742C6.87996 42.466 14.6862 50.6516 24.2821 50.9882C26.7075 51.0755 29.1259 50.6788 31.3927 49.8217C33.6596 48.9647 35.7284 47.6648 37.4756 45.9997C39.2227 44.3347 40.6124 42.3386 41.5616 40.1309C42.5108 37.9231 43 35.5489 43 33.15V2.55C42.9993 1.87391 42.7273 1.2257 42.2436 0.747627C41.7599 0.269554 41.104 0.000675201 40.42 0H35.26C34.5759 0.000675201 33.9201 0.269554 33.4364 0.747627C32.9527 1.2257 32.6807 1.87391 32.68 2.55V32.8585C32.7144 34.8375 31.9881 36.7559 30.6478 38.2265C29.3075 39.6972 27.4527 40.6108 25.4577 40.783C24.4001 40.8529 23.3392 40.7073 22.3408 40.3553C21.3425 40.0034 20.4278 39.4525 19.6537 38.7369C18.8795 38.0213 18.2622 37.1562 17.8402 36.1952C17.4181 35.2341 17.2002 34.1977 17.2 33.15V13.6H23.22C23.3872 13.5998 23.5508 13.5514 23.6906 13.4608C23.8305 13.3701 23.9405 13.2411 24.0073 13.0895C24.0742 12.938 24.0948 12.7705 24.0668 12.6075C24.0387 12.4446 23.9632 12.2932 23.8495 12.172L12.6695 0.271999C12.589 0.186535 12.4916 0.118378 12.3833 0.0717697C12.275 0.0251617 12.1581 0.00111008 12.04 0.00111008C11.9218 0.00111008 11.805 0.0251617 11.6967 0.0717697C11.5884 0.118378 11.4909 0.186535 11.4104 0.271999L0.230434 12.172C0.116402 12.2931 0.0406075 12.4445 0.0123444 12.6076C-0.0159149 12.7706 0.00458527 12.9383 0.071331 13.09Z"
                fill="url(#paint0_linear_1015_17022)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1015_17022"
                  x1="26"
                  y1="65"
                  x2="56.806"
                  y2="42.891"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BC4E9B" />
                  <stop offset="1" stop-color="#0957DE" />
                </linearGradient>
              </defs>
            </svg>
            p At An Early Stage or Scale Your Development Team With US
          </MainHead>
          <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown</Description>
          <CtaBtn>Lets Talk About Your Need</CtaBtn>
        </TextContainer>
      </div>
      <About/>
      <Services/>
      <EngagementModel/>
    </>
  );
};

export default LandingPage;
