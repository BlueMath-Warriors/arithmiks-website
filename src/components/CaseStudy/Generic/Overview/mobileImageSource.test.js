import { describe, expect, it } from "vitest";
import { getMobileImageSource } from "./mobileImageSource";

const buildImageNode = (fallback) => ({
  childImageSharp: { gatsbyImageData: { images: { fallback } } },
});

describe("getMobileImageSource", () => {
  it("returns the responsive srcSet and sizes of a Gatsby image node", () => {
    const node = buildImageNode({
      src: "/static/a-1000.webp",
      srcSet: "/static/a-250.webp 250w, /static/a-1000.webp 1000w",
      sizes: "calc(100vw - 32px)",
    });

    expect(getMobileImageSource(node)).toEqual({
      srcSet: "/static/a-250.webp 250w, /static/a-1000.webp 1000w",
      sizes: "calc(100vw - 32px)",
    });
  });

  it("returns null when no image is provided", () => {
    expect(getMobileImageSource(undefined)).toBeNull();
    expect(getMobileImageSource(null)).toBeNull();
  });

  it("uses a plain static path as the only candidate, without sizes", () => {
    expect(getMobileImageSource("/case-studies/quanta/overview-mobile.webp")).toEqual({
      srcSet: "/case-studies/quanta/overview-mobile.webp",
      sizes: undefined,
    });
  });

  it("returns null for an empty string", () => {
    expect(getMobileImageSource("")).toBeNull();
  });

  it("returns null when the node has no processed image data", () => {
    expect(getMobileImageSource({})).toBeNull();
    expect(getMobileImageSource({ childImageSharp: null })).toBeNull();
    expect(getMobileImageSource(buildImageNode(undefined))).toBeNull();
  });

  it("returns null when the fallback has no srcSet", () => {
    expect(getMobileImageSource(buildImageNode({ src: "/static/a.webp" }))).toBeNull();
  });
});
