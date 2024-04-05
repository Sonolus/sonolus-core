import { EngineArchetypeDataName, EngineArchetypeName } from '../../engine'

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
