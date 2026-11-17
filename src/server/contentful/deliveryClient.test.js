import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ContentfulDeliveryError, fetchEntries } from "./deliveryClient";

const jsonResponse = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

let fetchMock;

beforeEach(() => {
  fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
  vi.stubEnv("CONTENTFUL_SPACE_ID", "space123");
  vi.stubEnv("CONTENTFUL_ACCESS_TOKEN", "token-abc");
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe("fetchEntries request", () => {
  it("calls the Delivery API for the space with the content type and query, authenticated by bearer token", async () => {
    fetchMock.mockResolvedValue(jsonResponse(200, { items: [] }));

    await fetchEntries({ contentType: "pageJob", query: { limit: 100, order: "-fields.datePosted" } });

    const [url, options] = fetchMock.mock.calls[0];
    const parsed = new URL(url);
    expect(parsed.origin).toBe("https://cdn.contentful.com");
    expect(parsed.pathname).toBe("/spaces/space123/environments/master/entries");
    expect(parsed.searchParams.get("content_type")).toBe("pageJob");
    expect(parsed.searchParams.get("limit")).toBe("100");
    expect(parsed.searchParams.get("order")).toBe("-fields.datePosted");
    expect(options.headers.Authorization).toBe("Bearer token-abc");
    expect(url).not.toContain("token-abc");
  });

  it("encodes query values so they cannot add or alter parameters", async () => {
    fetchMock.mockResolvedValue(jsonResponse(200, { items: [] }));

    await fetchEntries({ contentType: "pageJob", query: { "fields.slug": "a&limit=1000#x" } });

    const parsed = new URL(fetchMock.mock.calls[0][0]);
    expect(parsed.searchParams.get("fields.slug")).toBe("a&limit=1000#x");
    expect(parsed.searchParams.get("limit")).toBeNull();
  });

  it("bounds the request with a timeout signal", async () => {
    fetchMock.mockResolvedValue(jsonResponse(200, { items: [] }));

    await fetchEntries({ contentType: "pageJob" });

    expect(fetchMock.mock.calls[0][1].signal).toBeInstanceOf(AbortSignal);
  });
});

describe("fetchEntries result", () => {
  it("returns items, includes and errors, defaulting the optional ones to empty", async () => {
    fetchMock.mockResolvedValueOnce(jsonResponse(200, { items: [{ sys: { id: "a" } }] }));
    expect(await fetchEntries({ contentType: "pageJob" })).toEqual({
      items: [{ sys: { id: "a" } }],
      includes: {},
      errors: [],
    });

    fetchMock.mockResolvedValueOnce(
      jsonResponse(200, { items: [], includes: { Asset: [] }, errors: [{ id: "notResolvable" }] })
    );
    expect(await fetchEntries({ contentType: "pageJob" })).toEqual({
      items: [],
      includes: { Asset: [] },
      errors: [{ id: "notResolvable" }],
    });
  });
});

describe("fetchEntries failures", () => {
  it("fails before any request when the space id or token is missing", async () => {
    vi.stubEnv("CONTENTFUL_ACCESS_TOKEN", "");

    await expect(fetchEntries({ contentType: "pageJob" })).rejects.toBeInstanceOf(ContentfulDeliveryError);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("reports the status of a non-2xx response without echoing the response body", async () => {
    fetchMock.mockResolvedValue(jsonResponse(401, { message: "secret detail" }));

    const error = await fetchEntries({ contentType: "pageJob" }).catch((caught) => caught);

    expect(error).toBeInstanceOf(ContentfulDeliveryError);
    expect(error.status).toBe(401);
    expect(error.message).not.toContain("secret detail");
  });

  it("wraps a network failure or timeout and keeps the original as the cause", async () => {
    const timeout = new DOMException("The operation timed out.", "TimeoutError");
    fetchMock.mockRejectedValue(timeout);

    const error = await fetchEntries({ contentType: "pageJob" }).catch((caught) => caught);

    expect(error).toBeInstanceOf(ContentfulDeliveryError);
    expect(error.cause).toBe(timeout);
  });

  it("rejects a body that is not JSON", async () => {
    fetchMock.mockResolvedValue(new Response("<html>gateway error</html>", { status: 200 }));

    await expect(fetchEntries({ contentType: "pageJob" })).rejects.toBeInstanceOf(ContentfulDeliveryError);
  });

  it("rejects JSON that is not an entries collection", async () => {
    fetchMock.mockResolvedValue(jsonResponse(200, { message: "ok" }));

    await expect(fetchEntries({ contentType: "pageJob" })).rejects.toBeInstanceOf(ContentfulDeliveryError);
  });
});
