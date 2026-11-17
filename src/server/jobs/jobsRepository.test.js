import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../contentful/deliveryClient.js", () => ({ fetchEntries: vi.fn() }));

import { fetchEntries } from "../contentful/deliveryClient.js";
import { JOB_CONTENT_TYPE_ID, getJobBySlug, listJobs } from "./jobsRepository";

const entry = (id, overrides = {}) => ({
  sys: { id },
  fields: {
    slug: `job-${id}`,
    title: `Job ${id}`,
    department: "Engineering",
    location: "Lahore",
    employmentType: "Full-time",
    summary: "A summary.",
    datePosted: "2026-06-22",
    industry: "IT Services",
    salary: "Market Competitive",
    workExperience: "4+ years",
    stateprovince: "Punjab",
    country: "Pakistan",
    zippostalCode: "54000",
    jobDescription: "Do the work.",
    requirements: "Bring the skills.",
    ...overrides,
  },
});

const respondWith = (...entries) => fetchEntries.mockResolvedValue({ items: entries, includes: {}, errors: [] });

beforeEach(() => {
  fetchEntries.mockReset();
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("listJobs", () => {
  it("asks Contentful for published Job entries, newest first, without resolving links", async () => {
    respondWith();

    await listJobs();

    expect(fetchEntries).toHaveBeenCalledWith({
      contentType: JOB_CONTENT_TYPE_ID,
      query: { order: "-fields.datePosted", limit: 100, include: 0 },
    });
  });

  it("returns the jobs in the order Contentful sent them", async () => {
    respondWith(entry("a"), entry("b"), entry("c"));

    const jobs = await listJobs();

    expect(jobs.map((job) => job.slug)).toEqual(["job-a", "job-b", "job-c"]);
  });

  it("returns an empty list when nothing is published", async () => {
    respondWith();

    expect(await listJobs()).toEqual([]);
  });

  it("skips an unusable entry, logs why, and keeps the rest", async () => {
    respondWith(entry("a"), entry("bad", { slug: "Not Valid" }), entry("c"));

    const jobs = await listJobs();

    expect(jobs.map((job) => job.slug)).toEqual(["job-a", "job-c"]);
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("bad"));
  });

  it("keeps the newest job when two share a slug and logs the older one", async () => {
    respondWith(entry("new", { slug: "same", title: "Newer" }), entry("old", { slug: "same", title: "Older" }));

    const jobs = await listJobs();

    expect(jobs).toHaveLength(1);
    expect(jobs[0].title).toBe("Newer");
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("old"));
  });

  it("lets a Contentful failure propagate so the caller can show an error state", async () => {
    fetchEntries.mockRejectedValue(new Error("boom"));

    await expect(listJobs()).rejects.toThrow("boom");
  });
});

describe("getJobBySlug", () => {
  it("returns the job with that slug", async () => {
    respondWith(entry("a"), entry("b"));

    const job = await getJobBySlug("job-b");

    expect(job.title).toBe("Job b");
  });

  it("returns null for a slug that is not published", async () => {
    respondWith(entry("a"));

    expect(await getJobBySlug("job-zzz")).toBeNull();
  });

  it.each([[undefined], [null], [42], [""], ["Has Capitals"], ["../secrets"], ["a b"], [["job-a"]]])(
    "returns null for the invalid slug %j without calling Contentful",
    async (slug) => {
      expect(await getJobBySlug(slug)).toBeNull();
      expect(fetchEntries).not.toHaveBeenCalled();
    }
  );

  it("lets a Contentful failure propagate", async () => {
    fetchEntries.mockRejectedValue(new Error("boom"));

    await expect(getJobBySlug("job-a")).rejects.toThrow("boom");
  });
});
