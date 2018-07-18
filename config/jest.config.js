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
      "tsConfigFile": "tsconfig.json"
    }
  },
  testMatch: [
    "**/test/*.test.+(ts|tsx|js)"
  ],
}
