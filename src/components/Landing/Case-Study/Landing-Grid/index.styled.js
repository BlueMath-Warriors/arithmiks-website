import styled from "styled-components";
import { Link } from "gatsby";
import { colors, shellMaxWidth, shellPadding } from "../../../../styles/tokens";
import CaseStudyCard from "../CaseStudyCard";

const railGap = "24px";

export const Stage = styled.section`
  position: relative;
  padding-top: 110px;
  background: #fff;
`;

export const Pin = styled.div`
  position: sticky;
  top: 104px;
  padding: 0 0 40px;

  @media (max-width: 900px) {
    position: static;
  }
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px 56px;
`;

export const Eyebrow = styled.div`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.primary};
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: clamp(28px, 3.23vw, 50px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;

  span {
    background: linear-gradient(100deg, #1355ff 0%, #a96fc8 62%, #ec4a9e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${colors.primary};
  }
`;

export const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex: none;
  font-size: clamp(15px, 0.96vw, 16.5px);
  font-weight: 550;
  color: ${colors.primary};
  padding: 14px 24px;
  border: 1.5px solid ${colors.primary};
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.25s ease, color 0.25s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;

export const View = styled.div`
  margin-top: 44px;
  padding: 14px 0 28px;
  overflow: visible;

  /* Any overflow other than visible clips box-shadows at the scroller's edge, so
     the scroller bleeds to the screen edges and keeps the shell inset as inner
     padding / scroll-padding / a trailing spacer (Track::after) for the shadows
     to render in. The extra bottom padding is pulled back out with a negative
     margin so the section's layout height is unchanged. */
  @media (max-width: 900px) {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: ${shellPadding};
    -webkit-overflow-scrolling: touch;
    margin: 20px calc(-1 * ${shellPadding}) -28px;
    padding: 14px 0 56px ${shellPadding};
  }
`;

export const Track = styled.div`
  display: flex;
  gap: ${railGap};
  overflow: visible;
  will-change: transform;

  /* The scroller's own end padding isn't part of its scrollable width, so the
     last card would end flush against the clip edge. The negative margin
     cancels the flex gap so the spacer is exactly the shell inset wide. */
  @media (max-width: 900px) {
    &::after {
      content: "";
      flex: none;
      width: ${shellPadding};
      margin-left: -${railGap};
    }
  }
`;

// The card's own visuals live in the shared CaseStudyCard; the rail only
// adds how wide a card sits in the track and how it snaps.
export const RailCard = styled(CaseStudyCard)`
  flex: 0 0 clamp(288px, 31.4%, 452px);
  scroll-snap-align: start;
`;
