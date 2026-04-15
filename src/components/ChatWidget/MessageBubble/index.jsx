import React from "react";
import ReactMarkdown from "react-markdown";
import { BubbleRow, Bubble, Cursor } from "./index.styled";

export default function MessageBubble({ message }) {
  const { role, content, isStreaming } = message;
  const showCursor = isStreaming && content.length > 0;

  return (
    <BubbleRow $role={role}>
      <Bubble $role={role}>
        {role === "assistant" ? (
          <>
            <ReactMarkdown>{content}</ReactMarkdown>
            {showCursor && <Cursor aria-hidden="true" />}
          </>
        ) : (
          <>
            {content}
            {showCursor && <Cursor aria-hidden="true" />}
          </>
        )}
      </Bubble>
    </BubbleRow>
  );
}
