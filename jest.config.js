/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    "tests"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  testFileExtensions: [
    "ts",
    "js"
  ],
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ]
};

export default config