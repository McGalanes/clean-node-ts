module.exports = {
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    moduleFileExtensions: [
        'js',
        'ts'
    ],
    testMatch: [
        '**/*.spec.ts'
    ],
    testEnvironment: 'node'
}