import styled from "styled-components";
import { colors } from "../../styles/tokens";
import { brandGradient, brandGradientOnDark } from "../shared/Section/index.styled";

export const Page = styled.div`
  /* Anchor jumps clear the fixed header plus the pinned chapter bar; the
     page measures both and writes the sum into --chrome-offset. */
  section[id] {
    scroll-margin-top: var(--chrome-offset, 140px);
  }
`;

// Vertical rhythm of every full-width band on this page ([data-band]).
export const bandPadding = `
  padding-top: 104px;
  padding-bottom: 104px;

  @media (max-width: 640px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

export const Eyebrow = styled.div`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $tone }) =>
    $tone === "onBlue" ? "rgba(255,255,255,.78)" : $tone === "onDark" ? "#8FA9FF" : colors.primary};
  margin-bottom: 22px;
`;

export const Title = styled.h2`
  font-size: clamp(30px, 3.6vw, 52px);
  font-weight: 550;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${({ $onDark }) => ($onDark ? "#fff" : colors.text)};
  text-wrap: balance;
`;

// global.module.css forces `color: #000` on every element, so the fallback
// colour matters wherever background-clip:text is unsupported.
export const Grad = styled.span`
  font-weight: 750;
  letter-spacing: -0.02em;
  background: ${({ $onDark }) => ($onDark ? brandGradientOnDark : brandGradient)};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${({ $onDark }) => ($onDark ? "#9E9BE8" : colors.primary)};
`;

export const Lead = styled.p`
  margin-top: 22px;
  font-size: 15.5px;
  line-height: 1.7;
  color: ${({ $onDark }) => ($onDark ? "rgba(255,255,255,.62)" : colors.textFaint)};
  text-wrap: pretty;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 100px;
  border: 1.5px solid ${colors.primary};
  background: ${colors.primary};
  color: #fff;
  font-size: 15px;
  font-weight: 550;
  white-space: nowrap;
  transition: transform 0.25s ease, background 0.25s ease;

  &:hover {
    color: #fff;
    background: ${colors.primaryHover};
    transform: translateY(-2px);
  }

  span {
    color: inherit;
  }
`;
