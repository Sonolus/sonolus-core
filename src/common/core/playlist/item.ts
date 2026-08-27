import { LevelItem } from '../level/item.js'
import { Srl } from '../srl.js'
import { Tag } from '../tag.js'
import { Text } from '../text/index.js'
import { UserItem } from '../user/item.js'

export type PlaylistItem = {
    name: string
    source?: string
    version: 1
    title: Text | (string & {})
    subtitle: Text | (string & {})
    author: string
    authorUser?: UserItem
    tags: Tag[]
    levels: LevelItem[]
    thumbnail?: Srl
}
