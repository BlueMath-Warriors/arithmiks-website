import { describe, expect, it } from "vitest";
import { jobsPageCacheHeaders, uncachedHeaders } from "./jobsCacheHeaders";

const MAX_ACCEPTABLE_STALENESS_SECONDS = 60;

describe("jobsPageCacheHeaders", () => {
  it("lets Netlify's CDN cache the page durably", () => {
    const cdnControl = jobsPageCacheHeaders()["Netlify-CDN-Cache-Control"];

    expect(cdnControl).toMatch(/\bpublic\b/);
    expect(cdnControl).toMatch(/\bdurable\b/);
  });

  it("keeps a page fresh for only a short time, since an edit in Contentful is not pushed", () => {
    const cdnControl = jobsPageCacheHeaders()["Netlify-CDN-Cache-Control"];
    const seconds = Number(/\bs-maxage=(\d+)/.exec(cdnControl)?.[1]);

    expect(seconds).toBeGreaterThan(0);
    expect(seconds).toBeLessThanOrEqual(MAX_ACCEPTABLE_STALENESS_SECONDS);
  });

  it("never serves a stale page while revalidating, so a change cannot linger past the window", () => {
    expect(jobsPageCacheHeaders()["Netlify-CDN-Cache-Control"]).not.toMatch(/stale-while-revalidate/);
  });

  it("makes browsers revalidate instead of holding a stale copy", () => {
    expect(jobsPageCacheHeaders()["Cache-Control"]).toBe("public, max-age=0, must-revalidate");
  });
});

describe("uncachedHeaders", () => {
  it("forbids storing the response anywhere and sets no CDN header", () => {
    expect(uncachedHeaders()).toEqual({ "Cache-Control": "no-store" });
  });
});
