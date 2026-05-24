export * as Text from './text.js'

export type Text = (typeof import('./text.js'))[keyof typeof import('./text.js')]
