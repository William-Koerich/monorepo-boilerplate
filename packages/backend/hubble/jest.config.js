const { resolve } = require('path')
const { pathsToModuleNameMapper } = require('ts-jest/utils')

const { compilerOptions } = require('./tsconfig.json')
const base = require('../../../jest.config.base')
const root = resolve(__dirname)

module.exports = {
  ...base,
  name: 'Hubble Analytics - Backend',
  rootDir: root,
  testMatch: ['**/__tests__/**/*test.ts?(x)'],
  displayName: 'Hubble Analytics - Backend',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  modulePathIgnorePatterns: ['<rootDir>/__tests__/helpers'],

  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/index.ts',
    '!<rootDir>/src/app.ts',
    '!<rootDir>/src/config/*',
    '!<rootDir>/src/lib/**',
    '!<rootDir>/src/common/**',
    '!<rootDir>/src/models/**',
    '!<rootDir>/src/@types/**',
    '!<rootDir>/babel.config.js',
    '!<rootDir>/jest.config.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/__tests__/**'
  ]
}
