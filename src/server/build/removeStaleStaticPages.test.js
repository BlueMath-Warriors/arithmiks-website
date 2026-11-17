import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { access, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { removeStaleStaticPages } from "./removeStaleStaticPages.cjs";

let publicDir;

const writePublicFile = async (relativePath) => {
  const file = path.join(publicDir, relativePath);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, "x");
  return file;
};

const exists = (file) =>
  access(file).then(
    () => true,
    () => false
  );

beforeEach(async () => {
  publicDir = await mkdtemp(path.join(tmpdir(), "stale-pages-"));
});

afterEach(async () => {
  await rm(publicDir, { recursive: true, force: true });
});

describe("removeStaleStaticPages", () => {
  it("removes the static html and page-data of every listed page", async () => {
    const files = [
      await writePublicFile("careers/index.html"),
      await writePublicFile("page-data/careers/page-data.json"),
      await writePublicFile("careers/jobs/index.html"),
      await writePublicFile("page-data/careers/jobs/page-data.json"),
    ];

    const removed = await removeStaleStaticPages({ publicDir, pagePaths: ["/careers", "/careers/jobs"] });

    expect(removed.sort()).toEqual(files.sort());
    for (const file of files) expect(await exists(file)).toBe(false);
  });

  it("leaves pages that are not listed untouched", async () => {
    const about = await writePublicFile("about/index.html");
    const aboutData = await writePublicFile("page-data/about/page-data.json");
    await writePublicFile("careers/index.html");

    await removeStaleStaticPages({ publicDir, pagePaths: ["/careers"] });

    expect(await exists(about)).toBe(true);
    expect(await exists(aboutData)).toBe(true);
  });

  it("does not remove other files inside a listed page's folder", async () => {
    await writePublicFile("careers/index.html");
    const nested = await writePublicFile("careers/jobs/some-role/index.html");

    await removeStaleStaticPages({ publicDir, pagePaths: ["/careers"] });

    expect(await exists(nested)).toBe(true);
  });

  it("reports only the files that existed and does not fail on missing ones", async () => {
    const present = await writePublicFile("careers/index.html");

    const removed = await removeStaleStaticPages({ publicDir, pagePaths: ["/careers", "/careers/jobs"] });

    expect(removed).toEqual([present]);
  });

  it("does nothing for an empty page list or an empty output folder", async () => {
    expect(await removeStaleStaticPages({ publicDir, pagePaths: [] })).toEqual([]);
    expect(await removeStaleStaticPages({ publicDir, pagePaths: ["/careers"] })).toEqual([]);
  });
});
