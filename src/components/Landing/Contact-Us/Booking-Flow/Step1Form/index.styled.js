import styled from "styled-components";
import { colors } from "../../../../../styles/tokens";

const FIELD_RADIUS = "clamp(10px, 0.85vw, 14px)";
const FIELD_BORDER = "#dde2ec";
const ERROR_COLOR = "#b42318";
const FIELD_GAP = "clamp(14px, 1.2vw, 20px)";

export const Heading = styled.h2`
  font-size: clamp(23px, 2.22vw, 35px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.18;
  color: ${colors.text};
  text-wrap: balance;
`;

export const Intro = styled.p`
  margin-top: 11px;
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  line-height: 1.6;
  color: ${colors.textMuted};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${FIELD_GAP};
  margin-top: clamp(22px, 1.9vw, 34px);
`;

export const FieldPair = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${FIELD_GAP};
  // An error under one field must not stretch its neighbour.
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

const fieldText = `
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  color: ${colors.text};
`;

export const fieldBox = ({ $invalid }) => `
  ${fieldText}
  padding: clamp(14px, 1.15vw, 19px) clamp(15px, 1.2vw, 20px);
  background: #fff;
  border: 1px solid ${$invalid ? ERROR_COLOR : FIELD_BORDER};
  border-radius: ${FIELD_RADIUS};
  width: 100%;
  min-width: 0;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &::placeholder {
    color: ${colors.textFaint};
    opacity: 1;
  }

  &:focus {
    border-color: ${colors.primary};
  }

  &:focus-visible {
    outline: 3px solid rgba(19, 85, 255, 0.4);
    outline-offset: 2px;
  }
`;

export const TextInput = styled.input`
  ${fieldBox}
`;

export const TextArea = styled.textarea`
  ${fieldBox}
  line-height: 1.6;
  resize: vertical;
`;

export const ErrorMessage = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: ${ERROR_COLOR};
`;

export const PhoneField = styled.span`
  display: flex;
  align-items: stretch;
  border: 1px solid ${FIELD_BORDER};
  border-radius: ${FIELD_RADIUS};
  background: #fff;
  min-width: 0;

  &:focus-within {
    border-color: ${colors.primary};
  }
`;

export const PhoneInput = styled.input`
  flex: 1 1 auto;
  min-width: 0;
  padding: clamp(14px, 1.15vw, 19px) 12px;
  ${fieldText}
  background: transparent;
  border: 0;
  outline: none;

  &::placeholder {
    color: ${colors.textFaint};
    opacity: 1;
  }
`;

export const RoleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
`;

export const RoleLabel = styled.span`
  font-size: clamp(13.5px, 0.9vw, 14.5px);
  font-weight: 500;
  color: ${colors.textFaint};

  span {
    color: #8a93a6;
  }
`;

export const RoleChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const RoleChip = styled.button`
  padding: clamp(11px, 0.9vw, 14px) clamp(14px, 1.1vw, 18px);
  border-radius: ${FIELD_RADIUS};
  border: 1px solid ${({ $selected }) => ($selected ? colors.primary : "transparent")};
  background: ${({ $selected }) => ($selected ? "#eaf0ff" : "#f2f4f8")};
  color: ${({ $selected }) => ($selected ? colors.primary : colors.textMuted)};
  font-size: clamp(14px, 0.93vw, 15.5px);
  font-weight: ${({ $selected }) => ($selected ? 600 : 500)};
  line-height: 1.2;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    ${({ $selected }) => ($selected ? "" : "background: #e6ecf8;")}
  }
`;

export const AttachWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const AttachInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`;

export const AttachRow = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 12px;
`;

export const AttachLabel = styled.label`
  display: inline;
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
`;

export const AttachHint = styled.span`
  font-size: 12.5px;
  line-height: 1.45;
  color: ${colors.textFaint};
`;

export const AttachedFile = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`;

export const RemoveFileButton = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  margin-left: -5px;
  border-radius: 50%;
  background: transparent;
  border: 0;
  color: #8a93a6;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  svg,
  svg * {
    color: inherit;
  }

  &:hover {
    background: #eef1f6;
    color: ${colors.text};
  }
`;

export const AttachedName = styled.span`
  min-width: 0;
  max-width: min(100%, 380px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  font-weight: 600;
  color: ${colors.textMuted};
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 4px;
`;

export const SubmitButton = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
  background: ${colors.primary};
  color: #fff;
  font-size: clamp(15px, 0.96vw, 16.5px);
  font-weight: 600;
  line-height: 1.2;
  padding: 14px 30px;
  white-space: nowrap;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;

  span {
    color: inherit;
  }

  &:hover:not(:disabled) {
    background: ${colors.primaryHover};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: progress;
  }
`;
