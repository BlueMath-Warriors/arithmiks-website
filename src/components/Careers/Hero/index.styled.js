import styled, { keyframes } from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

const drift = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-2%, 2%, 0) scale(1.06); }
`;

export const HeroSection = styled.section`
  position: relative;
  z-index: 2;
  padding: clamp(150px, 17vh, 206px) 0 clamp(80px, 8vw, 132px);
  background: ${colors.dark};
  /* Deliberately visible, not hidden — the Glow layer's negative inset is
     contained at the page level instead (html/body overflow-x: clip in
     global.module.css). overflow: hidden here would clip the Team/Location
     dropdown panels, which render outside this section's own box. */
  overflow: visible;
`;

export const Glow = styled.div`
  position: absolute;
  inset: -20% -10%;
  pointer-events: none;
  background: radial-gradient(38% 46% at 12% 18%, rgba(19, 85, 255, 0.44), transparent 68%),
    radial-gradient(30% 36% at 90% 8%, rgba(236, 74, 158, 0.16), transparent 72%);
  animation: ${drift} 24s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Shell = styled.div`
  position: relative;
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Eyebrow = styled.div`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: clamp(18px, 2.2vh, 26px);
`;

export const Headline = styled.h1`
  font-size: clamp(28px, 3.6vw, 58px);
  font-weight: 750;
  letter-spacing: -0.022em;
  line-height: 1.06;
  color: #fff;
  max-width: 20ch;
  text-wrap: balance;
`;

export const GradientText = styled.span`
  background: linear-gradient(100deg, #7fa6ff 0%, #9e9be8 46%, #c77fd6 72%, #f56bb0 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #9e9be8;
`;

export const SearchWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: clamp(68px, 8vh, 104px);
`;
