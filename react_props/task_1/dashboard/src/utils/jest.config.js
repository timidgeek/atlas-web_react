module.exports = {
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
  },
  // moduleNameMapper: {
  //   "\\.(css|less|png|jpg)$": "identity-obj-proxy",
  // },
  // transform: {
  //   "^.+\\.jsx?$": "babel-jest",
  // },
};