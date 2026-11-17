import { describe, expect, it } from "vitest";
import { JOBS_CACHE_TAG, jobsPageCacheHeaders, uncachedHeaders } from "./jobsCacheHeaders";

describe("jobsPageCacheHeaders", () => {
  it("lets Netlify's CDN cache the page, durably, with a stale window", () => {
    const cdnControl = jobsPageCacheHeaders()["Netlify-CDN-Cache-Control"];

    expect(cdnControl).toMatch(/\bpublic\b/);
    expect(cdnControl).toMatch(/\bdurable\b/);
    expect(cdnControl).toMatch(/\bs-maxage=\d+/);
    expect(cdnControl).toMatch(/\bstale-while-revalidate=\d+/);
  });

  it("tags the response so a purge can target it", () => {
    expect(jobsPageCacheHeaders()["Netlify-Cache-Tag"]).toBe(JOBS_CACHE_TAG);
  });

  it("makes browsers revalidate instead of holding a stale copy", () => {
    expect(jobsPageCacheHeaders()["Cache-Control"]).toBe("public, max-age=0, must-revalidate");
  });
});

describe("uncachedHeaders", () => {
  it("forbids storing the response anywhere and sets no CDN or tag header", () => {
    expect(uncachedHeaders()).toEqual({ "Cache-Control": "no-store" });
  });
});
