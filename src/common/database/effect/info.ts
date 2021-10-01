import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'

export interface EffectInfo {
    name: string
    version: 2
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    description: LocalizationText
    thumbnail: SRL<'EffectThumbnail'>
    data: SRL<'EffectData'>
}