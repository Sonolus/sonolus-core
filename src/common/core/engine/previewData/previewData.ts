import { SkinSpriteName } from '../../skin'
import { EngineDataNode } from '../node'
import { EnginePreviewDataArchetype } from './archetype'

export type EnginePreviewData = {
    skin: {
        renderMode?: 'default' | 'standard' | 'lightweight'
        sprites: {
            name: SkinSpriteName | (string & {})
            id: number
        }[]
    }
    archetypes: EnginePreviewDataArchetype[]
    nodes: EngineDataNode[]
}
