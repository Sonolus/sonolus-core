export const ParticleEffectName = {
    NoteCircularTapNeutral: '#NOTE_CIRCULAR_TAP_NEUTRAL',
    NoteCircularTapRed: '#NOTE_CIRCULAR_TAP_RED',
    NoteCircularTapGreen: '#NOTE_CIRCULAR_TAP_GREEN',
    NoteCircularTapBlue: '#NOTE_CIRCULAR_TAP_BLUE',
    NoteCircularTapYellow: '#NOTE_CIRCULAR_TAP_YELLOW',
    NoteCircularTapPurple: '#NOTE_CIRCULAR_TAP_PURPLE',
    NoteCircularTapCyan: '#NOTE_CIRCULAR_TAP_CYAN',

    NoteCircularAlternativeNeutral: '#NOTE_CIRCULAR_ALTERNATIVE_NEUTRAL',
    NoteCircularAlternativeRed: '#NOTE_CIRCULAR_ALTERNATIVE_RED',
    NoteCircularAlternativeGreen: '#NOTE_CIRCULAR_ALTERNATIVE_GREEN',
    NoteCircularAlternativeBlue: '#NOTE_CIRCULAR_ALTERNATIVE_BLUE',
    NoteCircularAlternativeYellow: '#NOTE_CIRCULAR_ALTERNATIVE_YELLOW',
    NoteCircularAlternativePurple: '#NOTE_CIRCULAR_ALTERNATIVE_PURPLE',
    NoteCircularAlternativeCyan: '#NOTE_CIRCULAR_ALTERNATIVE_CYAN',

    NoteCircularHoldNeutral: '#NOTE_CIRCULAR_HOLD_NEUTRAL',
    NoteCircularHoldRed: '#NOTE_CIRCULAR_HOLD_RED',
    NoteCircularHoldGreen: '#NOTE_CIRCULAR_HOLD_GREEN',
    NoteCircularHoldBlue: '#NOTE_CIRCULAR_HOLD_BLUE',
    NoteCircularHoldYellow: '#NOTE_CIRCULAR_HOLD_YELLOW',
    NoteCircularHoldPurple: '#NOTE_CIRCULAR_HOLD_PURPLE',
    NoteCircularHoldCyan: '#NOTE_CIRCULAR_HOLD_CYAN',

    NoteLinearTapNeutral: '#NOTE_LINEAR_TAP_NEUTRAL',
    NoteLinearTapRed: '#NOTE_LINEAR_TAP_RED',
    NoteLinearTapGreen: '#NOTE_LINEAR_TAP_GREEN',
    NoteLinearTapBlue: '#NOTE_LINEAR_TAP_BLUE',
    NoteLinearTapYellow: '#NOTE_LINEAR_TAP_YELLOW',
    NoteLinearTapPurple: '#NOTE_LINEAR_TAP_PURPLE',
    NoteLinearTapCyan: '#NOTE_LINEAR_TAP_CYAN',

    NoteLinearAlternativeNeutral: '#NOTE_LINEAR_ALTERNATIVE_NEUTRAL',
    NoteLinearAlternativeRed: '#NOTE_LINEAR_ALTERNATIVE_RED',
    NoteLinearAlternativeGreen: '#NOTE_LINEAR_ALTERNATIVE_GREEN',
    NoteLinearAlternativeBlue: '#NOTE_LINEAR_ALTERNATIVE_BLUE',
    NoteLinearAlternativeYellow: '#NOTE_LINEAR_ALTERNATIVE_YELLOW',
    NoteLinearAlternativePurple: '#NOTE_LINEAR_ALTERNATIVE_PURPLE',
    NoteLinearAlternativeCyan: '#NOTE_LINEAR_ALTERNATIVE_CYAN',

    NoteLinearHoldNeutral: '#NOTE_LINEAR_HOLD_NEUTRAL',
    NoteLinearHoldRed: '#NOTE_LINEAR_HOLD_RED',
    NoteLinearHoldGreen: '#NOTE_LINEAR_HOLD_GREEN',
    NoteLinearHoldBlue: '#NOTE_LINEAR_HOLD_BLUE',
    NoteLinearHoldYellow: '#NOTE_LINEAR_HOLD_YELLOW',
    NoteLinearHoldPurple: '#NOTE_LINEAR_HOLD_PURPLE',
    NoteLinearHoldCyan: '#NOTE_LINEAR_HOLD_CYAN',

    LaneCircular: '#LANE_CIRCULAR',
    LaneLinear: '#LANE_LINEAR',

    SlotCircular: '#SLOT_CIRCULAR',
    SlotLinear: '#SLOT_LINEAR',

    JudgeLineCircular: '#JUDGE_LINE_CIRCULAR',
    JudgeLineLinear: '#JUDGE_LINE_LINEAR',
} as const

export type ParticleEffectName = (typeof ParticleEffectName)[keyof typeof ParticleEffectName]
