import { Text } from '../core/text.js'

export type LocalizationText = Record<string, Text | (string & {})>

export const localize = (text: LocalizationText, locale: string, fallbackLocale: string): string =>
    text[locale] ?? text[fallbackLocale] ?? Object.values(text)[0] ?? ''
