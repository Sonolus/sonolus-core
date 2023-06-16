export const EffectClipName = {
    Miss: '#MISS',
    Perfect: '#PERFECT',
    Great: '#GREAT',
    Good: '#GOOD',

    Hold: '#HOLD',

    MissAlternative: '#MISS_ALTERNATIVE',
    PerfectAlternative: '#PERFECT_ALTERNATIVE',
    GreatAlternative: '#GREAT_ALTERNATIVE',
    GoodAlternative: '#GOOD_ALTERNATIVE',

    HoldAlternative: '#HOLD_ALTERNATIVE',

    Stage: '#STAGE',
} as const

export type EffectClipName = (typeof EffectClipName)[keyof typeof EffectClipName]
