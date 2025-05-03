import { defineConfig } from "vitest/config";
import { config } from "dotenv";

const env = config({ path: ".env.test" });

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    coverage: {
      reporter: ["text", "html"],
    },
    include: ["src/**/*.test.ts"],
    env: env.parsed,
  },
});
