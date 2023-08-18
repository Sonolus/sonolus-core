export const InstructionIconName = {
    Hand: '#HAND',
    Arrow: '#ARROW',
} as const

export type InstructionIconName = (typeof InstructionIconName)[keyof typeof InstructionIconName]
