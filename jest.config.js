module.exports = {
    roots: [
        "<rootDir>/src",
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node",
    ],
    moduleDirectories: ['<rootDir>', '<rootDir>/node_modules'],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '\\.(png|jpg)$': 'identity-obj-proxy',
        '\\.(svg)$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: [
        '^.+\\.module\\.{css,sass,scss}$',
        '\\.(png|jpg)$',
    ],
};