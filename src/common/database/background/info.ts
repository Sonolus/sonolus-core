import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'

export interface BackgroundInfo {
    name: string
    version: 2
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    description: LocalizationText
    thumbnail: SRL<'BackgroundThumbnail'>
    data: SRL<'BackgroundData'>
    image: SRL<'BackgroundImage'>
    configuration: SRL<'BackgroundConfiguration'>
}
