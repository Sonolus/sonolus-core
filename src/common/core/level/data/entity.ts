import { EngineArchetypeDataName } from '../../engine/archetypeDataName/index.js'
import { EngineArchetypeName } from '../../engine/archetypeName/index.js'

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
