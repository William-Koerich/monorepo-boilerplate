module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  settings: {
    "import/resolver": { typescript: {} },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-parens": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
  },
};
