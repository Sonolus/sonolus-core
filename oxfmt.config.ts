import { defineConfig } from 'oxfmt'

export default defineConfig({
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    sortImports: {},
    ignorePatterns: [
        '**/*.*',

        '!eslint.config.js',
        '!oxfmt.config.ts',
        '!README.md',

        '!src/**/*.*',
    ],
})
