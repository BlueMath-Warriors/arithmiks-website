# Virus Scanner UI — Frontend Integration Guide

**Audience:** Arithmiks website frontend team (Gatsby 5 + React 18 + styled-components).
**Scope:** Build the Virus Scanner page and wire it to the local FastAPI orchestrator. The backend is **not yet deployed** — this doc is for local development + local testing.
**Backend repo:** `arithmiks-virus-scanner` (Docker Compose stack — orchestrator + scan worker + ClamAV sidecar).

> **Important (Windows):** Do **not** create malware-like test files on a Windows dev machine. Defender will quarantine them and can even block this doc if suspicious payloads are inline. All test payloads live in the **scanner backend repo's runbook** (`arithmiks-virus-scanner`), where fixtures are generated inside Docker containers that Defender doesn't scan. This guide uses JSON response fixtures for UI states instead of literal payloads.

---

## 1. TL;DR

- New page at `/virus-scanner` inside this repo.
- Browser uploads directly to the local orchestrator at `http://localhost:8080/api/v1/scan` (multipart form `file`).
- Backend returns a JSON report with three sections: `phase1` (ClamAV), `yara`, `phase2` (Claude agent).
- During local dev, run the backend with `docker compose up -d` in the `arithmiks-virus-scanner` repo before starting Gatsby.
- **Do not** proxy uploads through Gatsby/Netlify Functions — max upload is 1 GB, which exceeds function body limits. Browser → FastAPI is correct.
- Develop most UI states against **JSON fixtures** (provided by backend team) rather than live scans, so you never have to handle suspicious files on Windows.

---

## 2. Prerequisites for local dev

### 2.1 Run the backend

In a separate terminal, from `arithmiks-virus-scanner/`:

```bash
docker compose build
docker compose up -d
curl http://localhost:8080/docs
```

If Swagger loads, the API is reachable. Keep the stack running while developing the UI.

### 2.2 CORS

The backend already allowlists `http://localhost:8000` (Gatsby's default dev port). If you change the Gatsby port, add the new origin to the backend `.env` `CORS_ORIGINS` and restart:

```
CORS_ORIGINS=https://arithmiks.com,http://localhost:8000
```

### 2.3 Gatsby env vars

Create `.env.development` in this repo (already gitignored):

```
GATSBY_SCAN_API_URL=http://localhost:8080
```

Any var must start with `GATSBY_` to be exposed to the browser bundle. Later, for staging/prod, set `GATSBY_SCAN_API_URL=https://scan-api.arithmiks.com` in Netlify build env.

---

## 3. API contract

### 3.1 Endpoint

```
POST {GATSBY_SCAN_API_URL}/api/v1/scan
Content-Type: multipart/form-data
Body: file=<binary>
```

No auth header for local dev. In prod, a Turnstile token will be required — we will add that field when the backend ships it.

### 3.2 Success response (HTTP 200) — shape

```json
{
  "phase1": {
    "infected": false,
    "threat_name": null,
    "raw_exit_code": 0,
    "details": "string or null"
  },
  "yara": {
    "enabled": true,
    "skipped": false,
    "skip_reason": null,
    "match_count": 0,
    "severity": "low",
    "severity_base": "low",
    "severity_escalated": false,
    "correlation_reason": null,
    "rules_loaded": 9,
    "matches": [
      {
        "rule": "RuleName",
        "namespace": "category",
        "tags": ["tag1", "tag2"],
        "severity": "high",
        "description": "short description",
        "source": ""
      }
    ],
    "archive_scan": null
  },
  "phase2": {
    "skipped": false,
    "skip_reason": null,
    "verdict": {
      "risk_level": "low",
      "summary": "Short analyst note.",
      "indicators": ["indicator string"]
    },
    "analysis": "LOW risk across 1 unit(s), 1 chunk(s). ...",
    "risk_notes": []
  },
  "meta": {
    "job_id": "uuid",
    "original_filename": "example.zip"
  }
}
```

Any field above may be absent if an engine was skipped — always use optional-chaining / defaults on the frontend.

### 3.3 Field guide

| Path | Type | Meaning |
|---|---|---|
| `phase1.infected` | bool | ClamAV positive hit |
| `phase1.threat_name` | string\|null | signature name when infected |
| `yara.severity` | `"low"\|"medium"\|"high"` | **final** severity after correlation |
| `yara.severity_base` | same | severity before correlation escalation |
| `yara.severity_escalated` | bool | true if correlation bumped the severity |
| `yara.correlation_reason` | string\|null | e.g. `"3_medium_matches"` |
| `yara.matches[].source` | string | `""` for a raw file, `"outer.zip::inner.zip::item.ext"` when the match came from an archive member |
| `yara.archive_scan` | object\|null | populated only when the upload is an archive |
| `yara.archive_scan.nested_archives` | int | count of nested containers discovered |
| `yara.archive_scan.max_depth` | int | deepest nesting level reached (0 = flat zip) |
| `phase2.verdict.risk_level` | `"low"\|"medium"\|"high"` | agent's risk call |
| `phase2.skipped` | bool | true if Phase 2 didn't run |
| `phase2.skip_reason` | string\|null | e.g. `"no_api_key"`, `"agent_all_failed"`, `"archive_encrypted"` |

### 3.4 Error responses

| Status | Body | Meaning |
|---|---|---|
| `413` | `{"detail": "..."}` | exceeds `MAX_UPLOAD_MB` (default 1024) |
| `415` | `{"detail": "..."}` | extension not in allowlist (only when backend restricted) |
| `429` | `{"detail": "..."}` | per-IP hourly cap (default 10/hr) |
| `503` | `{"detail": "..."}` | `MAX_CONCURRENT_SCANS` full |
| `400` | `{"detail": "..."}` | malformed request / missing file |
| `500` | `{"detail": "..."}` | internal error |

Assume `detail` may be verbose or missing — show user-friendly copy, log the raw detail to console for debugging.

---

## 4. Routing and page structure

### 4.1 Page file

Create `src/pages/virus-scanner.js`:

```jsx
import * as React from "react";
import Header from "../components/Landing/Header";
import Footer from "../components/Landing/Footer";
import VirusScanner from "../components/VirusScanner";
import * as containerStyles from "../styles/global.module.css";
import { SEO } from "../components/seo";

const VirusScannerPage = () => (
  <>
    <div className={containerStyles.header_div}>
      <Header white={true} />
    </div>
    <VirusScanner />
    <Footer />
  </>
);

export default VirusScannerPage;

export const Head = () => (
  <SEO
    title="Free Online Virus Scanner - Arithmiks"
    description="Scan any file with ClamAV, YARA, and AI-assisted analysis. Files are processed in memory and deleted after each scan."
    pathname="/virus-scanner"
    breadcrumbItems={[
      { name: "Home", pathname: "/" },
      { name: "Virus Scanner", pathname: "/virus-scanner" },
    ]}
  />
);
```

Follow the existing convention: page is `.js`, uses shared `Header`/`Footer`, adds `SEO`. Components are `.jsx`.

### 4.2 Component folder

Create `src/components/VirusScanner/`:

```
src/components/VirusScanner/
├── index.jsx                 # top-level orchestrator component
├── UploadDropzone.jsx        # drag-drop + file picker + validation
├── ScanProgress.jsx          # determinate upload bar + scanning spinner
├── ResultBanner.jsx          # CLEAN / SUSPICIOUS / INFECTED (color + heading)
├── ResultPhase1.jsx          # ClamAV card
├── ResultYara.jsx            # YARA matches + archive tree
├── ResultPhase2.jsx          # Claude verdict card
├── ErrorState.jsx            # friendly error UI
├── __fixtures__/             # JSON response fixtures for UI states
│   ├── clean.json
│   ├── infected-clamav.json
│   ├── infected-yara.json
│   ├── infected-yara-archive.json
│   ├── suspicious-escalated.json
│   └── phase2-skipped.json
└── styles.js                 # styled-components exports (shared)
```

Add a hook at `src/hooks/useScanUpload.js` and a helper at `src/utils/scanFormat.js`.

---

## 5. State machine

```
                 file drop / pick
        ┌────────────────────────────┐
        ▼                            │
      IDLE ────────────▶ VALIDATING ─┘
                            │
                   pass     │   fail (size/empty)
                            ▼
                       UPLOADING ◀── cancel ───┐
                            │                  │
                       100% │                  │
                            ▼                  │
                        SCANNING ──── cancel ──┘
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
      RESULT_CLEAN   RESULT_SUSPICIOUS   RESULT_INFECTED
                            │
                            ▼
                          ERROR ───► IDLE (retry)
```

Represent this with a `status` string + a `result` object + an `error` object. `useReducer` is cleaner than multiple `useState`s:

```jsx
const initial = { status: "idle", file: null, progress: 0, result: null, error: null };

function reducer(state, action) {
  switch (action.type) {
    case "PICK":        return { ...initial, status: "validating", file: action.file };
    case "VALIDATE_OK": return { ...state, status: "uploading", progress: 0 };
    case "VALIDATE_ERR":return { ...state, status: "error", error: action.error };
    case "PROGRESS":    return { ...state, progress: action.progress };
    case "SCANNING":    return { ...state, status: "scanning", progress: 100 };
    case "RESULT":      return { ...state, status: "result", result: action.result };
    case "ERROR":       return { ...state, status: "error", error: action.error };
    case "RESET":       return initial;
    default:            return state;
  }
}
```

---

## 6. Upload hook — `useScanUpload`

**Use `XMLHttpRequest`, not `fetch`.** `fetch()` still has no reliable cross-browser upload progress, and we need a real progress bar for 1 GB files.

```js
// src/hooks/useScanUpload.js
import { useCallback, useRef } from "react";

export function useScanUpload({ onProgress, onScanning, onResult, onError }) {
  const xhrRef = useRef(null);

  const upload = useCallback((file) => {
    const url = `${process.env.GATSBY_SCAN_API_URL}/api/v1/scan`;
    const xhr = new XMLHttpRequest();
    xhrRef.current = xhr;

    xhr.open("POST", url, true);
    xhr.responseType = "json";
    xhr.timeout = 10 * 60 * 1000;  // 10 min hard ceiling

    xhr.upload.onprogress = (e) => {
      if (!e.lengthComputable) return;
      const pct = Math.round((e.loaded / e.total) * 100);
      onProgress?.(pct);
      if (pct === 100) onScanning?.();
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        onResult?.(xhr.response);
      } else {
        onError?.({ code: xhr.status, body: xhr.response });
      }
    };
    xhr.onerror = () => onError?.({ code: 0, body: null, network: true });
    xhr.ontimeout = () => onError?.({ code: 0, body: null, timeout: true });

    const fd = new FormData();
    fd.append("file", file);
    xhr.send(fd);
  }, [onProgress, onScanning, onResult, onError]);

  const abort = useCallback(() => {
    xhrRef.current?.abort();
    xhrRef.current = null;
  }, []);

  return { upload, abort };
}
```

**Why this shape:**
- `onScanning` fires when upload hits 100% — flip the UI from progress bar to scanning spinner because the server then takes seconds-to-minutes.
- `abort()` calls `xhr.abort()` which actually cancels the in-flight request.
- `responseType: "json"` spares you manual `JSON.parse`.

---

## 7. Client-side validation

Mirror the backend's guards so users get instant feedback:

```js
// src/utils/scanFormat.js
export const MAX_UPLOAD_MB = 1024;      // must match backend MAX_UPLOAD_MB

export function validateFile(file) {
  if (!file) return { ok: false, error: "NO_FILE" };
  const sizeMb = file.size / (1024 * 1024);
  if (sizeMb > MAX_UPLOAD_MB) return { ok: false, error: "TOO_LARGE" };
  if (file.size === 0) return { ok: false, error: "EMPTY" };
  return { ok: true };
}
```

Do **not** duplicate the extension allowlist on the client — backend defaults to `*` and only restricts when explicitly configured. Let the backend return 415 for the rare restricted case and render the error.

---

## 8. Verdict derivation

The API returns three engines' opinions. The UI needs a single top-line verdict:

```js
// src/utils/scanFormat.js
export function deriveVerdict(result) {
  const p1 = result?.phase1 || {};
  const yara = result?.yara || {};
  const p2Risk = result?.phase2?.verdict?.risk_level || "low";

  if (p1.infected) return "infected";
  if (yara.severity === "high") return "infected";
  if (p2Risk === "high")        return "infected";
  if (yara.severity === "medium" || p2Risk === "medium") return "suspicious";
  return "clean";
}
```

Use this to drive the color + heading of `ResultBanner`.

---

## 9. Component contracts

### 9.1 `UploadDropzone`

- Drag-drop zone (HTML5 drag events) + hidden `<input type="file">` triggered by click or Enter/Space key.
- Visual states: idle / drag-over / invalid-drop.
- Fires `onPick(file)` with the single selected file. Multi-file upload is out of scope — show an error if user drops multiple.
- Accept attribute: `"*/*"`.

Accessibility:
```jsx
<div
  role="button"
  tabIndex={0}
  aria-label="Upload a file to scan"
  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && inputRef.current.click()}
  onClick={() => inputRef.current.click()}
  onDragOver={(e) => e.preventDefault()}
  onDrop={handleDrop}
>
```

### 9.2 `ScanProgress`

- Shows determinate bar `0–100%` while `status === "uploading"`.
- Shows indeterminate spinner + "Analyzing file…" while `status === "scanning"`.
- Both states expose a **Cancel** button that calls `abort`.
- `role="progressbar"`, `aria-valuenow={progress}`, `aria-valuemin={0}`, `aria-valuemax={100}`.

### 9.3 `ResultBanner`

| Verdict | Color | Icon | Heading |
|---|---|---|---|
| clean | green | check | "No threats detected" |
| suspicious | amber | alert | "Suspicious behaviors found" |
| infected | red | warning | "Threat detected" |

- `role="status"` so screen readers announce the outcome.

### 9.4 `ResultPhase1` (ClamAV card)

- Shows `infected: true/false`, threat name if any, raw exit code as a muted detail.
- If skipped, collapse by default with "Not run" badge.

### 9.5 `ResultYara`

- Top line: "X rules matched — severity: HIGH" (use `severity`, not `severity_base`).
- If `severity_escalated`, show a badge "Escalated from {severity_base}" with `correlation_reason` as a tooltip.
- Group matches by `namespace`; inside each group list rule name, tags, description.
- If `archive_scan` is non-null, render a second block:
  - Stats row: members scanned, nested archives, max depth.
  - For each match with non-empty `source`, render the path split on `::` as a breadcrumb: `outer.zip ▸ inner.zip ▸ item.ext`.

### 9.6 `ResultPhase2`

- If `skipped`, render a muted card: "AI analysis skipped — {skip_reason}".
- Else show `verdict.risk_level` (color-coded), `verdict.summary` (paragraph), `verdict.indicators` as a bullet list.
- Render `analysis` as a secondary sentence below the summary.
- If `risk_notes.length > 0`, render them as small print.

### 9.7 `ErrorState`

Map backend error codes to user copy. Always offer a "Try again" button that dispatches `RESET`.

| Input | User-facing message |
|---|---|
| `{code: 413}` | "File too large. Limit is 1 GB." |
| `{code: 415}` | "This file type isn't accepted." |
| `{code: 429}` | "You've hit the scan limit for this hour. Please wait and try again." |
| `{code: 503}` | "Scanner is busy. Please retry in a minute." |
| `{code: 400}` | "The request was invalid. Please pick a file and try again." |
| `{code: 500}` | "Something went wrong on our side." |
| `{code: 0, network: true}` | "Couldn't reach the scanner. Check your connection." |
| `{code: 0, timeout: true}` | "The scan took too long. Try a smaller file." |
| `{error: "TOO_LARGE"}` | same as 413 |
| `{error: "EMPTY"}` | "This file is empty." |

---

## 10. Styling notes

- Use `styled-components` to match the existing codebase. Put shared styles in `src/components/VirusScanner/styles.js` and re-export (`Card`, `Badge`, `Bar`, `Dropzone`).
- Reuse site tokens from `src/styles/` (colors, fonts, breakpoints). Don't hardcode hex values.
- Breakpoints: dropzone must be usable on mobile (tap opens native picker, no drag needed).
- Match the site's existing palette — scanner doesn't need a separate theme.

---

## 11. Accessibility checklist

- [ ] Dropzone is reachable by Tab and activatable with Enter/Space.
- [ ] Progress bar has `role="progressbar"` and correct `aria-valuenow`.
- [ ] Result banner uses `role="status"` so verdict is announced.
- [ ] Color is never the sole signal — icons + text carry the verdict too.
- [ ] Cancel button is reachable during upload and scan.
- [ ] Focus returns to the dropzone after a "Try again" reset.
- [ ] Error messages are in `aria-live="polite"` region.

---

## 12. Performance / UX tips

- Don't read the file client-side (no `FileReader`). Pass the `File` straight to `FormData` — the browser streams it.
- Don't compute a hash client-side; it blocks the main thread on large files and the backend doesn't need it.
- Keep the component tree flat during upload — avoid re-rendering the dropzone on every progress tick. Isolate progress state in `ScanProgress`, memoize with `React.memo` if needed.
- Throttle progress updates to every ~100ms if re-renders feel heavy.
- Show the filename and human-readable size the moment the user picks a file, before upload starts.
- On small files, upload finishes so fast you skip straight to "Scanning" — make sure both states are exercised in design QA.

---

## 13. Local test plan (Windows-safe)

**Do not author malware-like fixtures on the Windows host.** The scanner backend repo (`arithmiks-virus-scanner`) has a 16-scenario runbook that generates payloads inside Docker containers where Defender does not scan. Use that runbook as the source of truth for live end-to-end tests. For UI development, prefer **JSON response fixtures**.

### 13.1 Backend sanity
```bash
curl http://localhost:8080/docs
```
Expected: Swagger loads.

### 13.2 Live: CLEAN verdict
Pick any ordinary file from your disk (a screenshot, a small PDF, a `.txt`). Upload via the UI.
Expected: green banner, `phase1.infected: false`, `yara.match_count: 0`, `phase2.verdict.risk_level: "low"` (or `phase2.skipped` when no API key).

### 13.3 Live: Oversize upload (413)
Generate a 1.1 GB zero-filled file (zero bytes don't trip Defender):
```bash
# Git Bash / WSL
dd if=/dev/zero bs=1M count=1100 of=/tmp/big.bin
# PowerShell
fsutil file createnew C:\temp\big.bin 1153434000
```
Expected: error UI, "File too large. Limit is 1 GB."

### 13.4 Live: Rate limit (429)
Upload the same small clean file 11+ times in an hour with `RATE_LIMIT_PER_IP_PER_HOUR=10`. Expected: after the 10th, UI shows the rate-limit copy.

### 13.5 Live: Abort
Start uploading the 1.1 GB zero file from 13.3. Click Cancel mid-upload. Expected: UI returns to idle, network tab shows the request cancelled.

### 13.6 Live: Backend offline
`docker compose stop` the orchestrator, then upload. Expected: "Couldn't reach the scanner."

### 13.7 Live: Phase 2 skipped
Leave `ANTHROPIC_API_KEY` blank in backend `.env`, restart. Expected: `phase2.skipped: true`, `skip_reason: "no_api_key"`. UI shows the muted "AI analysis skipped" card.

### 13.8 Fixture-driven: INFECTED / SUSPICIOUS / archive states
The backend team will drop JSON response fixtures at `src/components/VirusScanner/__fixtures__/` for every interesting state:

- `clean.json`
- `infected-clamav.json`
- `infected-yara.json`
- `infected-yara-archive.json`  ← includes `archive_scan` with nested paths
- `suspicious-escalated.json`   ← `severity_escalated: true`, `correlation_reason`
- `phase2-skipped.json`

Wire a dev-only query-string flag so the UI renders from a fixture instead of hitting the network:

```js
// src/components/VirusScanner/index.jsx (dev-only branch)
const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
const mock = params.get("mock");
if (process.env.NODE_ENV !== "production" && mock) {
  const fixture = require(`./__fixtures__/${mock}.json`);
  // dispatch RESULT with fixture instead of calling useScanUpload
}
```

Then visit `/virus-scanner?mock=infected-yara-archive` etc. and verify each state renders correctly. This is the **primary** way to develop and QA the UI on Windows — it requires no suspicious files on disk.

### 13.9 Getting the fixtures
Ask the backend team to run the scanner-repo runbook scenarios and save the JSON responses. The scanner repo's README documents the full runbook. Each scenario's response becomes one fixture here.

---

## 14. Acceptance criteria / Definition of Done

Before merging:

- [ ] `/virus-scanner` page renders with site header + footer + SEO.
- [ ] Dropzone accepts drag-drop and click-to-pick.
- [ ] Client-side validates empty and oversize files before uploading.
- [ ] Progress bar shows real `%` during upload, transitions to spinner when server takes over.
- [ ] Cancel aborts the in-flight request.
- [ ] All three phase cards render for a successful scan, including the archive tree when applicable.
- [ ] Every fixture in `__fixtures__/` renders correctly via `?mock=<name>`.
- [ ] All live scenarios in §13.2–13.7 produce the correct UI state.
- [ ] All error mappings in §9.7 have been exercised.
- [ ] Keyboard-only use is possible end-to-end (no mouse).
- [ ] Lighthouse accessibility score for the page ≥ 95.
- [ ] Mobile layout (360 px width) is usable — dropzone collapses gracefully, result cards stack.
- [ ] No console errors, no unhandled promise rejections.
- [ ] `GATSBY_SCAN_API_URL` is the only env coupling — swapping the value points the UI at staging/prod without code changes.

---

## 15. What's intentionally **out** of v1

- Accounts / scan history.
- Scan result permalinks.
- Multi-file / batch upload.
- PDF or email report export.
- Turnstile / CAPTCHA widget (backend will require it in prod — add a ticket before launch).
- Async scan with polling (`GET /api/v1/scan/{job_id}`) — the current endpoint is synchronous. Sync is fine for typical files; revisit if p95 scan time exceeds 60 s.

---

## 16. Open questions for the team

1. **Design assets** — is there a Figma for the dropzone, progress, and result states, or is FE designing in-flow?
2. **Copy review** — the "Threat detected" messaging should be reviewed by marketing before launch.
3. **Privacy disclosure** — add a one-liner "Your file is scanned in memory and deleted immediately." Do we need a longer privacy modal?
4. **Analytics** — do we send `scan_submitted` / `scan_completed` / `scan_result=<verdict>` events to `gatsby-plugin-google-gtag`? Confirm with analytics owner.
5. **Mobile large uploads** — do we gate uploads > 200 MB on mobile or let users try?

---

## 17. Handoff to backend (future)

When backend is about to deploy, FE needs:
- Production `GATSBY_SCAN_API_URL` value.
- Turnstile site key (public) — `GATSBY_TURNSTILE_SITE_KEY`.
- Confirmation that prod CORS allowlists `https://arithmiks.com` and any preview domains.
- Any new required headers / form fields (e.g. Turnstile token field name).
- JSON fixtures regenerated from the scanner-repo runbook, committed to `src/components/VirusScanner/__fixtures__/`.

Update this doc with the diff when those land.

---

## Appendix A. If Defender blocks files in this repo

If Windows Defender quarantines anything in this repo during dev (e.g. a JSON fixture with suspicious-looking indicator strings), add an exclusion for the repo folder:

1. Windows Security → Virus & threat protection → Manage settings → Exclusions → Add an exclusion → Folder.
2. Add `C:\Users\<you>\Desktop\arithmiks-website`.

This is safe for a dev machine but must **not** be done on a production host.
