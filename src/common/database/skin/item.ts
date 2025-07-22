import { Srl } from '../../core/srl.js'
import { LocalizationText } from '../localization.js'
import { DatabaseTag } from '../tag.js'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface DatabaseSkinItem {
    name: string
    version: 4
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    tags: DatabaseTag[]
    description?: LocalizationText
    thumbnail: Srl
    data: Srl
    texture: Srl
}
