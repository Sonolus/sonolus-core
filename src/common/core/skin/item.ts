import { SRL } from '../resource/srl'
import { Tag } from '../tag'

export type SkinItem = {
    name: string
    version: 4
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    thumbnail: SRL<'SkinThumbnail'>
    data: SRL<'SkinData'>
    texture: SRL<'SkinTexture'>
}
