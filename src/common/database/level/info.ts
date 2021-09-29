import { SRL } from '../../core/resource/srl'
import { LocalizationText } from '../localization'

export type UseInfo = {
    useDefault: boolean
    item?: string
}

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
    data: SRL<'LevelData'>
}
