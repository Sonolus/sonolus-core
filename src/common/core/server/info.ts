import { BackgroundItem } from '../background/item'
import { EffectItem } from '../effect/item'
import { EngineItem } from '../engine/item'
import { LevelItem } from '../level/item'
import { ParticleItem } from '../particle/item'
import { SkinItem } from '../skin/item'

export type ServerInfo = {
    levels: LevelItem[]
    skins: SkinItem[]
    backgrounds: BackgroundItem[]
    effects: EffectItem[]
    particles: ParticleItem[]
    engines: EngineItem[]
}
