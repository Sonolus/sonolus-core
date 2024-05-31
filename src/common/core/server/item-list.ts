import { ServerForm } from './form'

export type ItemList<T> = {
    pageCount: number
    items: T[]
    searches?: ServerForm[]
}
