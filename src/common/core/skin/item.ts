import { SRL } from '../resource/srl'

export type SkinItem = {
    name: string
    version: 3
    title: string
    subtitle: string
    author: string
    thumbnail: SRL<'SkinThumbnail'>
    data: SRL<'SkinData'>
    texture: SRL<'SkinTexture'>
}
