import { LevelItem } from '../level/item.js'
import { Srl } from '../srl.js'
import { Tag } from '../tag.js'
import { UserItem } from '../user/item.js'

export type PlaylistItem = {
    name: string
    source?: string
    version: 1
    title: string
    subtitle: string
    author: string
    authorUser?: UserItem
    tags: Tag[]
    levels: LevelItem[]
    thumbnail?: Srl
}
