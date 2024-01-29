import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface DatabaseParticleItem {
    name: string
    version: 2
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    description: LocalizationText
    thumbnail: SRL<'ParticleThumbnail'>
    data: SRL<'ParticleData'>
    texture: SRL<'ParticleTexture'>
}
