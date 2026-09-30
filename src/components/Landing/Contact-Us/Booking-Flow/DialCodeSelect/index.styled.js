import styled from "styled-components";
import { colors } from "../../../../../styles/tokens";

const RADIUS = "clamp(10px, 0.85vw, 14px)";

export const Wrap = styled.span`
  position: relative;
  display: flex;
  align-items: stretch;
  flex: none;
  border-right: 1px solid #e9ecf4;
  background: #fafbfe;
  border-radius: ${RADIUS} 0 0 ${RADIUS};
`;

export const Trigger = styled.button`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 9px 0 11px;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 550;
  color: ${colors.textMuted};
  white-space: nowrap;

  span,
  svg,
  svg * {
    color: inherit;
  }
`;

const flagBox = `
  flex: none;
  width: 21px;
  height: 15px;
  border-radius: 2px;
`;

export const Flag = styled.img`
  ${flagBox}
  object-fit: cover;
  box-shadow: 0 0 0 1px rgba(10, 15, 31, 0.09);
  display: block;
`;

export const IsoBadge = styled.span`
  ${flagBox}
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e7ebf3;
  font-size: 9.5px;
  font-weight: 650;
  color: ${colors.textFaint};
`;

export const Panel = styled.span`
  display: block;
  position: absolute;
  z-index: 40;
  top: calc(100% + 6px);
  left: 0;
  width: 252px;
  max-height: 264px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  box-shadow: 0 18px 40px rgba(10, 15, 31, 0.16);
  padding: 6px;
`;

export const Option = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 9px 10px;
  background: ${({ $selected }) => ($selected ? "#f2f5fc" : "transparent")};
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: ${colors.text};
  text-align: left;
  transition: background 0.2s ease;

  &:hover {
    background: #f2f5fc;
  }
`;

export const CountryName = styled.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DialText = styled.span`
  flex: none;
  font-weight: 550;
  color: ${colors.textFaint};
`;
