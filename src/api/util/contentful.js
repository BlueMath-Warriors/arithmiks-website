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

export { verifyContentfulWebhook, fetchResolvedEntry, resolveLink, resolveAssetUrl };
