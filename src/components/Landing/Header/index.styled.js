import styled from "styled-components";
import { Link } from "gatsby";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

export const breakpoints = {
  small: "430px",
  medium: "820px",
  large: "1151px",
};

// Dims and blurs whatever is behind an open mega/products/company panel, so
// the open panel reads as the focused layer instead of a plain card dropped
// on top of a fully-sharp page — matches the design's [data-navscrim]. Always
// mounted (opacity-toggled, not conditionally rendered) so the fade transition
// actually plays on close, the same way it does in the design's own JS.
export const NavScrim = styled.div`
  position: fixed;
  inset: 0;
  z-index: 39;
  background: rgba(7, 11, 24, 0.42);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.28s ease;

  @media screen and (max-width: 1151px) {
    display: none;
  }
`;

export const Headerr = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  background: ${(p) => (p.$white || p.$fixed ? "#fff" : "transparent")};
  border-bottom: 1px solid ${(p) => (p.$white || p.$fixed ? colors.border : "transparent")};
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.3s ease;
  transform: ${(p) => (p.$hide ? "translateY(-100%)" : "translateY(0)")};
`;

export const HeaderContainer = styled.div`
  max-width: ${shellMaxWidth};
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 0 auto;
  padding: 20px ${shellPadding};
  // The design is set in Aspekta, whose default line-height is 1.43; the
  // fallback stack's is 1.175, which otherwise renders the bar ~13px shorter
  // than the design because the CTA's line box drives the bar's height.
  line-height: 1.43;
`;

export const CompanyLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  flex: none;

  // The mark is 189x222, not square — width must stay auto or it distorts.
  img {
    height: 27px;
    width: auto;
    display: block;
  }
`;

export const LogoText = styled.span`
  font-size: clamp(20px, 1.34vw, 22.5px);
  font-weight: 650;
  letter-spacing: -0.02em;
  color: ${(p) => (p.$onLight ? colors.text : "#fff")};
  transition: color 0.25s ease;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-left: auto;

  @media screen and (max-width: ${breakpoints.large}) {
    display: none;
  }
`;

const navLinkColor = (p) => (p.$white || p.$onLight ? colors.textMuted : "rgba(255,255,255,.9)");

export const NavButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: clamp(15px, 0.96vw, 16.5px);
  font-weight: 450;
  color: ${navLinkColor};
  transition: color 0.25s ease;
`;

export const Chevron = styled.svg`
  transition: transform 0.25s ease;
  transform: rotate(${(p) => (p.$open ? "180deg" : "0deg")});
`;

export const NavLink = styled(Link)`
  font-size: clamp(15px, 0.96vw, 16.5px);
  font-weight: 450;
  color: ${navLinkColor};
  text-decoration: none;
  transition: color 0.25s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

export const CtaBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(15px, 0.96vw, 16.5px);
  font-weight: 550;
  color: #fff;
  background: ${colors.primary};
  padding: 12px 22px;
  border-radius: 999px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: ${colors.primaryHover};
    transform: translateY(-2px);
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const SearchButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  color: ${navLinkColor};
  transition: background 0.25s ease, color 0.25s ease;

  /* Nav carries its own margin-left:auto to push the nav+CTA group right on
     desktop, but Nav is display:none below the breakpoint, so a hidden
     element's margin pushes nothing, stranding Search+Hamburger next to
     the logo. This repeats that auto-margin here for the same breakpoint
     only: flexbox splits leftover space EVENLY across every auto-margin
     present, so doing this unconditionally opened a second gap on desktop
     (Nav's own margin plus this one, competing for the same space). Scoped
     to mobile, only one of the two is ever active at a time. */
  @media screen and (max-width: ${breakpoints.large}) {
    margin-left: auto;
  }

  &:hover {
    background: rgba(19, 85, 255, 0.1);
  }
`;

export const Hamburger = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: 1px solid ${(p) => (p.$white || p.$onLight ? colors.border : "rgba(255,255,255,.3)")};
  border-radius: 10px;
  cursor: pointer;
  color: ${navLinkColor};

  @media screen and (max-width: ${breakpoints.large}) {
    display: flex;
  }

  svg {
    width: 19px;
    height: 19px;
  }
`;

/* ---- Mega-menus (shared shell) ---- */

const panelBase = `
  position: absolute;
  top: 100%;
  background: #fff;
  border: 1px solid ${colors.border};
  border-top: 0;
  box-shadow: 0 26px 60px -28px rgba(10, 15, 31, 0.34);
  border-radius: 0 0 16px 16px;
  z-index: 45;

  @media screen and (max-width: 1151px) {
    display: none;
  }
`;

export const MegaPanel = styled.div`
  ${panelBase}
  left: 0;
  right: 0;
  border-radius: 0;
`;

export const MegaGrid = styled.div`
  max-width: ${shellMaxWidth};
  display: grid;
  grid-template-columns: clamp(250px, 17vw, 364px) minmax(0, 1fr) clamp(310px, 23.1vw, 486px);
  gap: 0;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const MegaTabsLabel = styled.span`
  font-size: 13px;
  font-weight: 650;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${colors.textFaint};
  padding: 0 clamp(12px, 1vw, 17px) clamp(10px, 0.85vw, 14px);
`;

export const MegaTabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 26px clamp(18px, 1.4vw, 33px) 26px 0;
  border-right: 1px solid #edeff5;
`;

export const MegaTab = styled.button`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  padding: clamp(12px, 1vw, 17px);
  background: ${(p) => (p.$active ? "#F5F8FF" : "transparent")};
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  transition: background 0.22s ease;

  span:first-child {
    font-size: 15.5px;
    font-weight: 550;
    color: ${(p) => (p.$active ? colors.primary : colors.text)};
    transition: color 0.22s ease;
  }
  span:last-child {
    font-size: 13px;
    color: ${colors.textFaint};
  }
`;

export const MegaPane = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 26px clamp(22px, 2.1vw, 52px);

  h3 {
    font-size: 17.5px;
    font-weight: 700;
    letter-spacing: -0.015em;
    color: ${colors.text};
    margin-bottom: 16px;
  }
`;

export const MegaItemsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 clamp(20px, 1.8vw, 41px);
`;

export const MegaPaneFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  padding-top: 18px;
`;

export const MegaPaneAllLink = styled(Link)`
  font-size: 12.5px;
  font-weight: 550;
  color: ${colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const MegaSpotlight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 26px clamp(22px, 1.96vw, 37px);
  background: #edf2fc;
`;

export const SpotlightLabel = styled.span`
  font-size: 13px;
  font-weight: 650;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${colors.textFaint};
`;

export const SpotlightCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${colors.text};
  text-decoration: none;
`;

// Fixed aspect ratio (matches the case-study dashboard screenshots' actual
// ~5:4 export size, same ratio CardImage uses in Landing-Grid) so the box
// doesn't grow from ~0 to full height once the image resolves — the space
// is reserved up front regardless of load timing.
export const SpotlightImageWrap = styled.span`
  display: block;
  aspect-ratio: 5 / 4;
  border-radius: 10px;
  overflow: hidden;
  // The design declares #DCE6FA here, but its own spotlight renders ship an
  // opaque #F2F4F4 backdrop that covers the tile, so that blue never shows.
  // This site's dashboard exports are transparent, so the tile itself has to
  // carry the grey to land on the same result.
  background: #f2f4f4;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

// min-height reserves 2 lines so a short case-study title (1 line) and a
// long one (2 lines) don't change the Spotlight card's height when switching
// category tabs.
export const SpotlightTitle = styled.span`
  min-height: 2.7em;
  font-size: 16px;
  font-weight: 650;
  letter-spacing: -0.012em;
  line-height: 1.35;
`;

export const SpotlightReadLink = styled.span`
  font-size: 13.5px;
  font-weight: 550;
  color: ${colors.primary};
`;

export const SpotlightCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: auto;
  padding: 14px 18px;
  font-size: 13.5px;
  font-weight: 550;
  color: ${colors.primary};
  border: 1.5px solid ${colors.primary};
  border-radius: 100px;
  text-decoration: none;
  transition: background 0.22s ease, color 0.22s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;

export const MegaItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: clamp(8px, 0.7vw, 12px) clamp(10px, 0.85vw, 14px);
  margin: 0 -10px;
  border-radius: 8px;
  font-size: 15px;
  color: #3a4256;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: #f5f8ff;
    color: ${colors.primary};
  }
`;

export const ProductsPanel = styled.div`
  ${panelBase}
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  max-width: calc(100vw - 2 * ${shellPadding});
  padding: clamp(26px, 2.2vw, 40px) clamp(30px, 2.5vw, 46px);
  display: flex;
  gap: 18px;
  border-radius: 0;
`;

export const ProductCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 260px;
  padding: clamp(14px, 1.15vw, 20px);
  border: 1px solid ${colors.border};
  border-radius: 14px;
  color: ${colors.text};
  text-decoration: none;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: #c9d6ff;
    box-shadow: 0 16px 34px -22px rgba(10, 15, 31, 0.3);
  }

  span:first-child {
    font-weight: 650;
  }
  span:nth-child(2) {
    align-self: flex-start;
    font-size: 12px;
    font-weight: 550;
    color: ${colors.primary};
    background: #eaf0ff;
    padding: 4px 8px;
    border-radius: 6px;
  }
  p {
    font-size: 14px;
    color: ${colors.textFaint};
  }
`;

export const CompanyPanel = styled.div`
  ${panelBase}
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  max-width: calc(100vw - 2 * ${shellPadding});
  padding: clamp(26px, 2.2vw, 40px) clamp(30px, 2.5vw, 46px);
  display: flex;
  align-items: flex-start;
  gap: 26px;
  border-radius: 0;
`;

// Intro column matching the Services mega-menu's own label+blurb treatment
// (MegaTabsLabel) — an eyebrow plus a short description of the whole menu,
// to the left of the actual links.
export const CompanyIntro = styled.div`
  flex: 0 0 clamp(190px, 15vw, 250px);
`;

export const CompanyIntroLabel = styled.div`
  font-size: 13px;
  font-weight: 650;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${colors.textFaint};
  margin-bottom: 10px;
`;

export const CompanyIntroText = styled.p`
  font-size: 14.5px;
  line-height: 1.5;
  color: ${colors.textFaint};
`;

export const CompanyLinksGrid = styled.div`
  flex: 1 1 380px;
  min-width: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 18px;
`;

export const CompanyLink = styled.a`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: clamp(11px, 0.95vw, 16px) clamp(12px, 1vw, 17px);
  border-radius: 10px;
  color: ${colors.text};
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #f5f8ff;
    color: ${colors.primary};
  }

  span {
    font-size: 15.5px;
    font-weight: 550;
  }
  p {
    font-size: 13.5px;
    color: ${colors.textFaint};
  }
`;

export const CompanyPhoto = styled.img`
  flex: none;
  width: clamp(240px, 21vw, 336px);
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  object-fit: cover;
  object-position: center 32%;
`;

/* Mobile menu content lives in ./MobileMenu — it's a full-screen takeover
   with its own top bar, not a panel hung off this header (see that
   component for why: this header's own transform makes it a containing
   block for position:fixed descendants, which broke a nested drawer's
   sizing). */
