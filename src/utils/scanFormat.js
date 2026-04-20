export const MAX_UPLOAD_MB = 1024;

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
