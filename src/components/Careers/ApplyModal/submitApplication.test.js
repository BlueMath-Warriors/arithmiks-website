import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SUBMIT_RESULT, submitApplication } from "./submitApplication";

const API_URL = "https://abacus.example.test";

const baseApplication = () => ({
  apiUrl: API_URL,
  jobTitle: "Senior AI Full Stack Developer",
  fullName: "Test Candidate",
  email: "test@example.com",
  phone: "+92 300 1234567",
  resume: new Blob(["%PDF-1.4"], { type: "application/pdf" }),
  coverLetter: "",
  links: [],
  nickname: "",
});

const jsonResponse = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

let fetchMock;

beforeEach(() => {
  fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("submitApplication request", () => {
  it("posts multipart form data to the public applications endpoint without custom headers or credentials", async () => {
    fetchMock.mockResolvedValue(new Response(null, { status: 201 }));

    await submitApplication({ ...baseApplication(), apiUrl: `${API_URL}/` });

    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe(`${API_URL}/api/public/job-applications`);
    expect(options.method).toBe("POST");
    expect(options.body).toBeInstanceOf(FormData);
    expect(options.headers).toBeUndefined();
    expect(options.credentials).toBe("omit");
  });

  it("sends every field under the names Abacus expects, with the honeypot empty", async () => {
    fetchMock.mockResolvedValue(new Response(null, { status: 201 }));

    await submitApplication({
      ...baseApplication(),
      coverLetter: "Hello",
      links: ["https://a.example", "https://b.example"],
    });

    const body = fetchMock.mock.calls[0][1].body;
    expect(body.get("job_title")).toBe("Senior AI Full Stack Developer");
    expect(body.get("full_name")).toBe("Test Candidate");
    expect(body.get("email")).toBe("test@example.com");
    expect(body.get("phone")).toBe("+92 300 1234567");
    expect(body.get("resume")).toBeInstanceOf(Blob);
    expect(body.get("cover_letter")).toBe("Hello");
    expect(body.getAll("links")).toEqual(["https://a.example", "https://b.example"]);
    expect(body.get("nickname")).toBe("");
  });

  it("omits cover_letter and links when the candidate left them blank", async () => {
    fetchMock.mockResolvedValue(new Response(null, { status: 201 }));

    await submitApplication(baseApplication());

    const body = fetchMock.mock.calls[0][1].body;
    expect(body.has("cover_letter")).toBe(false);
    expect(body.has("links")).toBe(false);
  });
});

describe("submitApplication results", () => {
  it("reports success on 201", async () => {
    fetchMock.mockResolvedValue(new Response(null, { status: 201 }));
    expect(await submitApplication(baseApplication())).toEqual({ status: SUBMIT_RESULT.SUCCESS });
  });

  it("returns Abacus's per-field messages on 422", async () => {
    const fields = { email: "Enter a valid email", resume: "Resume must be 5 MB or smaller" };
    fetchMock.mockResolvedValue(jsonResponse(422, { error: { code: "invalid", message: "Bad input", fields } }));

    expect(await submitApplication(baseApplication())).toEqual({ status: SUBMIT_RESULT.INVALID, fields });
  });

  it("treats a 422 without a field map as a generic failure", async () => {
    fetchMock.mockResolvedValue(jsonResponse(422, { error: { code: "invalid", message: "Bad input" } }));

    expect(await submitApplication(baseApplication())).toEqual({ status: SUBMIT_RESULT.FAILED });
  });

  it("reports rate limiting on 429 even when the body is not JSON", async () => {
    fetchMock.mockResolvedValue(new Response("slow down", { status: 429 }));

    expect(await submitApplication(baseApplication())).toEqual({ status: SUBMIT_RESULT.RATE_LIMITED });
  });

  it("reports a refused origin on 403 origin_not_allowed and logs the setup problem for developers", async () => {
    fetchMock.mockResolvedValue(
      jsonResponse(403, { error: { code: "origin_not_allowed", message: "This page may not submit applications" } }),
    );

    expect(await submitApplication(baseApplication())).toEqual({ status: SUBMIT_RESULT.ORIGIN_NOT_ALLOWED });
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining("ABACUS_CAREERS_ORIGINS"));
  });

  it("treats any other 403 as a generic failure", async () => {
    fetchMock.mockResolvedValue(jsonResponse(403, { error: { code: "forbidden", message: "No" } }));

    expect(await submitApplication(baseApplication())).toEqual({ status: SUBMIT_RESULT.FAILED });
  });

  it("treats a server error as a generic failure", async () => {
    fetchMock.mockResolvedValue(new Response("Bad gateway", { status: 502 }));

    expect(await submitApplication(baseApplication())).toEqual({ status: SUBMIT_RESULT.FAILED });
  });

  it("reports a generic failure, instead of throwing, when the network request fails", async () => {
    fetchMock.mockRejectedValue(new TypeError("Failed to fetch"));

    expect(await submitApplication(baseApplication())).toEqual({ status: SUBMIT_RESULT.FAILED });
  });

  it("aborts the request and reports a failure when Abacus does not answer in time", async () => {
    vi.useFakeTimers();
    fetchMock.mockImplementation(
      (_url, { signal }) =>
        new Promise((_resolve, reject) => {
          signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")));
        }),
    );

    const pending = submitApplication(baseApplication());
    await vi.advanceTimersByTimeAsync(60_000);

    expect(await pending).toEqual({ status: SUBMIT_RESULT.FAILED });
  });

  it("fails without sending anything when the API URL is not configured", async () => {
    expect(await submitApplication({ ...baseApplication(), apiUrl: "" })).toEqual({
      status: SUBMIT_RESULT.FAILED,
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
