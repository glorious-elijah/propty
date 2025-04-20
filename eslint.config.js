import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

// eslint.config.js

const compat = new FlatCompat();

export default [
  js.configs.recommended, // Use ESLint's recommended rules
  ...compat.extends("expo"), // Extend the Expo configuration
  {
    ignores: ["dist/"], // Ignore the dist folder
    rules: {
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
      "no-unused-vars": "warn", // Warns about unused variables
    },
  },
];
