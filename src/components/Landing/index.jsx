import React, {useRef, useState} from "react";
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
  ImageIcon,
  Buttons,
  CompanyLogo,
  LogoText,
  LogoIcon,
  Hamburger,
  MenuIcon,
  HeaderButtonTxt,
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
import menu_icon from "../../images/hamburger_icon.svg"

const LandingPage = () => {
  const navMenu = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    navMenu.current.classList.remove("active");
    setShowMenu(false);
  };
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
      <Header white={showMenu}>
        <HeaderContainer>
          <a href="https://arithmiks.com">
            <CompanyLogo>
              <LogoIcon>
                <StaticImage src="../../images/favicon.png" alt="arithmiks logo" />
              </LogoIcon>
              <LogoText>Arithmiks</LogoText>
            </CompanyLogo>
          </a>
          <Menu ref={navMenu}>
            <MenuItem onClick={closeMenu}>Home</MenuItem>
            <MenuItem onClick={closeMenu}>Service</MenuItem>
            <MenuItem onClick={closeMenu}>Case Study</MenuItem>
            <MenuItem onClick={closeMenu}>Company</MenuItem>
            <MenuItem hidden onClick={closeMenu}>Get in Touch</MenuItem>
          </Menu>
          <CtaBtn fill> <HeaderButtonTxt>Get In Touch</HeaderButtonTxt></CtaBtn>
          <Hamburger onClick={(e)=>{
              navMenu.current.classList.toggle("active");
              if(navMenu.current.classList.contains("active"))
                setShowMenu(true);
              else
                setShowMenu(false);
          }}>
            <MenuIcon src={menu_icon} />
          </Hamburger>
        </HeaderContainer>
      </Header>
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
      <EngagementModel/>
      <CaseStudy/>
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default LandingPage;
