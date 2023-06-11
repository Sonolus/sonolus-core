import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'

export interface SkinInfo {
    name: string
    version: 3
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    description: LocalizationText
    thumbnail: SRL<'SkinThumbnail'>
    data: SRL<'SkinData'>
    texture: SRL<'SkinTexture'>
}
