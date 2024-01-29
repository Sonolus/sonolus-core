import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'

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
    description: LocalizationText
    engine: string
    useSkin: DatabaseUseItem
    useBackground: DatabaseUseItem
    useEffect: DatabaseUseItem
    useParticle: DatabaseUseItem
    cover: SRL<'LevelCover'>
    bgm: SRL<'LevelBgm'>
    preview?: SRL<'LevelPreview'>
    data: SRL<'LevelData'>
}
