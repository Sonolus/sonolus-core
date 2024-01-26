import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'
import { DatabaseTag } from '../tag'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface DatabaseSkinItem {
    name: string
    version: 4
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    tags: DatabaseTag[]
    description: LocalizationText
    thumbnail: SRL<'SkinThumbnail'>
    data: SRL<'SkinData'>
    texture: SRL<'SkinTexture'>
}
