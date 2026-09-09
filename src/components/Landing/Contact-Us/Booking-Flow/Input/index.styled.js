import styled from "styled-components";
import { colors } from "../../../../../styles/tokens";

const fieldChrome = `
  padding: clamp(14px, 1.15vw, 19px) clamp(15px, 1.2vw, 20px);
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  color: ${colors.text};
  background: #fff;
  border: 1px solid #dde2ec;
  border-radius: clamp(10px, 0.85vw, 14px);
  width: 100%;
  font-family: inherit;
  transition: border-color 0.25s ease;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  position: relative;
`;

export const TextField = styled.input`
  ${fieldChrome}
`;

export const TextAreaField = styled.textarea`
  ${fieldChrome}
  resize: vertical;
`;

export const DropdownButton = styled.button`
  ${fieldChrome}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
  text-align: left;
  color: ${(p) => (p.$hasValue ? colors.text : colors.textFaint)};
`;

export const Chevron = styled.svg`
  flex: none;
  transition: transform 0.25s ease;
  transform: rotate(${(p) => (p.$open ? "180deg" : "0deg")});
`;

export const DropdownPanel = styled.div`
  position: absolute;
  z-index: 40;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  max-height: 276px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  box-shadow: 0 18px 40px rgba(10, 15, 31, 0.16);
  padding: 6px;
`;

export const DropdownOption = styled.button`
  display: block;
  width: 100%;
  padding: 9px 10px;
  background: transparent;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.4;
  color: ${colors.text};
  text-align: left;
  transition: background 0.2s ease;

  &:hover {
    background: #f2f5fc;
  }
`;

// Always mounted (see Input/index.jsx) so the field's height — and the grid
// row it sits in — never changes when an error appears/disappears; visibility
// (not display/mount) is what toggles, so the reserved space stays reserved.
export const ErrorText = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 15px;
  font-size: 12px;
  font-weight: 500;
  color: #b42318;
  visibility: ${(p) => (p.$visible ? "visible" : "hidden")};
`;
