/**
 * Turns scanner state and API reports into what the scan card shows: the
 * verdict, one breakdown row per engine, and the live progress rows. Pure
 * functions, so every result shape can be checked without rendering.
 *
 * Tones name the design's status colours: clean (green), suspicious (amber),
 * infected (red), neutral (grey) and active (brand blue, a running engine).
 *
 * @typedef {"clean"|"suspicious"|"infected"|"neutral"|"active"} Tone
 */

import { MAX_UPLOAD_MB } from "./scanFormat";

/** The three engines, in the order they run. */
export const ENGINES = [
  { id: "clamav", name: "ClamAV", activity: "signatures" },
  { id: "yara", name: "YARA rules", activity: "rules" },
  { id: "ai", name: "AI analyst", activity: "analysis" },
];

// Six verdicts share the design's three status colours. `title` and `advice`
// only show when the report carries no plain-language summary of its own.
const VERDICTS = {
  clean: { tone: "clean", label: "Clean", title: "No threats found", advice: null },
  low_risk: {
    tone: "clean",
    label: "Low risk",
    title: "Only minor patterns found",
    advice: "A few low-risk patterns matched, but nothing points to a real threat.",
  },
  harmless_match: {
    tone: "suspicious",
    label: "Flagged, likely harmless",
    title: "Flagged, but likely harmless",
    advice:
      "A signature engine flagged this file, but the AI analysis rates it low risk. It is probably a test file or a false alarm.",
  },
  suspicious: {
    tone: "suspicious",
    label: "Suspicious",
    title: "Suspicious patterns found",
    advice:
      "Some behavior in this file is risky or unwanted. Read what each engine found before you open it.",
  },
  high_risk: {
    tone: "infected",
    label: "High risk",
    title: "High-risk file",
    advice: "This file shows strong signs of malicious behavior. Don’t open or share it.",
  },
  threat: {
    tone: "infected",
    label: "Threat detected",
    title: "Threat detected",
    advice: "One or more engines flagged this file as malicious. Don’t open or share it.",
  },
};

/**
 * @param {import("./scanFormat").Verdict} verdict from deriveVerdict
 * @returns {{ tone: "clean"|"suspicious"|"infected", label: string, title: string, advice: string | null }}
 */
export const describeVerdict = (verdict) => VERDICTS[verdict] || VERDICTS.clean;

const nonEmptyText = (value) => (typeof value === "string" ? value.trim() : "");

/**
 * The plain-language answer written for visitors: a one-sentence headline plus
 * supporting points. Prefers the structured summary and falls back to the
 * plain-text one (headline first, then one point per paragraph).
 *
 * @param {object} result the scanner's final report
 * @returns {{ headline: string, bullets: string[] } | null} null when the report has none
 */
export const getScanSummary = (result) => {
  const structured = result?.user_summary_structured;
  const headline = nonEmptyText(structured?.headline);
  if (headline) {
    const bullets = Array.isArray(structured.bullets) ? structured.bullets : [];
    return { headline, bullets: bullets.map(nonEmptyText).filter(Boolean) };
  }

  const [first, ...rest] = nonEmptyText(result?.user_summary)
    .split("\n\n")
    .map(nonEmptyText)
    .filter(Boolean);
  return first ? { headline: first, bullets: rest } : null;
};

const plural = (count, word) => `${count} ${word}${count === 1 ? "" : "es"}`;

// The scanner's `phase2.skip_reason` values. Unlisted ones (missing_input,
// unknown_error, anything new) get the generic fallback below.
const AI_SKIP_REASONS = {
  agent_all_failed: "AI analysis is temporarily unavailable.",
  archive_encrypted: "This archive is password-protected, so the AI couldn’t read inside it.",
  archive_no_text_candidates: "This archive has no readable text for the AI to review.",
  archive_invalid: "This archive looks corrupt, so the AI couldn’t read it.",
  disabled: "AI analysis is turned off.",
};
const AI_SKIP_FALLBACK = "AI analysis wasn’t run for this file.";

const NOT_RUN = { status: "Not run", tone: "neutral" };

/**
 * @typedef {{ rule: string, description: string, tags: string[], archivePath: string[] }} PatternMatch
 * @typedef {{ id: string, name: string, note: string, status: string, tone: Tone,
 *   matches: PatternMatch[], indicators: string[] }} EngineRow
 */

/** @returns {EngineRow} */
const clamavRow = (phase1 = {}) => {
  const base = { id: "clamav", name: "ClamAV", matches: [], indicators: [] };
  if (phase1.skipped === true) {
    return { ...base, ...NOT_RUN, note: "This engine wasn’t run for this scan." };
  }
  if (phase1.infected) {
    const threat = typeof phase1.threat_name === "string" && phase1.threat_name.trim();
    return {
      ...base,
      status: "Threat found",
      tone: "infected",
      note: threat ? `Matched the signature ${threat}.` : "Matched a known malware signature.",
    };
  }
  return {
    ...base,
    status: "No hits",
    tone: "clean",
    note: "Checked against known malware signatures.",
  };
};

const SEVERITY_TONES = { high: "infected", medium: "suspicious" };

/** @returns {PatternMatch} */
const toPatternMatch = (match = {}) => ({
  rule: String(match.rule || "Unnamed rule"),
  description: typeof match.description === "string" ? match.description : "",
  tags: Array.isArray(match.tags) ? match.tags.map(String) : [],
  // `source` is the member path for a match inside an archive, "" otherwise.
  // Nested archives may arrive as "outer.zip::inner.zip::file"; that delimiter
  // is not in the API guide, so a plain path is kept whole rather than split.
  archivePath:
    typeof match.source === "string" && match.source !== ""
      ? match.source.split("::")
      : [],
});

/** @returns {EngineRow} */
const yaraRow = (yara = {}) => {
  const base = { id: "yara", name: "YARA rules", matches: [], indicators: [] };
  if (yara.skipped === true || yara.enabled === false) {
    return { ...base, ...NOT_RUN, note: "Pattern matching wasn’t run for this file." };
  }
  const matches = Array.isArray(yara.matches) ? yara.matches : [];
  const count = typeof yara.match_count === "number" ? yara.match_count : matches.length;
  if (count === 0) {
    return {
      ...base,
      status: "0 matches",
      tone: "clean",
      note: "No suspicious code patterns or behaviors.",
    };
  }
  return {
    ...base,
    status: plural(count, "match"),
    tone: SEVERITY_TONES[yara.severity] || "neutral",
    note: `${count} suspicious pattern${count === 1 ? "" : "s"} matched in this file.`,
    matches: matches.map(toPatternMatch),
  };
};

const AI_RISKS = {
  high: { status: "High risk", tone: "infected", fallback: "Behavior consistent with malware." },
  medium: {
    status: "Medium risk",
    tone: "suspicious",
    fallback: "Some behavior looks risky or unwanted.",
  },
  low: { status: "Safe", tone: "clean", fallback: "Looks like a normal file of this type." },
};

/** @returns {EngineRow} */
const aiRow = (phase2 = {}) => {
  const base = { id: "ai", name: "AI analyst", matches: [], indicators: [] };
  if (phase2.skipped) {
    return { ...base, ...NOT_RUN, note: AI_SKIP_REASONS[phase2.skip_reason] || AI_SKIP_FALLBACK };
  }
  const verdict = phase2.verdict || {};
  const risk = AI_RISKS[verdict.risk_level] || AI_RISKS.low;
  const summary = typeof verdict.summary === "string" && verdict.summary.trim();
  return {
    ...base,
    status: risk.status,
    tone: risk.tone,
    note: summary || risk.fallback,
    indicators: Array.isArray(verdict.indicators) ? verdict.indicators.map(String) : [],
  };
};

/**
 * @param {object} result the scanner's final report
 * @returns {EngineRow[]} ClamAV, YARA and AI rows, in run order
 */
export const buildEngineRows = (result) => [
  clamavRow(result?.phase1),
  yaraRow(result?.yara),
  aiRow(result?.phase2),
];

const PHASE_PROGRESS = {
  pending: { percent: 0, status: "Waiting", tone: "neutral" },
  // The API reports no partial progress, so a running engine eases most of
  // the way and the bar completes when the engine reports back.
  running: { percent: 75, status: "Scanning", tone: "active" },
  completed: { percent: 100, status: "Done", tone: "clean" },
  skipped: { percent: 100, status: "Skipped", tone: "neutral" },
  failed: { percent: 100, status: "Failed", tone: "infected" },
};

/**
 * @param {Record<"clamav"|"yara"|"ai", string>} phases
 * @returns {{ id: string, name: string, percent: number, status: string, tone: Tone }[]}
 */
export const buildProgressRows = (phases) =>
  ENGINES.map(({ id, name }) => ({
    id,
    name,
    ...(PHASE_PROGRESS[phases[id]] || PHASE_PROGRESS.pending),
  }));

export const SCAN_DURATION_HINT = "This usually takes about a minute.";

/**
 * The status line under the file name while a scan runs.
 *
 * @param {"uploading"|"queued"|"scanning"} status
 * @param {Record<"clamav"|"yara"|"ai", string>} phases
 */
export const describeActivity = (status, phases) => {
  if (status === "uploading") return "Uploading…";
  if (status === "queued") return "Waiting for a free scanner…";
  const running = ENGINES.find(({ id }) => phases[id] === "running");
  return running ? `Checking ${running.activity}…` : "Scanning…";
};

const REJECTIONS = {
  TOO_LARGE: `That file is over ${MAX_UPLOAD_MB} MB. Try a smaller one.`,
  EMPTY: "That file is empty. Choose another one.",
};

/**
 * What the drop zone says about a file it refused before upload.
 *
 * @param {string | null} code a validateFile error code
 * @returns {string | null}
 */
export const describeRejection = (code) => (code && REJECTIONS[code]) || null;

/** @param {number | null} durationMs */
export const formatScanTime = (durationMs) =>
  typeof durationMs === "number" && durationMs >= 0 ? `${(durationMs / 1000).toFixed(1)}s` : null;
