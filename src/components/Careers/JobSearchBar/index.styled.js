import styled from "styled-components";
import { colors } from "../../../styles/tokens";

// Two visual treatments matching the two contexts the design uses this bar
// in: "hero" — a single fused white card floating on the dark Careers hero,
// with the submit button as a separate pill outside it; "light" — three
// separate light-gray boxes inline on the white Jobs listing page.
// The design was only ever captured at one desktop width — the hero
// variant's fixed 3-column grid has nowhere to give at phone widths (Team/
// Location shrink to icon-only, their labels clipped to nothing), so it
// stacks to one field per row below this. Reuses JobListItem's own 700px
// breakpoint for consistency.
const HERO_STACK_BREAKPOINT = "700px";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: ${(p) => (p.$variant === "hero" ? "14px" : "10px")};
  width: 100%;
  ${(p) => (p.$variant === "hero" ? "max-width: 1080px;" : "max-width: 820px;")}

  ${(p) =>
    p.$variant === "hero"
      ? `
    @media (max-width: ${HERO_STACK_BREAKPOINT}) {
      flex-direction: column;
    }
  `
      : ""}
`;

export const FieldGroup = styled.div`
  ${(p) =>
    p.$variant === "hero"
      ? `
    flex: 1 1 auto;
    min-width: 0;
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr) minmax(0, 1fr);
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 26px 60px -34px rgba(0, 0, 0, 0.85);

    @media (max-width: ${HERO_STACK_BREAKPOINT}) {
      grid-template-columns: 1fr;
    }
  `
      : `
    display: contents;
  `}
`;

export const FieldWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0;

  ${(p) =>
    p.$variant === "hero"
      ? `
    height: 60px;
    ${p.$divider ? `border-right: 1px solid ${colors.border};` : ""}

    @media (max-width: ${HERO_STACK_BREAKPOINT}) {
      ${p.$divider ? `border-right: 0; border-bottom: 1px solid ${colors.border};` : ""}
    }
  `
      : `
    flex: ${p.$grow ? "1 1 260px" : "0 0 auto"};
    height: 48px;
    background: #f1f3f8;
    border: 1px solid ${colors.border};
    border-radius: 10px;
    padding: ${p.$grow ? "0 14px" : "0"};
    ${p.$grow ? "gap: 10px;" : ""}
  `}
`;

// The keyword field's icon sits inline (a normal flex sibling before the
// input, spaced by FieldWrap's own gap) on the light variant, but stays
// absolutely positioned — reserved for by the input's own left padding —
// everywhere else (hero variant, and the Team/Location dropdown icons in
// both variants).
export const FieldIcon = styled.svg`
  pointer-events: none;
  flex: 0 0 auto;

  ${(p) =>
    p.$inline
      ? ""
      : `
    position: absolute;
    left: ${p.$variant === "hero" ? "18px" : "14px"};
    top: 50%;
    transform: translateY(-50%);
  `}
`;

export const InlineIcon = styled.svg`
  flex: 0 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  min-width: 0;
  padding: ${(p) => (p.$variant === "hero" ? "0 16px 0 46px" : "0")};
  font-size: 15px;
  color: ${colors.text};
  background: transparent;
  border: 0;
  outline: none;

  &::placeholder {
    color: ${colors.textFaint};
  }
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: ${(p) => (p.$variant === "hero" ? "0 16px 0 46px" : "0 14px 0 40px")};
  background: transparent;
  border: 0;
  cursor: pointer;
  text-align: left;
`;

export const DropdownLabel = styled.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${(p) => (p.$variant === "hero" ? "15px" : "14.5px")};
  color: ${(p) => (p.$active ? colors.text : colors.textFaint)};
`;

export const Chevron = styled.svg`
  flex: 0 0 auto;
  transition: transform 0.25s;
  transform: ${(p) => (p.$open ? "rotate(180deg)" : "none")};
`;

export const DropdownPanel = styled.div`
  display: ${(p) => (p.$open ? "block" : "none")};
  position: absolute;
  z-index: 40;
  top: calc(100% + 8px);
  left: 0;
  min-width: 100%;
  width: max-content;
  max-width: 280px;
  max-height: 276px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  box-shadow: 0 20px 44px -20px rgba(10, 15, 31, 0.22);
  padding: 6px;
`;

export const DropdownOption = styled.button`
  display: block;
  width: 100%;
  padding: 9px 10px;
  background: ${(p) => (p.$selected ? colors.surface : "transparent")};
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.4;
  color: ${colors.text};
  text-align: left;
  white-space: nowrap;
  transition: background 0.2s;

  &:hover {
    background: ${colors.surface};
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 0 0 auto;
  height: ${(p) => (p.$variant === "hero" ? "100%" : "48px")};
  padding: ${(p) => (p.$variant === "hero" ? "0 clamp(24px, 2.4vw, 36px)" : "0 22px")};
  font-size: ${(p) => (p.$variant === "hero" ? "15px" : "14.5px")};
  font-weight: ${(p) => (p.$variant === "hero" ? 600 : 550)};
  color: #fff;
  background: ${colors.primary};
  border: 0;
  border-radius: 100px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.25s;

  ${(p) =>
    p.$variant === "hero"
      ? `
    @media (max-width: 700px) {
      height: 56px;
    }
  `
      : ""}

  &:hover {
    background: ${colors.primaryHover};
  }
`;
