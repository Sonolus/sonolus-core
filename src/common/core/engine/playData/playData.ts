import { EffectClipName } from '../../effect'
import { ParticleEffectName } from '../../particle'
import { SkinSpriteName } from '../../skin'
import { EngineDataBucket } from '../bucket'
import { EngineDataNode } from '../node'
import { EnginePlayDataArchetype } from './archetype'

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
