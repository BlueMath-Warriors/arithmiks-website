// Both limits are enforced by the scanner API; keep in sync with its settings.
export const MAX_UPLOAD_MB = 100;
export const SCANS_PER_HOUR = 10;

/**
 * @typedef {{ headline: string; bullets: string[] }} UserSummaryStructured
 * @typedef {{
 *   job_id: string;
 *   filename: string;
 *   content_type: string | null;
 *   user_summary: string;
 *   user_summary_structured: UserSummaryStructured | null;
 *   phase1: Record<string, unknown>;
 *   yara: Record<string, unknown>;
 *   phase2: Record<string, unknown>;
 *   meta: Record<string, unknown>;
 * }} ScanReport
 */

/** @typedef {"pending"|"running"|"completed"|"skipped"|"failed"} PhaseState */

/**
 * Resolves display filename: top-level `filename` or legacy `meta.original_filename`.
 * @param {Record<string, unknown> | null | undefined} result
 * @returns {string | undefined}
 */
export function getScanResultFilename(result) {
  if (!result) return undefined;
  const top = result.filename;
  if (typeof top === "string" && top.trim()) return top.trim();
  const meta = result.meta;
  if (
    meta &&
    typeof meta === "object" &&
    typeof meta.original_filename === "string" &&
    meta.original_filename.trim()
  ) {
    return meta.original_filename.trim();
  }
  return undefined;
}

/** @returns {Record<"clamav"|"yara"|"ai", PhaseState>} */
export function createInitialPhases() {
  return { clamav: "pending", yara: "pending", ai: "pending" };
}

const PHASE_IDS = new Set(["clamav", "yara", "ai"]);

/**
 * @param {string} id
 * @returns {id is "clamav"|"yara"|"ai"}
 */
export function isPhaseId(id) {
  return PHASE_IDS.has(id);
}

/**
 * @param {Record<"clamav"|"yara"|"ai", PhaseState>} phases
 * @param {object} result
 */
export function reconcilePhasesFromResult(phases, result) {
  const p1 = result?.phase1 || {};
  const yara = result?.yara || {};
  const p2 = result?.phase2 || {};
  return {
    clamav:
      p1.skipped === true
        ? "skipped"
        : phases.clamav === "failed"
          ? "failed"
          : "completed",
    yara:
      yara.skipped === true
        ? "skipped"
        : phases.yara === "failed"
          ? "failed"
          : "completed",
    ai:
      p2.skipped === true
        ? "skipped"
        : phases.ai === "failed"
          ? "failed"
          : "completed",
  };
}

/**
 * @param {Record<"clamav"|"yara"|"ai", PhaseState>} phases
 */
export function markRunningPhasesFailed(phases) {
  const n = { ...phases };
  for (const k of ["clamav", "yara", "ai"]) {
    if (n[k] === "running") n[k] = "failed";
  }
  return n;
}

export function validateFile(file) {
  if (!file) return { ok: false, error: "NO_FILE" };
  if (file.size === 0) return { ok: false, error: "EMPTY" };
  const sizeMb = file.size / (1024 * 1024);
  if (sizeMb > MAX_UPLOAD_MB) return { ok: false, error: "TOO_LARGE" };
  return { ok: true };
}

export function formatBytes(bytes) {
  if (bytes === 0 || bytes == null) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.min(
    sizes.length - 1,
    Math.floor(Math.log(bytes) / Math.log(k))
  );
  return `${(bytes / Math.pow(k, i)).toFixed(i === 0 ? 0 : 1)} ${sizes[i]}`;
}

/**
 * @typedef {"threat"|"high_risk"|"suspicious"|"harmless_match"|"low_risk"|"clean"} Verdict
 */

/**
 * Mirrors the backend's headline logic so the badge always agrees with the
 * plain-language summary. A signature hit the AI rates low risk (the EICAR
 * test file) is "harmless_match", not a threat.
 *
 * @param {object} result the scanner's final report
 * @returns {Verdict}
 */
export function deriveVerdict(result) {
  const yara = result?.yara || {};
  const phase2 = result?.phase2 || {};
  const aiRan = !phase2.skipped && Boolean(phase2.verdict);
  const aiRisk = aiRan ? phase2.verdict.risk_level : null;
  const yaraHit = Boolean(yara.enabled) && !yara.skipped && yara.match_count > 0;

  if (result?.phase1?.infected) return aiRisk === "low" ? "harmless_match" : "threat";
  if (aiRisk === "high" || yara.severity === "high") return "high_risk";
  if (aiRisk === "medium" || (yaraHit && yara.severity === "medium")) return "suspicious";
  if (yaraHit) return "low_risk";
  return "clean";
}

/**
 * Map error input (from hook or validation) to user-facing copy.
 */
export function errorCopy(err) {
  const code = err?.code;
  if (err?.error === "TOO_LARGE" || code === 413) {
    return {
      title: "File too large",
      body: `The scanner accepts files up to ${MAX_UPLOAD_MB} MB. Try a smaller one.`,
    };
  }
  if (err?.error === "EMPTY") {
    return { title: "Empty file", body: "This file has no contents to scan." };
  }
  if (err?.error === "NO_FILE") {
    return { title: "No file selected", body: "Pick a file and try again." };
  }
  if (code === 429) {
    return {
      title: "Scan limit reached",
      body: `You've reached the limit of ${SCANS_PER_HOUR} scans per hour. Please try again in an hour.`,
    };
  }
  if (code === 400) {
    return {
      title: "File can't be scanned",
      body: "This file can't be scanned. Please try a different file.",
    };
  }
  if (code === "connection_lost") {
    return {
      title: "Connection lost",
      body: "The connection closed before the scan finished. Please try again.",
    };
  }
  // The server's message is technical, so it is logged by the client and never shown.
  if (code === "scan_failed") {
    return {
      title: "Scan failed",
      body: "The scan could not be completed. Please try again.",
    };
  }
  if (err?.network) {
    return {
      title: "Couldn't reach the scanner",
      body: "Check your internet connection and try again.",
    };
  }
  if (err?.timeout) {
    return {
      title: "Scan timed out",
      body: "The scan took too long. Try a smaller file.",
    };
  }
  return {
    title: "Something went wrong",
    body: "We couldn't complete the scan. Please try again.",
  };
}
