import { describe, expect, it } from "vitest";
import { parseSseFrame, splitSseBuffer } from "./sseParser";

describe("splitSseBuffer", () => {
  it("splits complete events on the blank line and keeps the unfinished tail", () => {
    const { frames, rest } = splitSseBuffer("event: a\ndata: 1\n\nevent: b\ndata: 2\n\nevent: c\nda");

    expect(frames).toEqual(["event: a\ndata: 1", "event: b\ndata: 2"]);
    expect(rest).toBe("event: c\nda");
  });

  it("returns everything as the tail when no event is complete", () => {
    expect(splitSseBuffer("event: a\ndata: 1\n")).toEqual({ frames: [], rest: "event: a\ndata: 1\n" });
  });

  it("understands CRLF separators", () => {
    const { frames, rest } = splitSseBuffer("event: a\r\ndata: 1\r\n\r\nevent: b");

    expect(frames).toEqual(["event: a\r\ndata: 1"]);
    expect(rest).toBe("event: b");
  });

  it("returns nothing for an empty buffer", () => {
    expect(splitSseBuffer("")).toEqual({ frames: [], rest: "" });
  });
});

describe("parseSseFrame", () => {
  it("reads the event name and parses the JSON data", () => {
    expect(parseSseFrame('event: phase_started\ndata: {"phase": "clamav"}')).toEqual({
      event: "phase_started",
      data: { phase: "clamav" },
    });
  });

  it("handles CRLF line endings and the optional space after the colon", () => {
    expect(parseSseFrame('event:final_result\r\ndata:{"ok":true}')).toEqual({
      event: "final_result",
      data: { ok: true },
    });
  });

  it("ignores comment lines such as keep-alives", () => {
    expect(parseSseFrame(': keep-alive\nevent: phase_started\ndata: {"phase":"ai"}').data).toEqual({
      phase: "ai",
    });
  });

  it("returns the raw text when the data is not JSON", () => {
    expect(parseSseFrame("event: error\ndata: plain text")).toEqual({
      event: "error",
      data: "plain text",
    });
  });

  it("returns no event for a frame without data", () => {
    expect(parseSseFrame("event: ping")).toEqual({ event: "", data: null });
  });
});
