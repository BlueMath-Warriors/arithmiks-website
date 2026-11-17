import { describe, expect, it } from "vitest";
import {
  COVER_LETTER_MAX_LENGTH,
  FULL_NAME_MAX_LENGTH,
  LINK_MAX_LENGTH,
  MAX_LINKS,
  RESUME_MAX_BYTES,
} from "./applicationFields";
import { formatPhone, validateApplication, validateResume } from "./validation";

const validResume = { name: "cv.pdf", size: 1024 };
const validValues = {
  fullName: "Test Candidate",
  email: "test@example.com",
  phone: "+92 300 1234567",
  coverLetter: "",
  links: [""],
};

describe("validateApplication", () => {
  it("returns no errors for a complete application", () => {
    expect(validateApplication(validValues, validResume)).toEqual({});
  });

  it("requires a name", () => {
    expect(validateApplication({ ...validValues, fullName: "   " }, validResume)).toHaveProperty("full_name");
  });

  it("accepts a name of exactly the maximum length and rejects one character more", () => {
    const atLimit = { ...validValues, fullName: "a".repeat(FULL_NAME_MAX_LENGTH) };
    const overLimit = { ...validValues, fullName: "a".repeat(FULL_NAME_MAX_LENGTH + 1) };
    expect(validateApplication(atLimit, validResume)).toEqual({});
    expect(validateApplication(overLimit, validResume)).toHaveProperty("full_name");
  });

  it.each(["", "plainaddress", "a@b", "a b@example.com"])("rejects the email %j", (email) => {
    expect(validateApplication({ ...validValues, email }, validResume)).toHaveProperty("email");
  });

  it("rejects a missing phone number", () => {
    expect(validateApplication({ ...validValues, phone: "" }, validResume)).toHaveProperty("phone");
  });

  it.each([
    ["too short", "+92 12"],
    ["fewer than 7 digits", "+(--) 12 345"],
    ["longer than 20 characters", "+92 300 1234567 890123"],
    ["containing letters", "+92 300 CALL-ME"],
  ])("rejects a phone number that is %s", (_reason, phone) => {
    expect(validateApplication({ ...validValues, phone }, validResume)).toHaveProperty("phone");
  });

  it("accepts a phone number using every allowed punctuation character", () => {
    expect(validateApplication({ ...validValues, phone: "+1 (415) 555-0100" }, validResume)).toEqual({});
    expect(validateApplication({ ...validValues, phone: "415.555.0100" }, validResume)).toEqual({});
  });

  it("accepts a cover letter of exactly the maximum length and rejects one character more", () => {
    const atLimit = { ...validValues, coverLetter: "a".repeat(COVER_LETTER_MAX_LENGTH) };
    const overLimit = { ...validValues, coverLetter: "a".repeat(COVER_LETTER_MAX_LENGTH + 1) };
    expect(validateApplication(atLimit, validResume)).toEqual({});
    expect(validateApplication(overLimit, validResume)).toHaveProperty("cover_letter");
  });

  it("ignores blank link inputs", () => {
    expect(validateApplication({ ...validValues, links: ["", "  ", ""] }, validResume)).toEqual({});
  });

  it("accepts up to the maximum number of links and rejects more", () => {
    const link = (index) => `https://example.com/${index}`;
    const atLimit = { ...validValues, links: Array.from({ length: MAX_LINKS }, (_, i) => link(i)) };
    const overLimit = { ...validValues, links: Array.from({ length: MAX_LINKS + 1 }, (_, i) => link(i)) };
    expect(validateApplication(atLimit, validResume)).toEqual({});
    expect(validateApplication(overLimit, validResume)).toHaveProperty("links");
  });

  it.each(["example.com", "ftp://example.com", "javascript:alert(1)"])(
    "rejects the link %j because it does not start with http(s)://",
    (link) => {
      expect(validateApplication({ ...validValues, links: [link] }, validResume)).toHaveProperty("links");
    },
  );

  it("rejects a link longer than the maximum length", () => {
    const longLink = `https://example.com/${"a".repeat(LINK_MAX_LENGTH)}`;
    expect(validateApplication({ ...validValues, links: [longLink] }, validResume)).toHaveProperty("links");
  });

  it("reports every problem at once", () => {
    const errors = validateApplication(
      { fullName: "", email: "nope", phone: "", coverLetter: "", links: ["x"] },
      null,
    );
    expect(Object.keys(errors).sort()).toEqual(["email", "full_name", "links", "phone", "resume"]);
  });
});

describe("validateResume", () => {
  it("requires a file", () => {
    expect(validateResume(null)).not.toBe("");
  });

  it.each(["cv.pdf", "cv.doc", "cv.docx", "CV.PDF"])("accepts %s", (name) => {
    expect(validateResume({ name, size: 100 })).toBe("");
  });

  it.each(["cv.exe", "cv.png", "cv", "cv.pdf.exe"])("rejects %s by extension", (name) => {
    expect(validateResume({ name, size: 100 })).not.toBe("");
  });

  it("rejects an empty file", () => {
    expect(validateResume({ name: "cv.pdf", size: 0 })).not.toBe("");
  });

  it("accepts a file of exactly the maximum size and rejects one byte more", () => {
    expect(validateResume({ name: "cv.pdf", size: RESUME_MAX_BYTES })).toBe("");
    expect(validateResume({ name: "cv.pdf", size: RESUME_MAX_BYTES + 1 })).not.toBe("");
  });
});

describe("formatPhone", () => {
  it("joins the dial code and the trimmed number", () => {
    expect(formatPhone("+92", "  300 1234567 ")).toBe("+92 300 1234567");
  });

  it("returns an empty string when no number was typed, so the dial code alone is never sent", () => {
    expect(formatPhone("+92", "   ")).toBe("");
  });
});
