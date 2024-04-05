import { SRL } from '../resource/srl'
import { Tag } from '../tag'

export type ParticleItem = {
    name: string
    source?: string
    version: 3
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    thumbnail: SRL
    data: SRL
    texture: SRL
}
