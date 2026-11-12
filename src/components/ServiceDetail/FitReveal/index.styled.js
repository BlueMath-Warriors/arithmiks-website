import styled from "styled-components";
import { colors } from "../../../styles/tokens";

const EASE = "cubic-bezier(.16,1,.3,1)";
const RULE = "rgba(19, 85, 255, 0.1)";

// On a white band the design keeps only this glow, lower and fainter.
export const GlowLeft = styled.div`
  position: absolute;
  left: 10%;
  bottom: ${({ $white }) => ($white ? "10%" : "24%")};
  width: min(560px, 46vw);
  height: min(420px, 34vw);
  border-radius: 50%;
  background: radial-gradient(
    closest-side,
    rgba(19, 85, 255, ${({ $white }) => ($white ? 0.09 : 0.11)}),
    rgba(19, 85, 255, 0)
  );
  filter: blur(14px);
  pointer-events: none;
`;

export const GlowRight = styled.div`
  position: absolute;
  right: 6%;
  bottom: 2%;
  width: min(520px, 42vw);
  height: min(400px, 32vw);
  border-radius: 50%;
  background: radial-gradient(
    closest-side,
    rgba(169, 111, 200, 0.06),
    rgba(236, 74, 158, 0.03) 55%,
    rgba(236, 74, 158, 0)
  );
  filter: blur(16px);
  pointer-events: none;
`;

export const Art = styled.img`
  display: block;
  height: 100%;
  max-height: clamp(88px, 7.4vw, 116px);
  width: auto;
  max-width: 100%;
  aspect-ratio: 5 / 4;
  transition: transform 0.6s ${EASE}, opacity 0.4s ease;

  /* These raise the height, but the inline-size cap above still holds. */
  @media (hover: none) {
    height: clamp(112px, 22vw, 150px);
    transform: none;
  }

  @media (max-width: 600px) {
    height: clamp(120px, 32vw, 160px);
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 0.55s ${EASE}, opacity 0.35s ease;

  > div {
    min-height: 0;
    overflow: hidden;
  }

  @media (hover: none) {
    grid-template-rows: 1fr;
    opacity: 1;
  }
`;

export const Glow = styled.span`
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 70% at 50% 0%, rgba(19, 85, 255, 0.08), transparent 70%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.45s ease;
`;

export const ArtWrap = styled.div`
  position: relative;
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  padding: 18px 0;

  @media (hover: none) {
    flex: none;
  }

  @media (max-width: 600px) {
    flex: none;
    padding: 8px 0;
  }
`;

export const Card = styled.article`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: clamp(380px, 32vw, 460px);
  padding: clamp(26px, 2.4vw, 36px);
  background: transparent;
  border-right: 1px solid ${RULE};
  outline: none;
  transition: box-shadow 0.45s ease, background 0.45s ease, transform 0.45s ${EASE};

  &:first-child {
    border-radius: 23px 0 0 23px;
  }

  &:last-child {
    border-right: 0;
    border-radius: 0 23px 23px 0;
  }

  &:hover,
  &:focus-within {
    z-index: 1;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 30px 60px -28px rgba(19, 85, 255, 0.35), 0 0 0 1px #c9d6ff;

    ${Glow} {
      opacity: 1;
    }

    ${Art} {
      transform: scale(0.84);
    }

    ${Body} {
      grid-template-rows: 1fr;
      opacity: 1;
      transition: grid-template-rows 0.55s ${EASE}, opacity 0.4s ease 0.12s;
    }
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: -2px;
  }

  @media (hover: none) {
    height: auto;
    min-height: clamp(380px, 32vw, 460px);
  }

  @media (max-width: 1000px) {
    &:nth-child(2n) {
      border-right: 0;
    }

    &:nth-child(-n + 2) {
      border-bottom: 1px solid ${RULE};
    }
  }

  /* With an odd number of cards, the last fills the paired row's width. */
  ${({ $oddCount }) =>
    $oddCount &&
    `
    @media (min-width: 601px) and (max-width: 1000px) {
      &:last-child {
        grid-column: 1 / -1;
      }
    }
  `}

  @media (max-width: 600px) {
    border-right: 0;
    border-bottom: 1px solid ${RULE};
    min-height: 0;
    height: auto;

    &:last-child {
      border-bottom: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    * {
      transition: none !important;
    }
  }
`;

export const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, minmax(0, 1fr));
  border-radius: 24px;

  /* Frosted glass over the grey band; a plain ruled frame on a white one. */
  ${({ $white }) =>
    $white
      ? `
    border: 1px solid ${colors.border};
    background: linear-gradient(160deg, rgba(245, 247, 251, 0.9), rgba(255, 255, 255, 0.6));
  `
      : `
    border: 1px solid rgba(255, 255, 255, 0.9);
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.5));
    backdrop-filter: blur(22px) saturate(160%);
    -webkit-backdrop-filter: blur(22px) saturate(160%);
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.9) inset;
  `}

  /* Siblings of the hovered card step their art back. */
  &:hover ${Card}:not(:hover) ${Art} {
    opacity: 0.55;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.span`
  position: relative;
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8a93a6;
`;

// `$large`: the three-card designs set the card type a step up.
export const Text = styled.div`
  position: relative;

  h3 {
    margin: 0;
    font-size: ${({ $large }) => ($large ? "clamp(20px, 1.6vw, 24px)" : "clamp(19px, 1.5vw, 23px)")};
    font-weight: 700;
    letter-spacing: -0.015em;
    line-height: 1.25;
    color: ${colors.text};
    text-wrap: balance;
  }
`;

export const Paragraph = styled.p`
  margin: ${({ $white }) => ($white ? "12px 0 0" : "14px 0 0")};
  font-size: ${({ $large }) => ($large ? "15px" : "14.5px")};
  line-height: 1.6;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  font-size: 14.5px;
  font-weight: 600;
  color: ${colors.primary};

  &:hover {
    color: ${colors.primaryHover};
  }

  span {
    color: inherit;
  }

  @media (max-width: 600px) {
    padding: 10px 0;
  }
`;
