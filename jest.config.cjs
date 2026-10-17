module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/fileMock.js",
  },

  setupFiles: ["<rootDir>/jest.setup.js"],
};