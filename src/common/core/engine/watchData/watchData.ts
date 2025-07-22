import { EffectClipName } from '../../effect/effectClipName.js'
import { ParticleEffectName } from '../../particle/particleEffectName.js'
import { SkinSpriteName } from '../../skin/skinSpriteName.js'
import { EngineDataBucket } from '../bucket.js'
import { EngineDataNode } from '../node.js'
import { EngineWatchDataArchetype } from './archetype.js'

export type EngineWatchData = {
    skin: {
        renderMode?: 'default' | 'standard' | 'lightweight'
        sprites: {
            name: SkinSpriteName | (string & {})
            id: number
        }[]
    }
    effect: {
        clips: {
            name: EffectClipName | (string & {})
            id: number
        }[]
    }
    particle: {
        effects: {
            name: ParticleEffectName | (string & {})
            id: number
        }[]
    }
    buckets: EngineDataBucket[]
    archetypes: EngineWatchDataArchetype[]
    updateSpawn?: number
    nodes: EngineDataNode[]
}
