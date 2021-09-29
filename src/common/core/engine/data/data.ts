import { Archetype } from './archetype'
import { Bucket } from './bucket'
import { Node } from './node'
import { Script } from './script'

export type EngineData = {
    buckets: Bucket[]
    archetypes: Archetype[]
    scripts: Script[]
    nodes: Node[]
}
