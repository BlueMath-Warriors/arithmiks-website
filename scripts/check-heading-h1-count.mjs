/**
 * After `npm run build`, asserts each built HTML document has exactly one <h1>.
 * Usage: node scripts/check-heading-h1-count.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

function walkHtmlFiles(dir, baseDir) {
  const out = [];
  if (!fs.existsSync(dir)) {
    return out;
  }
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      const rel = path.relative(baseDir, full);
      if (rel.startsWith("_gatsby") || rel.split(path.sep).includes("_gatsby")) {
        continue;
      }
      out.push(...walkHtmlFiles(full, baseDir));
    } else if (ent.name.endsWith(".html")) {
      out.push(full);
    }
  }
  return out;
}

const files = walkHtmlFiles(publicDir, publicDir);
if (files.length === 0) {
  console.error("No HTML files under public/. Run npm run build first.");
  process.exit(1);
}

let failed = false;
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) {
    console.error(
      `${path.relative(publicDir, file)}: expected exactly 1 <h1>, found ${h1Count}`
    );
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log(`OK: ${files.length} HTML file(s) each have exactly one <h1>.`);
