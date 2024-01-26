import { LevelItem } from '../level/item'
import { SRL } from '../resource/srl'
import { Tag } from '../tag'

export type ReplayItem = {
    name: string
    version: 1
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    level: LevelItem
    data: SRL<'ReplayData'>
    configuration: SRL<'ReplayConfiguration'>
}
