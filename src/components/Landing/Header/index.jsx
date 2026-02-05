import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "gatsby";
import {
  CtaBtn,
  Headerr,
  HeaderContainer,
  Menu,
  MenuItemLink,
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
  ServiceMenuItem,
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
  const [currentPath, setCurrentPath] = useState("");

  const closeMenu = useCallback(() => {
    if (navMenu && navMenu.current) {
      navMenu.current.classList.remove("active");
    }
    setShowMenu(false);
  }, []);

  const handleClickOutside = useCallback((event) => {
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
      closeMenu();
    }
  }, [showServices, showMenu, heroHeight, closeMenu]);

  useEffect(() => {
    if (showServices || showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showServices, showMenu, handleClickOutside]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const updatePath = () => {
      setCurrentPath(window.location.pathname);
    };
    
    updatePath();
    
    window.addEventListener("popstate", updatePath);
    
    const handleRouteChange = () => {
      setTimeout(updatePath, 0);
    };
    
    const interval = setInterval(() => {
      if (window.location.pathname !== currentPath) {
        updatePath();
      }
    }, 200);
    
    return () => {
      window.removeEventListener("popstate", updatePath);
      clearInterval(interval);
    };
  }, [currentPath]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    let timeoutId;
    const handleWindowResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth > 1200) {
          setHeroHeight(840);
        } else if (window.innerWidth > 820) {
          setHeroHeight(553);
        } else {
          setHeroHeight(445);
        }
      }, 100);
    };
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || fixed_bar) return;

    const handleScroll = () => {
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
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroHeight, fixed_bar]);

  return (
    <>
      <Headerr
        white={showMenu || showServices || white || isFixed}
        fixed={isFixed || fixed_bar}
        hide={hideNav}
      >
        <HeaderContainer>
          <Link to="/" aria-label="Go to homepage">
            <CompanyLogo>
              <img src={logo} alt="Arithmiks logo" width={190} height={37} />
            </CompanyLogo>
          </Link>
          <Menu ref={navMenu}>
            <MenuItemLink 
              to="/" 
              onClick={closeMenu}
              active={currentPath === "/"}
            >
              Home
            </MenuItemLink>
            <ServiceMenuItem
              ref={servicebtnRef}
              blue={showServices}
              onClick={() => {
                setShowServices(!showServices);
                navMenu.current.classList.remove("active");
                setShowMenu(false);
              }}
              aria-expanded={showServices}
              aria-haspopup="true"
            >
              Services
              <DownArrow className={showServices ? "down-icon" : "up-icon"} />
            </ServiceMenuItem>
            <MenuItemLink 
              to="/case-studies" 
              onClick={closeMenu}
              active={currentPath.startsWith("/case-studies")}
            >
              Case Studies
            </MenuItemLink>
            <MenuItemLink 
              to="/company" 
              onClick={closeMenu}
              active={currentPath === "/company"}
            >
              Company
            </MenuItemLink>
            <MenuItemLink 
              to="/contact-us" 
              onClick={closeMenu} 
              className="mobile-only" 
              active={currentPath === "/contact-us"}
            >
              Get in Touch
            </MenuItemLink>
          </Menu>
          <CtaBtn fill="true" to="/contact-us">
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
            aria-label="Toggle menu"
            aria-expanded={showMenu}
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
