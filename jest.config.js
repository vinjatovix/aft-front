module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.js"],
  coverageReporters: ["text", "html", "lcov", "clover"],
  watchPathIgnorePatterns: ["<rootDir>/test-report.json"],
  reporters: ["default"],
  testResultsProcessor: "jest-sonar-reporter",
  coveragePathIgnorePatterns: ["/node_modules/", "/test/"],
};
