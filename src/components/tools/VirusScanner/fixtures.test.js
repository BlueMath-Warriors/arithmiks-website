import { describe, expect, it } from "vitest";
import archiveEncrypted from "./__fixtures__/archive-encrypted.json";
import clean from "./__fixtures__/clean.json";
import eicar from "./__fixtures__/eicar.json";
import infectedClamav from "./__fixtures__/infected-clamav.json";
import infectedYara from "./__fixtures__/infected-yara.json";
import infectedYaraArchive from "./__fixtures__/infected-yara-archive.json";
import phase2Skipped from "./__fixtures__/phase2-skipped.json";
import suspiciousEscalated from "./__fixtures__/suspicious-escalated.json";
import { deriveVerdict } from "./scanFormat";
import { buildEngineRows, getScanSummary } from "./scanReport";

// The dev-only ?mock=<name> reports. Each must render a full result card.
const FIXTURES = [
  ["clean", clean, "clean"],
  ["eicar", eicar, "harmless_match"],
  ["infected-clamav", infectedClamav, "threat"],
  ["infected-yara", infectedYara, "high_risk"],
  ["infected-yara-archive", infectedYaraArchive, "high_risk"],
  ["suspicious-escalated", suspiciousEscalated, "suspicious"],
  ["phase2-skipped", phase2Skipped, "clean"],
  ["archive-encrypted", archiveEncrypted, "clean"],
];

describe.each(FIXTURES)("fixture %s", (_name, report, verdict) => {
  it(`is judged ${verdict}`, () => {
    expect(deriveVerdict(report)).toBe(verdict);
  });

  it("carries a plain-language summary and a scan ID", () => {
    expect(getScanSummary(report)?.headline).toBeTruthy();
    expect(report.job_id).toBeTruthy();
  });

  it("builds one row per engine", () => {
    expect(buildEngineRows(report).map((row) => row.id)).toEqual(["clamav", "yara", "ai"]);
  });
});

describe("AI skipped fixtures", () => {
  it("name the real skip reasons from the API", () => {
    expect(phase2Skipped.phase2.skip_reason).toBe("agent_all_failed");
    expect(archiveEncrypted.phase2.skip_reason).toBe("archive_encrypted");
    expect(buildEngineRows(archiveEncrypted)[2].note).toMatch(/password/i);
  });
});
