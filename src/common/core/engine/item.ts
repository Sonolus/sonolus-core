import { BackgroundItem } from '../background/item'
import { EffectItem } from '../effect/item'
import { ParticleItem } from '../particle/item'
import { SkinItem } from '../skin/item'
import { Srl } from '../srl'
import { Tag } from '../tag'

export type EngineItem = {
    name: string
    source?: string
    version: 13
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    skin: SkinItem
    background: BackgroundItem
    effect: EffectItem
    particle: ParticleItem
    thumbnail: Srl
    playData: Srl
    watchData: Srl
    previewData: Srl
    tutorialData: Srl
    rom?: Srl
    configuration: Srl
}
