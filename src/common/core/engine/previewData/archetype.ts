import { EngineArchetypeDataName } from '../archetypeDataName/index.js'
import { EngineArchetypeName } from '../archetypeName/index.js'

export type EnginePreviewDataArchetype = {
    name: EngineArchetypeName | (string & {})
    preprocess?: EnginePreviewDataArchetypeCallback
    render?: EnginePreviewDataArchetypeCallback
    imports: {
        name: EngineArchetypeDataName | (string & {})
        index: number
        def?: number
    }[]
}

export type EnginePreviewDataArchetypeCallback = {
    index: number
    order?: number
}
