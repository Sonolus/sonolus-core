export * as RuntimeFunction from './function.js'

export type RuntimeFunction = (typeof import('./function.js'))[keyof typeof import('./function.js')]
