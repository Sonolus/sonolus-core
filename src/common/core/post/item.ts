import { Srl } from '../srl.js'
import { Tag } from '../tag.js'
import { Text } from '../text/index.js'
import { UserItem } from '../user/item.js'

export type PostItem = {
    name: string
    source?: string
    version: 1
    title: Text | (string & {})
    time: number
    author: string
    authorUser?: UserItem
    tags: Tag[]
    thumbnail?: Srl
}
