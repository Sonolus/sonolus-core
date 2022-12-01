export enum ParticleEffect {
    NoteCircularTapNeutral = 110000,
    NoteCircularTapRed,
    NoteCircularTapGreen,
    NoteCircularTapBlue,
    NoteCircularTapYellow,
    NoteCircularTapPurple,
    NoteCircularTapCyan,

    NoteCircularAlternativeNeutral = 111000,
    NoteCircularAlternativeRed,
    NoteCircularAlternativeGreen,
    NoteCircularAlternativeBlue,
    NoteCircularAlternativeYellow,
    NoteCircularAlternativePurple,
    NoteCircularAlternativeCyan,

    NoteCircularHoldNeutral = 112000,
    NoteCircularHoldRed,
    NoteCircularHoldGreen,
    NoteCircularHoldBlue,
    NoteCircularHoldYellow,
    NoteCircularHoldPurple,
    NoteCircularHoldCyan,

    NoteLinearTapNeutral = 120000,
    NoteLinearTapRed,
    NoteLinearTapGreen,
    NoteLinearTapBlue,
    NoteLinearTapYellow,
    NoteLinearTapPurple,
    NoteLinearTapCyan,

    NoteLinearAlternativeNeutral = 121000,
    NoteLinearAlternativeRed,
    NoteLinearAlternativeGreen,
    NoteLinearAlternativeBlue,
    NoteLinearAlternativeYellow,
    NoteLinearAlternativePurple,
    NoteLinearAlternativeCyan,

    NoteLinearHoldNeutral = 122000,
    NoteLinearHoldRed,
    NoteLinearHoldGreen,
    NoteLinearHoldBlue,
    NoteLinearHoldYellow,
    NoteLinearHoldPurple,
    NoteLinearHoldCyan,

    LaneCircular = 310000,
    LaneLinear = 320000,

    SlotCircular = 410000,
    SlotLinear = 420000,

    JudgeLineCircular = 510000,
    JudgeLineLinear = 520000,
}

export function customParticleEffect(
    engineId: number,
    effectId: number
): number {
    return 1000000 + engineId * 1000 + effectId
}
