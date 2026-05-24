export * as SkinSpriteName from './spriteName.js'

export type SkinSpriteName =
    (typeof import('./spriteName.js'))[keyof typeof import('./spriteName.js')]
