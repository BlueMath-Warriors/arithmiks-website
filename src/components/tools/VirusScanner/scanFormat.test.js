import { describe, expect, it } from "vitest";
import { MAX_UPLOAD_MB, deriveVerdict, errorCopy, validateFile } from "./scanFormat";

const report = ({ infected = false, yara = {}, phase2 } = {}) => ({
  phase1: { infected },
  yara: { enabled: true, skipped: false, match_count: 0, severity: "low", ...yara },
  phase2: phase2 ?? {
    skipped: false,
    skip_reason: null,
    verdict: { risk_level: "low", summary: "", indicators: [] },
  },
});

const aiSkipped = { skipped: true, skip_reason: "agent_all_failed", verdict: null };
const aiRisk = (risk_level) => ({ skipped: false, verdict: { risk_level, summary: "", indicators: [] } });

describe("deriveVerdict", () => {
  it("is clean when nothing was found", () => {
    expect(deriveVerdict(report())).toBe("clean");
  });

  it("is harmless_match when ClamAV flags a file the AI rates low risk (the EICAR case)", () => {
    expect(deriveVerdict(report({ infected: true, phase2: aiRisk("low") }))).toBe("harmless_match");
  });

  it("is a threat when ClamAV flags the file and the AI did not run", () => {
    expect(deriveVerdict(report({ infected: true, phase2: aiSkipped }))).toBe("threat");
  });

  it("is a threat when ClamAV flags the file and the AI agrees it is risky", () => {
    expect(deriveVerdict(report({ infected: true, phase2: aiRisk("high") }))).toBe("threat");
  });

  it("is high_risk when the AI rates high without a signature hit", () => {
    expect(deriveVerdict(report({ phase2: aiRisk("high") }))).toBe("high_risk");
  });

  it("is high_risk when YARA severity is high", () => {
    expect(deriveVerdict(report({ yara: { severity: "high", match_count: 1 } }))).toBe("high_risk");
  });

  it("is suspicious when the AI rates medium", () => {
    expect(deriveVerdict(report({ phase2: aiRisk("medium") }))).toBe("suspicious");
  });

  it("is suspicious for a medium YARA match", () => {
    expect(deriveVerdict(report({ yara: { severity: "medium", match_count: 1 } }))).toBe("suspicious");
  });

  it("is low_risk for a low YARA match", () => {
    expect(deriveVerdict(report({ yara: { severity: "low", match_count: 2 } }))).toBe("low_risk");
  });

  it("ignores YARA matches when YARA was skipped or disabled", () => {
    expect(deriveVerdict(report({ yara: { skipped: true, severity: "medium", match_count: 1 } }))).toBe("clean");
    expect(deriveVerdict(report({ yara: { enabled: false, severity: "medium", match_count: 1 } }))).toBe("clean");
  });

  it("treats a skipped AI phase as not having run, even if a stale verdict is attached", () => {
    const phase2 = { skipped: true, verdict: { risk_level: "low" } };
    expect(deriveVerdict(report({ infected: true, phase2 }))).toBe("threat");
  });

  it("does not throw on an empty report", () => {
    expect(deriveVerdict({})).toBe("clean");
    expect(deriveVerdict(null)).toBe("clean");
  });
});

describe("validateFile", () => {
  const fileOfSize = (bytes) => ({ size: bytes });

  it("accepts a file at exactly the limit", () => {
    expect(validateFile(fileOfSize(MAX_UPLOAD_MB * 1024 * 1024))).toEqual({ ok: true });
  });

  it("rejects a file one byte over the limit", () => {
    expect(validateFile(fileOfSize(MAX_UPLOAD_MB * 1024 * 1024 + 1))).toEqual({
      ok: false,
      error: "TOO_LARGE",
    });
  });

  it("rejects an empty file", () => {
    expect(validateFile(fileOfSize(0))).toEqual({ ok: false, error: "EMPTY" });
  });

  it("uses the 100 MB limit the API enforces", () => {
    expect(MAX_UPLOAD_MB).toBe(100);
  });
});

describe("errorCopy", () => {
  it("explains the size limit for a 413", () => {
    expect(errorCopy({ code: 413 }).body).toContain("100 MB");
  });

  it("explains the hourly limit for a 429", () => {
    expect(errorCopy({ code: 429 }).title).toBe("Scan limit reached");
    expect(errorCopy({ code: 429 }).body).toMatch(/hour/);
  });

  it("says the file cannot be scanned for a 400", () => {
    expect(errorCopy({ code: 400 }).body).toMatch(/can.t be scanned/);
  });

  it("falls back to a generic message for 422 and 500", () => {
    expect(errorCopy({ code: 422 }).title).toBe("Something went wrong");
    expect(errorCopy({ code: 500 }).title).toBe("Something went wrong");
  });

  it("no longer maps 415 or 503, which the API never returns", () => {
    expect(errorCopy({ code: 503 }).title).toBe("Something went wrong");
    expect(errorCopy({ code: 415 }).title).toBe("Something went wrong");
  });

  it("never shows the server's technical message for a failed scan", () => {
    const copy = errorCopy({ code: "scan_failed", message: "Traceback: worker exploded at line 42" });
    expect(copy.title).toBe("Scan failed");
    expect(copy.body).not.toContain("Traceback");
  });

  it("reports a dropped connection", () => {
    expect(errorCopy({ code: "connection_lost" }).title).toBe("Connection lost");
  });

  it("reports an unreachable scanner", () => {
    expect(errorCopy({ code: "network", network: true }).title).toBe("Couldn't reach the scanner");
  });
});
