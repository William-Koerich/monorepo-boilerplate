module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  plugins: [
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
  env: {
    build: {
      ignore: [
        "**/*.test.tsx",
        "**/*.spec.tsx",
        "**/*.test.ts",
        "**/*.spec.ts",
        "**/*.story.tsx",
        "__snapshots__",
        "__tests__",
        "__stories__",
      ],
    },
  },
  ignore: ["node_modules"],
};
