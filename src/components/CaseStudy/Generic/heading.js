const HIGHLIGHT_LAST_WORDS = 1;

/**
 * Splits a section heading into plain and gradient-highlighted parts. A string
 * highlights its last word; pass `{ plain, highlight }` to choose the split.
 *
 * @param {string | { plain: string; highlight: string }} heading
 */
export const splitHeading = (heading) => {
  if (typeof heading !== "string") return heading;
  const words = heading.split(" ");
  const cut = Math.max(0, words.length - HIGHLIGHT_LAST_WORDS);
  return { plain: words.slice(0, cut).join(" "), highlight: words.slice(cut).join(" ") };
};
