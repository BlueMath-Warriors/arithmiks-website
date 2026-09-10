import styled from "styled-components";
import { Link } from "gatsby";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";
import { careersGradient, inheritIconColor, inheritSelfIconColor, Glyph } from "../shared";
import ArithmiksMark from "../shared/ArithmiksMark";

// This section is what gives the banner its bottom margin before the
// Footer — RolesGrid's own section above already supplies the top gap,
// so this one only adds bottom padding, on the same surface background.
export const Section = styled.section`
  padding: 0 0 clamp(64px, 5.9vw, 109px);
  background: ${colors.surface};
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 26px;
  background: ${careersGradient};
  color: #fff;
  padding: clamp(40px, 5vw, 72px);
`;

export const Glow = styled.div`
  position: absolute;
  inset: -30% -10%;
  pointer-events: none;
  background: radial-gradient(38% 44% at 12% 18%, rgba(140, 168, 255, 0.28), transparent 68%),
    radial-gradient(36% 42% at 88% 90%, rgba(236, 74, 158, 0.22), transparent 70%);
`;

export const Watermark = styled(ArithmiksMark)`
  position: absolute;
  right: -40px;
  bottom: -70px;
  width: auto;
  height: 330px;
  opacity: 0.13;
  filter: grayscale(1) brightness(3);
  pointer-events: none;
  ${inheritSelfIconColor}
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Main = styled.div`
  flex: 1 1 520px;
`;

export const Eyebrow = styled.div`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 20px;
`;

export const Heading = styled.h2`
  font-size: clamp(32px, 4.2vw, 58px);
  font-weight: 550;
  letter-spacing: -0.022em;
  line-height: 1.05;
  color: #fff;
  max-width: 760px;
`;

export const Intro = styled.p`
  margin-top: 22px;
  font-size: clamp(15px, 1.02vw, 16.5px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  text-wrap: balance;
`;

export const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
`;

export const CtaLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 11px;
  background: #fff;
  color: ${colors.primary};
  font-size: 15px;
  font-weight: 550;
  padding: 16px 28px;
  border-radius: 999px;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-3px);
  }

  &:hover ${Glyph} {
    transform: translateX(4px);
  }
`;

export const Aside = styled.div`
  flex: 0 1 300px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const AsideLabel = styled.div`
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 14px;
`;

export const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 12px;
  transition: background 0.3s, color 0.3s, border-color 0.3s;
  ${inheritIconColor}

  &:hover {
    background: #fff;
    color: ${colors.primary};
  }
`;

export const InfoRow = styled.div`
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
`;

export const InfoLabel = styled.div`
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
`;

export const InfoValue = styled.div`
  font-size: 15px;
  font-weight: 550;
  color: #fff;
`;

export const InfoLink = styled.a`
  font-size: 15px;
  font-weight: 550;
  color: #fff;
`;
