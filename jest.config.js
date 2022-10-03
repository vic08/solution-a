module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/"],
  testMatch: ["**/src/**/__tests__/**/*.(spec|test).[jt]s?(x)"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)", "src/**/*.js(x)"],
  setupFiles: [],
  setupFilesAfterEnv: [],
  modulePaths: ["<rootDir>/src/"],
  moduleNameMapper: {
    "@images/(.*)": "<rootDir>/.jest/mockFile.ts",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/.jest/mockFile.ts",
  },
};
