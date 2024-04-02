export default {
    collectCoverage: false, 
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom', 
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: { 
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    }
}