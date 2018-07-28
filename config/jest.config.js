module.exports = {
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      "tsConfigFile": "./config/tsconfig.json"
    },
  },
  testMatch: [
    "**/test/**/*.+(ts|tsx|js)"
  ],
  rootDir: "../",
}
