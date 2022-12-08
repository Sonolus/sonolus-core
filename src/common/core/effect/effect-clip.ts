export enum EffectClip {
    Miss = 0,
    Perfect,
    Great,
    Good,

    Hold = 100,

    MissAlternative = 1000,
    PerfectAlternative,
    GreatAlternative,
    GoodAlternative,

    HoldAlternative = 1100,

    Stage = 10000,
}

export function customEffectClip(engineId: number, clipId: number): number {
    return 100000 + engineId * 100 + clipId
}
