import { describe, expect, it } from "vitest";
import { initialScanState, scanReducer } from "./scanReducer";

const run = (...actions) => actions.reduce(scanReducer, initialScanState);
const file = { name: "report.pdf", size: 1234 };

describe("scanReducer: scan lifecycle", () => {
  it("starts uploading with all engines pending", () => {
    const state = run({ type: "START", file });
    expect(state).toMatchObject({ status: "uploading", file });
    expect(state.phases).toEqual({ clamav: "pending", yara: "pending", ai: "pending" });
  });

  it("is queued once the upload is accepted but no engine has started", () => {
    const state = run({ type: "START", file }, { type: "QUEUED" });
    expect(state.status).toBe("queued");
    expect(state.phases.clamav).toBe("pending");
  });

  it("moves from queued to scanning on the first phase_started", () => {
    const state = run(
      { type: "START", file },
      { type: "QUEUED" },
      { type: "PHASE_START", phase: "clamav" },
    );
    expect(state.status).toBe("scanning");
    expect(state.phases.clamav).toBe("running");
  });

  it("ticks an engine off when it completes", () => {
    const state = run(
      { type: "START", file },
      { type: "QUEUED" },
      { type: "PHASE_START", phase: "clamav" },
      { type: "PHASE_COMPLETE", phase: "clamav" },
      { type: "PHASE_START", phase: "yara" },
    );
    expect(state.phases).toEqual({ clamav: "completed", yara: "running", ai: "pending" });
  });

  it("ignores events for an engine it does not know", () => {
    const before = run({ type: "START", file }, { type: "QUEUED" });
    const after = scanReducer(before, { type: "PHASE_START", phase: "mystery" });
    expect(after.phases).toEqual(before.phases);
  });

  it("shows the result and marks skipped engines", () => {
    const result = {
      phase1: { infected: false },
      yara: { skipped: false },
      phase2: { skipped: true, skip_reason: "agent_all_failed", verdict: null },
    };
    const state = run({ type: "START", file }, { type: "RESULT", result, durationMs: 4000 });
    expect(state).toMatchObject({ status: "result", result, durationMs: 4000 });
    expect(state.phases).toEqual({ clamav: "completed", yara: "completed", ai: "skipped" });
  });

  it("fails the engines that were running when an error arrives", () => {
    const error = { code: "scan_failed" };
    const state = run(
      { type: "START", file },
      { type: "QUEUED" },
      { type: "PHASE_START", phase: "ai" },
      { type: "ERROR", error },
    );
    expect(state).toMatchObject({ status: "error", error });
    expect(state.phases.ai).toBe("failed");
  });

  it("returns to idle on reset", () => {
    expect(run({ type: "START", file }, { type: "QUEUED" }, { type: "RESET" })).toEqual(
      initialScanState,
    );
  });

  it("keeps the card idle and records why when a file is rejected before upload", () => {
    expect(run({ type: "REJECT", code: "TOO_LARGE" })).toMatchObject({
      status: "idle",
      rejection: "TOO_LARGE",
    });
  });
});
