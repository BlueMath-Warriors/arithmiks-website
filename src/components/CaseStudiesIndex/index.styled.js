import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../styles/tokens";
import CaseStudyCard from "../Landing/Case-Study/CaseStudyCard";

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

/* ── Hero ─────────────────────────────────────────────────────────────── */

// The top padding clears the fixed Header on its own — this page renders no
// spacer above it, the same way the homepage hero does.
export const HeroSection = styled.section`
  padding: clamp(186px, 21vh, 272px) 0 clamp(30px, 3vw, 46px);
  background: #fff;

  /* The design's generic ≤900px band rule would drop this to 64px, which on
     this page would put the heading under the fixed header (85px tall here).
     Its own hero treatment at that width is used instead, plus the 8px the
     header gained when its padding was matched to the design. */
  @media (max-width: 900px) {
    padding: 118px 0 48px;
  }

  @media (max-height: 500px) {
    padding-top: 130px;
  }
`;

export const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Eyebrow = styled.p`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.primary};
  margin-bottom: 20px;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(30px, 3.28vw, 54.5px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;
  max-width: 24ch;
  text-wrap: balance;
  color: ${colors.text};

  span {
    background: linear-gradient(100deg, #1355ff 0%, #a96fc8 62%, #ec4a9e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${colors.primary};
  }
`;

export const HeroIntro = styled.p`
  margin-top: 18px;
  max-width: 60ch;
  font-size: clamp(15px, 1.04vw, 18px);
  line-height: 1.65;
  color: ${colors.textMuted};

  /* Wide viewports hold the intro on a single line, as the design does. */
  @media (min-width: 901px) {
    white-space: nowrap;
    max-width: none;
  }
`;

/* ── Work section ─────────────────────────────────────────────────────── */

export const WorkSection = styled.section`
  padding: clamp(20px, 2vw, 32px) 0 clamp(64px, 6.35vw, 124px);
  background: #fff;

  @media (max-width: 900px) {
    padding: 64px 0;
  }
`;

export const VisuallyHiddenHeading = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`;

export const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: clamp(40px, 4vw, 72px);
`;

// The two FilterDropdowns' own centering unit — position: relative so
// ClearAllButton can anchor to the *pills' own edge* (see below) rather than
// FilterRow's, which would put it at the row's far edge on a wide viewport
// instead of right next to the pills. Sized to its own content only, so
// ClearAllButton (absolutely positioned, out of flow) never shifts where
// FilterRow centers this group, however often it mounts/unmounts.
export const PillsGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

// Anchored to PillsGroup's right edge (not FilterRow's) so it sits right
// next to the pills regardless of how wide the page is — absolutely
// positioned, so it still can't shift the pills' own centered position.
export const ClearAllButton = styled.button`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 12px;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: clamp(13.5px, 1vw, 15.5px);
  font-weight: 550;
  color: ${colors.textFaint};
  background: transparent;
  border: 1px solid transparent;
  border-radius: 100px;
  padding: 11px 16px;
  cursor: pointer;
  transition: color 0.25s ease, background 0.25s ease;

  // On narrow screens PillsGroup's own pills already wrap and take up most
  // of the row's width, leaving no room beside them for this without
  // overlapping — drop it back into normal flow, centered on its own line
  // below the pills, same as everything else on this page.
  @media screen and (max-width: 640px) {
    position: static;
    transform: none;
    margin: 4px auto 0;
  }

  svg {
    flex: none;
  }

  /* global.module.css's "* { color: #000 }" matches the icon's <path>
     directly, which otherwise beats this inherited color — without it the
     icon stayed black at rest and never actually turned red on hover. */
  svg,
  svg * {
    color: inherit;
  }

  &:hover {
    color: #b42318;
    background: #fef3f2;
  }
`;

export const Grid = styled.div`
  // Anchors the absolute positioning the filter-transition effect applies to
  // a leaving card (CaseStudiesIndex/index.jsx) — pulled out of grid flow at
  // its old spot so the remaining cards' Flip-computed end position is
  // correct, positioned relative to this container rather than the page.
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(24px, 2.4vw, 52px) clamp(24px, 2.6vw, 56px);
  align-items: stretch;
  // align-content's default ("normal") computes to "stretch" on a grid
  // container, so the min-height the filter-transition effect reserves
  // during a transition (CaseStudiesIndex/index.jsx) would otherwise stretch
  // the row tracks — and the cards in them, via align-items:stretch above —
  // to fill that reserved space, instead of leaving it as plain trailing
  // room below the actual content.
  align-content: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const GridCard = styled(CaseStudyCard)`
  height: 100%;
`;

export const EmptyMessage = styled.p`
  padding: clamp(40px, 4vw, 72px) 0;
  text-align: center;
  font-size: clamp(15px, 1.04vw, 18px);
  line-height: 1.6;
  color: ${colors.textFaint};

  a {
    color: ${colors.primary};

    &:hover {
      color: ${colors.primaryHover};
    }
  }
`;
