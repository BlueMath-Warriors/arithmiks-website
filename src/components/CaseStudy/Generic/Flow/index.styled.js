import styled from "styled-components";
import { colors } from "../../../../styles/tokens";
import { bandPadding } from "../layout.styled";

const STACK_BREAKPOINT = "1240px";

export const FlowSection = styled.section`
  ${bandPadding}
  background: #fff;
`;

export const FlowHead = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr);
  gap: 20px clamp(36px, 5vw, 96px);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Description = styled.p`
  font-size: clamp(15px, 1.05vw, 18px);
  line-height: 1.65;
  color: ${colors.textMuted};
`;

export const Diagram = styled.div`
  position: relative;
  margin-top: clamp(36px, 3.6vw, 56px);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid ${colors.border};
  background: linear-gradient(120deg, #f7f9fd 0%, #eef2fb 46%, #f3eef9 100%);
`;

export const DiagramGlow = styled.span`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(42% 60% at 8% 30%, rgba(19, 85, 255, 0.12), transparent 70%),
    radial-gradient(36% 50% at 92% 78%, rgba(169, 111, 200, 0.16), transparent 72%);
`;

// The diagram markup carries its own inline styles (grid placement, sizes).
// Below the stacking breakpoint these rules re-flow it into a single column,
// so they override those inline values.
export const DiagramLayout = styled.div`
  // global.module.css's "* { color: #000 }" hits every svg and path directly,
  // so stroke="currentColor" icons would render black instead of the colour
  // their wrapper sets.
  svg,
  svg * {
    color: inherit;
  }

  @media (max-width: ${STACK_BREAKPOINT}) {
    [data-clflow] {
      grid-template-columns: minmax(0, 1fr) !important;
      row-gap: 4px !important;
    }
    [data-clflow] > * {
      grid-column: auto !important;
      grid-row: auto !important;
    }
    [data-clarrow] svg {
      transform: rotate(90deg);
    }
    [data-clarrow] {
      padding: 6px 0;
    }
    [data-cldash] {
      display: none !important;
    }
    // Stacked, the pill-shaped "No" branch can't sit beside the diamond
    // without overlapping it, so only its caption stays (centered, in flow)
    // and data-clnobranch's compact side-exit (line, label, icon, caption)
    // takes over as the diamond's left exit. It anchors off data-clgate's
    // horizontal center (always the diamond's center) plus the diamond's
    // fixed half-width, not off data-clgate's own box, since that box's
    // width is pulled wider by the caption text line above it.
    [data-clgatebelow] {
      position: static !important;
      transform: none !important;
      margin-top: 10px;
    }
    [data-clgatebelow] > :not(:first-child) {
      display: none !important;
    }
    [data-clnobranch] {
      display: flex !important;
    }
    @media (max-width: 340px) {
      [data-clnobranch] {
        right: calc(50% + 36px) !important;
        gap: 4px !important;
      }
      [data-clnobranch] > div {
        gap: 2px !important;
      }
    }
    [data-clyes] {
      position: static !important;
      transform: none !important;
      margin-right: 6px;
    }
    [data-clstart] {
      justify-self: center;
      width: min(100%, 320px);
    }
    [data-cltail] {
      padding-bottom: 28px !important;
    }
    [data-clamyes] {
      position: static !important;
      transform: none !important;
      margin-top: 8px;
    }
    [data-clamend] {
      flex-direction: column;
      width: auto !important;
      height: auto !important;
      min-height: 64px;
    }
    [data-clamend] > span:first-child {
      inset: auto !important;
      width: 46px;
      height: 46px;
      top: 9px;
      left: calc(50% - 23px);
    }
  }

  // Quanta's pipeline: connectors bend between differently tall cards on wide
  // screens and the whole diagram becomes one column on narrow ones.
  @media (min-width: 1101px) {
    [data-qfcol="mid"] > [data-qfctx] {
      margin-top: -84px;
    }
  }

  @media (max-width: 1100px) {
    [data-qflow] {
      grid-template-columns: minmax(0, 1fr) !important;
      gap: 6px !important;
      max-width: 560px;
      margin: 0 auto;
    }
    [data-qfarrow] {
      height: 40px !important;
      transform: rotate(90deg);
    }
    [data-qfctx] {
      height: auto !important;
      padding-top: 6px;
    }
  }
`;
