import styled from "styled-components";
import { colors } from "../../../styles/tokens";

const BORDER_IDLE = "#DDE2EC";
const TINT_ACTIVE = "#EAF0FF";

export const Wrap = styled.span`
  position: relative;
  display: flex;
`;

export const Pill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 248px;
  justify-content: space-between;
  font-size: clamp(13.5px, 1vw, 15.5px);
  font-weight: 550;
  color: ${(p) => (p.$active ? colors.primary : colors.textMuted)};
  background: ${(p) => (p.$active ? TINT_ACTIVE : "#fff")};
  border: 1px solid ${(p) => (p.$active ? colors.primary : BORDER_IDLE)};
  border-radius: 100px;
  /* The clear badge is an absolutely-positioned sibling (see ClearBadge), so
     the pill reserves its 18px + 10px gap here to keep the design's spacing. */
  padding: 11px 18px 11px ${(p) => (p.$active ? "46px" : "18px")};
  cursor: pointer;
  transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;

  &:hover {
    border-color: ${colors.primary};
    color: ${colors.primary};
  }
`;

// The design draws this inside the pill; rendered as a sibling instead, since a
// button cannot legally nest inside another button.
export const ClearBadge = styled.button`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 18px;
  height: 18px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(19, 85, 255, 0.14);
  color: ${colors.primary};
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  /* global.module.css's "* { color: #000 }" matches the icon's <path>
     directly, which otherwise beats this inherited color the moment the
     icon exists — same gotcha as CaseStudyCard's CardReadMoreArrow and
     Header's SocialLink. */
  svg,
  svg * {
    color: inherit;
  }

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;

export const PillLabel = styled.span`
  flex: 1 1 auto;
  text-align: ${(p) => (p.$active ? "center" : "left")};
  white-space: nowrap;
  color: inherit;
`;

export const Chevron = styled.svg`
  flex: none;
  transition: transform 0.25s ease;
  transform: ${(p) => (p.$open ? "rotate(180deg)" : "none")};
`;

export const Panel = styled.span`
  display: ${(p) => (p.$open ? "block" : "none")};
  position: absolute;
  z-index: 40;
  top: calc(100% + 8px);
  left: 0;
  min-width: 246px;
  max-height: 290px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid ${colors.border};
  border-radius: 14px;
  box-shadow: 0 22px 50px -26px rgba(10, 15, 31, 0.3);
  padding: 8px;
`;

export const Option = styled.button`
  display: flex;
  align-items: center;
  gap: 11px;
  width: 100%;
  padding: 10px 11px;
  background: transparent;
  border: 0;
  border-radius: 9px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 450;
  line-height: 1.4;
  color: ${colors.text};
  text-align: left;
  transition: background 0.2s ease;

  &:hover {
    background: #f5f8ff;
  }
`;

export const CheckBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 1.5px solid ${(p) => (p.$checked ? colors.primary : BORDER_IDLE)};
  background: ${(p) => (p.$checked ? colors.primary : "#fff")};
  transition: background 0.2s ease, border-color 0.2s ease;
`;
