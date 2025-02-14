import { Srl } from '../../core/srl'
import { LocalizationText } from '../localization'
import { DatabaseTag } from '../tag'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface DatabaseEngineItem {
    name: string
    version: 13
    title: LocalizationText
    subtitle: LocalizationText
    author: LocalizationText
    tags: DatabaseTag[]
    description?: LocalizationText
    skin: string
    background: string
    effect: string
    particle: string
    thumbnail: Srl
    playData: Srl
    watchData: Srl
    previewData: Srl
    tutorialData: Srl
    rom?: Srl
    configuration: Srl
}
