import { EngineArchetypeDataName } from '../engine-archetype-data-name'
import { EngineArchetypeName } from '../engine-archetype-name'

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
    data: {
        name: EngineArchetypeDataName | (string & {})
        index: number
    }[]
}

export type EnginePlayDataArchetypeCallback = {
    index: number
    order?: number
}
