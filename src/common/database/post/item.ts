import { Srl } from '../../core/srl'
import { LocalizationText } from '../localization'
import { DatabaseTag } from '../tag'

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
