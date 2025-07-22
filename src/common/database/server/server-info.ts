import { Srl } from '../../core/srl.js'
import { LocalizationText } from '../localization.js'

export type DatabaseServerInfo = {
    title: LocalizationText
    description?: LocalizationText
    banner?: Srl
}
