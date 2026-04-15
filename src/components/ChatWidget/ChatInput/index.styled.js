import { styled } from "styled-components";

export const InputContainer = styled.div`
  padding: 12px 16px 16px;
  border-top: 1px solid #e6e8ec;
  flex-shrink: 0;
  background: #fff;
  border-radius: 0 0 24px 24px;
`;

export const ErrorText = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  color: ${({ $type }) => ($type === "429" ? "#d97706" : "#FF3333")};
  margin: 0 0 8px 2px;
  line-height: 1.4;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  background: #f5f5f7;
  border-radius: 16px;
  padding: 8px 8px 8px 14px;
  border: 1.5px solid transparent;
  transition: border-color 0.2s;

  &:focus-within {
    border-color: #1355ff;
    background: #fff;
  }
`;

export const StyledTextarea = styled.textarea`
  flex: 1;
  border: none;
  background: transparent;
  resize: none;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  line-height: 1.5;
  min-height: 24px;
  max-height: 72px;
  overflow-y: auto;
  outline: none;
  padding: 0;

  &::placeholder {
    color: #838e9e;
  }

  scrollbar-width: thin;
  scrollbar-color: #e6e8ec transparent;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e6e8ec;
    border-radius: 3px;
  }
`;

export const SendButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: none;
  background: #1355ff;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #fff;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  transition: opacity 0.2s, background 0.2s, transform 0.2s;

  &:hover:not(:disabled) {
    background: #0957de;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid #1355ff;
    outline-offset: 2px;
  }
`;
