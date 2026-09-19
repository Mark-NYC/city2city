import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

// Flat config. Intentionally lean: Astro's recommended rules catch template and
// accessibility issues, and the TypeScript parser lets it understand the TS in
// component frontmatter. Prettier owns formatting; `astro check` owns types.
export default [
  { ignores: ["dist/", ".astro/", "node_modules/"] },
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
];
