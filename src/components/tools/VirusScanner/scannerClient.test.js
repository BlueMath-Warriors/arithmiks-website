import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  DEFAULT_SCANNER_API_URL,
  ScanError,
  getScannerApiUrl,
  streamScan,
} from "./scannerClient";

const API_URL = "https://scanner.example.test";
const REPORT = { job_id: "abc", filename: "report.pdf", user_summary: "Clean." };

const encoder = new TextEncoder();

const event = (name, data) => `event: ${name}\ndata: ${JSON.stringify(data)}\n\n`;

const SUCCESS_STREAM = [
  event("phase_started", { phase: "clamav" }),
  event("phase_completed", { phase: "clamav" }),
  event("phase_started", { phase: "yara" }),
  event("phase_completed", { phase: "yara" }),
  event("phase_started", { phase: "ai" }),
  event("phase_completed", { phase: "ai" }),
  event("final_result", REPORT),
].join("");

/** A 200 text/event-stream response that delivers the given text chunks one by one. */
const streamResponse = (chunks) =>
  new Response(
    new ReadableStream({
      start(controller) {
        chunks.forEach((chunk) => controller.enqueue(encoder.encode(chunk)));
        controller.close();
      },
    }),
    { status: 200, headers: { "Content-Type": "text/event-stream" } },
  );

/** A response whose stream fails after the first chunk, like a dropped connection. */
const brokenStreamResponse = (firstChunk) =>
  new Response(
    new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(firstChunk));
      },
      pull() {
        throw new TypeError("network error");
      },
    }),
    { status: 200 },
  );

const jsonResponse = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

const file = new File(["hello"], "report.pdf", { type: "application/pdf" });

let fetchMock;

const scan = (overrides = {}) => streamScan({ apiUrl: API_URL, file, ...overrides });

const rejection = async (promise) => {
  try {
    await promise;
  } catch (error) {
    return error;
  }
  throw new Error("expected the scan to reject");
};

beforeEach(() => {
  fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("getScannerApiUrl", () => {
  it("defaults to the production scanner, never to a localhost address", () => {
    vi.stubEnv("GATSBY_SCANNER_API_URL", "");
    expect(getScannerApiUrl()).toBe("https://scanner.arithmiks.com");
    expect(DEFAULT_SCANNER_API_URL).toBe("https://scanner.arithmiks.com");
  });

  it("uses the configured URL without a trailing slash", () => {
    vi.stubEnv("GATSBY_SCANNER_API_URL", "http://localhost:8080//");
    expect(getScannerApiUrl()).toBe("http://localhost:8080");
  });
});

describe("streamScan request", () => {
  beforeEach(() => fetchMock.mockResolvedValue(streamResponse([SUCCESS_STREAM])));

  it("posts the file in a form field named file to the stream endpoint", async () => {
    await scan();

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(`${API_URL}/api/v1/scan/stream`);
    expect(init.method).toBe("POST");
    expect(init.body).toBeInstanceOf(FormData);
    expect(init.body.get("file")).toBeInstanceOf(File);
    expect(init.body.get("file").name).toBe("report.pdf");
  });

  it("sets no headers and sends no credentials, so the browser builds the multipart boundary", async () => {
    await scan();

    const [, init] = fetchMock.mock.calls[0];
    expect(init.headers).toBeUndefined();
    expect(init.credentials).toBeUndefined();
  });

  it("passes the abort signal to fetch and sets no client timeout", async () => {
    const controller = new AbortController();
    await scan({ signal: controller.signal });

    expect(fetchMock.mock.calls[0][1].signal).toBe(controller.signal);
  });
});

describe("streamScan events", () => {
  it("reports queued as soon as the upload is accepted, before any engine starts", async () => {
    const calls = [];
    fetchMock.mockResolvedValue(streamResponse([SUCCESS_STREAM]));

    await scan({
      onQueued: () => calls.push("queued"),
      onPhaseStart: (phase) => calls.push(`start:${phase}`),
    });

    expect(calls[0]).toBe("queued");
    expect(calls[1]).toBe("start:clamav");
  });

  it("reports each engine in order and resolves with the final report", async () => {
    const calls = [];
    fetchMock.mockResolvedValue(streamResponse([SUCCESS_STREAM]));

    const report = await scan({
      onPhaseStart: (phase) => calls.push(`start:${phase}`),
      onPhaseComplete: (phase) => calls.push(`done:${phase}`),
    });

    expect(report).toEqual(REPORT);
    expect(calls).toEqual([
      "start:clamav",
      "done:clamav",
      "start:yara",
      "done:yara",
      "start:ai",
      "done:ai",
    ]);
  });

  it("reassembles an event split across network chunks", async () => {
    const whole = SUCCESS_STREAM;
    const cut = whole.indexOf("final_result") + 6;
    fetchMock.mockResolvedValue(streamResponse([whole.slice(0, cut), whole.slice(cut)]));

    await expect(scan()).resolves.toEqual(REPORT);
  });

  it("reads several events delivered in one chunk", async () => {
    const started = [];
    fetchMock.mockResolvedValue(streamResponse([SUCCESS_STREAM]));

    await scan({ onPhaseStart: (phase) => started.push(phase) });

    expect(started).toEqual(["clamav", "yara", "ai"]);
  });

  it("reads a multi-byte character split across chunks", async () => {
    const report = { ...REPORT, user_summary: "Fichier sûr — aucun risque ✓" };
    const bytes = encoder.encode(event("final_result", report));
    const cut = bytes.indexOf(0xc3) + 1; // splits the two bytes of "û"
    const response = new Response(
      new ReadableStream({
        start(controller) {
          controller.enqueue(bytes.slice(0, cut));
          controller.enqueue(bytes.slice(cut));
          controller.close();
        },
      }),
      { status: 200 },
    );
    fetchMock.mockResolvedValue(response);

    await expect(scan()).resolves.toEqual(report);
  });

  it("tolerates a long silent gap before the first event (queue wait)", async () => {
    const queued = vi.fn();
    let release;
    const gate = new Promise((resolve) => {
      release = resolve;
    });
    fetchMock.mockResolvedValue(
      new Response(
        new ReadableStream({
          async start(controller) {
            await gate;
            controller.enqueue(encoder.encode(SUCCESS_STREAM));
            controller.close();
          },
        }),
        { status: 200 },
      ),
    );

    const pending = scan({ onQueued: queued });
    await vi.waitFor(() => expect(queued).toHaveBeenCalledTimes(1));
    release();

    await expect(pending).resolves.toEqual(REPORT);
  });
});

describe("streamScan failures during the stream", () => {
  it("rejects with scan_failed on an error event and logs, not shows, the message", async () => {
    fetchMock.mockResolvedValue(
      streamResponse([
        event("phase_started", { phase: "clamav" }),
        event("error", { code: "scan_failed", message: "worker exploded" }),
      ]),
    );

    const error = await rejection(scan());

    expect(error).toBeInstanceOf(ScanError);
    expect(error.code).toBe("scan_failed");
    expect(error.message).not.toContain("worker exploded");
    expect(console.error).toHaveBeenCalledWith(expect.any(String), "worker exploded");
  });

  it("rejects with connection_lost when the stream ends without a result or error", async () => {
    fetchMock.mockResolvedValue(streamResponse([event("phase_started", { phase: "clamav" })]));

    expect((await rejection(scan())).code).toBe("connection_lost");
  });

  it("rejects with connection_lost when the stream breaks mid-scan", async () => {
    fetchMock.mockResolvedValue(brokenStreamResponse(event("phase_started", { phase: "clamav" })));

    expect((await rejection(scan())).code).toBe("connection_lost");
  });

  it("rejects with scan_failed when the final result is not a JSON object", async () => {
    fetchMock.mockResolvedValue(streamResponse(["event: final_result\ndata: not json\n\n"]));

    expect((await rejection(scan())).code).toBe("scan_failed");
  });

  it("rejects as aborted when the user cancels mid-stream", async () => {
    const controller = new AbortController();
    fetchMock.mockResolvedValue(
      new Response(
        new ReadableStream({
          start(stream) {
            stream.enqueue(encoder.encode(event("phase_started", { phase: "clamav" })));
          },
        }),
        { status: 200 },
      ),
    );

    const pending = scan({ signal: controller.signal, onPhaseStart: () => controller.abort() });

    expect((await rejection(pending)).code).toBe("aborted");
  });
});

describe("streamScan failures before the stream", () => {
  it.each([
    [413, { detail: "File exceeds maximum size of 100 MB", code: "http_413" }],
    [429, { detail: "Too many scans from this IP; try again later.", code: "http_429" }],
    [400, { detail: "Extension not allowed", code: "http_400" }],
    [500, { detail: "Internal server error", code: "internal_error" }],
  ])("rejects with the status code %i", async (status, body) => {
    fetchMock.mockResolvedValue(jsonResponse(status, body));

    const error = await rejection(scan());

    expect(error).toBeInstanceOf(ScanError);
    expect(error.code).toBe(status);
  });

  it("rejects a 422 (a bug in this client) with its status and logs the detail", async () => {
    const detail = [{ type: "missing", loc: ["body", "file"], msg: "Field required" }];
    fetchMock.mockResolvedValue(jsonResponse(422, { detail }));

    const error = await rejection(scan());

    expect(error.code).toBe(422);
    expect(console.error).toHaveBeenCalled();
  });

  it("copes with an error body that is not JSON", async () => {
    fetchMock.mockResolvedValue(new Response("<html>Bad gateway</html>", { status: 502 }));

    expect((await rejection(scan())).code).toBe(502);
  });

  it("rejects as an unreachable scanner when fetch itself fails (offline, CORS, proxy 502)", async () => {
    fetchMock.mockRejectedValue(new TypeError("Failed to fetch"));

    const error = await rejection(scan());

    expect(error.code).toBe("network");
    expect(error.network).toBe(true);
  });

  it("rejects as aborted when the user cancels during the upload", async () => {
    fetchMock.mockRejectedValue(new DOMException("The operation was aborted.", "AbortError"));

    expect((await rejection(scan())).code).toBe("aborted");
  });

  it("rejects when the browser gives no readable body", async () => {
    fetchMock.mockResolvedValue({ ok: true, status: 200, body: null });

    expect((await rejection(scan())).code).toBe("unsupported");
  });
});
