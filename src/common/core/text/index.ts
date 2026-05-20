export * as Text from './text.js'

export type Text = (typeof import('./text.js'))[keyof typeof import('./text.js')]

export * as TextFunction from './function.js'

export type TextFunction = (typeof import('./function.js'))[keyof typeof import('./function.js')]
