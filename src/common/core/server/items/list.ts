import { ServerForm } from '../form'

export type ServerItemList<T> = {
    pageCount: number
    items: T[]
    searches?: ServerForm[]
}
