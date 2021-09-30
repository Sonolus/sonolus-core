import { EngineDataArchetype } from './archetype'
import { EngineDataBucket } from './bucket'
import { EngineDataNode } from './node'
import { EngineDataScript } from './script'

export type EngineData = {
    buckets: EngineDataBucket[]
    archetypes: EngineDataArchetype[]
    scripts: EngineDataScript[]
    nodes: EngineDataNode[]
}
