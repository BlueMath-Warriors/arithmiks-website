import styled from "styled-components";
import { colors } from "../../styles/tokens";
import { FormPanel } from "../Landing/Contact-Us/Booking-Flow/index.styled";

// Layers sit above the site header (40) and the cookie banner (95).
const SCRIM_LAYER = 1000;
const PANEL_LAYER = 1001;
const CLOSE_LAYER = 1002;
const GRAB_LAYER = 3;

const SLIDE_EASE = "cubic-bezier(.16,1,.3,1)";
const SHEET_BREAKPOINT = "700px";

export const Scrim = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${SCRIM_LAYER};
  background: rgba(7, 11, 24, 0.34);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: ${({ $open }) =>
    $open ? "opacity 0.4s ease" : "opacity 0.4s ease, visibility 0s linear 0.4s"};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const CloseButton = styled.button`
  position: fixed;
  z-index: ${CLOSE_LAYER};
  top: 18px;
  right: 18px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${colors.border};
  background: #fff;
  color: ${colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: ${({ $open }) =>
    $open
      ? "opacity 0.3s ease 0.15s, background 0.2s ease"
      : "opacity 0.3s ease, visibility 0s linear 0.3s, background 0.2s ease"};

  &:hover {
    background: ${colors.surface};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 3px;
  }

  /* The sheet has its grab handle instead. */
  @media (max-width: ${SHEET_BREAKPOINT}) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// The contact card's white panel, lifted into a full-height side panel (a
// bottom sheet on phones).
export const Panel = styled(FormPanel)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(620px, 100vw);
  z-index: ${PANEL_LAYER};
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  padding: 76px clamp(24px, 2.6vw, 40px) max(48px, calc(env(safe-area-inset-bottom) + 32px));
  box-shadow: -30px 0 90px -30px rgba(10, 15, 31, 0.4);
  transform: ${({ $open }) => ($open ? "none" : "translate3d(102%, 0, 0)")};
  transition: transform 0.5s ${SLIDE_EASE};
  outline: none;

  /* A column that scrolls: its children must keep their natural height. */
  > *,
  > * > * {
    flex-shrink: 0;
    min-height: auto;
  }

  @media (max-width: ${SHEET_BREAKPOINT}) {
    top: max(24px, 6vh);
    left: 0;
    width: auto;
    border-radius: 22px 22px 0 0;
    padding: 0 20px max(40px, calc(env(safe-area-inset-bottom) + 28px));
    box-shadow: 0 -20px 60px -20px rgba(10, 15, 31, 0.35);
    transform: ${({ $open }) => ($open ? "none" : "translate3d(0, 100%, 0)")};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// Phones only: a handle to drag the sheet down.
export const Grab = styled.div`
  display: none;

  @media (max-width: ${SHEET_BREAKPOINT}) {
    display: flex;
    position: sticky;
    top: 0;
    z-index: ${GRAB_LAYER};
    flex: none;
    align-items: center;
    justify-content: center;
    height: 44px;
    margin: 0 -20px 18px;
    background: #fff;
    touch-action: none;
    cursor: grab;
  }

  > span {
    display: block;
    width: 44px;
    height: 5px;
    border-radius: 3px;
    background: #cdd3de;
  }
`;
