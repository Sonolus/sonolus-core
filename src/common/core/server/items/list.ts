import { ServerForm } from '../form.js'

export type ServerItemList<T> = {
    pageCount: number
    cursor?: string
    items: T[]
    searches?: ServerForm[]
}
