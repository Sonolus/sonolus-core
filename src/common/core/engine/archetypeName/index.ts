export * as EngineArchetypeName from './archetypeName.js'

export type EngineArchetypeName =
    (typeof import('./archetypeName.js'))[keyof typeof import('./archetypeName.js')]
