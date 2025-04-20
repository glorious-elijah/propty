// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: "expo",
  ignorePatterns: ["/dist/*"],
  rules: {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "no-unused-vars": "warn", // Warns about unused variables
  },
};
