import { EngineArchetypeDataName } from '../engine-archetype-data-name'
import { EngineArchetypeName } from '../engine-archetype-name'

export type EngineDataArchetype = {
    name: EngineArchetypeName | (string & {})
    hasInput: boolean
    preprocess?: EngineDataArchetypeCallback
    spawnOrder?: EngineDataArchetypeCallback
    shouldSpawn?: EngineDataArchetypeCallback
    initialize?: EngineDataArchetypeCallback
    updateSequential?: EngineDataArchetypeCallback
    touch?: EngineDataArchetypeCallback
    updateParallel?: EngineDataArchetypeCallback
    terminate?: EngineDataArchetypeCallback
    data: {
        name: EngineArchetypeDataName | (string & {})
        index: number
    }[]
}

export type EngineDataArchetypeCallback = {
    index: number
    order?: number
}
