import { Srl } from '../../core/srl.js'
import { LocalizationText } from '../localization.js'
import { DatabaseTag } from '../tag.js'

export interface DatabasePlaylistItem {
    name: string
    version: 1
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    tags: DatabaseTag[]
    description?: LocalizationText
    levels: string[]
    thumbnail?: Srl
}
