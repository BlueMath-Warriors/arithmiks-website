import styled, { css } from "styled-components";
import { colors } from "../../../styles/tokens";

const EASE = "cubic-bezier(.16,1,.3,1)";
const STACKED = "(max-width: 900px)";

// The illustrations' loops, named as in the design (the visuals reference them inline).
const keyframes = `
  @keyframes uxHl { 0%, 8% { transform: scaleX(0); } 28%, 62% { transform: scaleX(1); } 80%, 100% { transform: scaleX(0); } }
  @keyframes uxPop { 0%, 20% { opacity: .35; transform: translateY(3px); } 32%, 70% { opacity: 1; transform: none; } 85%, 100% { opacity: .35; transform: translateY(3px); } }
  @keyframes uxDash { to { stroke-dashoffset: -36; } }
  @keyframes uxTravel { 0% { offset-distance: 0%; opacity: 0; } 8% { opacity: 1; } 88% { offset-distance: 100%; opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
  @keyframes uxTok { 0%, 12%, 100% { opacity: .55; transform: none; } 4% { opacity: 1; transform: translateY(-4px); } }
  @keyframes uxWeight { 0%, 100% { font-weight: 400; letter-spacing: 0; } 50% { font-weight: 750; letter-spacing: -.025em; } }
  @keyframes uxBtn { 0%, 40%, 100% { background: #1355FF; transform: none; } 50%, 70% { background: #2B66FF; transform: translateY(-2px); } }
  @keyframes uxFocus { 0%, 40%, 100% { border-color: #E4E8F0; box-shadow: none; } 50%, 80% { border-color: #1355FF; box-shadow: 0 0 0 3px rgba(19,85,255,.15); } }
  @keyframes uxCaret { 50% { opacity: 0; } }
  @keyframes uxTrack { 0%, 45%, 100% { background: #CBD2E1; } 55%, 90% { background: #1355FF; } }
  @keyframes uxKnob { 0%, 45%, 100% { transform: none; } 55%, 90% { transform: translateX(18px); } }
  @keyframes uxScroll { 0%, 20% { transform: none; } 50%, 70% { transform: translateY(-38%); } 100% { transform: none; } }
`;

export const Section = styled.section`
  ${keyframes}
  position: relative;
  padding: clamp(72px, 6.4vw, 120px) 0;
  background: #fff;
  overflow: clip;

  @media (max-width: 640px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @media (prefers-reduced-motion: reduce) {
    [data-anim] {
      animation: none !important;
    }
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  text-align: center;

  > div {
    max-width: 720px;
  }
`;

export const List = styled.div`
  position: relative;
  margin-top: clamp(32px, 3.6vw, 56px);
`;

export const Spine = styled.span`
  position: absolute;
  left: calc(50% - 1px);
  top: clamp(28px, 3vw, 48px);
  bottom: clamp(28px, 3vw, 48px);
  width: 2px;
  background: linear-gradient(180deg, #5c8cff 0%, #1355ff 30%, #a96fc8 68%, #ec4a9e 100%);

  @media ${STACKED} {
    left: 13px;
  }
`;

export const Dot = styled.span`
  position: relative;
  z-index: 1;
  grid-column: 2;
  grid-row: 1;
  justify-self: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid ${colors.primary};
  box-shadow: 0 0 0 5px #fff;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;

  @media ${STACKED} {
    grid-column: 1;
  }
`;

export const StepText = styled.div`
  min-width: 0;
  grid-column: 1;
  grid-row: 1;
  justify-self: stretch;
  text-align: left;
  transition: opacity 0.8s ${EASE}, transform 0.8s ${EASE};

  @media ${STACKED} {
    grid-column: 2;
    justify-self: start;
  }
`;

export const StepVisual = styled.div`
  min-width: 0;
  grid-column: 3;
  grid-row: 1;
  transition: opacity 0.8s ${EASE}, transform 0.8s ${EASE};

  @media ${STACKED} {
    grid-column: 2;
    grid-row: 2;
  }
`;

// Before a step scrolls in, text and art wait off to their own sides (and
// below, once stacked); the dot pops in after them.
const hidden = css`
  ${Dot} {
    transform: scale(0);
  }

  ${StepText}, ${StepVisual} {
    opacity: 0;
  }

  ${StepText} {
    transform: translate3d(${({ $flip }) => ($flip ? "48px" : "-48px")}, 0, 0);
  }

  ${StepVisual} {
    transform: translate3d(${({ $flip }) => ($flip ? "-48px" : "48px")}, 0, 0);
  }

  @media ${STACKED} {
    ${StepText}, ${StepVisual} {
      transform: translate3d(0, 24px, 0);
    }
  }
`;

export const Step = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 44px minmax(0, 1fr);
  gap: clamp(20px, 3vw, 56px);
  align-items: center;
  padding: clamp(28px, 3vw, 48px) 0;

  ${({ $flip }) =>
    $flip &&
    css`
      ${StepText} {
        grid-column: 3;
      }

      ${StepVisual} {
        grid-column: 1;
      }

      @media ${STACKED} {
        ${StepText}, ${StepVisual} {
          grid-column: 2;
        }
      }
    `}

  @media ${STACKED} {
    grid-template-columns: 28px minmax(0, 1fr);
    gap: 16px;
  }

  ${({ $waiting }) => $waiting && hidden}
`;

export const StepLabel = styled.div`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const StepTitle = styled.h3`
  margin: 14px 0 0;
  font-size: clamp(22px, 2.1vw, 30px);
  font-weight: 550;
  letter-spacing: -0.018em;
  line-height: 1.2;
  color: ${colors.text};
  text-wrap: balance;
`;

export const StepBody = styled.p`
  margin: 14px 0 0;
  font-size: clamp(15px, 1.1vw, 17px);
  line-height: 1.65;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const VisualFrame = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 20px;
  border: 1px solid ${colors.border};
  background: ${colors.surface};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
