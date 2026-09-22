import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

export const Bar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 60;
  background: #fff;
  border-top: 1px solid ${colors.border};
  box-shadow: 0 -8px 24px rgba(10, 15, 31, 0.08);
  transform: translateY(${(p) => (p.$open ? "0" : "100%")});
  opacity: ${(p) => (p.$open ? 1 : 0)};
  pointer-events: ${(p) => (p.$open ? "auto" : "none")};
  transition: transform 0.35s ease, opacity 0.35s ease;
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  margin: 0 auto;
  padding: 14px ${shellPadding};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    padding: 14px 20px;
  }
`;

export const Message = styled.p`
  margin: 0;
  flex: 1 1 420px;
  font-size: 13.5px;
  line-height: 1.5;
  color: ${colors.textMuted};

  // flex-basis sets height, not width, once Shell switches to column on
  // mobile — without this override the 420px basis above blows up the bar.
  @media (max-width: 640px) {
    flex: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex: none;

  @media (max-width: 640px) {
    justify-content: flex-end;
  }
`;

export const DeclineButton = styled.button`
  font-size: 13.5px;
  font-weight: 550;
  color: ${colors.textMuted};
  background: transparent;
  border: 1.5px solid ${colors.border};
  border-radius: 100px;
  padding: 9px 16px;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${colors.text};
    border-color: ${colors.textFaint};
  }
`;

export const AcceptButton = styled.button`
  font-size: 13.5px;
  font-weight: 550;
  color: #fff;
  background: ${colors.primary};
  border: none;
  border-radius: 100px;
  padding: 9px 16px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.primaryHover};
  }
`;
