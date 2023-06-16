import { BackgroundItem } from '../background/item'
import { EffectItem } from '../effect/item'
import { EngineItem } from '../engine/item'
import { ParticleItem } from '../particle/item'
import { SRL } from '../resource/srl'
import { SkinItem } from '../skin/item'

export type UseItem<T> =
    | {
          useDefault: true
      }
    | {
          useDefault: false
          item: T
      }

export type LevelItem = {
    name: string
    version: 1
    rating: number
    title: string
    artists: string
    author: string
    engine: EngineItem
    useSkin: UseItem<SkinItem>
    useBackground: UseItem<BackgroundItem>
    useEffect: UseItem<EffectItem>
    useParticle: UseItem<ParticleItem>
    cover: SRL<'LevelCover'>
    bgm: SRL<'LevelBgm'>
    preview?: SRL<'LevelPreview'>
    data: SRL<'LevelData'>
}
