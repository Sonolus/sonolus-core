import { Search } from './search'

export type ItemList<T> = {
    pageCount: number
    items: T[]
    searches: Search[]
}
