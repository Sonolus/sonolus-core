export * as InstructionIconName from './iconName.js'

export type InstructionIconName =
    (typeof import('./iconName.js'))[keyof typeof import('./iconName.js')]
