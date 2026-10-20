import styled from "styled-components";
import { colors } from "../../styles/tokens";
import { driftingGlow } from "../shared/Section/index.styled";

const STACKED = "(max-width: 900px)";
const TOC_NUMBER_GREY = "#9AA3B5";
const bodyText = `
  font-size: clamp(14.5px, 1vw, 17px);
  line-height: 1.72;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const Section = styled.section`
  position: relative;
  z-index: 2;
  padding: clamp(132px, 15vh, 178px) 0 clamp(64px, 5.9vw, 109px);
  background: #fff;

  @media ${STACKED} {
    padding-top: 110px;
    padding-bottom: 48px;
  }
`;

export const GlowClip = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: clamp(420px, 58vh, 660px);
  overflow: hidden;
  pointer-events: none;
`;

export const Glow = styled.div`
  ${driftingGlow(
    "radial-gradient(38% 46% at 12% 18%, rgba(19, 85, 255, 0.16), transparent 68%), radial-gradient(30% 36% at 90% 8%, rgba(236, 74, 158, 0.14), transparent 72%)"
  )}
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: clamp(240px, 20vw, 320px) minmax(0, 1fr);
  gap: clamp(32px, 4vw, 96px);
  align-items: start;

  @media ${STACKED} {
    grid-template-columns: 1fr;
  }
`;

export const Toc = styled.nav`
  position: sticky;
  top: 112px;
  align-self: start;
  max-height: calc(100vh - 150px);
  overflow-y: auto;

  @media ${STACKED} {
    position: static;
    max-height: none;
  }
`;

export const TocHeading = styled.div`
  font-size: 11.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.textFaint};
  padding-bottom: 14px;
  border-bottom: 1px solid ${colors.border};
`;

export const TocList = styled.ol`
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;

  @media ${STACKED} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const TocNumber = styled.span`
  flex: none;
  font-size: 12px;
  font-weight: 600;
  padding-top: 0.12em;
  color: ${({ $active }) => ($active ? colors.primary : TOC_NUMBER_GREY)};
  transition: color 0.25s ease;
`;

export const TocLink = styled.a`
  display: flex;
  gap: 10px;
  padding: 9px 0;
  font-size: 14px;
  line-height: 1.4;
  font-weight: ${({ $active }) => ($active ? 650 : 500)};
  color: ${({ $active }) => ($active ? colors.primary : colors.textFaint)};
  transition: color 0.25s ease;

  span:last-child {
    color: inherit;
  }

  &:hover {
    color: ${({ $active }) => ($active ? colors.primary : colors.text)};
  }
`;

export const Body = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(32px, 3vw, 52px);
`;

export const Intro = styled.div`
  padding-bottom: clamp(6px, 1vw, 14px);
  border-bottom: 1px solid ${colors.border};
`;

export const Title = styled.h1`
  font-size: clamp(28px, 3.6vw, 58px);
  font-weight: 750;
  letter-spacing: -0.022em;
  line-height: 1.06;
  color: ${colors.text};
  max-width: 22ch;
  text-wrap: balance;
`;

export const Lede = styled.p`
  margin-top: clamp(14px, 2vh, 22px);
  font-size: clamp(15px, 1.05vw, 19px);
  line-height: 1.62;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 28px;
  margin: clamp(18px, 2.4vh, 26px) 0 clamp(18px, 2vw, 24px);
  font-size: 13.5px;
  color: ${colors.textFaint};

  span {
    color: inherit;
  }

  strong {
    font-weight: 600;
    color: ${colors.text};
  }
`;

export const PolicyArticle = styled.section`
  scroll-margin-top: 140px;
`;

export const SectionTitle = styled.h2`
  display: flex;
  gap: 14px;
  font-size: clamp(19px, 1.6vw, 26px);
  font-weight: 750;
  letter-spacing: -0.018em;
  line-height: 1.25;
  color: ${colors.text};
  text-wrap: balance;

  span:last-child {
    color: inherit;
  }
`;

export const SectionNumber = styled.span`
  flex: none;
  font-size: clamp(13px, 1vw, 15px);
  font-weight: 600;
  color: ${colors.primary};
  padding-top: 0.45em;
`;

export const Blocks = styled.div`
  margin-top: 16px;
  padding-left: clamp(0px, 2.2vw, 34px);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Paragraph = styled.p`
  ${bodyText}
`;

export const BulletList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const BulletItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: baseline;
  ${bodyText}

  span {
    color: inherit;
  }

  strong {
    font-weight: 650;
    color: ${colors.text};
  }
`;

export const Bullet = styled.span`
  flex: none;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${colors.primary};
  transform: translateY(-3px);
`;

export const ContactBox = styled.div`
  scroll-margin-top: 140px;
  padding: clamp(24px, 2.4vw, 34px);
  border-radius: clamp(14px, 1.2vw, 18px);
  border: 1px solid ${colors.border};
  background: ${colors.surface};

  h2 {
    font-size: clamp(17px, 1.3vw, 21px);
    font-weight: 750;
    letter-spacing: -0.016em;
    line-height: 1.3;
    color: ${colors.text};
  }
`;

export const ContactText = styled.p`
  margin-top: 10px;
  ${bodyText}
`;

export const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 32px;
  margin-top: 18px;
  font-size: 14.5px;

  a {
    font-weight: 600;
    color: ${colors.primary};

    &:hover {
      color: ${colors.primaryHover};
    }
  }

  span {
    color: ${colors.textFaint};
  }
`;
