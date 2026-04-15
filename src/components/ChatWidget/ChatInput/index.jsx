import React, { useRef, useEffect } from "react";
import {
  InputContainer,
  ErrorText,
  InputRow,
  StyledTextarea,
  SendButton,
} from "./index.styled";

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M14.5 1.5L7.5 8.5M14.5 1.5L10 14.5L7.5 8.5M14.5 1.5L1.5 5.5L7.5 8.5"
      stroke="white"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled,
  error,
  textareaRef,
}) {
  const internalRef = useRef(null);
  const ref = textareaRef || internalRef;

  const adjustHeight = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 72) + "px";
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!disabled && value.trim()) {
        onSend();
      }
    }
  };

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const canSend = !disabled && value.trim().length > 0;

  return (
    <InputContainer>
      {error && <ErrorText $type={error.type}>{error.message}</ErrorText>}
      <InputRow>
        <StyledTextarea
          ref={ref}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          aria-label="Type your message"
          disabled={disabled}
          rows={1}
        />
        <SendButton
          onClick={onSend}
          disabled={!canSend}
          aria-label="Send message"
          type="button"
        >
          <SendIcon />
        </SendButton>
      </InputRow>
    </InputContainer>
  );
}
