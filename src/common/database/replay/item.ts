import { Srl } from '../../core/srl.js'
import { LocalizationText } from '../localization.js'
import { DatabaseTag } from '../tag.js'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface DatabaseReplayItem {
    name: string
    version: 1
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    tags: DatabaseTag[]
    description?: LocalizationText
    level: string
    data: Srl
    configuration: Srl
}
