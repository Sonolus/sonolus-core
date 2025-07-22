import { BackgroundItem } from '../background/item.js'
import { EffectItem } from '../effect/item.js'
import { EngineItem } from '../engine/item.js'
import { ParticleItem } from '../particle/item.js'
import { SkinItem } from '../skin/item.js'
import { Srl } from '../srl.js'
import { Tag } from '../tag.js'

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
