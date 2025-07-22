import { LevelItem } from '../level/item.js'
import { Srl } from '../srl.js'
import { Tag } from '../tag.js'

export type PlaylistItem = {
    name: string
    source?: string
    version: 1
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    levels: LevelItem[]
    thumbnail?: Srl
}
