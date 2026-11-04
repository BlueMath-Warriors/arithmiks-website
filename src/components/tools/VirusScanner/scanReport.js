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

/** The three engines, in the order they run. */
export const ENGINES = [
  { id: "clamav", name: "ClamAV", activity: "signatures" },
  { id: "yara", name: "YARA rules", activity: "rules" },
  { id: "ai", name: "AI analyst", activity: "analysis" },
];

const VERDICTS = {
  clean: { label: "Clean", title: "No threats found", advice: null },
  suspicious: {
    label: "Suspicious",
    title: "Suspicious patterns found",
    advice:
      "Some behavior in this file is risky or unwanted. Read what each engine found before you open it.",
  },
  infected: {
    label: "Infected",
    title: "Threat detected",
    advice: "One or more engines flagged this file as malicious. Don’t open or share it.",
  },
};

/**
 * @param {"clean"|"suspicious"|"infected"} verdict from deriveVerdict
 * @returns {{ tone: Tone, label: string, title: string, advice: string | null }}
 */
export const describeVerdict = (verdict) => ({
  tone: verdict,
  ...(VERDICTS[verdict] || VERDICTS.clean),
});

const plural = (count, word) => `${count} ${word}${count === 1 ? "" : "es"}`;

const AI_SKIP_REASONS = {
  clean_clamav: "Not needed. Signatures and patterns already cleared this file.",
  phase1_infected: "Not needed. A signature engine already flagged this file.",
  timeout: "This file took too long to analyze.",
  error: "AI analysis is temporarily unavailable.",
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
  // Matches inside archives arrive as "outer.zip::inner.zip::file".
  archivePath:
    typeof match.source === "string" && match.source.includes("::") ? match.source.split("::") : [],
});

/** @returns {EngineRow} */
const yaraRow = (yara = {}) => {
  const base = { id: "yara", name: "YARA rules", matches: [], indicators: [] };
  if (yara.skipped === true) {
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

/**
 * The status line under the file name while a scan runs.
 *
 * @param {"uploading"|"scanning"} status
 * @param {Record<"clamav"|"yara"|"ai", string>} phases
 */
export const describeActivity = (status, phases) => {
  if (status === "uploading") return "Uploading…";
  const running = ENGINES.find(({ id }) => phases[id] === "running");
  return running ? `Checking ${running.activity}…` : "Scanning…";
};

const REJECTIONS = {
  TOO_LARGE: "That file is over 1 GB. Try a smaller one.",
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
