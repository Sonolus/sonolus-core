import { EffectClipName } from '../../effect'
import { ParticleEffectName } from '../../particle'
import { SkinSpriteName } from '../../skin'
import { EngineDataBucket } from '../bucket'
import { EngineDataNode } from '../node'
import { EngineWatchDataArchetype } from './archetype'

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
