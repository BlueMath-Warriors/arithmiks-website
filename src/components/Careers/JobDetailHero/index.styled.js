import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";
import { careersGradient, inheritIconColor } from "../shared";

export const HeroSection = styled.section`
  position: relative;
  padding: clamp(135px, 14vh, 183px) 0 clamp(43px, 5vw, 75px);
  background: ${careersGradient};
  overflow: hidden;
`;

export const Glow = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(40% 46% at 10% 14%, rgba(140, 168, 255, 0.28), transparent 68%),
    radial-gradient(36% 42% at 92% 88%, rgba(236, 74, 158, 0.2), transparent 70%);
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

export const Meta = styled.div`
  font-size: clamp(14px, 1vw, 16.5px);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.86);
`;

export const Title = styled.h1`
  margin-top: 12px;
  font-size: clamp(30px, 3.9vw, 62px);
  font-weight: 750;
  letter-spacing: -0.022em;
  line-height: 1.06;
  color: #fff;
  max-width: 20ch;
  text-wrap: balance;
`;

export const SubMeta = styled.div`
  margin-top: 14px;
  font-size: clamp(14.5px, 1.02vw, 17.5px);
  color: rgba(255, 255, 255, 0.86);
`;

export const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: clamp(26px, 3vw, 38px);
`;

export const ApplyButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  font-size: 15px;
  font-weight: 600;
  color: ${colors.primary};
  background: #fff;
  border-radius: 100px;
  white-space: nowrap;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ShareButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 26px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  border-radius: 100px;
  white-space: nowrap;
  transition: background 0.25s, border-color 0.25s;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

export const NetworkLabel = styled.div`
  margin-top: clamp(24px, 2.6vw, 34px);
  font-size: clamp(13.5px, 0.95vw, 15.5px);
  color: rgba(255, 255, 255, 0.82);
`;

export const IconRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 14px;
`;

const iconBoxStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  color: #fff;
  transition: background 0.25s, border-color 0.25s;
  ${inheritIconColor}

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const IconLink = styled.a`
  ${iconBoxStyles}
`;

export const IconButton = styled.button`
  ${iconBoxStyles}
  padding: 0;
  background: transparent;
  cursor: pointer;
`;
