import { APPLICATIONS_PATH } from "./applicationFields";

// A 5 MB resume over a slow mobile connection needs far longer than a JSON call.
const SUBMIT_TIMEOUT_MS = 45_000;
const HTTP_CREATED = 201;
const HTTP_FORBIDDEN = 403;
const HTTP_UNPROCESSABLE = 422;
const HTTP_TOO_MANY_REQUESTS = 429;
const ORIGIN_NOT_ALLOWED_CODE = "origin_not_allowed";

export const SUBMIT_RESULT = Object.freeze({
  SUCCESS: "success",
  INVALID: "invalid",
  RATE_LIMITED: "rate_limited",
  ORIGIN_NOT_ALLOWED: "origin_not_allowed",
  FAILED: "failed",
});

const buildBody = ({ jobTitle, fullName, email, phone, resume, coverLetter, links, nickname }) => {
  const body = new FormData();
  body.append("job_title", jobTitle);
  body.append("full_name", fullName);
  body.append("email", email);
  body.append("phone", phone);
  body.append("resume", resume);
  if (coverLetter) body.append("cover_letter", coverLetter);
  links.forEach((link) => body.append("links", link));
  // Abacus's honeypot: it stores nothing when this is filled in, which only a bot does.
  body.append("nickname", nickname);
  return body;
};

const readErrorBody = async (response) => {
  try {
    const { error } = await response.json();
    return error || {};
  } catch {
    // A proxy error page or an empty body: the status alone decides the result.
    return {};
  }
};

const interpretFailure = async (response) => {
  if (response.status === HTTP_TOO_MANY_REQUESTS) return { status: SUBMIT_RESULT.RATE_LIMITED };

  const error = await readErrorBody(response);
  if (response.status === HTTP_FORBIDDEN && error.code === ORIGIN_NOT_ALLOWED_CODE) {
    return { status: SUBMIT_RESULT.ORIGIN_NOT_ALLOWED };
  }
  if (response.status === HTTP_UNPROCESSABLE && error.fields && Object.keys(error.fields).length) {
    return { status: SUBMIT_RESULT.INVALID, fields: error.fields };
  }
  return { status: SUBMIT_RESULT.FAILED };
};

/**
 * Sends one application to Abacus. This is the only module that knows the API.
 *
 * The request carries no Content-Type, custom headers or credentials, so the
 * browser treats it as a "simple" CORS request and sends no preflight. The
 * caller must disable its submit button while this runs: Abacus does not
 * de-duplicate.
 *
 * @param {{ apiUrl: string, jobTitle: string, fullName: string, email: string,
 *   phone: string, resume: Blob, coverLetter: string, links: string[], nickname: string }} application
 * @returns {Promise<{ status: string, fields?: Record<string, string> }>} never rejects
 */
export const submitApplication = async ({ apiUrl, ...application }) => {
  if (!apiUrl) {
    console.error("Job application not sent: GATSBY_ABACUS_API_URL is not set for this build.");
    return { status: SUBMIT_RESULT.FAILED };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

  try {
    const response = await fetch(`${apiUrl.replace(/\/+$/, "")}${APPLICATIONS_PATH}`, {
      method: "POST",
      body: buildBody(application),
      credentials: "omit",
      signal: controller.signal,
    });
    if (response.status === HTTP_CREATED) return { status: SUBMIT_RESULT.SUCCESS };

    const failure = await interpretFailure(response);
    if (failure.status === SUBMIT_RESULT.ORIGIN_NOT_ALLOWED) {
      console.error(
        "Abacus refused this site's origin. Ask the Abacus team to add it to ABACUS_CAREERS_ORIGINS.",
      );
    }
    return failure;
  } catch (error) {
    // Offline, DNS failure, CORS rejection or the timeout above.
    console.error("Job application request failed", error);
    return { status: SUBMIT_RESULT.FAILED };
  } finally {
    clearTimeout(timeout);
  }
};
