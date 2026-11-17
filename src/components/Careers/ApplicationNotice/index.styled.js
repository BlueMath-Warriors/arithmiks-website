import styled, { keyframes } from "styled-components";
import { colors } from "../../../styles/tokens";
import { inheritIconColor } from "../shared";

const NOTICE_LAYER = 1001;

const slideUp = keyframes`
  from { opacity: 0; transform: translate(-50%, 12px); }
  to { opacity: 1; transform: translate(-50%, 0); }
`;

export const Notice = styled.div`
  position: fixed;
  left: 50%;
  bottom: max(24px, env(safe-area-inset-bottom));
  z-index: ${NOTICE_LAYER};
  display: flex;
  align-items: center;
  gap: 14px;
  width: max-content;
  max-width: calc(100vw - 32px);
  padding: 14px 14px 14px 20px;
  background: ${colors.dark};
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  border-radius: 14px;
  box-shadow: 0 18px 50px -16px rgba(10, 15, 31, 0.6);
  transform: translateX(-50%);
  animation: ${slideUp} 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

// global.module.css sets `* { color: #000 }` on every element, so text and icons
// inside this dark surface must restore inheritance explicitly.
export const Message = styled.span`
  color: inherit;
`;

export const DismissButton = styled.button`
  ${inheritIconColor}
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.22);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;
