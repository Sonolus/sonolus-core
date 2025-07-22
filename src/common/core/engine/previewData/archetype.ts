import { EngineArchetypeDataName } from '../engine-archetype-data-name.js'
import { EngineArchetypeName } from '../engine-archetype-name.js'

export type EnginePreviewDataArchetype = {
    name: EngineArchetypeName | (string & {})
    preprocess?: EnginePreviewDataArchetypeCallback
    render?: EnginePreviewDataArchetypeCallback
    imports: {
        name: EngineArchetypeDataName | (string & {})
        index: number
    }[]
}

export type EnginePreviewDataArchetypeCallback = {
    index: number
    order?: number
}
