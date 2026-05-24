export * as EngineArchetypeDataName from './archetypeDataName.js'

export type EngineArchetypeDataName =
    (typeof import('./archetypeDataName.js'))[keyof typeof import('./archetypeDataName.js')]
