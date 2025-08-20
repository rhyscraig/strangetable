// eslint.config.js
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import jsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js"; // <-- Import jsx-runtime separately
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ...pluginReactConfig, // Apply the recommended rules
    ...jsxRuntime, // Apply the JSX runtime rules
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  ...tseslint.configs.recommended,
  prettierConfig,
];