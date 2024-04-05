import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'
import { DatabaseTag } from '../tag'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface DatabaseBackgroundItem {
    name: string
    version: 2
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    tags: DatabaseTag[]
    description: LocalizationText
    thumbnail: SRL
    data: SRL
    image: SRL
    configuration: SRL
}
