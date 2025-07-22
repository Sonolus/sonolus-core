import { EngineArchetypeDataName } from '../engineArchetypeDataName.js'
import { EngineArchetypeName } from '../engineArchetypeName.js'

export type EnginePlayDataArchetype = {
    name: EngineArchetypeName | (string & {})
    hasInput: boolean
    preprocess?: EnginePlayDataArchetypeCallback
    spawnOrder?: EnginePlayDataArchetypeCallback
    shouldSpawn?: EnginePlayDataArchetypeCallback
    initialize?: EnginePlayDataArchetypeCallback
    updateSequential?: EnginePlayDataArchetypeCallback
    touch?: EnginePlayDataArchetypeCallback
    updateParallel?: EnginePlayDataArchetypeCallback
    terminate?: EnginePlayDataArchetypeCallback
    imports: {
        name: EngineArchetypeDataName | (string & {})
        index: number
    }[]
    exports: (EngineArchetypeDataName | (string & {}))[]
}

export type EnginePlayDataArchetypeCallback = {
    index: number
    order?: number
}
