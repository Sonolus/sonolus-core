export * as Icon from './icon.js'

export type Icon = (typeof import('./icon.js'))[keyof typeof import('./icon.js')]
