import { EngineArchetypeDataName } from '../../engine/engineArchetypeDataName.js'
import { EngineArchetypeName } from '../../engine/engineArchetypeName.js'

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
