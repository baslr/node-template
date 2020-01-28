const { defaults } = require('jest-config');

module.exports = {
    roots: [
        '<rootDir>/src'
    ],
    verbose: true,
    testMatch: ['<rootDir>/src/**/__tests__/*.test.*'],

    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mjs'],

    collectCoverage: true,
    coverageReporters: ['json', 'lcov', 'clover', 'text', 'text-summary'],
    transform: {
        '\\.m?js$': 'babel-jest'
    }
};
