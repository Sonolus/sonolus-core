import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'

export type UseInfo =
    | {
          useDefault: true
      }
    | {
          useDefault: false
          item: string
      }

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface LevelInfo {
    name: string
    version: 1
    rating: number
    title: LocalizationText
    artists: LocalizationText
    author: LocalizationText
    description: LocalizationText
    engine: string
    useSkin: UseInfo
    useBackground: UseInfo
    useEffect: UseInfo
    useParticle: UseInfo
    cover: SRL<'LevelCover'>
    bgm: SRL<'LevelBgm'>
    preview?: SRL<'LevelPreview'>
    data: SRL<'LevelData'>
}
