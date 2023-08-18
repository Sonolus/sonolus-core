import { EffectClipName } from '../../effect'
import { ParticleEffectName } from '../../particle'
import { SkinSpriteName } from '../../skin'
import { EngineDataNode } from '../node'
import { EnginePlayDataArchetype } from './archetype'
import { EnginePlayDataBucket } from './bucket'

export type EnginePlayData = {
    skin: {
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
    buckets: EnginePlayDataBucket[]
    archetypes: EnginePlayDataArchetype[]
    nodes: EngineDataNode[]
}
