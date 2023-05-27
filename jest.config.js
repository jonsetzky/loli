module.exports = {
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts", "electron/**/*.ts", "!**/*.d.ts"],
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/e2e/",
  ],
};
