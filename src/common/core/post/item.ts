import { Srl } from '../srl.js'
import { Tag } from '../tag.js'

export type PostItem = {
    name: string
    source?: string
    version: 1
    title: string
    time: number
    author: string
    tags: Tag[]
    thumbnail?: Srl
}
