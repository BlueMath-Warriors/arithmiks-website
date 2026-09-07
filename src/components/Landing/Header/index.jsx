import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useHoverIntent } from "../../../hooks/useHoverIntent";
import { SERVICE_NAV_GROUPS } from "../../../constants/serviceNavGroups";
import { PRODUCTS } from "../../../constants/products";
import { caseStudies } from "../Case-Study/caseStudies.js";
import {
  Headerr,
  HeaderContainer,
  CompanyLogo,
  LogoText,
  Nav,
  NavButton,
  NavLink,
  MegaPanel,
  MegaGrid,
  MegaTabsLabel,
  MegaTabs,
  MegaTab,
  MegaPane,
  MegaItemsGrid,
  MegaItem,
  MegaPaneFooter,
  MegaPaneAllLink,
  MegaSpotlight,
  SpotlightLabel,
  SpotlightCard,
  SpotlightImageWrap,
  SpotlightTitle,
  SpotlightReadLink,
  SpotlightCta,
  Chevron,
  ProductsPanel,
  ProductCard,
  CompanyPanel,
  CompanyLinksGrid,
  CompanyLink,
  CompanyPhoto,
  CtaBtn,
  SearchButton,
  Hamburger,
  MobileDrawer,
} from "./index.styled";
import logoMark from "../../../images/favicon.png";
import MenuIcon from "../../../images/hamburger_icon.svg";
import companyTeamPhoto from "../../../images/homepage/hero-team.png";

// Each Services category "spotlights" a real, shipped case study on the
// mega-menu's right column — matches the design's per-category showcase.
const SPOTLIGHT_SLUG_BY_CATEGORY = {
  "ai-engineering-data": "go",
  "software-development": "easybar",
  solutions: "hakro",
  "product-engineering": "sbaloans",
};

const spotlightForCategory = (categorySlug) => {
  const slug = SPOTLIGHT_SLUG_BY_CATEGORY[categorySlug];
  return caseStudies.find((c) => c.slug === slug);
};

const NavChevron = ({ open, color }) => (
  <Chevron
    $open={open}
    viewBox="0 0 16 16"
    width="13"
    height="13"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 6.5 8 10.5l4-4" />
  </Chevron>
);

const Header = ({ white, fixed_bar }) => {
  const [heroHeight, setHeroHeight] = useState(840);
  const [isFixed, setIsFixed] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [activeCategory, setActiveCategory] = useState(SERVICE_NAV_GROUPS[0].slug);

  const services = useHoverIntent();
  const products = useHoverIntent();
  const company = useHoverIntent();

  const openOnly = (menu) => {
    if (menu !== "services") services.setOpen(false);
    if (menu !== "products") products.setOpen(false);
    if (menu !== "company") company.setOpen(false);
  };

  const toggleAccordion = (key) =>
    setOpenAccordion((current) => (current === key ? null : key));

  const closeDrawer = () => {
    setShowMenu(false);
    setOpenAccordion(null);
  };

  // scroll/resize-driven fixed & hide behavior — unrelated to the visual
  // redesign, carried over from the previous Header implementation
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updatePath = () => setCurrentPath(window.location.pathname);
    updatePath();

    const interval = setInterval(() => {
      if (window.location.pathname !== currentPath) updatePath();
    }, 200);
    window.addEventListener("popstate", updatePath);

    return () => {
      window.removeEventListener("popstate", updatePath);
      clearInterval(interval);
    };
  }, [currentPath]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth > 1200) setHeroHeight(840);
        else if (window.innerWidth > 820) setHeroHeight(553);
        else setHeroHeight(445);
      }, 100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
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
      } else {
        setHideNav(false);
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroHeight, fixed_bar]);

  // The open white mega-menus need dark nav text regardless of scroll
  // position — matches the source's forceHeaderLight() behavior.
  const anyMenuOpen = services.open || products.open || company.open;
  const onLight = white || isFixed || fixed_bar || anyMenuOpen;
  const navColor = onLight ? "#3A4256" : "rgba(255,255,255,.9)";

  return (
    <Headerr $white={white} $fixed={isFixed || fixed_bar || anyMenuOpen} $hide={hideNav}>
      <HeaderContainer>
        <Link to="/" aria-label="Go to homepage">
          <CompanyLogo>
            <img src={logoMark} alt="" width={37} height={37} />
            <LogoText $onLight={onLight}>Arithmiks</LogoText>
          </CompanyLogo>
        </Link>

        <Nav aria-label="Main">
          <span
            ref={services.triggerRef}
            onMouseEnter={() => {
              openOnly("services");
              services.openNow();
            }}
            onMouseLeave={services.closeAfterDelay}
            onFocus={() => {
              openOnly("services");
              services.openNow();
            }}
          >
            <NavButton
              type="button"
              aria-expanded={services.open}
              aria-haspopup="menu"
              $white={white}
              $onLight={onLight}
            >
              Services
              <NavChevron open={services.open} color={navColor} />
            </NavButton>
          </span>

          <span
            ref={products.triggerRef}
            onMouseEnter={() => {
              openOnly("products");
              products.openNow();
            }}
            onMouseLeave={products.closeAfterDelay}
            onFocus={() => {
              openOnly("products");
              products.openNow();
            }}
          >
            <NavButton
              type="button"
              aria-expanded={products.open}
              aria-haspopup="menu"
              $white={white}
              $onLight={onLight}
            >
              Our Products
              <NavChevron open={products.open} color={navColor} />
            </NavButton>
          </span>

          <NavLink to="/case-studies" $white={white} $onLight={onLight}>
            Case Studies
          </NavLink>

          <span
            ref={company.triggerRef}
            onMouseEnter={() => {
              openOnly("company");
              company.openNow();
            }}
            onMouseLeave={company.closeAfterDelay}
            onFocus={() => {
              openOnly("company");
              company.openNow();
            }}
          >
            <NavButton
              type="button"
              aria-expanded={company.open}
              aria-haspopup="menu"
              $white={white}
              $onLight={onLight}
            >
              Company
              <NavChevron open={company.open} color={navColor} />
            </NavButton>
          </span>

          <CtaBtn as={Link} to="/contact">
            Book Free Consultation
          </CtaBtn>
        </Nav>

        <SearchButton aria-label="Search" type="button" $white={white} $onLight={onLight}>
          <svg
            viewBox="0 0 20 20"
            width="19"
            height="19"
            fill="none"
            stroke={navColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="8.8" cy="8.8" r="5.3" />
            <path d="m12.7 12.7 4 4" />
          </svg>
        </SearchButton>

        <Hamburger
          aria-label="Toggle menu"
          aria-expanded={showMenu}
          $white={white}
          $onLight={onLight}
          onClick={() => setShowMenu((v) => !v)}
        >
          <MenuIcon />
        </Hamburger>
      </HeaderContainer>

      {/* Full-width panel, anchored to the header itself (not the "Services"
          trigger) — the source design spans the whole nav width here, unlike
          the trigger-anchored Our Products / Company panels above. */}
      {services.open && (
        <MegaPanel
          ref={services.panelRef}
          role="menu"
          onMouseEnter={services.openNow}
          onMouseLeave={services.closeAfterDelay}
        >
          <MegaGrid>
            <MegaTabs>
              <MegaTabsLabel>Focus areas</MegaTabsLabel>
              {SERVICE_NAV_GROUPS.map((category) => (
                <MegaTab
                  key={category.slug}
                  type="button"
                  $active={category.slug === activeCategory}
                  onMouseEnter={() => setActiveCategory(category.slug)}
                  onFocus={() => setActiveCategory(category.slug)}
                >
                  <span>{category.title}</span>
                  <span>{category.items.length} services</span>
                </MegaTab>
              ))}
            </MegaTabs>
            {SERVICE_NAV_GROUPS.filter((c) => c.slug === activeCategory).map((category) => (
              <MegaPane key={category.slug}>
                <h3>{category.title}</h3>
                <MegaItemsGrid>
                  {category.items.map((svc) => (
                    <MegaItem key={svc.slug} to={svc.url}>
                      {svc.label}
                    </MegaItem>
                  ))}
                </MegaItemsGrid>
                <MegaPaneFooter>
                  <MegaPaneAllLink to={category.url}>All {category.title} →</MegaPaneAllLink>
                </MegaPaneFooter>
              </MegaPane>
            ))}
            <MegaSpotlight>
              <SpotlightLabel>Spotlight</SpotlightLabel>
              {(() => {
                const spotlight = spotlightForCategory(activeCategory);
                if (!spotlight) return null;
                return (
                  <SpotlightCard to={`/case-studies/${spotlight.slug}`}>
                    <SpotlightImageWrap>
                      <img src={spotlight.dashboardImg} alt={spotlight.title} loading="lazy" />
                    </SpotlightImageWrap>
                    <SpotlightTitle>{spotlight.title}</SpotlightTitle>
                    <SpotlightReadLink>Read case study →</SpotlightReadLink>
                  </SpotlightCard>
                );
              })()}
              <SpotlightCta to="/contact">Let&apos;s Discuss Your Idea →</SpotlightCta>
            </MegaSpotlight>
          </MegaGrid>
        </MegaPanel>
      )}

      {/* Centered on the header itself (not the trigger button) — same fix
          as the Services panel above, so a wide panel never overflows past
          the viewport edge regardless of where its trigger sits in the nav. */}
      {products.open && (
        <ProductsPanel
          ref={products.panelRef}
          role="menu"
          onMouseEnter={products.openNow}
          onMouseLeave={products.closeAfterDelay}
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} href={product.url}>
              <span>{product.name}</span>
              <span>{product.tag}</span>
              <p>{product.description}</p>
            </ProductCard>
          ))}
        </ProductsPanel>
      )}

      {company.open && (
        <CompanyPanel
          ref={company.panelRef}
          role="menu"
          onMouseEnter={company.openNow}
          onMouseLeave={company.closeAfterDelay}
        >
          <CompanyLinksGrid>
            <CompanyLink as={Link} to="/about">
              <span>About</span>
              <p>Who we are and how we got here</p>
            </CompanyLink>
            <CompanyLink href="/how-we-work">
              <span>How we work</span>
              <p>Our process, from audit to handover</p>
            </CompanyLink>
            <CompanyLink as={Link} to="/blogs">
              <span>Arithmiks Blog</span>
              <p>What we are learning about shipping AI</p>
            </CompanyLink>
            <CompanyLink href="/careers">
              <span>Careers</span>
              <p>Open roles and what it is like here</p>
            </CompanyLink>
            <CompanyLink as={Link} to="/contact">
              <span>Contact</span>
              <p>Start a conversation</p>
            </CompanyLink>
          </CompanyLinksGrid>
          <CompanyPhoto src={companyTeamPhoto} alt="The Arithmiks team in the Lahore studio" />
        </CompanyPanel>
      )}

      {showMenu && (
        <MobileDrawer>
          <button
            type="button"
            aria-expanded={openAccordion === "services"}
            onClick={() => toggleAccordion("services")}
          >
            Services
          </button>
          {openAccordion === "services" && (
            <div>
              {SERVICE_NAV_GROUPS.map((category) => (
                <div key={category.slug}>
                  <strong>{category.title}</strong>
                  {category.items.map((svc) => (
                    <Link key={svc.slug} to={svc.url} onClick={closeDrawer}>
                      {svc.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            aria-expanded={openAccordion === "products"}
            onClick={() => toggleAccordion("products")}
          >
            Our Products
          </button>
          {openAccordion === "products" && (
            <div>
              {PRODUCTS.map((product) => (
                <a key={product.name} href={product.url}>
                  {product.name}
                </a>
              ))}
            </div>
          )}

          <Link to="/case-studies" onClick={closeDrawer}>
            Case Studies
          </Link>

          <button
            type="button"
            aria-expanded={openAccordion === "company"}
            onClick={() => toggleAccordion("company")}
          >
            Company
          </button>
          {openAccordion === "company" && (
            <div>
              <Link to="/about" onClick={closeDrawer}>
                About
              </Link>
              <a href="/how-we-work">How we work</a>
              <Link to="/blogs" onClick={closeDrawer}>
                Arithmiks Blog
              </Link>
              <a href="/careers">Careers</a>
              <Link to="/contact" onClick={closeDrawer}>
                Contact
              </Link>
            </div>
          )}

          <CtaBtn as={Link} to="/contact" onClick={closeDrawer}>
            Book Free Consultation
          </CtaBtn>
        </MobileDrawer>
      )}
    </Headerr>
  );
};

export default Header;
