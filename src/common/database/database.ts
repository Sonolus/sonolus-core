import { BackgroundInfo } from './background/info'
import { EffectInfo } from './effect/info'
import { EngineInfo } from './engine/info'
import { LevelInfo } from './level/info'
import { ParticleInfo } from './particle/info'
import { SkinInfo } from './skin/info'

export type Database = {
    levels: LevelInfo[]
    skins: SkinInfo[]
    backgrounds: BackgroundInfo[]
    effects: EffectInfo[]
    particles: ParticleInfo[]
    engines: EngineInfo[]
}
