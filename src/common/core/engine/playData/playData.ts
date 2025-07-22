import { EffectClipName } from '../../effect/effect-clip-name.js'
import { ParticleEffectName } from '../../particle/particle-effect-name.js'
import { SkinSpriteName } from '../../skin/skin-sprite-name.js'
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
