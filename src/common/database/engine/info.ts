import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface EngineInfo {
    name: string
    version: 9
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    description: LocalizationText
    skin: string
    background: string
    effect: string
    particle: string
    thumbnail: SRL<'EngineThumbnail'>
    data: SRL<'EngineData'>
    rom?: SRL<'EngineRom'>
    configuration: SRL<'EngineConfiguration'>
}
