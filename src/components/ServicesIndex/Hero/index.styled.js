import styled, { keyframes } from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

const floatA = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(3%, -4%, 0) scale(1.06); }
`;

const floatB = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-4%, 3%, 0) scale(1.05); }
`;

export const Section = styled.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(120px, 14vh, 170px) 0 clamp(48px, 6vh, 80px);
  background: #fff;
  overflow-x: clip;

  @media (max-width: 900px) {
    min-height: 0;
    padding: 118px 0 56px;
  }

  @media (max-width: 768px) {
    padding: 110px 0 48px;
  }

  @media (max-height: 620px) and (orientation: landscape) {
    min-height: 0;
    padding-bottom: 34px;
  }
`;

export const MeshClip = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

export const Mesh = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - 330px);
  height: 760px;
  will-change: transform;
`;

export const BlobBlue = styled.div`
  position: absolute;
  left: -6%;
  top: -46%;
  width: 52vw;
  height: 52vw;
  max-width: 820px;
  max-height: 820px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(19, 85, 255, 0.2),
    rgba(19, 85, 255, 0) 65%
  );
  filter: blur(10px);
  animation: ${floatA} 17s ease-in-out infinite;
`;

export const BlobPink = styled.div`
  position: absolute;
  right: -8%;
  top: 42%;
  width: 46vw;
  height: 46vw;
  max-width: 760px;
  max-height: 760px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(236, 74, 158, 0.12),
    rgba(236, 74, 158, 0) 62%
  );
  filter: blur(10px);
  animation: ${floatB} 21s ease-in-out infinite;
`;

export const Shell = styled.div`
  position: relative;
  z-index: 1;
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const EyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: clamp(18px, 2.2vh, 26px);
`;

export const EyebrowBar = styled.span`
  width: 3px;
  height: 19px;
  border-radius: 2px;
  background: linear-gradient(180deg, #5c8cff 0%, #1355ff 45%, #a96fc8 100%);
`;

export const Eyebrow = styled.span`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${colors.primary};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(40px, 5vw, 64px) clamp(40px, 4vw, 56px);
  align-items: flex-start;

  @media (max-width: 900px) {
    gap: 34px;
  }
`;

export const Copy = styled.div`
  flex: 1 1 620px;
  min-width: 0;
`;

export const Title = styled.h1`
  font-size: clamp(36px, 5.1vw, 84px);
  font-weight: 750;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: ${colors.text};
  max-width: 20ch;
  text-wrap: balance;

  span {
    background: linear-gradient(100deg, #1355ff 0%, #a96fc8 62%, #ec4a9e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    font-size: clamp(31px, 8.4vw, 46px);
    max-width: none;
  }
`;

export const Intro = styled.p`
  margin-top: clamp(18px, 2.4vh, 28px);
  max-width: 58ch;
  font-size: clamp(15px, 1.09vw, 21px);
  line-height: 1.6;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: clamp(26px, 3.4vh, 40px);

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;

    a {
      justify-content: center;
      min-height: 52px;
    }
  }
`;

export const PrimaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: ${colors.primary};
  color: #fff;
  font-size: 15px;
  font-weight: 550;
  padding: 12px 22px;
  border-radius: 100px;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: ${colors.primaryHover};
    transform: translateY(-2px);
    color: #fff;
  }

  /* global.module.css's "* { color: #000 }" hits this arrow span directly,
     beating the colour inherited from the link. */
  span {
    color: inherit;
  }
`;

export const SecondaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 15px;
  font-weight: 550;
  color: ${colors.primary};
  white-space: nowrap;
  padding: 11px 22px;
  border-radius: 100px;
  border: 1.5px solid ${colors.primary};
  transition: background 0.25s ease, color 0.25s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }

  /* global.module.css's "* { color: #000 }" hits this arrow span directly,
     beating the colour inherited from the link. */
  span {
    color: inherit;
  }
`;

/* ── Right-hand index panel ───────────────────────────────────────────── */

export const Index = styled.div`
  flex: 0 1 348px;
  min-width: 274px;
  border-left: 1px solid ${colors.border};
  padding: 4px 0 4px 32px;

  @media (max-width: 900px) {
    flex: 1 1 100%;
    min-width: 0;
    border-left: 0;
    border-top: 1px solid ${colors.border};
    padding: 26px 0 0 0;
  }
`;

export const CountRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;

export const Count = styled.span`
  font-size: clamp(64px, 6.4vw, 104px);
  font-weight: 750;
  letter-spacing: -0.03em;
  line-height: 0.86;
  color: ${colors.text};
  // Tabular figures keep every digit the same width, and reserving the final
  // digit count stops the count-up animation resizing this box (and so
  // re-centring the whole hero) while it passes through 1-digit values.
  font-variant-numeric: tabular-nums;
  display: inline-block;
  min-width: ${(p) => p.$digits}ch;

  @media (max-width: 420px) {
    font-size: 52px;
  }
`;

export const CountLabel = styled.span`
  font-size: 13px;
  line-height: 1.45;
  color: ${colors.textFaint};
  padding-bottom: 6px;
`;

export const IndexList = styled.div`
  margin-top: clamp(24px, 3vh, 34px);
`;

export const IndexRow = styled.a`
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding: 13px 0;
  border-top: 1px solid ${colors.border};
  color: ${colors.text};
  transition: color 0.25s ease, padding-left 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    color: ${colors.primary};
    padding-left: 7px;
  }

  @media (max-width: 900px) {
    min-height: 48px;
    align-items: center;
  }
`;

export const IndexNum = styled.span`
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.1em;
  color: #8a93a6;
  font-variant-numeric: tabular-nums;
`;

export const IndexName = styled.span`
  flex: 1;
  font-size: 15px;
  font-weight: 550;
  letter-spacing: -0.006em;
  color: inherit;
`;

export const IndexCount = styled.span`
  font-size: 12px;
  color: #8a93a6;
  font-variant-numeric: tabular-nums;
`;

export const IndexMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 22px;
  padding-top: 16px;
  border-top: 1px solid ${colors.border};
  font-size: 12px;
  color: ${colors.textFaint};

  strong {
    color: ${colors.text};
    font-weight: 550;
  }
`;

export const MetaDot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #c9d6ff;
`;
