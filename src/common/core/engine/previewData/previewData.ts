import { SkinSpriteName } from '../../skin/spriteName/index.js'
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
