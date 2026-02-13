const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-constant-condition": "off",
      eqeqeq: "warn",
      "no-var": "error",
      "prefer-const": "warn",
    },
  },
  {
    ignores: ["node_modules/"],
  },
];
