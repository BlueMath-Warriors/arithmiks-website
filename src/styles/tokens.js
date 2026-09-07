// Single source for the new design's palette and shell width, so every new
// homepage component references the same values instead of re-declaring them.
export const colors = {
  primary: "#1355FF",
  primaryHover: "#0B3AD1",
  dark: "#070B18",
  text: "#0A0F1F",
  textMuted: "#3A4256",
  textFaint: "#5C6478",
  border: "#E4E8F0",
  surface: "#F5F7FB",
};

export const shellMaxWidth = "calc(1500px + 2 * clamp(18px, 6.25vw, 120px))";
export const shellPadding = "clamp(18px, 6.25vw, 120px)";

// Matches the font-family reset in global.module.css — inherited by default,
// only needed explicitly inside a portal or other element outside that cascade.
export const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
