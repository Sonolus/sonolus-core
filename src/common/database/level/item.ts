import { Srl } from '../../core/srl'
import { LocalizationText } from '../localization'
import { DatabaseTag } from '../tag'

export type DatabaseUseItem =
    | {
          useDefault: true
      }
    | {
          useDefault: false
          item: string
      }

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface DatabaseLevelItem {
    name: string
    version: 1
    rating: number
    title: LocalizationText
    artists: LocalizationText
    author: LocalizationText
    tags: DatabaseTag[]
    description?: LocalizationText
    engine: string
    useSkin: DatabaseUseItem
    useBackground: DatabaseUseItem
    useEffect: DatabaseUseItem
    useParticle: DatabaseUseItem
    cover: Srl
    bgm: Srl
    preview?: Srl
    data: Srl
}
