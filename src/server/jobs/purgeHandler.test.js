import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@netlify/cache", () => ({ purgeCache: vi.fn() }));

import { purgeCache } from "@netlify/cache";
import contentfulJobsPurgeHandler from "../../api/contentful-jobs-purge/index.js";
import { JOBS_CACHE_TAG } from "./jobsCacheHeaders";

const WEBHOOK_SECRET = "shared-secret";

const buildResponse = () => {
  const res = { statusCode: undefined, body: undefined };
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (payload) => {
    res.body = payload;
    return res;
  };
  return res;
};

const call = async ({ method = "POST", headers = { "x-webhook-secret": WEBHOOK_SECRET } } = {}) => {
  const res = buildResponse();
  await contentfulJobsPurgeHandler({ method, headers }, res);
  return res;
};

beforeEach(() => {
  vi.stubEnv("CONTENTFUL_WEBHOOK_SECRET", WEBHOOK_SECRET);
  vi.spyOn(console, "error").mockImplementation(() => {});
  purgeCache.mockReset();
  purgeCache.mockResolvedValue(undefined);
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("contentful-jobs-purge handler", () => {
  it("purges the jobs cache tag when the secret is valid", async () => {
    const res = await call();

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(purgeCache).toHaveBeenCalledWith({ tags: [JOBS_CACHE_TAG] });
  });

  it("rejects anything other than POST without purging", async () => {
    const res = await call({ method: "GET" });

    expect(res.statusCode).toBe(405);
    expect(purgeCache).not.toHaveBeenCalled();
  });

  it("rejects a wrong secret without purging", async () => {
    const res = await call({ headers: { "x-webhook-secret": "guess" } });

    expect(res.statusCode).toBe(401);
    expect(purgeCache).not.toHaveBeenCalled();
  });

  it("rejects a request with no secret header without purging", async () => {
    const res = await call({ headers: {} });

    expect(res.statusCode).toBe(401);
    expect(purgeCache).not.toHaveBeenCalled();
  });

  it("rejects every request when the server has no secret configured", async () => {
    vi.stubEnv("CONTENTFUL_WEBHOOK_SECRET", "");

    const res = await call({ headers: { "x-webhook-secret": "" } });

    expect(res.statusCode).toBe(401);
    expect(purgeCache).not.toHaveBeenCalled();
  });

  it("answers 500 and logs when the purge itself fails", async () => {
    purgeCache.mockRejectedValue(new Error("rate limited"));

    const res = await call();

    expect(res.statusCode).toBe(500);
    expect(res.body.success).toBe(false);
    expect(console.error).toHaveBeenCalled();
  });
});
