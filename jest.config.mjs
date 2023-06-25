import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './'
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  coveragePathIgnorePatterns: ['/src/pages/_app.tsx', '/src/pages/_document.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};

export default createJestConfig(config);
