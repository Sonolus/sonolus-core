import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'

export interface EngineInfo {
    name: string
    version: 4
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
    configuration: SRL<'EngineConfiguration'>
}
