import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'

export type DatabaseServerInfo = {
    title: LocalizationText
    banner: SRL<'ServerBanner'>
}
