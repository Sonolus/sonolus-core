import { Srl } from '../../core/srl.js'
import { LocalizationText } from '../localization.js'
import { DatabaseTag } from '../tag.js'

export interface DatabasePostItem {
    name: string
    version: 1
    title: LocalizationText
    time: number
    author: LocalizationText
    tags: DatabaseTag[]
    description?: LocalizationText
    thumbnail?: Srl
}
