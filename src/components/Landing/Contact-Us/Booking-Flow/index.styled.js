import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../../styles/tokens";

const CARD_RADIUS = "clamp(22px, 1.9vw, 34px)";

export const Section = styled.section`
  padding: clamp(56px, 4.82vw, 90.5px) 0 clamp(60px, 5.34vw, 101px);
  background: ${colors.surface};
  // Matches the fixed header's height (see usePinnedCaseRail's pinTop) so an
  // anchor jump to #contact doesn't land the heading behind the fixed nav.
  scroll-margin-top: 104px;
  overflow-x: clip;

  @media (max-width: 900px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @media (max-width: 640px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};

  @media (max-width: 900px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (max-width: 640px) {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  border-radius: ${CARD_RADIUS};
  background: ${colors.primary};
  box-shadow: 0 30px 70px -40px rgba(10, 15, 31, 0.28);
`;

export const Wash = styled.span`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: radial-gradient(42% 58% at 100% 0%, rgba(236, 74, 158, 0.3), transparent 70%),
    radial-gradient(46% 60% at 96% 100%, rgba(169, 111, 200, 0.42), transparent 72%),
    radial-gradient(60% 70% at 0% 100%, rgba(11, 58, 209, 0.55), transparent 70%);
`;

export const WatermarkMark = styled.img`
  position: absolute;
  z-index: -1;
  right: -70px;
  bottom: -96px;
  height: clamp(260px, 24vw, 400px);
  width: auto;
  opacity: 0.09;
  filter: brightness(0) invert(1);
  pointer-events: none;
`;

export const Columns = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  gap: 0;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FormPanel = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: clamp(28px, 3vw, 60px);
  min-width: 0;
  ${({ $minHeight }) => ($minHeight ? `min-height: ${$minHeight}px;` : "")}
`;
