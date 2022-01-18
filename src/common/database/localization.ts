export type LocalizationText<T extends string = string> = Record<string, T>

export function localize<T extends string>(
    text: LocalizationText<T>,
    locale: string,
    fallbackLocale: string
): T {
    return (
        text[locale] ||
        text[fallbackLocale] ||
        Object.values(text)[0] ||
        ('' as T)
    )
}
