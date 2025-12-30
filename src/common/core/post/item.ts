import { Srl } from '../srl.js'
import { Tag } from '../tag.js'
import { UserItem } from '../user/item.js'

export type PostItem = {
    name: string
    source?: string
    version: 1
    title: string
    time: number
    author: string
    authorUser?: UserItem
    tags: Tag[]
    thumbnail?: Srl
}
