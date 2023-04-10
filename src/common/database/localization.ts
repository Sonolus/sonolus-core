export type LocalizationText = Record<string, string>

export function localize(
    text: LocalizationText,
    locale: string,
    fallbackLocale: string
): string {
    return text[locale] ?? text[fallbackLocale] ?? Object.values(text)[0] ?? ''
}
