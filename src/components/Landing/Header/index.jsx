import React, { useRef, useState } from "react";
import {
  CtaBtn,
  Headerr,
  HeaderContainer,
  Menu,
  MenuItem,
  CompanyLogo,
  LogoText,
  LogoIcon,
  Hamburger,
  MenuIcon,
  HeaderButtonTxt,
  DownIcon,
  IconImg,
  ServiceContainer,
  ServiceRow,
  ServiceHeader,
  ServiceText,
} from "./index.styled";
import { StaticImage } from "gatsby-plugin-image";
import menu_icon from "../../../images/hamburger_icon.svg";
import down_arrow from "../../../images/header-arrow-down.svg";
import up_arrow from "../../../images/header-arrow-up.svg";

const ServicesMenu = () => {
  return (
    <ServiceContainer>
      <ServiceRow>
        <ServiceHeader>Software Development</ServiceHeader>
        <ServiceText>Web App Development</ServiceText>
        <ServiceText>Mobile App Development</ServiceText>
        <ServiceText>Custom Software Development</ServiceText>
        <ServiceText>UI/UX Design</ServiceText>
        <ServiceText>Software Quality Assurance</ServiceText>
        <ServiceText>DevOps </ServiceText>
      </ServiceRow>

      <ServiceRow>
        <ServiceHeader>Solution</ServiceHeader>
        <ServiceText>Cloud Infrastructure Management</ServiceText>
        <ServiceText>Project Management</ServiceText>
        <ServiceText>Technical Support</ServiceText>
        <ServiceText>Digital Transformation</ServiceText>
      </ServiceRow>

      <ServiceRow>
        <ServiceHeader>Data and AI</ServiceHeader>
        <ServiceText>Data Pre-Processing</ServiceText>
        <ServiceText>Data Modeling</ServiceText>
        <ServiceText>Results and Visualization</ServiceText>
      </ServiceRow>

      <ServiceRow>
        <ServiceHeader>Product Engineering</ServiceHeader>
        <ServiceText>Product Discovery</ServiceText>
        <ServiceText>Interactive Prototyping</ServiceText>
        <ServiceText>MVP</ServiceText>
        <ServiceText>Software Re-engineering</ServiceText>
      </ServiceRow>
    </ServiceContainer>
  )
}

const Header = () => {
  const navMenu = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const toggle_service = () => {
    setShowServices(!showServices);
  };
  const closeMenu = () => {
    navMenu.current.classList.remove("active");
    setShowMenu(false);
  };
  return (
    <>
      <Headerr white={showMenu}>
        <HeaderContainer>
          <a href="https://arithmiks.com">
            <CompanyLogo>
              <LogoIcon>
                <StaticImage
                  src="../../../images/favicon.png"
                  alt="arithmiks logo"
                />
              </LogoIcon>
              <LogoText>Arithmiks</LogoText>
            </CompanyLogo>
          </a>
          <Menu ref={navMenu}>
            <MenuItem onClick={closeMenu}>Home</MenuItem>
            <MenuItem
              blue={showServices}
              onClick={() => {
                closeMenu();
                toggle_service();
              }}
            >
              Services
              <DownIcon>
                <IconImg src={showServices ? up_arrow : down_arrow}/>
              </DownIcon>
            </MenuItem>
            <MenuItem onClick={closeMenu}>Case Study</MenuItem>
            <MenuItem onClick={closeMenu}>Company</MenuItem>
            <MenuItem hidden blue onClick={closeMenu}>
              Get in Touch
            </MenuItem>
          </Menu>
          <CtaBtn fill>
            {" "}
            <HeaderButtonTxt>Get In Touch</HeaderButtonTxt>
          </CtaBtn>
          <Hamburger
            onClick={(e) => {
              navMenu.current.classList.toggle("active");
              if (navMenu.current.classList.contains("active"))
                setShowMenu(true);
              else setShowMenu(false);
            }}
          >
            <MenuIcon src={menu_icon} />
          </Hamburger>
        </HeaderContainer>
      </Headerr>
      {showServices && <ServicesMenu/>}

    </>
  );
};

export default Header;
