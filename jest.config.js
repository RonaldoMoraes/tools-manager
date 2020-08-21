module.exports = {
    testEnvironment: 'node',
    verbose: true,
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    testRegex: "\\.test\\.ts",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ]
};