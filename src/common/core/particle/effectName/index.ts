export * as ParticleEffectName from './effectName.js'

export type ParticleEffectName =
    (typeof import('./effectName.js'))[keyof typeof import('./effectName.js')]
