import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "gatsby";
import {
  CtaBtn,
  Headerr,
  HeaderContainer,
  Menu,
  MenuItemLink,
  CompanyLogo,
  Hamburger,
  HeaderButtonTxt,
} from "./index.styled";
import MenuIcon from "../../../images/hamburger_icon.svg";
import logo from "../../../images/logo.webp";

const Header = ({ white, fixed_bar }) => {
  const navMenu = useRef(null);
  const menuButtonRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
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
  }, [showMenu, heroHeight, closeMenu]);

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu, handleClickOutside]);

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
        $white={showMenu || white || isFixed}
        $fixed={isFixed || fixed_bar}
        $hide={hideNav}
      >
        <HeaderContainer>
          <Link to="/" aria-label="Go to homepage">
            <CompanyLogo>
              <img src={logo} alt="Arithmiks logo" width={190} height={37} />
            </CompanyLogo>
          </Link>
          <Menu ref={navMenu}>
            <li>
              <MenuItemLink
                to="/"
                onClick={closeMenu}
                $active={currentPath === "/"}
              >
                Home
              </MenuItemLink>
            </li>
            <li>
              <MenuItemLink
                to="/services"
                onClick={closeMenu}
                $active={currentPath.startsWith("/services")}
              >
                Services
              </MenuItemLink>
            </li>
            <li>
              <MenuItemLink
                to="/case-studies"
                onClick={closeMenu}
                $active={currentPath.startsWith("/case-studies")}
              >
                Case Studies
              </MenuItemLink>
            </li>
            <li>
              <MenuItemLink
                to="/blogs"
                onClick={closeMenu}
                $active={currentPath.startsWith("/blogs")}
              >
                Blog
              </MenuItemLink>
            </li>
            <li>
              <MenuItemLink
                to="/about"
                onClick={closeMenu}
                $active={currentPath === "/about"}
              >
                Company
              </MenuItemLink>
            </li>
            <li>
              <MenuItemLink
                to="/contact"
                onClick={closeMenu}
                className="mobile-only"
                $active={currentPath === "/contact"}
              >
                Get in Touch
              </MenuItemLink>
            </li>
          </Menu>
          <CtaBtn fill="true" to="/contact">
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
      </Headerr>
    </>
  );
};

export default Header;
