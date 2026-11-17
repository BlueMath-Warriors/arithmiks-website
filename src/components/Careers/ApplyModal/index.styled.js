import styled, { keyframes } from "styled-components";
import { colors } from "../../../styles/tokens";

// Above the site header (40) and the cookie banner (95), like the booking sidebar.
const MODAL_LAYER = 1000;
const ERROR_COLOR = "#b42318";
const FIELD_BORDER = "#dde2ec";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const riseIn = keyframes`
  from { opacity: 0; transform: translateY(14px) scale(0.985); }
  to { opacity: 1; transform: none; }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${MODAL_LAYER};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(12px, 3vw, 32px);
  background: rgba(7, 11, 24, 0.5);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  animation: ${fadeIn} 0.25s ease;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Panel = styled.div`
  position: relative;
  width: min(640px, 100%);
  max-height: 100%;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  padding: clamp(22px, 2.6vw, 38px);
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 30px 90px -30px rgba(10, 15, 31, 0.5);
  outline: none;
  animation: ${riseIn} 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const Title = styled.h2`
  font-size: clamp(21px, 2vw, 28px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: ${colors.text};
  text-wrap: balance;
`;

export const Intro = styled.p`
  margin-top: 8px;
  font-size: 14.5px;
  line-height: 1.55;
  color: ${colors.textMuted};
`;

export const CloseButton = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${colors.border};
  background: #fff;
  color: ${colors.text};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.surface};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 3px;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

export const FieldLabel = styled.label`
  font-size: 13.5px;
  font-weight: 500;
  color: ${colors.textMuted};
`;

export const OptionalNote = styled.span`
  font-weight: 400;
  color: ${colors.textFaint};
`;

export const Counter = styled.span`
  align-self: flex-end;
  font-size: 12px;
  color: ${({ $over }) => ($over ? ERROR_COLOR : colors.textFaint)};
`;

export const LinkRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 8px;

  input {
    flex: 1 1 auto;
  }
`;

export const RemoveLinkButton = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  border-radius: 12px;
  border: 1px solid ${FIELD_BORDER};
  background: #fff;
  color: ${colors.textFaint};
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${colors.surface};
    color: ${colors.text};
  }
`;

// Looks like the booking form's "+ Attach file" link, but is a real button so
// it can be focused and activated from the keyboard.
export const TextButton = styled.button`
  align-self: flex-start;
  padding: 2px 0;
  background: none;
  border: 0;
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.textFaint};
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 4px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 3px;
  }
`;

// Off-screen rather than display:none, which bots detect and skip.
export const Honeypot = styled.div`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
