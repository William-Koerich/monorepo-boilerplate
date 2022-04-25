// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

const base = require('../../../jest.config.base')
const root = resolve(__dirname)

module.exports = {
  ...base,
  name: 'Hubble Analytics - Frontend',
  testMatch: ['<rootDir>/**/*.test.ts?(x)'],
  rootDir: root,
  displayName: 'Hubble Analytics - Frontend',
  testEnvironment: 'jsdom',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  modulePathIgnorePatterns: ['<rootDir>/__tests__/helpers'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts(x)',
    '!<rootDir>/src/App.tsx',
    '!<rootDir>/src/Routes.tsx',
    '!<rootDir>/src/pages/**/*.ts(x)',
    '!<rootDir>/src/**/*.mock.ts',
    '!<rootDir>/src/index.ts',
    '!<rootDir>/babel.config.js',
    '!<rootDir>/jest.config.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/__tests__/**'
  ]
}
