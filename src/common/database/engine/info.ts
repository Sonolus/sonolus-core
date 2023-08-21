import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface EngineInfo {
    name: string
    version: 10
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    description: LocalizationText
    skin: string
    background: string
    effect: string
    particle: string
    thumbnail: SRL<'EngineThumbnail'>
    playData: SRL<'EnginePlayData'>
    tutorialData: SRL<'EngineTutorialData'>
    rom?: SRL<'EngineRom'>
    configuration: SRL<'EngineConfiguration'>
}
