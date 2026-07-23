import { defineConfig } from 'oxfmt'

export default defineConfig({
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    sortImports: {},
    ignorePatterns: [
        '**/*.*',

        '!oxfmt.config.ts',
        '!oxlint.config.ts',
        '!README.md',

        '!src/**/*.*',
    ],
})
