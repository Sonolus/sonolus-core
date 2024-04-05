import { LevelItem } from '../level/item'
import { SRL } from '../resource/srl'
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
    thumbnail?: SRL
}
