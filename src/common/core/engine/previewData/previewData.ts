import { SkinSpriteName } from '../../skin/skinSpriteName.js'
import { EngineDataNode } from '../node.js'
import { EnginePreviewDataArchetype } from './archetype.js'

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
