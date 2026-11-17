const DELIVERY_ORIGIN = "https://cdn.contentful.com";
const CONTENTFUL_ENVIRONMENT = "master";
const REQUEST_TIMEOUT_MS = 5_000;

export class ContentfulDeliveryError extends Error {
  /** @param {string} message @param {{ status?: number, cause?: unknown }} [details] */
  constructor(message, { status, cause } = {}) {
    super(message, { cause });
    this.name = "ContentfulDeliveryError";
    this.status = status;
  }
}

// Gatsby compiles server-rendered page code with `process.env` replaced by an
// empty object, inlining only the variables present at build time. Going
// through `globalThis` reads the real environment instead, so credentials stay
// a runtime setting (rotating the token needs no rebuild) and are never baked
// into the compiled bundle.
const runtimeEnv = () => globalThis.process.env;

const readCredentials = () => {
  const { CONTENTFUL_SPACE_ID: spaceId, CONTENTFUL_ACCESS_TOKEN: accessToken } = runtimeEnv();
  if (!spaceId || !accessToken) {
    throw new ContentfulDeliveryError("CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN must both be set.");
  }
  return { spaceId, accessToken };
};

/**
 * Reads published entries of one content type from Contentful's Content
 * Delivery API. Server-only: the access token must never reach the browser.
 *
 * `query` is encoded with URLSearchParams, so values can never alter the
 * structure of the request. Unresolvable links come back in `errors` rather
 * than failing the call, which is why that array is returned to the caller.
 *
 * @param {{ contentType: string, query?: Record<string, string | number> }} request
 * @returns {Promise<{ items: object[], includes: object, errors: object[] }>}
 * @throws {ContentfulDeliveryError} on missing config, network failure, timeout,
 *   a non-2xx status, or a response that is not an entries collection.
 */
export const fetchEntries = async ({ contentType, query = {} }) => {
  const { spaceId, accessToken } = readCredentials();
  const params = new URLSearchParams({ content_type: contentType, ...query });
  const url = `${DELIVERY_ORIGIN}/spaces/${spaceId}/environments/${CONTENTFUL_ENVIRONMENT}/entries?${params}`;

  let response;
  try {
    response = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch (cause) {
    throw new ContentfulDeliveryError("Contentful request failed or timed out.", { cause });
  }

  if (!response.ok) {
    throw new ContentfulDeliveryError(`Contentful responded with status ${response.status}.`, {
      status: response.status,
    });
  }

  let body;
  try {
    body = await response.json();
  } catch (cause) {
    throw new ContentfulDeliveryError("Contentful returned a body that is not valid JSON.", { cause });
  }
  if (!Array.isArray(body?.items)) {
    throw new ContentfulDeliveryError("Contentful returned an unexpected response shape.");
  }

  return { items: body.items, includes: body.includes ?? {}, errors: body.errors ?? [] };
};
