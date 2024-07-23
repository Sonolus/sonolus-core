import { LevelItem } from '../level/item'
import { Srl } from '../srl'
import { Tag } from '../tag'

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
