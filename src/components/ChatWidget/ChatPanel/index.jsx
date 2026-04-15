import React from "react";
import { PanelWrapper } from "./index.styled";
import ChatHeader from "../ChatHeader";
import MessageList from "../MessageList";
import ChatInput from "../ChatInput";

export default function ChatPanel({
  isOpen,
  messages,
  isStreaming,
  error,
  inputValue,
  onInputChange,
  onSend,
  onClose,
  scrollTrigger,
  textareaRef,
}) {
  return (
    <PanelWrapper
      $isOpen={isOpen}
      role="dialog"
      aria-label="Arithmiks AI chat"
      aria-modal="false"
    >
      <ChatHeader onClose={onClose} />
      <MessageList
        messages={messages}
        isStreaming={isStreaming}
        scrollTrigger={scrollTrigger}
      />
      <ChatInput
        value={inputValue}
        onChange={onInputChange}
        onSend={onSend}
        disabled={isStreaming}
        error={error}
        textareaRef={textareaRef}
      />
    </PanelWrapper>
  );
}
