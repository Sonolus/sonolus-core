import { BackgroundItem } from '../background/item'
import { EffectItem } from '../effect/item'
import { EngineItem } from '../engine/item'
import { LevelItem } from '../level/item'
import { ParticleItem } from '../particle/item'
import { SkinItem } from '../skin/item'
import { Search } from './search'

export type ServerInfo = {
    levels: Section<LevelItem>
    skins: Section<SkinItem>
    backgrounds: Section<BackgroundItem>
    effects: Section<EffectItem>
    particles: Section<ParticleItem>
    engines: Section<EngineItem>
}

export type Section<T> = {
    items: T[]
    search: Search
}
