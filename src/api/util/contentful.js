/**
 * Confirms an incoming request genuinely came from our Contentful webhook,
 * via a shared secret Contentful sends as a custom header (configured on the
 * webhook itself, not guessable from the request alone).
 */
const verifyContentfulWebhook = (req) => {
  const secret = req.headers["x-webhook-secret"] || req.headers["X-Webhook-Secret"];
  return Boolean(secret) && secret === process.env.CONTENTFUL_WEBHOOK_SECRET;
};

/**
 * The published entry's id.
 *
 * Read from the `X-Contentful-CRN` header rather than the request body:
 * Contentful posts with its own vendor content type
 * (`application/vnd.contentful.management.v1+json`), which the default JSON
 * body parser ignores — so `req.body` can arrive empty. Headers are always
 * available, and the id is all we need since the full entry gets re-fetched
 * from the Delivery API anyway. Falls back to the body when it is parsed.
 *
 * CRN shape: crn:contentful:::content:spaces/<space>/environments/<env>/entries/<entryId>
 */
const getEntryId = (req) => {
  const crn = req.headers["x-contentful-crn"] || req.headers["X-Contentful-CRN"];
  const fromCrn = typeof crn === "string" ? crn.match(/\/entries\/([^/\s]+)/) : null;
  return fromCrn?.[1] || req.body?.sys?.id || null;
};

/**
 * Fetches the fully-resolved entry (with linked Author entry and image
 * assets expanded) from Contentful's Content Delivery API — the webhook
 * payload itself only contains unresolved reference links, so we re-fetch.
 */
const fetchResolvedEntry = async (entryId) => {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries/${entryId}?include=2`;

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Contentful API fetch failed (${response.status}): ${body}`);
  }

  return response.json();
};

/**
 * True for a `{ "en-US": value, "de-DE": value }` locale map, as opposed to a
 * link/asset object (which carries `sys`) or a plain value.
 */
const isLocaleMap = (value) =>
  value &&
  typeof value === "object" &&
  !Array.isArray(value) &&
  !value.sys &&
  Object.keys(value).length > 0 &&
  Object.keys(value).every((key) => /^[a-z]{2}(-[A-Za-z]{2,4})?$/.test(key));

/** Unwraps a locale map to the default locale (falling back to whatever exists). */
const unwrapLocale = (value, defaultLocale = "en-US") =>
  isLocaleMap(value) ? value[defaultLocale] ?? Object.values(value)[0] : value;

/**
 * Reads an entry field by any of its plausible ids.
 *
 * Contentful field *ids* are generated from the display name at creation time
 * and don't always match it (a field shown as "Subtitle" may be stored as
 * `shortDescription`, for example), and template-provisioned models vary.
 * Accepting a list of candidates keeps this working across those variations
 * instead of failing on an exact-name mismatch. Also tolerates both the
 * flattened shape the Delivery API returns and the locale-keyed shape.
 */
const readField = (fields, names, { asString = false } = {}) => {
  for (const name of names) {
    const value = unwrapLocale(fields?.[name]);
    if (value === undefined || value === null || value === "") continue;
    if (asString && typeof value !== "string") continue;
    return value;
  }
  return null;
};

/** Resolves a `{ sys: { type: "Link", ... } }` reference against the entry's `includes` block. */
const resolveLink = (link, includes) => {
  if (!link?.sys) return null;
  const pool = link.sys.linkType === "Asset" ? includes?.Asset : includes?.Entry;
  return pool?.find((item) => item.sys.id === link.sys.id) || null;
};

/** Contentful asset URLs are protocol-relative ("//images.ctfassets.net/..."). */
const resolveAssetUrl = (asset) => {
  const url = asset?.fields?.file?.url;
  if (!url) return null;
  return url.startsWith("//") ? `https:${url}` : url;
};

export {
  verifyContentfulWebhook,
  getEntryId,
  fetchResolvedEntry,
  readField,
  resolveLink,
  resolveAssetUrl,
};
