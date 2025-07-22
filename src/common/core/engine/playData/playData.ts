import { EffectClipName } from '../../effect/effectClipName.js'
import { ParticleEffectName } from '../../particle/particleEffectName.js'
import { SkinSpriteName } from '../../skin/skinSpriteName.js'
import { EngineDataBucket } from '../bucket.js'
import { EngineDataNode } from '../node.js'
import { EnginePlayDataArchetype } from './archetype.js'

export type EnginePlayData = {
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
    archetypes: EnginePlayDataArchetype[]
    nodes: EngineDataNode[]
}
