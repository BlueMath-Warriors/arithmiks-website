export const MAX_UPLOAD_MB = 1024;

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

/**
 * @param {Record<string, unknown> | null | undefined} result
 * @returns {string | undefined}
 */
export function getScanResultJobId(result) {
  if (!result) return undefined;
  const top = result.job_id;
  if (typeof top === "string" && top.trim()) return top.trim();
  const meta = result.meta;
  if (
    meta &&
    typeof meta === "object" &&
    typeof meta.job_id === "string" &&
    meta.job_id.trim()
  ) {
    return meta.job_id.trim();
  }
  return undefined;
}

/**
 * Prefers `user_summary_structured`; otherwise parses `user_summary` on `\n\n`.
 * @param {Record<string, unknown> | null | undefined} result
 * @returns {{ headline: string | null; bullets: string[] }}
 */
export function getUserSummaryParts(result) {
  if (!result) return { headline: null, bullets: [] };

  const structured = result.user_summary_structured;
  if (structured && typeof structured === "object") {
    const rawHeadline = structured.headline;
    const headline =
      typeof rawHeadline === "string" ? rawHeadline.trim() : "";
    const rawBullets = structured.bullets;
    const bullets = Array.isArray(rawBullets)
      ? rawBullets.map((b) => (typeof b === "string" ? b.trim() : String(b)).trim()).filter(Boolean)
      : [];
    if (headline || bullets.length) {
      return { headline: headline || null, bullets };
    }
  }

  const plain = result.user_summary;
  if (typeof plain === "string" && plain.trim()) {
    const blocks = plain
      .split(/\n\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (blocks.length === 0) return { headline: null, bullets: [] };
    return { headline: blocks[0], bullets: blocks.slice(1) };
  }

  return { headline: null, bullets: [] };
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

export function deriveVerdict(result) {
  const p1 = result?.phase1 || {};
  const yara = result?.yara || {};
  const p2Risk = result?.phase2?.verdict?.risk_level || "low";

  if (p1.infected) return "infected";
  if (yara.severity === "high") return "infected";
  if (p2Risk === "high") return "infected";
  if (yara.severity === "medium" || p2Risk === "medium") return "suspicious";
  return "clean";
}

export function verdictCopy(verdict) {
  switch (verdict) {
    case "infected":
      return {
        heading: "Threat detected",
        sub: "One or more engines flagged this file as malicious. Do not open it.",
        color: "#c0261a",
        bg: "#fdecec",
        border: "#f3b4b0",
      };
    case "suspicious":
      return {
        heading: "Suspicious behaviors found",
        sub: "Some patterns in this file are consistent with risky or unwanted software. Review the details before opening.",
        color: "#8a5a00",
        bg: "#fff5d6",
        border: "#f2dd99",
      };
    default:
      return {
        heading: "No threats detected",
        sub: "All scanning engines cleared this file. Stay cautious with unknown sources.",
        color: "#0f7a3a",
        bg: "#e9f8ef",
        border: "#b8e7c9",
      };
  }
}

/**
 * Map error input (from hook or validation) to user-facing copy.
 */
export function errorCopy(err) {
  const code = err?.code;
  if (err?.error === "TOO_LARGE" || code === 413) {
    return {
      title: "File too large",
      body: `The scanner accepts files up to ${MAX_UPLOAD_MB} MB.`,
    };
  }
  if (err?.error === "EMPTY") {
    return { title: "Empty file", body: "This file has no contents to scan." };
  }
  if (err?.error === "NO_FILE") {
    return { title: "No file selected", body: "Pick a file and try again." };
  }
  if (code === 415) {
    return {
      title: "Unsupported file type",
      body: "This file type isn't accepted by the scanner.",
    };
  }
  if (code === 429) {
    return {
      title: "Scan limit reached",
      body: "You've hit the hourly scan limit. Please wait a bit and try again.",
    };
  }
  if (code === 503) {
    return {
      title: "Scanner is busy",
      body: "Too many scans in progress. Please retry in a minute.",
    };
  }
  if (code === 400) {
    return {
      title: "Invalid request",
      body: "Something was wrong with the upload. Please pick a file and try again.",
    };
  }
  if (code === "connection_lost") {
    return {
      title: "Connection lost",
      body:
        err?.message ||
        "The connection closed before the scan finished. Please try again.",
    };
  }
  if (code === "scan_failed") {
    return {
      title: "Scan failed",
      body: err?.message || "The scan could not be completed. Please try again.",
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

export function severityColor(severity) {
  switch (severity) {
    case "high":
      return "#c0261a";
    case "medium":
      return "#8a5a00";
    default:
      return "#5c5c5c";
  }
}
