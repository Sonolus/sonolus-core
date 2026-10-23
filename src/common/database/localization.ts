import { Text } from '../core/text/index.js'

export type LocalizationText = Text | (string & {}) | Record<string, Text | (string & {})>

export const localize = (text: LocalizationText, locale: string, fallbackLocale: string): string =>
    typeof text === 'string'
        ? text
        : (text[locale] ?? text[fallbackLocale] ?? Object.values(text)[0] ?? '')
