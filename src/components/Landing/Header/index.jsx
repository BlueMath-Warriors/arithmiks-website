import React, { useRef, useState, useEffect } from "react";
import { navigate, Link } from "gatsby";
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
  HeaderButtonTxt,
  DownIcon,
  IconImg,
  ServiceContainer,
  ServiceRow,
  ServiceHeader,
  ServiceText,
  TwoRows,
} from "./index.styled";
import MenuIcon from "../../../images/hamburger_icon.svg";
import DownArrow from "../../../images/header-arrow-down.svg";
import up_arrow from "../../../images/header-arrow-up.svg";
import logo from "../../../images/logo.png";

const ServicesMenu = ({ menu_ref }) => {
  return (
    <ServiceContainer ref={menu_ref}>
      <TwoRows>
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
      </TwoRows>

      <TwoRows>
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
      </TwoRows>
    </ServiceContainer>
  );
};

const Header = ({ white, fixed_bar }) => {
  const navMenu = useRef(null);
  const servicesRef = useRef(null);
  const servicebtnRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [heroHeight, setHeroHeight] = useState(840);
  const [isFixed, setIsFixed] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const closeMenu = () => {
    if (navMenu && navMenu.current) {
      navMenu.current.classList.remove("active");
    }
    setShowMenu(false);
  };
  const handleClickOutside = (event) => {
    if (
      showServices &&
      servicesRef.current &&
      !(
        servicesRef.current.contains(event.target) ||
        servicebtnRef.current.contains(event.target)
      )
    ) {
      setShowServices(false);
    }

    if (
      heroHeight < 840 &&
      showMenu &&
      navMenu.current &&
      !(
        navMenu.current.contains(event.target) ||
        menuButtonRef.current.contains(event.target)
      )
    ) {
      closeMenu(false);
    }
  };

  useEffect(() => {
    if (showServices || showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showServices, showMenu]);

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

  if (typeof window !== "undefined" && !fixed_bar) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY >= heroHeight) {
        setHideNav(false);
        setIsFixed(true);
      } else if (scrollY < heroHeight && scrollY > heroHeight - 10) {
        setHideNav(true);
        setShowMenu(false);
        setShowServices(false);
      } else {
        setHideNav(false);
        setIsFixed(false);
        // closeMenu();
      }
    });
  }

  return (
    <>
      <Headerr
        white={showMenu || showServices || white || isFixed}
        fixed={isFixed || fixed_bar}
        hide={hideNav}
      >
        <HeaderContainer>
          <Link href="/">
            <CompanyLogo>
              <img src={logo} alt="arithmiks logo" />
            </CompanyLogo>
          </Link>
          <Menu ref={navMenu}>
            <MenuItem
              onClick={() => {
                closeMenu();
                navigate("/");
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              ref={servicebtnRef}
              blue={showServices}
              onClick={() => {
                setShowServices(!showServices);
                navMenu.current.classList.remove("active");
                setShowMenu(false);
              }}
            >
              Services
              <DownArrow className={showServices ? "down-icon" : "up-icon"} />
            </MenuItem>
            <MenuItem
              onClick={() => {
                closeMenu();
                navigate("/case-studies");
              }}
            >
              Case Studies
            </MenuItem>
            <MenuItem
              onClick={() => {
                closeMenu();
                navigate("/company");
              }}
            >
              Company
            </MenuItem>
            <MenuItem
              hidden
              blue
              onClick={() => {
                closeMenu();
                navigate("/contact-us");
              }}
            >
              Get in Touch
            </MenuItem>
          </Menu>
          <CtaBtn fill href="/contact-us">
            {" "}
            <HeaderButtonTxt>Get In Touch</HeaderButtonTxt>
          </CtaBtn>
          <Hamburger
            ref={menuButtonRef}
            onClick={(e) => {
              navMenu.current.classList.toggle("active");
              if (navMenu.current.classList.contains("active")) {
                setShowMenu(true);
              } else setShowMenu(false);
            }}
          >
            <MenuIcon />
          </Hamburger>
        </HeaderContainer>
        {showServices && <ServicesMenu menu_ref={servicesRef} />}
      </Headerr>
    </>
  );
};

export default Header;
