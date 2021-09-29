import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'

export interface ParticleInfo {
    name: string
    version: 1
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    description: LocalizationText
    thumbnail: SRL<'ParticleThumbnail'>
    data: SRL<'ParticleData'>
    texture: SRL<'ParticleTexture'>
}
