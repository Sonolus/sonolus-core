import { ServerOptionsSection } from './options-section'

export type ItemList<T> = {
    pageCount: number
    items: T[]
    searches?: ServerOptionsSection[]
}
