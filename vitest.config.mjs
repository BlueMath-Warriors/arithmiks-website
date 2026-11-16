import { defineConfig } from "vitest/config";

// Only the pure logic modules are unit-tested, so a Node environment is enough
// (no DOM, no Gatsby build). Tests sit next to the module they cover.
export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.js"],
  },
});
