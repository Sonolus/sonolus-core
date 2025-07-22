import { Srl } from '../../core/srl.js'
import { LocalizationText } from '../localization.js'
import { DatabaseTag } from '../tag.js'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
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
