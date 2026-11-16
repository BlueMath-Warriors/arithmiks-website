import { parseSseFrame, splitSseBuffer } from "./sseParser";

export const DEFAULT_SCANNER_API_URL = "https://scanner.arithmiks.com";

/**
 * The scanner API's base URL. GATSBY_SCANNER_API_URL is inlined at build time,
 * so the fallback is the production scanner: a missing variable must never make
 * a visitor's browser call its own localhost.
 */
export const getScannerApiUrl = () =>
  (process.env.GATSBY_SCANNER_API_URL || DEFAULT_SCANNER_API_URL).replace(/\/+$/, "");

/**
 * Why a scan could not finish. `code` is an HTTP status for errors the API
 * returned, otherwise one of "network", "connection_lost", "scan_failed",
 * "unsupported" or "aborted" (the user cancelled).
 */
export class ScanError extends Error {
  /** @param {number|string} code @param {{ network?: boolean }} [options] */
  constructor(code, { network = false } = {}) {
    super(`Scan failed: ${code}`);
    this.name = "ScanError";
    this.code = code;
    this.network = network;
  }
}

/** Status codes that mean this client sent a bad request, worth a console trace. */
const REQUEST_REJECTED = new Set([400, 422]);

const isAbort = (error) => error?.name === "AbortError";

async function readApiError(response) {
  const body = await response.json().catch(() => ({}));
  if (REQUEST_REJECTED.has(response.status)) {
    console.error("[virus-scanner] request rejected:", body?.detail);
  }
  return new ScanError(response.status);
}

/**
 * Uploads a file to the streaming scan endpoint and follows its progress. Any
 * request that is accepted (HTTP 200) may then sit silent while the scanner
 * works through other files, so there is deliberately no client timeout.
 *
 * @param {{ apiUrl: string, file: File, signal?: AbortSignal,
 *   onQueued?: () => void, onPhaseStart?: (phase: string) => void,
 *   onPhaseComplete?: (phase: string) => void }} options
 *   onQueued: the upload was accepted; the scan may be waiting for a free scanner.
 * @returns {Promise<object>} the final scan report
 * @throws {ScanError}
 */
export async function streamScan({
  apiUrl,
  file,
  signal,
  onQueued,
  onPhaseStart,
  onPhaseComplete,
}) {
  const body = new FormData();
  body.append("file", file);

  let response;
  try {
    response = await fetch(`${apiUrl}/api/v1/scan/stream`, { method: "POST", body, signal });
  } catch (error) {
    // Proxy rejections (oversize, scanner down) and offline both surface here
    // as a bare TypeError, because those responses carry no CORS headers.
    throw isAbort(error) ? new ScanError("aborted") : new ScanError("network", { network: true });
  }

  if (!response.ok) throw await readApiError(response);
  if (!response.body) throw new ScanError("unsupported");

  onQueued?.();

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  const cancelReader = () => reader.cancel().catch(() => {});
  // A cancelled fetch errors the stream by itself; this also unblocks a read
  // that is waiting when the abort arrives from somewhere the stream can't see.
  signal?.addEventListener("abort", cancelReader, { once: true });

  let buffer = "";
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      const { frames, rest } = splitSseBuffer(buffer);
      buffer = rest;

      for (const frame of frames) {
        const { event, data } = parseSseFrame(frame);
        switch (event) {
          case "phase_started":
            if (data?.phase) onPhaseStart?.(data.phase);
            break;
          case "phase_completed":
            if (data?.phase) onPhaseComplete?.(data.phase);
            break;
          case "final_result":
            if (data === null || typeof data !== "object") throw new ScanError("scan_failed");
            return data;
          case "error":
            // The message is technical: logged for us, never shown to visitors.
            console.error("[virus-scanner] scan_failed:", data?.message);
            throw new ScanError("scan_failed");
          default:
            break;
        }
      }
    }
  } catch (error) {
    if (error instanceof ScanError) throw error;
    throw isAbort(error) || signal?.aborted
      ? new ScanError("aborted")
      : new ScanError("connection_lost");
  } finally {
    signal?.removeEventListener("abort", cancelReader);
    cancelReader();
  }

  throw signal?.aborted ? new ScanError("aborted") : new ScanError("connection_lost");
}
