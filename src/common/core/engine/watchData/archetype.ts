import { EngineArchetypeDataName } from '../engine-archetype-data-name'
import { EngineArchetypeName } from '../engine-archetype-name'

export type EngineWatchDataArchetype = {
    name: EngineArchetypeName | (string & {})
    hasInput: boolean
    preprocess?: EngineWatchDataArchetypeCallback
    spawnTime?: EngineWatchDataArchetypeCallback
    despawnTime?: EngineWatchDataArchetypeCallback
    initialize?: EngineWatchDataArchetypeCallback
    updateSequential?: EngineWatchDataArchetypeCallback
    updateParallel?: EngineWatchDataArchetypeCallback
    terminate?: EngineWatchDataArchetypeCallback
    imports: {
        name: EngineArchetypeDataName | (string & {})
        index: number
    }[]
}

export type EngineWatchDataArchetypeCallback = {
    index: number
    order?: number
}
