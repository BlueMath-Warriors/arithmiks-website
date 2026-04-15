import { styled } from "styled-components";

export const ToggleButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #1355ff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(19, 85, 255, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(19, 85, 255, 0.5);
    background: #0957de;
  }

  &:active {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid rgba(19, 85, 255, 0.4);
    outline-offset: 3px;
  }
`;

export const IconWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.6)"};
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;
