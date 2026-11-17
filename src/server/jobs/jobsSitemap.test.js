import { describe, expect, it } from "vitest";
import { buildJobsSitemapXml } from "./jobsSitemap";

const SITE_URL = "https://arithmiks.com";

describe("buildJobsSitemapXml", () => {
  it("lists every job at its careers URL with its posted date", () => {
    const xml = buildJobsSitemapXml(
      [
        { slug: "technical-project-manager", datePosted: "2026-06-22" },
        { slug: "senior-ai-full-stack-developer", datePosted: "2026-06-18" },
      ],
      SITE_URL
    );

    expect(xml).toContain(
      "<url><loc>https://arithmiks.com/careers/jobs/technical-project-manager</loc><lastmod>2026-06-22</lastmod></url>"
    );
    expect(xml).toContain(
      "<url><loc>https://arithmiks.com/careers/jobs/senior-ai-full-stack-developer</loc><lastmod>2026-06-18</lastmod></url>"
    );
  });

  it("is a well-formed urlset in the sitemap namespace", () => {
    const xml = buildJobsSitemapXml([{ slug: "a", datePosted: "2026-01-01" }], SITE_URL);

    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(xml.trimEnd().endsWith("</urlset>")).toBe(true);
  });

  it("produces a valid empty urlset when there are no jobs", () => {
    const xml = buildJobsSitemapXml([], SITE_URL);

    expect(xml).toContain("<urlset");
    expect(xml).not.toContain("<url>");
  });

  it("escapes characters that would break the XML", () => {
    const xml = buildJobsSitemapXml([{ slug: "a", datePosted: "2026-01-01" }], "https://example.com/?a=1&b=<2>");

    expect(xml).toContain("https://example.com/?a=1&amp;b=&lt;2&gt;/careers/jobs/a");
    expect(xml).not.toContain("&b=");
  });
});
