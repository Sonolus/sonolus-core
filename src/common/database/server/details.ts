import { LocalizationText } from '..'

export type InfoDetails<T> = {
    info: T
    description: LocalizationText
    recommended: T[]
}
