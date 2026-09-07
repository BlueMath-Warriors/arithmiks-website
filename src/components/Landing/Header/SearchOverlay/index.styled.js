import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../../styles/tokens";

// top is set inline from the header's own measured height (see index.jsx) —
// matches the design's own wrap.style.top = headerHeight: the sheet drops
// in directly below the header rather than covering it, so the nav stays
// visible and usable while search is open.
export const Wrap = styled.div`
  position: fixed;
  top: ${(p) => p.$top}px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 65;
`;

export const Scrim = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(6px);
`;

export const Sheet = styled.div`
  position: relative;
  background: #fff;
  border-bottom: 1px solid ${colors.border};
  box-shadow: 0 26px 60px -28px rgba(10, 15, 31, 0.3);
  max-height: 100%;
  overflow-y: auto;
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 0;
`;

export const FieldWrap = styled.span`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 10px;
  padding: 0 16px;

  svg {
    flex: none;
  }
`;

export const Input = styled.input`
  flex: 1 1 auto;
  min-width: 0;
  padding: 15px 0;
  font-size: clamp(16px, 1.02vw, 17.5px);
  color: ${colors.text};
  background: transparent;
  border: 0;
  outline: none;
`;

export const GoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  flex: none;
  height: 48px;
  padding: 0 22px;
  font-size: 15px;
  font-weight: 550;
  background: ${colors.primary};
  border: 0;
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.25s ease;

  /* global.module.css's "* { color: #000 }" directly matches the svg AND
     its child circle/path (currentColor resolves per-element, not once for
     the whole subtree), so both need their own explicit color to win over
     that direct match. */
  svg,
  svg * {
    color: inherit;
  }

  &:hover {
    background: ${colors.primaryHover};
  }

  @media (max-width: 640px) {
    display: none;
  }
`;
