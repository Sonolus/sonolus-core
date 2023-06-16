export const UnitText = {
    Percentage: '#PERCENTAGE',
    Second: '#SECOND',
    Millisecond: '#MILLISECOND',
} as const

export type UnitText = (typeof UnitText)[keyof typeof UnitText]
