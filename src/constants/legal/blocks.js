// Building blocks for legal page content. A section's blocks are
// { type: "p" | "note", text } or { type: "ul", items: [{ lead?, text }] }.

export const p = (text) => ({ type: "p", text });
export const note = (text) => ({ type: "note", text });

/** Bullet list; an item given as [lead, text] renders its lead in bold. */
export const list = (...items) => ({
  type: "ul",
  items: items.map((item) => (Array.isArray(item) ? { lead: item[0], text: item[1] } : { text: item })),
});

/** Adds the zero-padded "01", "02"… numbers shown in the contents rail and headings. */
export const numberSections = (sections) =>
  sections.map((section, index) => ({ ...section, number: String(index + 1).padStart(2, "0") }));

export const OFFICE_ADDRESS = "DHA Rehbar, Lahore, Punjab, Pakistan";
export const LEGAL_EMAIL = "services@arithmiks.com";
