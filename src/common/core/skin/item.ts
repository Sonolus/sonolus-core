import { Srl } from '../srl.js'
import { Tag } from '../tag.js'
import { UserItem } from '../user/item.js'

export type SkinItem = {
    name: string
    source?: string
    version: 4
    title: string
    subtitle: string
    author: string
    authorUser?: UserItem
    tags: Tag[]
    thumbnail: Srl
    data: Srl
    texture: Srl
}
