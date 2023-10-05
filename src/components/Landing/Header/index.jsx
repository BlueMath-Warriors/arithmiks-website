import React, { useRef, useState, useEffect } from "react";
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

const ServicesMenu = ({ menu_ref }) => {
  return (
    <ServiceContainer ref={menu_ref}>
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
  );
};

const Header = ({white}) => {
  const navMenu = useRef(null);
  const servicesRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [heroHeight, setHeroHeight] = useState(840);
  const [isFixed, setIsFixed] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  const closeMenu = () => {
    navMenu.current.classList.remove("active");
    setShowMenu(false);
  };
  const handleClickOutside = (event) => {
    if (
      showServices &&
      servicesRef.current &&
      !servicesRef.current.contains(event.target)
    ) {
      setTimeout(()=>{
        setShowServices(false);
      }, 200)
    }
  };

  useEffect(() => {
    if (showServices) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showServices]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowResize = () => {
        if (window.innerWidth > 1200) {
          setHeroHeight(840);
        } else if (window.innerWidth > 820) {
          setHeroHeight(553);
        } else {
          setHeroHeight(445);
        }
      };
      handleWindowResize();

      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY >= heroHeight) {
        setHideNav(false);
        setIsFixed(true);
      } else if(scrollY < heroHeight && scrollY > 90) {
        setHideNav(true);
        setShowMenu(false);
        setShowServices(false);
      }else {
        setHideNav(false);
        setIsFixed(false);
      }
    });
  }

  return (
    <>
      <Headerr white={(showMenu || showServices || white)} fixed={isFixed} hide={hideNav} >
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
                setShowServices((prev) => !prev);
              }}
            >
              Services
              <DownIcon>
                <IconImg src={showServices ? up_arrow : down_arrow} />
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
        {showServices && <ServicesMenu menu_ref={servicesRef} />}
      </Headerr>
    </>
  );
};

export default Header;
