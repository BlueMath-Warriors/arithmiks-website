import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";
import VoiceCard from "../../shared/VoiceCard";

export const Section = styled.section`
  position: relative;
  padding: clamp(56px, 6.25vw, 122px) 0;
  background: ${colors.dark};
  overflow: hidden;
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
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

  span {
    background: linear-gradient(100deg, #7fa6ff 0%, #9e9be8 46%, #c77fd6 72%, #f56bb0 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #9e9be8;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: stretch;
  gap: clamp(18px, 2.13vw, 39px);
  margin-top: clamp(38px, 4.43vw, 73px);
`;

// A native scroll-snap row rather than a JS-driven translateX: dragging two
// flex items forward at once also crosses a gap the container's own width
// doesn't include, so a page-indexed "translateX(page * -100%)" drifts out
// of alignment by one gap per page (the last page fell short and clipped
// its second card). Native scrolling has no such arithmetic to get wrong,
// and it's what gives this a real touch/trackpad swipe for free.
//
// The vertical padding + compensating negative margin is the same
// bleed trick the design uses horizontally (data-voiceview's padding/
// margin pair) — it exists purely so a card's hover lift and glow have
// room above/below before hitting this container's own clip edge,
// without adding visible extra spacing around the carousel.
export const TrackView = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 28px 0 56px;
  margin: -28px 0 -56px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Track = styled.div`
  display: flex;
  align-items: stretch;
  gap: clamp(18px, 2.13vw, 39px);
`;

export const CarouselCard = styled(VoiceCard)`
  scroll-snap-align: start;
  flex: 0 0 calc((100% - clamp(18px, 2.13vw, 39px)) / 2);

  @media (max-width: 900px) {
    flex: 0 0 100%;
  }
`;

export const Dots = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const Dot = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  background: transparent;
  border: ${(p) => (p.$active ? "1.5px solid #fff" : "1.5px solid transparent")};
  border-radius: 50%;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${(p) => (p.$active ? "#fff" : "rgba(255,255,255,.4)")};
    transition: background 0.3s ease;
  }
`;
