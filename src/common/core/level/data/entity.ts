import { EngineArchetypeDataName } from '../../engine/engine-archetype-data-name.js'
import { EngineArchetypeName } from '../../engine/engine-archetype-name.js'

export type LevelDataEntity = {
    name?: string
    archetype: EngineArchetypeName | (string & {})
    data: (
        | {
              name: EngineArchetypeDataName | (string & {})
              value: number
          }
        | {
              name: EngineArchetypeDataName | (string & {})
              ref: string
          }
    )[]
}
