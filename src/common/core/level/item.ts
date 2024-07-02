import { BackgroundItem } from '../background/item'
import { EffectItem } from '../effect/item'
import { EngineItem } from '../engine/item'
import { ParticleItem } from '../particle/item'
import { SkinItem } from '../skin/item'
import { Srl } from '../srl'
import { Tag } from '../tag'

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
    source?: string
    version: 1
    rating: number
    title: string
    artists: string
    author: string
    tags: Tag[]
    engine: EngineItem
    useSkin: UseItem<SkinItem>
    useBackground: UseItem<BackgroundItem>
    useEffect: UseItem<EffectItem>
    useParticle: UseItem<ParticleItem>
    cover: Srl
    bgm: Srl
    preview?: Srl
    data: Srl
}
