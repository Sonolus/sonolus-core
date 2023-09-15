import { EngineArchetypeDataName } from '../engine-archetype-data-name'
import { EngineArchetypeName } from '../engine-archetype-name'

export type EnginePreviewDataArchetype = {
    name: EngineArchetypeName | (string & {})
    preprocess?: EnginePreviewDataArchetypeCallback
    render?: EnginePreviewDataArchetypeCallback
    data: {
        name: EngineArchetypeDataName | (string & {})
        index: number
    }[]
}

export type EnginePreviewDataArchetypeCallback = {
    index: number
    order?: number
}
