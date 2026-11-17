import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./jobsRepository.js", () => ({ listJobs: vi.fn(), getJobBySlug: vi.fn() }));

import { getJobBySlug, listJobs } from "./jobsRepository.js";
import { jobsPageCacheHeaders, uncachedHeaders } from "./jobsCacheHeaders";
import { getJobServerData, getJobsServerData } from "./jobsServerData";

const sampleJob = { slug: "technical-project-manager", title: "Technical Project Manager" };

beforeEach(() => {
  listJobs.mockReset();
  getJobBySlug.mockReset();
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("getJobsServerData", () => {
  it("passes the jobs to the page with the cacheable, tagged headers", async () => {
    listJobs.mockResolvedValue([sampleJob]);

    const result = await getJobsServerData();

    expect(result).toEqual({
      props: { jobs: [sampleJob], loadFailed: false },
      headers: jobsPageCacheHeaders(),
    });
  });

  it("passes an empty list through when nothing is published", async () => {
    listJobs.mockResolvedValue([]);

    const result = await getJobsServerData();

    expect(result.props).toEqual({ jobs: [], loadFailed: false });
    expect(result.status).toBeUndefined();
  });

  it("answers an uncached 503 with loadFailed when Contentful fails, and logs the cause", async () => {
    listJobs.mockRejectedValue(new Error("Contentful responded with status 429."));

    const result = await getJobsServerData();

    expect(result).toEqual({
      props: { jobs: [], loadFailed: true },
      status: 503,
      headers: uncachedHeaders(),
    });
    expect(console.error).toHaveBeenCalled();
  });

  it("never exposes the error message to the page", async () => {
    listJobs.mockRejectedValue(new Error("token abc123 rejected"));

    const result = await getJobsServerData();

    expect(JSON.stringify(result)).not.toContain("abc123");
  });
});

describe("getJobServerData", () => {
  it("passes the job to the page with the cacheable, tagged headers", async () => {
    getJobBySlug.mockResolvedValue(sampleJob);

    const result = await getJobServerData("technical-project-manager");

    expect(getJobBySlug).toHaveBeenCalledWith("technical-project-manager");
    expect(result).toEqual({
      props: { job: sampleJob, loadFailed: false },
      headers: jobsPageCacheHeaders(),
    });
  });

  it("answers 404 with no job for an unknown slug, still cacheable so a purge can fix it", async () => {
    getJobBySlug.mockResolvedValue(null);

    const result = await getJobServerData("no-such-job");

    expect(result).toEqual({
      props: { job: null, loadFailed: false },
      status: 404,
      headers: jobsPageCacheHeaders(),
    });
  });

  it("answers an uncached 503 with loadFailed when Contentful fails", async () => {
    getJobBySlug.mockRejectedValue(new Error("timed out"));

    const result = await getJobServerData("technical-project-manager");

    expect(result).toEqual({
      props: { job: null, loadFailed: true },
      status: 503,
      headers: uncachedHeaders(),
    });
    expect(console.error).toHaveBeenCalled();
  });

  it("hands the untrusted slug to the repository, which owns validating it", async () => {
    getJobBySlug.mockResolvedValue(null);

    await getJobServerData("../etc/passwd");

    expect(getJobBySlug).toHaveBeenCalledWith("../etc/passwd");
  });
});
