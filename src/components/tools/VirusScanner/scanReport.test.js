import { describe, expect, it } from "vitest";
import {
  SCAN_DURATION_HINT,
  buildEngineRows,
  describeActivity,
  describeRejection,
  describeVerdict,
  getScanSummary,
} from "./scanReport";

describe("getScanSummary", () => {
  it("uses the structured summary the API writes for visitors", () => {
    const result = {
      user_summary: "ignored",
      user_summary_structured: { headline: " This file is clean. ", bullets: ["All checks agree.", ""] },
    };
    expect(getScanSummary(result)).toEqual({
      headline: "This file is clean.",
      bullets: ["All checks agree."],
    });
  });

  it("allows a headline with no bullets", () => {
    expect(getScanSummary({ user_summary_structured: { headline: "Clean." } })).toEqual({
      headline: "Clean.",
      bullets: [],
    });
  });

  it("falls back to the plain-text summary, headline first", () => {
    const result = { user_summary_structured: null, user_summary: "Headline.\n\nFirst point.\n\nSecond point." };
    expect(getScanSummary(result)).toEqual({
      headline: "Headline.",
      bullets: ["First point.", "Second point."],
    });
  });

  it("falls back when the structured headline is blank", () => {
    const result = { user_summary_structured: { headline: "  ", bullets: [] }, user_summary: "Plain." };
    expect(getScanSummary(result)).toEqual({ headline: "Plain.", bullets: [] });
  });

  it("returns null when the report has no summary at all", () => {
    expect(getScanSummary({})).toBeNull();
    expect(getScanSummary({ user_summary: "" })).toBeNull();
    expect(getScanSummary(null)).toBeNull();
  });
});

const phases = (overrides = {}) => ({ clamav: "pending", yara: "pending", ai: "pending", ...overrides });

describe("describeVerdict", () => {
  it.each([
    ["threat", "infected", "Threat detected"],
    ["high_risk", "infected", "High risk"],
    ["suspicious", "suspicious", "Suspicious"],
    ["harmless_match", "suspicious", "Flagged, likely harmless"],
    ["low_risk", "clean", "Low risk"],
    ["clean", "clean", "Clean"],
  ])("maps %s to the %s colour with the label %s", (verdict, tone, label) => {
    expect(describeVerdict(verdict)).toMatchObject({ tone, label });
  });

  it("falls back to clean for an unknown verdict", () => {
    expect(describeVerdict("nonsense")).toMatchObject({ label: "Clean" });
  });

  it("only uses colours the design defines", () => {
    const tones = ["threat", "high_risk", "suspicious", "harmless_match", "low_risk", "clean"].map(
      (verdict) => describeVerdict(verdict).tone,
    );
    tones.forEach((tone) => expect(["clean", "suspicious", "infected"]).toContain(tone));
  });
});

describe("describeActivity", () => {
  it("says uploading while the file is sent", () => {
    expect(describeActivity("uploading", phases())).toBe("Uploading…");
  });

  it("says the scan is waiting for a free scanner while queued", () => {
    expect(describeActivity("queued", phases())).toBe("Waiting for a free scanner…");
  });

  it("names the engine that is running", () => {
    expect(describeActivity("scanning", phases({ clamav: "completed", yara: "running" }))).toBe(
      "Checking rules…",
    );
  });

  it("has a generic line between engines", () => {
    expect(describeActivity("scanning", phases({ clamav: "completed" }))).toBe("Scanning…");
  });

  it("exposes the expected scan duration", () => {
    expect(SCAN_DURATION_HINT).toMatch(/about a minute/i);
  });
});

describe("describeRejection", () => {
  it("states the real 100 MB limit", () => {
    expect(describeRejection("TOO_LARGE")).toContain("100 MB");
  });

  it("has no message for unknown codes", () => {
    expect(describeRejection("NOPE")).toBeNull();
    expect(describeRejection(null)).toBeNull();
  });
});

describe("buildEngineRows: AI row", () => {
  const aiRowFor = (phase2) => buildEngineRows({ phase1: {}, yara: {}, phase2 })[2];

  it.each([
    ["agent_all_failed", /unavailable/i],
    ["archive_encrypted", /password/i],
    ["archive_no_text_candidates", /no readable text/i],
    ["archive_invalid", /corrupt/i],
    ["disabled", /turned off/i],
  ])("explains the skip reason %s", (skip_reason, note) => {
    const row = aiRowFor({ skipped: true, skip_reason, verdict: null });
    expect(row).toMatchObject({ status: "Not run", tone: "neutral" });
    expect(row.note).toMatch(note);
  });

  it.each(["missing_input", "unknown_error", "something_new", null])(
    "uses a generic note for the skip reason %s",
    (skip_reason) => {
      expect(aiRowFor({ skipped: true, skip_reason, verdict: null }).note).toMatch(/wasn.t run/);
    },
  );

  it("shows the verdict and indicators when the AI ran", () => {
    const row = aiRowFor({
      skipped: false,
      verdict: { risk_level: "medium", summary: "Looks off.", indicators: ["Hidden macro"] },
    });
    expect(row).toMatchObject({ status: "Medium risk", tone: "suspicious", note: "Looks off." });
    expect(row.indicators).toEqual(["Hidden macro"]);
  });
});

describe("buildEngineRows: YARA row", () => {
  const yaraRowFor = (yara) => buildEngineRows({ phase1: {}, yara, phase2: { skipped: true } })[1];

  it("is not run when YARA is disabled", () => {
    expect(yaraRowFor({ enabled: false, skipped: false, match_count: 0 })).toMatchObject({
      status: "Not run",
    });
  });

  it("is not run when YARA was skipped", () => {
    expect(yaraRowFor({ enabled: true, skipped: true })).toMatchObject({ status: "Not run" });
  });

  it("is clean with zero matches", () => {
    expect(yaraRowFor({ enabled: true, skipped: false, match_count: 0, matches: [] })).toMatchObject({
      status: "0 matches",
      tone: "clean",
    });
  });

  it("colours the row by severity", () => {
    const matches = [{ rule: "R", description: "d", tags: [], source: "" }];
    expect(yaraRowFor({ enabled: true, match_count: 1, severity: "high", matches }).tone).toBe("infected");
    expect(yaraRowFor({ enabled: true, match_count: 1, severity: "medium", matches }).tone).toBe("suspicious");
    expect(yaraRowFor({ enabled: true, match_count: 1, severity: "low", matches }).tone).toBe("neutral");
  });
});

describe("buildEngineRows: where a match was found", () => {
  const matchFor = (source) =>
    buildEngineRows({
      phase1: {},
      yara: {
        enabled: true,
        skipped: false,
        match_count: 1,
        severity: "high",
        matches: [{ rule: "R", description: "d", tags: ["t"], source }],
      },
      phase2: { skipped: true },
    })[1].matches[0];

  it("has no location for a match in the top-level file", () => {
    expect(matchFor("").archivePath).toEqual([]);
  });

  it("shows the member path for a match inside an archive", () => {
    expect(matchFor("eicar.com").archivePath).toEqual(["eicar.com"]);
  });

  it("keeps a folder path in one piece", () => {
    expect(matchFor("docs/report.docm").archivePath).toEqual(["docs/report.docm"]);
  });

  it("splits nested archives written with a double colon", () => {
    expect(matchFor("bundle.zip::scripts.zip::run.ps1").archivePath).toEqual([
      "bundle.zip",
      "scripts.zip",
      "run.ps1",
    ]);
  });

  it("copes with a missing source", () => {
    expect(matchFor(undefined).archivePath).toEqual([]);
  });
});

describe("buildEngineRows: ClamAV row", () => {
  it("names the matched signature", () => {
    const [clam] = buildEngineRows({
      phase1: { infected: true, threat_name: "Eicar-Test-Signature" },
      yara: {},
      phase2: {},
    });
    expect(clam).toMatchObject({ status: "Threat found", tone: "infected" });
    expect(clam.note).toContain("Eicar-Test-Signature");
  });
});
