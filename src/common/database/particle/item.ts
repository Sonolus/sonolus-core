import { Srl } from '../../core/srl.js'
import { LocalizationText } from '../localization.js'
import { DatabaseTag } from '../tag.js'

export interface DatabaseParticleItem {
    name: string
    version: 3
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    tags: DatabaseTag[]
    description?: LocalizationText
    thumbnail: Srl
    data: Srl
    texture: Srl
}
