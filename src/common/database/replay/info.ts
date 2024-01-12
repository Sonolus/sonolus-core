import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface ReplayInfo {
    name: string
    version: 1
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    description: LocalizationText
    level: string
    data: SRL<'ReplayData'>
    configuration: SRL<'ReplayConfiguration'>
}
