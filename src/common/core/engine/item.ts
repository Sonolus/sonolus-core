import { BackgroundItem } from '../background/item.js'
import { EffectItem } from '../effect/item.js'
import { ParticleItem } from '../particle/item.js'
import { SkinItem } from '../skin/item.js'
import { Srl } from '../srl.js'
import { Tag } from '../tag.js'

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
