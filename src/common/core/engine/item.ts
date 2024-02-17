import { BackgroundItem } from '../background/item'
import { EffectItem } from '../effect/item'
import { ParticleItem } from '../particle/item'
import { SRL } from '../resource/srl'
import { SkinItem } from '../skin/item'
import { Tag } from '../tag'

export type EngineItem = {
    name: string
    source?: string
    version: 12
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    skin: SkinItem
    background: BackgroundItem
    effect: EffectItem
    particle: ParticleItem
    thumbnail: SRL
    playData: SRL
    watchData: SRL
    previewData: SRL
    tutorialData: SRL
    rom?: SRL
    configuration: SRL
}
