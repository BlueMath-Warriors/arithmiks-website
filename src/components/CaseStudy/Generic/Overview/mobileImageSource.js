/**
 * Turns the mobile overview image into the srcSet/sizes pair of a
 * <picture><source>, so phones can be offered the uncropped image.
 *
 * Accepts a Gatsby image node (responsive srcSet) or a plain static path
 * (single candidate). Returns null for anything else, in which case the
 * overview keeps its single desktop image.
 *
 * @param {Object|string|null|undefined} image
 * @returns {{ srcSet: string, sizes: string | undefined } | null}
 */
export const getMobileImageSource = (image) => {
  if (typeof image === "string") {
    return image ? { srcSet: image, sizes: undefined } : null;
  }

  const fallback = image?.childImageSharp?.gatsbyImageData?.images?.fallback;

  if (!fallback?.srcSet) return null;

  return { srcSet: fallback.srcSet, sizes: fallback.sizes };
};
