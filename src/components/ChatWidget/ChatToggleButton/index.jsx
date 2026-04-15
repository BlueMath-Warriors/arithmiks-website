import React from "react";
import { ToggleButton, IconWrapper } from "./index.styled";

const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M15 5L5 15M5 5L15 15"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const ChatToggleButton = React.forwardRef(function ChatToggleButton(
  { isOpen, onClick },
  ref
) {
  return (
    <ToggleButton
      ref={ref}
      onClick={onClick}
      aria-label={isOpen ? "Close chat" : "Open chat"}
      aria-expanded={isOpen}
    >
      <IconWrapper $visible={!isOpen}>
        <ChatIcon />
      </IconWrapper>
      <IconWrapper $visible={isOpen}>
        <CloseIcon />
      </IconWrapper>
    </ToggleButton>
  );
});

export default ChatToggleButton;
