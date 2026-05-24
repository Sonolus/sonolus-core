export * as EffectClipName from './clipName.js'

export type EffectClipName = (typeof import('./clipName.js'))[keyof typeof import('./clipName.js')]
