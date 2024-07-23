import { LevelItem } from '../level/item'
import { Srl } from '../srl'
import { Tag } from '../tag'

export type ReplayItem = {
    name: string
    source?: string
    version: 1
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    level: LevelItem
    data: Srl
    configuration: Srl
}
