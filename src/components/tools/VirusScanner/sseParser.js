/**
 * @param {string} frame
 * @returns {{ event: string; data: any }}
 */
export function parseSseFrame(frame) {
  let event = "message";
  const dataLines = [];

  for (const rawLine of frame.split("\n")) {
    const line = rawLine.replace(/\r$/, "");
    if (line === "" || line.startsWith(":")) continue;

    if (line.startsWith("event:")) {
      event = line.slice(6).trim();
    } else if (line.startsWith("data:")) {
      dataLines.push(line.slice(5).replace(/^ /, ""));
    }
  }

  if (dataLines.length === 0) return { event: "", data: null };

  const raw = dataLines.join("\n");
  try {
    return { event, data: JSON.parse(raw) };
  } catch {
    return { event, data: raw };
  }
}

/**
 * @param {string} buffer
 * @returns {{ frames: string[]; rest: string }}
 */
export function splitSseBuffer(buffer) {
  const frames = [];
  let rest = buffer;

  while (true) {
    const lfIdx = rest.indexOf("\n\n");
    const crlfIdx = rest.indexOf("\r\n\r\n");
    let sepIdx = -1;
    let sepLen = 0;
    if (crlfIdx !== -1 && (lfIdx === -1 || crlfIdx < lfIdx)) {
      sepIdx = crlfIdx;
      sepLen = 4;
    } else if (lfIdx !== -1) {
      sepIdx = lfIdx;
      sepLen = 2;
    } else {
      break;
    }
    frames.push(rest.slice(0, sepIdx));
    rest = rest.slice(sepIdx + sepLen);
  }

  return { frames, rest };
}
