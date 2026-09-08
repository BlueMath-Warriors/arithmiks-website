import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../../styles/tokens";

export const Section = styled.section`
  padding: clamp(56px, 4.82vw, 90.5px) 0 clamp(60px, 5.34vw, 101px);
  background: ${colors.surface};
  // Matches the fixed header's height (see usePinnedCaseRail's pinTop) so an
  // anchor jump to #contact doesn't land the heading behind the fixed nav.
  scroll-margin-top: 104px;
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  gap: clamp(40px, 3.02vw, 56px) clamp(40px, 3.55vw, 76.5px);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid ${colors.border};
  border-radius: clamp(18px, 1.5vw, 26px);
  box-shadow: 0 10px 30px rgba(10, 15, 31, 0.07);
  padding: clamp(26px, 2.6vw, 54px);
  min-width: 0;
`;

export const ProgressBar = styled.span`
  height: 4px;
  border-radius: 999px;
  background: #e3e8f2;
  overflow: hidden;
  display: block;
`;

export const ProgressFill = styled.span`
  display: block;
  height: 100%;
  width: ${(p) => p.$percent}%;
  border-radius: 999px;
  background: linear-gradient(90deg, #5c8cff, #1355ff 60%, #0b3ad1);
  transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ProgressLabels = styled.span`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-top: 10px;
  margin-bottom: 24px;

  span:first-child {
    font-size: clamp(13px, 0.98vw, 16.5px);
    font-weight: 650;
    color: ${colors.primary};
  }
  span:last-child {
    font-size: clamp(13px, 0.98vw, 16.5px);
    font-weight: 500;
    color: ${colors.textFaint};
  }
`;

export const Step1 = styled.div``;

export const Heading = styled.h2`
  font-size: clamp(23px, 2.22vw, 35px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.18;

  span {
    background: linear-gradient(100deg, #1355ff 0%, #a96fc8 62%, #ec4a9e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${colors.primary};
  }
`;

export const Intro = styled.p`
  margin-top: 11px;
  max-width: 56ch;
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  line-height: 1.6;
  color: ${colors.textMuted};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 1.2vw, 20px);
  margin-top: clamp(22px, 1.9vw, 34px);
`;

export const FieldPair = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(14px, 1.2vw, 20px);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

// Field-level styling (text/textarea/dropdown) now lives in ./Input —
// this file only keeps layout wrappers used directly by index.jsx.

// react-phone-input-2 ships its own fixed-width, fixed-height look (a
// 300px input, 35px tall, grey border) that doesn't match the sibling
// fields' chrome — this overrides its built-in classNames to line up with
// Input's fieldChrome (same border, radius, padding, font-size).
// The outer wrapper owns the border + radius; the flag box is inset by
// exactly that border's width with a radius reduced by the same amount
// (the standard concentric-corner formula: inner radius = outer radius -
// border width) so its corner traces the same curve from the inside rather
// than needing to be clipped to it. Two earlier attempts got this wrong:
// stacking a SEPARATE, identically-radiused box on top of the input's own
// (border-width mismatch → a notch), then clipping the whole wrapper with
// overflow:hidden to fix that — which also clipped the country-search
// dropdown, since it renders inside this same wrapper.
const phoneRadius = "clamp(10px, 0.85vw, 14px)";
const phoneBorderWidth = "1px";

// Width of the flag/dial-code box (.selected-flag, .flag-dropdown below) —
// shared with DialCodeLabel so its text lines up inside that box without
// the two guessing at each other's layout.
// Wide enough for a four-character dial code (+234, +998) to sit between the
// flag and the chevron. DialCodeLabel below is also bounded on the right, so a
// rare five-character code (+1876) clips instead of colliding with the chevron.
const dialBoxWidth = "108px";

export const PhoneField = styled.div`
  position: relative;

  .react-tel-input {
    font-family: inherit;
    width: 100%;
    background: #fff;
    border: ${phoneBorderWidth} solid #dde2ec !important;
    border-radius: ${phoneRadius} !important;
    transition: border-color 0.25s ease;

    &:focus-within {
      border-color: ${colors.primary} !important;
    }
  }

  .form-control {
    width: 100% !important;
    height: auto !important;
    padding: clamp(14px, 1.15vw, 19px) clamp(15px, 1.2vw, 20px) clamp(14px, 1.15vw, 19px)
      calc(${dialBoxWidth} + 8px) !important;
    font-size: clamp(14.5px, 0.93vw, 15.5px) !important;
    font-family: inherit;
    line-height: normal !important;
    color: ${colors.text};
    background: transparent !important;
    border: 0 !important;
    border-radius: 0 !important;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  /* Matches the design's data-dialwrap: a light-tinted well, divided from
     the number input by a hairline border rather than blending into it.
     !important throughout this block: the library's own rule is the same
     two-class specificity (".react-tel-input .flag-dropdown"), so which of
     the two wins is down to stylesheet load order, not CSS we control. */
  .flag-dropdown,
  .flag-dropdown.open {
    top: ${phoneBorderWidth} !important;
    left: ${phoneBorderWidth} !important;
    bottom: ${phoneBorderWidth} !important;
    height: auto !important;
    background: #fafbfe !important;
    border: 0 !important;
    border-right: 1px solid #e9ecf4 !important;
    border-radius: calc(${phoneRadius} - ${phoneBorderWidth}) 0 0 calc(${phoneRadius} - ${phoneBorderWidth}) !important;
  }

  .selected-flag {
    width: ${dialBoxWidth} !important;
    height: 100% !important;
    top: 0 !important;
    left: 0 !important;
    padding: 0 0 0 14px !important;
    background: transparent !important;
    border-radius: inherit !important;

    /* The library nests .arrow INSIDE .flag (a ~25px box positioned
       relative to .selected-flag, not the reverse) — so any left/right
       offset on .arrow is relative to that small flag box, not the wider
       dial box widened above, and no offset can reliably clear it for
       every flag width. Hidden in favor of DialChevron, a plain sibling
       rendered directly in PhoneField and positioned against the dial box
       itself. */
    .arrow {
      display: none !important;
    }

    &:hover,
    &:focus,
    &.selected-flag:hover {
      background: #f2f4fa !important;
    }
  }

  .country-list {
    margin-top: 8px;
    width: 280px;
    border: 1px solid ${colors.border};
    border-radius: 12px;
    box-shadow: 0 18px 40px rgba(10, 15, 31, 0.16);
  }

  .search-box {
    margin-left: 0;
    width: calc(100% - 20px);
    border-radius: 8px;
    border-color: ${colors.border};
  }
`;

// react-phone-input-2 (with disableCountryCode) hides the dial code from the
// editable input but doesn't render it anywhere else — this fills that gap,
// overlaid on top of the library's own .selected-flag button so the flag and
// its native click/dropdown behavior still work underneath. Matches the
// design's flag-then-code-then-chevron dial box, split from the plain number
// input beside it — font is the design's exact fixed 14px (not the adjacent
// number input's clamp) at its muted text color, not the near-black used for
// the number itself.
export const DialCodeLabel = styled.span`
  position: absolute;
  top: 1px;
  bottom: 1px;
  left: 38px;
  /* Stops long codes running under DialChevron; anything that still does not
     fit is clipped rather than overlapped. */
  right: calc(100% - ${dialBoxWidth} + 33px);
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 550;
  color: ${colors.textMuted};
  pointer-events: none;
  /* react-phone-input-2 gives .flag-dropdown.open a white background and
     z-index 2, which would otherwise paint over both of these. */
  z-index: 3;
`;

// Replaces the library's own .arrow (hidden above) — same chevron icon,
// stroke and size as the "Select a service" dropdown's Chevron
// (Booking-Flow/Input/index.styled.js) for a consistent look across the
// form's dropdowns. Positioned against the dial box itself (dialBoxWidth)
// instead of the library's small nested .flag box — and NOT PhoneField's
// full width, which spans the number input too.
export const DialChevron = styled.svg`
  position: absolute;
  top: 50%;
  left: calc(${dialBoxWidth} - 27px);
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 3;
`;

export const ErrorText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #b42318;
`;

export const SubmitButton = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
  background: ${colors.primary};
  color: #fff;
  font-size: clamp(15px, 0.96vw, 16.5px);
  font-weight: 600;
  padding: 14px 30px;
  white-space: nowrap;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover:not(:disabled) {
    background: ${colors.primaryHover};
    transform: translateY(-2px);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(26px, 2.2vw, 40px);

  h3 {
    font-size: clamp(12.5px, 0.95vw, 16px);
    font-weight: 650;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${colors.primary};
    margin-bottom: clamp(16px, 1.4vw, 24px);
  }
`;

export const NextUpList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 1.2vw, 20px);
`;

export const NextUpItem = styled.p`
  display: flex;
  align-items: baseline;
  gap: 12px;
  font-size: clamp(15px, 0.96vw, 16.5px);
  line-height: 1.6;
  color: ${colors.textMuted};

  &::before {
    content: "✓";
    color: #12b76a;
    flex: none;
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-top: 24px;
  border-top: 1px solid ${colors.border};

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  span:first-child {
    font-size: 11.5px;
    font-weight: 650;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${colors.textFaint};
  }

  a {
    font-size: clamp(16px, 1.02vw, 17.5px);
    font-weight: 550;
    color: ${colors.primary};
    text-decoration: none;
  }
`;

export const SocialRow = styled.span`
  display: flex;
  gap: 10px;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 44px;
  height: 44px;
  color: ${colors.primary};
  border: 1.5px solid ${colors.primary};
  border-radius: 10px;
  transition: background 0.25s ease, color 0.25s ease;

  /* global.module.css's "* { color: #000 }" matches every element in the
     svg (path/rect/circle), not just the svg itself, so each needs its own
     explicit "inherit" — an inherited value alone loses to that direct
     universal-selector match. */
  svg,
  svg * {
    color: inherit;
  }

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;

export const BadgeRow = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;

  img {
    height: 86px;
    width: auto;
    display: block;
  }
`;
