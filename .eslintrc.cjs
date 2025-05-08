// ESLint configuration for Expo project
module.exports = {
  extends: ["eslint-config-expo"],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": "warn",
    "prettier/prettier": "warn",
  },
  ignorePatterns: ["dist/*", "node_modules/*"],
};
