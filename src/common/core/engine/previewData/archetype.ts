import { EngineArchetypeDataName } from '../engineArchetypeDataName.js'
import { EngineArchetypeName } from '../engineArchetypeName.js'

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
