import { EffectClipName } from '../../effect'
import { ParticleEffectName } from '../../particle'
import { SkinSpriteName } from '../../skin'
import { EnginePlayDataArchetype } from './archetype'
import { EnginePlayDataBucket } from './bucket'
import { EngineDataNode } from '../node'

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
