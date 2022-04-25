module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  verbose: true,
  clearMocks: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: false,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
