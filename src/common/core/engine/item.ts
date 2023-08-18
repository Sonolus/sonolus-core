import { BackgroundItem } from '../background/item'
import { EffectItem } from '../effect/item'
import { ParticleItem } from '../particle/item'
import { SRL } from '../resource/srl'
import { SkinItem } from '../skin/item'

export type EngineItem = {
    name: string
    version: 9
    title: string
    subtitle: string
    author: string
    skin: SkinItem
    background: BackgroundItem
    effect: EffectItem
    particle: ParticleItem
    thumbnail: SRL<'EngineThumbnail'>
    playData: SRL<'EnginePlayData'>
    tutorialData: SRL<'EngineTutorialData'>
    rom?: SRL<'EngineRom'>
    configuration: SRL<'EngineConfiguration'>
}
