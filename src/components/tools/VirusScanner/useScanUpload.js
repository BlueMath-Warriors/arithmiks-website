import { useCallback, useEffect, useRef } from "react";
import { parseSseFrame, splitSseBuffer } from "./sseParser";

const DEFAULT_API = "http://localhost:8080";

export function useScanUpload({
  onUploading,
  onScanning,
  onPhaseStart,
  onPhaseComplete,
  onResult,
  onError,
}) {
  const controllerRef = useRef(null);
  const handlersRef = useRef({
    onUploading,
    onScanning,
    onPhaseStart,
    onPhaseComplete,
    onResult,
    onError,
  });

  useEffect(() => {
    handlersRef.current = {
      onUploading,
      onScanning,
      onPhaseStart,
      onPhaseComplete,
      onResult,
      onError,
    };
  }, [onUploading, onScanning, onPhaseStart, onPhaseComplete, onResult, onError]);

  const abort = useCallback(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null;
    }
  }, []);

  const upload = useCallback(async (file) => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    const controller = new AbortController();
    controllerRef.current = controller;

    const base = process.env.GATSBY_SCANNER_API_URL || DEFAULT_API;
    const url = `${base.replace(/\/$/, "")}/api/v1/scan/stream`;

    const fd = new FormData();
    fd.append("file", file);

    const h = handlersRef.current;
    h.onUploading && h.onUploading();

    let res;
    try {
      res = await fetch(url, {
        method: "POST",
        body: fd,
        signal: controller.signal,
        headers: { Accept: "text/event-stream" },
      });
    } catch (err) {
      if (err && err.name === "AbortError") return;
      h.onError &&
        h.onError({ code: 0, network: true, message: err?.message || "network" });
      return;
    }

    if (!res.ok) {
      let body = null;
      try {
        body = await res.text();
      } catch {
      }
      h.onError && h.onError({ code: res.status, body });
      return;
    }

    if (!res.body) {
      h.onError &&
        h.onError({ code: 0, message: "Streaming is not supported in this browser." });
      return;
    }

    h.onScanning && h.onScanning();

    const reader = res.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = "";
    let sawFinal = false;

    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const { frames, rest } = splitSseBuffer(buffer);
        buffer = rest;

        for (const frame of frames) {
          const { event, data } = parseSseFrame(frame);
          if (!event) continue;

          switch (event) {
            case "phase_started":
              if (data?.phase) h.onPhaseStart && h.onPhaseStart(data.phase);
              break;
            case "phase_completed":
              if (data?.phase) h.onPhaseComplete && h.onPhaseComplete(data.phase);
              break;
            case "final_result":
              sawFinal = true;
              h.onResult && h.onResult(data);
              break;
            case "error":
              sawFinal = true;
              h.onError &&
                h.onError({
                  code: "scan_failed",
                  message: data?.message || "Scan failed",
                });
              break;
            default:
              break;
          }
        }
      }
    } catch (err) {
      if (err && err.name === "AbortError") return;
      h.onError &&
        h.onError({
          code: "connection_lost",
          network: true,
          message: err?.message || "Connection lost",
        });
      return;
    } finally {
      try {
        await reader.cancel();
      } catch {
      }
    }

    if (!sawFinal) {
      h.onError &&
        h.onError({
          code: "connection_lost",
          network: true,
          message: "The scanner closed the connection before finishing.",
        });
    }
  }, []);

  return { upload, abort };
}
