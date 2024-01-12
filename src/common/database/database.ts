import { SRL } from '../core'
import { BackgroundInfo } from './background/info'
import { EffectInfo } from './effect/info'
import { EngineInfo } from './engine/info'
import { LevelInfo } from './level/info'
import { LocalizationText } from './localization'
import { ParticleInfo } from './particle/info'
import { ReplayInfo } from './replay/info'
import { SkinInfo } from './skin/info'

export type Database = {
    info: {
        title: LocalizationText
        banner: SRL<'ServerBanner'>
    }
    levels: LevelInfo[]
    skins: SkinInfo[]
    backgrounds: BackgroundInfo[]
    effects: EffectInfo[]
    particles: ParticleInfo[]
    engines: EngineInfo[]
    replays: ReplayInfo[]
}
