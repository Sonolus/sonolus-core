import { SRL } from '../resource/srl'
import { Tag } from '../tag'

export type EffectItem = {
    name: string
    source?: string
    version: 5
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    thumbnail: SRL
    data: SRL
    audio: SRL
}
