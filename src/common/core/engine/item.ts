import { BackgroundItem } from '../background/item'
import { EffectItem } from '../effect/item'
import { ParticleItem } from '../particle/item'
import { SRL } from '../resource/srl'
import { SkinItem } from '../skin/item'

export type EngineItem = {
    name: string
    version: 8
    title: string
    subtitle: string
    author: string
    skin: SkinItem
    background: BackgroundItem
    effect: EffectItem
    particle: ParticleItem
    thumbnail: SRL<'EngineThumbnail'>
    data: SRL<'EngineData'>
    rom?: SRL<'EngineRom'>
    configuration: SRL<'EngineConfiguration'>
}
