import { SRL } from '../resource/srl'

export type ParticleItem = {
    name: string
    version: 1
    title: string
    subtitle: string
    author: string
    thumbnail: SRL<'ParticleThumbnail'>
    data: SRL<'ParticleData'>
    texture: SRL<'ParticleTexture'>
}
