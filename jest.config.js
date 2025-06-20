module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+.js$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/e2e/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
};