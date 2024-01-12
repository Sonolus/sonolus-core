import { LevelItem } from '../level/item'
import { SRL } from '../resource/srl'

export type ReplayItem = {
    name: string
    version: 1
    title: string
    subtitle: string
    author: string
    level: LevelItem
    data: SRL<'ReplayData'>
    configuration: SRL<'ReplayConfiguration'>
}
