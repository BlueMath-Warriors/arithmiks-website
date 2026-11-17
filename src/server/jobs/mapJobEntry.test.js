import { describe, expect, it } from "vitest";
import { DEFAULT_ABOUT_US } from "../../constants/jobs";
import { mapJobEntry } from "./mapJobEntry";

const completeFields = () => ({
  internalName: "TPM - Lahore",
  slug: "technical-project-manager",
  title: "Technical Project Manager",
  department: "Engineering",
  location: "Lahore",
  employmentType: "Full-time",
  summary: "Keep client engagements scoped and on schedule.",
  datePosted: "2026-06-22",
  industry: "IT Services",
  salary: "Market Competitive",
  workExperience: "4+ years",
  stateprovince: "Punjab",
  country: "Pakistan",
  zippostalCode: "54000",
  aboutUs: "A custom about paragraph.",
  jobDescription: "First paragraph.\nSecond paragraph.",
  requirements: "4+ years managing delivery.\nClear written communication.",
});

const entryWith = (overrides = {}) => ({
  sys: { id: "entry1" },
  fields: { ...completeFields(), ...overrides },
});

describe("mapJobEntry with a complete entry", () => {
  it("maps every field onto the Job shape the careers UI renders", () => {
    const { job, problems } = mapJobEntry(entryWith());

    expect(problems).toEqual([]);
    expect(job).toEqual({
      slug: "technical-project-manager",
      title: "Technical Project Manager",
      department: "Engineering",
      location: "Lahore",
      employmentType: "Full-time",
      summary: "Keep client engagements scoped and on schedule.",
      datePosted: "2026-06-22",
      aboutUs: "A custom about paragraph.",
      jobInfo: {
        industry: "IT Services",
        salary: "Market Competitive",
        workExperience: "4+ years",
        stateProvince: "Punjab",
        country: "Pakistan",
        zipCode: "54000",
      },
      description: ["First paragraph.", "Second paragraph."],
      requirements: ["4+ years managing delivery.", "Clear written communication."],
    });
  });

  it("falls back to the shared company paragraph when About us is empty or blank", () => {
    expect(mapJobEntry(entryWith({ aboutUs: undefined })).job.aboutUs).toBe(DEFAULT_ABOUT_US);
    expect(mapJobEntry(entryWith({ aboutUs: "   " })).job.aboutUs).toBe(DEFAULT_ABOUT_US);
  });

  it("keeps only the date part of a date-and-time value", () => {
    expect(mapJobEntry(entryWith({ datePosted: "2026-06-22T00:00+05:00" })).job.datePosted).toBe("2026-06-22");
  });

  it("splits paragraphs on any line break and drops blank lines and padding", () => {
    const { job } = mapJobEntry(entryWith({ jobDescription: "  One  \r\n\r\n\n Two\n   \nThree  " }));

    expect(job.description).toEqual(["One", "Two", "Three"]);
  });

  it("trims whitespace around single-line values", () => {
    expect(mapJobEntry(entryWith({ title: "  Padded Title  " })).job.title).toBe("Padded Title");
  });
});

describe("mapJobEntry with an unusable entry", () => {
  it.each([
    ["slug"],
    ["title"],
    ["department"],
    ["location"],
    ["employmentType"],
    ["summary"],
    ["industry"],
    ["salary"],
    ["workExperience"],
    ["stateprovince"],
    ["country"],
    ["zippostalCode"],
    ["jobDescription"],
    ["requirements"],
  ])("rejects an entry whose %s is missing, naming the field", (fieldId) => {
    const { job, problems } = mapJobEntry(entryWith({ [fieldId]: undefined }));

    expect(job).toBeNull();
    expect(problems.join(" ")).toContain(`"${fieldId}"`);
  });

  it.each([["Has Capitals"], ["has space"], ["under_score"], ["-leading"], ["trailing-"], ["double--hyphen"], ["../etc"]])(
    "rejects the slug %j so it can never reach a URL or a query",
    (slug) => {
      const { job, problems } = mapJobEntry(entryWith({ slug }));

      expect(job).toBeNull();
      expect(problems.join(" ")).toContain("slug");
    }
  );

  it.each([[undefined], ["not-a-date"], ["22/06/2026"], [20260622]])("rejects the date %j", (datePosted) => {
    const { job, problems } = mapJobEntry(entryWith({ datePosted }));

    expect(job).toBeNull();
    expect(problems.join(" ")).toContain("datePosted");
  });

  it("rejects a description or requirements made only of blank lines", () => {
    expect(mapJobEntry(entryWith({ jobDescription: "\n  \n" })).job).toBeNull();
    expect(mapJobEntry(entryWith({ requirements: "\n  \n" })).job).toBeNull();
  });

  it("reports every problem at once instead of only the first", () => {
    const { problems } = mapJobEntry(entryWith({ title: undefined, country: undefined }));

    expect(problems).toHaveLength(2);
  });

  it("does not throw on an entry without fields", () => {
    expect(mapJobEntry({ sys: { id: "x" } }).job).toBeNull();
    expect(mapJobEntry(undefined).job).toBeNull();
  });

  it("ignores values that are not text", () => {
    expect(mapJobEntry(entryWith({ title: { en: "Locale object" } })).job).toBeNull();
  });
});
