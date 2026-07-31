import { styled } from "styled-components";
import { breakpoints } from "../../Landing/index.styled";

export const FormWrap = styled.form`
  width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 96px;

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 90%;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
`;

export const HelpText = styled.span`
  color: #5c5c5c;
  font-family: Poppins;
  font-size: 12px;
`;

const fieldChrome = `
  border: 1px solid #e6e8ec;
  border-radius: 8px;
  padding: 12px 14px;
  font-family: Poppins;
  font-size: 15px;
  color: #1d1d1f;
  background: #fff;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #1355ff;
  }
`;

export const TextInput = styled.input`
  ${fieldChrome}
`;

export const TextArea = styled.textarea`
  ${fieldChrome}
  resize: vertical;
  min-height: 90px;
  font-family: Poppins;
`;

export const Select = styled.select`
  ${fieldChrome}
  cursor: pointer;
`;

export const FileInputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const FileInputLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 20px;
  border-radius: 100px;
  border: 1px solid #e7eaee;
  color: #5c5c5c;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1355ff;
    color: #1355ff;
  }

  input {
    display: none;
  }
`;

export const PreviewThumb = styled.img`
  width: 64px;
  height: 40px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #e6e8ec;
`;

export const EditorWrap = styled.div`
  min-height: 360px;
`;

export const SubmitButton = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 12px 28px;
  border-radius: 100px;
  border: none;
  background: #1355ff;
  color: #fff;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #0f47d6;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #1355ff;
    outline-offset: 2px;
  }
`;

export const ErrorList = styled.ul`
  list-style: disc;
  padding-left: 20px;
  color: #b3261e;
  font-family: Poppins;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SuccessBox = styled.div`
  padding: 16px 20px;
  border-radius: 10px;
  background: #e9f9ef;
  color: #0f7a3d;
  font-family: Poppins;
  font-size: 14px;

  a {
    color: #0f7a3d;
    font-weight: 600;
  }
`;
