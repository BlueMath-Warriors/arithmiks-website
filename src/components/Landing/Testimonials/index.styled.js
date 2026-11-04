import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";
import VoiceCard from "../../shared/VoiceCard";
import { designShellGutters } from "../../shared/Section/index.styled";

// Clips the rail at the viewport edge — the rail itself is never clipped, so
// cards beyond the content column stay visible, as in the design.
export const Section = styled.section`
  position: relative;
  padding: clamp(56px, 6.25vw, 122px) 0;
  background: ${colors.dark};
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 56px;
    padding-bottom: 56px;
  }

  @media (max-width: 640px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;

export const Glow = styled.div`
  position: absolute;
  inset: -30% -10% auto;
  height: 70%;
  pointer-events: none;
  background:
    radial-gradient(42% 60% at 22% 20%, rgba(19, 85, 255, 0.26), transparent 70%),
    radial-gradient(38% 54% at 84% 8%, rgba(169, 111, 200, 0.16), transparent 72%);
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
  ${designShellGutters}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
`;

export const Eyebrow = styled.span`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8fa9ff;
`;

export const Heading = styled.h2`
  max-width: 22ch;
  font-size: clamp(28px, 3.03vw, 52px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #fff;
  text-wrap: balance;

  span {
    background: linear-gradient(100deg, #7fa6ff 0%, #9e9be8 46%, #c77fd6 72%, #f56bb0 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #9e9be8;
  }
`;

const CARD_GAP = "clamp(18px, 2.13vw, 39px)";
// The view's side padding gives a hovered card's shadow room; the rail's
// stride is the content width inside it (see useVoiceRail).
const VIEW_BLEED = "24px";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(28px, 2.4vw, 40px);
  margin-top: clamp(38px, 4.43vw, 73px);
`;

export const TrackView = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  overflow: visible;
  padding: 0 ${VIEW_BLEED};
  margin: 0 -${VIEW_BLEED};
  touch-action: pan-y;

  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
  }
`;

export const Track = styled.div`
  display: flex;
  align-items: stretch;
  gap: ${CARD_GAP};
  will-change: transform;
`;

export const CarouselCard = styled(VoiceCard)`
  flex: 0 0 calc((100% - ${CARD_GAP}) / 2);

  @media (max-width: 820px) {
    flex: 0 0 100%;
  }

  @media (max-width: 768px) {
    padding: 26px 20px;
  }
`;

export const Bars = styled.div`
  flex: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;

const BAR_WIDTH = "26px";
const BAR_ACTIVE_WIDTH = "44px";
// Bars are 5px tall by design; this is the touch target around them.
const BAR_HIT_AREA = "44px";

export const Bar = styled.button`
  position: relative;
  width: ${(p) => (p.$active ? BAR_ACTIVE_WIDTH : BAR_WIDTH)};
  height: 5px;
  border-radius: 999px;
  border: 0;
  padding: 0;
  background: ${(p) => (p.$active ? "#fff" : "rgba(255, 255, 255, 0.4)")};
  cursor: pointer;
  transition: background 0.25s ease, width 0.25s ease;

  &:focus-visible {
    outline: 2px solid #8fa9ff;
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: ${BAR_HIT_AREA};
      height: ${BAR_HIT_AREA};
    }
  }
`;
