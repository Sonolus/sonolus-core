import { ServerForm } from '../form'

export type ServerItemList<T> = {
    pageCount: number
    cursor?: string
    items: T[]
    searches?: ServerForm[]
}
