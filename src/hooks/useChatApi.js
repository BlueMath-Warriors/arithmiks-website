import { useRef, useState, useCallback } from "react";

const BASE_URL =
  typeof process !== "undefined"
    ? process.env.GATSBY_CHATBOT_API_URL || "http://localhost:8001"
    : "http://localhost:8001";

function ssGet(key) {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function ssSet(key, value) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(key, value);
  } catch {}
}

function ssClear() {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem("chat_token");
    window.sessionStorage.removeItem("chat_session_id");
  } catch {}
}

function decodeJwtSub(jwt) {
  try {
    const payload = JSON.parse(atob(jwt.split(".")[1]));
    return payload.sub;
  } catch {
    return null;
  }
}

export function useChatApi() {
  const tokenRef = useRef(null);
  const sessionIdRef = useRef(null);
  const abortControllerRef = useRef(null);
  const isInitializingRef = useRef(false);
  const [isReady, setIsReady] = useState(false);

  const ensureSession = useCallback(async () => {
    if (typeof window === "undefined") return;
    if (tokenRef.current && sessionIdRef.current) return;

    const storedToken = ssGet("chat_token");
    const storedSessionId = ssGet("chat_session_id");
    if (storedToken && storedSessionId) {
      tokenRef.current = storedToken;
      sessionIdRef.current = storedSessionId;
      setIsReady(true);
      return;
    }

    if (isInitializingRef.current) return;
    isInitializingRef.current = true;

    try {
      const res = await fetch(`${BASE_URL}/auth/session`, { method: "POST" });
      if (!res.ok) throw new Error(`Session fetch failed: ${res.status}`);
      const { access_token } = await res.json();
      const sub = decodeJwtSub(access_token);
      if (!sub) throw new Error("Could not decode session_id from JWT");

      tokenRef.current = access_token;
      sessionIdRef.current = sub;
      ssSet("chat_token", access_token);
      ssSet("chat_session_id", sub);
      setIsReady(true);
    } finally {
      isInitializingRef.current = false;
    }
  }, []);

  const sendMessage = useCallback(
    async (userText, { onToken, onDone, onError }) => {
      if (typeof window === "undefined") return;

      try {
        await ensureSession();
      } catch {
        onError({ type: "500", message: "Could not connect to the chat service. Please try again." });
        return;
      }

      const doRequest = async (isRetry = false) => {
        abortControllerRef.current?.abort();
        const controller = new AbortController();
        abortControllerRef.current = controller;

        let res;
        try {
          res = await fetch(`${BASE_URL}/chat/stream`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenRef.current}`,
            },
            body: JSON.stringify({
              session_id: sessionIdRef.current,
              message: userText,
            }),
            signal: controller.signal,
          });
        } catch (err) {
          if (err.name === "AbortError") return;
          onError({ type: "500", message: "Connection error. Please try again." });
          return;
        }

        if (res.status === 401) {
          if (isRetry) {
            onError({ type: "401", message: "Session expired. Please try again." });
            return;
          }
          ssClear();
          tokenRef.current = null;
          sessionIdRef.current = null;
          setIsReady(false);
          try {
            await ensureSession();
          } catch {
            onError({ type: "401", message: "Could not refresh session." });
            return;
          }
          return doRequest(true);
        }

        if (res.status === 429) {
          onError({ type: "429", message: "Too many messages. Please wait a moment." });
          return;
        }

        if (!res.ok) {
          onError({ type: "500", message: "Something went wrong. Please try again." });
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop();

            for (const line of lines) {
              if (!line.startsWith("data: ")) continue;
              const data = line.slice(6).trim();
              if (data === "[DONE]") {
                onDone();
                return;
              }
              try {
                const parsed = JSON.parse(data);
                if (parsed.error) {
                  onError({ type: "500", message: parsed.error });
                  return;
                }
                if (parsed.token != null) {
                  onToken(parsed.token);
                }
              } catch {
                // malformed JSON line, skip
              }
            }
          }
        } catch (err) {
          if (err.name !== "AbortError") {
            onError({ type: "500", message: "Stream interrupted. Please try again." });
          }
        }
      };

      await doRequest();
    },
    [ensureSession]
  );

  const endSession = useCallback(async () => {
    if (typeof window === "undefined") return;

    abortControllerRef.current?.abort();
    abortControllerRef.current = null;

    const token = tokenRef.current;
    const sessionId = sessionIdRef.current;

    ssClear();
    tokenRef.current = null;
    sessionIdRef.current = null;
    setIsReady(false);

    if (!token || !sessionId) return;

    try {
      await fetch(`${BASE_URL}/chat/session`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ session_id: sessionId }),
      });
    } catch {
      // best-effort, ignore errors on cleanup
    }
  }, []);

  return { ensureSession, sendMessage, endSession, isReady };
}
