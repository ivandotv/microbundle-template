import babel from "vite-plugin-babel"
import { configDefaults, defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [
    // Babel will try to pick up Babel config files (.babelrc or .babelrc.json)
    babel(),
    // ...
  ],
  test: {
    setupFiles: "./vitestSetup.ts",
    coverage: {
      // thresholds: {
      //   branches: 90,
      //   lines: 90,
      //   functions: 90,
      //   statements: 90,
      // },
      provider: "v8",
      reporter: ["text", "html", "json", "lcov"],
      include: ["src/**/*.ts"],
      exclude: [
        ...(configDefaults.coverage.exclude
          ? configDefaults.coverage.exclude
          : []),
        "src/types-internal.ts",
        "src/types.ts",
        "src/__tests__/**",
        // "src/index.ts",
      ],
    },
  },
})
