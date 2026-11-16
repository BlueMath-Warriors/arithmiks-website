import { useCallback, useEffect, useRef } from "react";
import { getScannerApiUrl, streamScan } from "./scannerClient";

/**
 * Runs one streaming scan at a time and reports its progress through the
 * handlers. Starting another scan, cancelling, or leaving the page stops the
 * one in flight.
 *
 * @param {{ onQueued?: () => void, onPhaseStart?: (phase: string) => void,
 *   onPhaseComplete?: (phase: string) => void, onResult?: (report: object) => void,
 *   onError?: (error: import("./scannerClient").ScanError) => void }} handlers
 * @returns {{ upload: (file: File) => Promise<void>, abort: () => void }}
 */
export function useScanUpload({ onQueued, onPhaseStart, onPhaseComplete, onResult, onError }) {
  const controllerRef = useRef(null);
  const handlersRef = useRef({});

  useEffect(() => {
    handlersRef.current = { onQueued, onPhaseStart, onPhaseComplete, onResult, onError };
  }, [onQueued, onPhaseStart, onPhaseComplete, onResult, onError]);

  const abort = useCallback(() => {
    controllerRef.current?.abort();
    controllerRef.current = null;
  }, []);

  useEffect(() => abort, [abort]);

  const upload = useCallback(
    async (file) => {
      abort();
      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const report = await streamScan({
          apiUrl: getScannerApiUrl(),
          file,
          signal: controller.signal,
          onQueued: () => handlersRef.current.onQueued?.(),
          onPhaseStart: (phase) => handlersRef.current.onPhaseStart?.(phase),
          onPhaseComplete: (phase) => handlersRef.current.onPhaseComplete?.(phase),
        });
        if (!controller.signal.aborted) handlersRef.current.onResult?.(report);
      } catch (error) {
        if (controller.signal.aborted || error?.code === "aborted") return;
        handlersRef.current.onError?.(error);
      }
    },
    [abort],
  );

  return { upload, abort };
}
