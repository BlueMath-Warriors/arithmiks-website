import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { bandPadding } from "../index.styled";

const MONO = "ui-monospace, 'JetBrains Mono', Menlo, monospace";

export const Section = styled.section`
  ${bandPadding}
  background: #fff;
`;

export const Intro = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 72px;
  align-items: flex-start;
`;

export const IntroHead = styled.div`
  flex: 1 1 380px;
  min-width: 0;
`;

export const IntroCopy = styled.div`
  flex: 1 1 420px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 6px;

  p {
    font-size: 16px;
    line-height: 1.7;
    color: ${colors.textMuted};
    text-wrap: pretty;
  }

  p:first-child {
    font-size: clamp(17px, 1.5vw, 20px);
    font-weight: 550;
    letter-spacing: -0.012em;
    line-height: 1.45;
    color: ${colors.text};
  }
`;

/* ── Diagram ─────────────────────────────────────────────────────────── */

export const Frame = styled.div`
  position: relative;
  margin-top: 56px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid ${colors.border};
  background: linear-gradient(120deg, #f7f9fd 0%, #eef2fb 46%, #f3eef9 100%);
`;

export const Glow = styled.span`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(42% 60% at 8% 30%, rgba(19, 85, 255, 0.12), transparent 70%),
    radial-gradient(36% 50% at 92% 78%, rgba(169, 111, 200, 0.16), transparent 72%);
`;

export const Flow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns:
    clamp(150px, 14vw, 190px) 36px minmax(0, 1fr) 36px minmax(0, 1fr)
    36px minmax(0, 1fr);
  gap: 0 clamp(6px, 0.8vw, 12px);
  align-items: start;
  padding: clamp(28px, 3vw, 48px) clamp(22px, 2.6vw, 44px);

  /* Below this the four columns get too narrow to read — stack them. */
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`;

export const InputNode = styled.div`
  align-self: center;
  position: relative;
  padding: 2px;
  border-radius: 22px;
  background: linear-gradient(135deg, #5c8cff 0%, #1355ff 40%, #a96fc8 78%, #ec4a9e 100%);

  @media (max-width: 900px) {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    align-self: stretch;
  }
`;

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 9px;
  padding: clamp(20px, 2vw, 28px) 14px;
  border-radius: 20px;
  background: #fff;
`;

export const MonoLabel = styled.span`
  font-family: ${MONO};
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${colors.textFaint};
`;

export const InputTitle = styled.span`
  font-size: clamp(16px, 1.25vw, 20px);
  font-weight: 500;
  letter-spacing: -0.015em;
  line-height: 1.2;
  color: ${colors.text};
`;

export const InputChips = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  margin-top: 2px;

  span {
    font-size: 11px;
    font-weight: 550;
    color: ${colors.primary};
    background: #eaf0ff;
    padding: 4px 8px;
    border-radius: 6px;
    white-space: nowrap;
  }
`;

export const Arrow = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: ${({ $elbow }) => ($elbow ? "stretch" : "center")};
  position: ${({ $elbow }) => ($elbow ? "relative" : "static")};
  height: 100%;
  color: #8a93a6;

  /* global.module.css sets color:#000 on every element, svg parts included,
     which would turn currentColor black. */
  svg,
  svg * {
    color: inherit;
  }

  svg {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
    ${({ $elbow }) => ($elbow ? "position: absolute; inset: 0;" : "")}
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 34px;
    transform: none !important;

    svg {
      position: static;
      transform: rotate(90deg);
    }
  }
`;

export const StageColumn = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-self: center;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    align-self: stretch;
  }
`;

export const StageCard = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  border: 1px solid ${colors.border};
  box-shadow: 0 8px 24px rgba(10, 15, 31, 0.06);
`;

export const StageBar = styled.span`
  display: block;
  height: 6px;
`;

export const StageBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: clamp(14px, 1.4vw, 20px) clamp(12px, 1.2vw, 16px) clamp(14px, 1.4vw, 18px);
`;

export const StageHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 4px 10px;
`;

export const StageTitle = styled.span`
  font-size: clamp(13px, 1vw, 15px);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${colors.text};
`;

export const StageDuration = styled.span`
  font-family: ${MONO};
  font-size: 10px;
  font-weight: 550;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.textFaint};
  white-space: nowrap;
`;

export const StageRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StageRow = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 10px;
  align-items: start;
  padding: 10px;
  border-radius: 10px;
  background: ${colors.surface};
`;

export const RowIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid ${colors.border};

  svg {
    fill: none;
    stroke: ${colors.primary};
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export const RowText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;

  strong {
    font-size: 13px;
    font-weight: 550;
    letter-spacing: -0.008em;
    line-height: 1.35;
    color: ${colors.text};
  }

  span {
    font-size: 12px;
    line-height: 1.45;
    color: ${colors.textMuted};
    text-wrap: pretty;
  }
`;

export const Tail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 7px;
  margin: 6px auto 0;
  width: fit-content;
`;

export const TailArrow = styled.svg`
  align-self: center;
  flex: none;
  fill: none;
  stroke: #5c7bff;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const tailPill = `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 550;
  white-space: nowrap;

  svg,
  svg * {
    color: inherit;
  }

  svg {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.9;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export const TailValidated = styled.span`
  ${tailPill}
  border: 1.5px solid ${colors.primary};
  background: #fff;
  color: ${colors.primary};
`;

export const TailDecision = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TailDiamond = styled.span`
  flex: none;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  border: 1.5px solid #5c7bff;
  border-radius: 4px;
  background: #fff;
`;

export const TailDecisionLabel = styled.span`
  position: absolute;
  left: calc(50% + 22px);
  white-space: nowrap;
  font-size: 12.5px;
  font-weight: 500;
  color: ${colors.textMuted};
`;

export const TailLive = styled.span`
  ${tailPill}
  align-self: center;
  background: linear-gradient(135deg, #1e5bff 0%, #0b3ad1 100%);
  color: #fff;
  box-shadow: 0 18px 36px -22px rgba(11, 58, 209, 0.7);
`;

/* ── Opportunities ───────────────────────────────────────────────────── */

export const OppRow = styled.div`
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  gap: 28px 72px;
  align-items: flex-start;
`;

export const OppLead = styled.p`
  flex: 0 1 300px;
  font-size: 16px;
  font-weight: 550;
  letter-spacing: -0.01em;
  line-height: 1.6;
  color: ${colors.text};
`;

export const OppGrid = styled.div`
  flex: 1 1 560px;
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
`;

export const OppCard = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  border: 1px solid #e7eaf1;
  border-radius: 14px;
  background: #fff;
  transition: border-color 0.3s ease, background 0.3s ease;

  &:hover {
    border-color: #c9d6ff;
    background: #fafbff;
  }
`;

export const OppIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  background: #eaf0ff;

  svg {
    fill: none;
    stroke: ${colors.primary};
    stroke-width: 1.7;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export const OppName = styled.span`
  font-size: 15px;
  font-weight: 550;
  letter-spacing: -0.01em;
  line-height: 1.35;
  color: ${colors.text};
`;

export const Closing = styled.div`
  margin-top: 56px;
  padding-top: 40px;
  border-top: 1px solid ${colors.border};
  display: flex;
  flex-wrap: wrap;
  gap: 20px 72px;

  p {
    flex: 1 1 340px;
    min-width: 0;
    font-size: 16px;
    line-height: 1.7;
    color: ${colors.textMuted};
    text-wrap: pretty;
  }
`;
