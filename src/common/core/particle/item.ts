import { SRL } from '../resource/srl'
import { Tag } from '../tag'

export type ParticleItem = {
    name: string
    source?: string
    version: 2
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    thumbnail: SRL<'ParticleThumbnail'>
    data: SRL<'ParticleData'>
    texture: SRL<'ParticleTexture'>
}
