import { Srl } from '../../core/srl'
import { LocalizationText } from '../localization'

export type DatabaseServerInfo = {
    title: LocalizationText
    description?: LocalizationText
    banner?: Srl
}
