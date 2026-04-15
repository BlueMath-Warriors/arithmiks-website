import React, { useEffect, useRef } from "react";
import { ListContainer } from "./index.styled";
import MessageBubble from "../MessageBubble";
import TypingIndicator from "../TypingIndicator";

const WELCOME_MESSAGE = {
  id: "welcome",
  role: "bot",
  content:
    "Hi! I'm Arithmiks AI. Ask me anything about our services, case studies, or pricing.",
};

export default function MessageList({ messages, isStreaming, scrollTrigger }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, scrollTrigger]);

  const streamingMsg = messages.find((m) => m.isStreaming);
  const showTypingIndicator = isStreaming && streamingMsg && streamingMsg.content === "";

  return (
    <ListContainer aria-live="polite" aria-label="Chat messages">
      <MessageBubble message={WELCOME_MESSAGE} />
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      {showTypingIndicator && <TypingIndicator />}
      <div ref={endRef} />
    </ListContainer>
  );
}
