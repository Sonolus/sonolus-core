import { Text } from '../../text/index.js'
import { ServerForm } from '../form.js'

export type ServerItemList<T> = {
    title?: Text | (string & {})
    pageCount: number
    cursor?: string
    items: T[]
    searches?: ServerForm[]
    quickSearchValues?: string
}
