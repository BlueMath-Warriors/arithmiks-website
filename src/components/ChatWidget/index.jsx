import React, { useState, useCallback, useRef, useEffect } from "react";
import { useChatApi } from "../../hooks/useChatApi";
import ChatToggleButton from "./ChatToggleButton";
import ChatPanel from "./ChatPanel";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState(null);
  const [scrollTrigger, setScrollTrigger] = useState(0);

  const toggleButtonRef = useRef(null);
  const textareaRef = useRef(null);
  const errorTimerRef = useRef(null);
  const streamingMsgIdRef = useRef(null);

  const chatApi = useChatApi();

  const showError = useCallback((err) => {
    setError(err);
    if (err.type === "429") {
      clearTimeout(errorTimerRef.current);
      errorTimerRef.current = setTimeout(() => setError(null), 5000);
    }
  }, []);

  const handleOpen = useCallback(async () => {
    setIsOpen(true);
    try {
      await chatApi.ensureSession();
    } catch {
      // session will be retried on first message
    }
    setTimeout(() => textareaRef.current?.focus(), 50);
  }, [chatApi]);

  const handleClose = useCallback(async () => {
    setIsOpen(false);
    toggleButtonRef.current?.focus();
    try {
      await chatApi.endSession();
    } catch {
      // best-effort
    }
  }, [chatApi]);

  const handleSend = useCallback(async () => {
    const text = inputValue.trim();
    if (!text || isStreaming) return;

    setInputValue("");
    setError(null);

    const userId = `u-${Date.now()}`;
    const botId = `b-${Date.now()}`;
    streamingMsgIdRef.current = botId;

    setMessages((prev) => [
      ...prev,
      { id: userId, role: "user", content: text },
      { id: botId, role: "assistant", content: "", isStreaming: true },
    ]);
    setIsStreaming(true);

    try {
      await chatApi.sendMessage(text, {
        onToken: (token) => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === botId ? { ...m, content: m.content + token } : m
            )
          );
          setScrollTrigger((n) => n + 1);
        },
        onDone: () => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === botId ? { ...m, isStreaming: false } : m
            )
          );
          setIsStreaming(false);
          streamingMsgIdRef.current = null;
        },
        onError: (err) => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === botId
                ? { ...m, isStreaming: false, content: m.content || "" }
                : m
            )
          );
          setIsStreaming(false);
          streamingMsgIdRef.current = null;
          showError(err);
        },
      });
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === botId ? { ...m, isStreaming: false } : m
        )
      );
      setIsStreaming(false);
      streamingMsgIdRef.current = null;
      showError({ type: "500", message: "Something went wrong. Please try again." });
    }
  }, [inputValue, isStreaming, chatApi, showError]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimeout(errorTimerRef.current);
    };
  }, []);

  return (
    <>
      <ChatToggleButton
        ref={toggleButtonRef}
        isOpen={isOpen}
        onClick={isOpen ? handleClose : handleOpen}
      />
      <ChatPanel
        isOpen={isOpen}
        messages={messages}
        isStreaming={isStreaming}
        error={error}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSend={handleSend}
        onClose={handleClose}
        scrollTrigger={scrollTrigger}
        textareaRef={textareaRef}
      />
    </>
  );
}
