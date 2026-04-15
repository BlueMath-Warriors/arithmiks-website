import { styled } from "styled-components";
import { breakpoints } from "../../Landing/index.styled";

export const PanelWrapper = styled.div`
  position: fixed;
  bottom: 92px;
  right: 24px;
  z-index: 999;
  width: 380px;
  height: 560px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(6, 18, 55, 0.15), 0 4px 16px rgba(6, 18, 55, 0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(calc(100% + 24px))"};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: ${breakpoints.medium}) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100dvh;
    border-radius: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
