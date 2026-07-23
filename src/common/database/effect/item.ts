import { Srl } from '../../core/srl.js'
import { LocalizationText } from '../localization.js'
import { DatabaseTag } from '../tag.js'

export interface DatabaseEffectItem {
    name: string
    version: 5
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    tags: DatabaseTag[]
    description?: LocalizationText
    thumbnail: Srl
    data: Srl
    audio: Srl
}
