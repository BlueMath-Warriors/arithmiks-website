const KEY_FEATURE_PATH = /Key Features\//;
const KEY_FEATURE_WIDTHS = [800, 1400, 2400];

// Declared width of the full-size original: the real value only matters for
// picking a candidate, and anything above the last variant should get it.
const ORIGINAL_DECLARED_WIDTH = 3200;

// Upper bound of a carousel slide's rendered width (see KeyFeatures styles), so
// the browser never picks a variant narrower than the slide.
export const KEY_FEATURE_IMAGE_SIZES = "(min-width: 901px) 76vw, 100vw";

/**
 * srcset for a case-study key-feature screenshot. The static/ folder holds
 * `name.webp` plus pre-generated `name-800.webp`, `-1400` and `-2400` variants.
 * Returns undefined for any other image, which keeps using its plain `src`.
 *
 * @param {string} imagePath public path such as "/Go Key Features/goKeyFeature1.webp"
 * @returns {string | undefined}
 */
export const keyFeatureSrcSet = (imagePath) => {
  if (!KEY_FEATURE_PATH.test(imagePath) || !imagePath.endsWith(".webp")) return undefined;
  const stem = imagePath.slice(0, -".webp".length);
  const variants = KEY_FEATURE_WIDTHS.map((width) => `${encodeURI(`${stem}-${width}.webp`)} ${width}w`);
  return [...variants, `${encodeURI(imagePath)} ${ORIGINAL_DECLARED_WIDTH}w`].join(", ");
};
