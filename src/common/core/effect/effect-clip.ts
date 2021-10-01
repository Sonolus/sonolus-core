export enum EffectClip {
    Miss = 0,
    Perfect,
    Great,
    Good,

    MissAlternative = 1000,
    PerfectAlternative,
    GreatAlternative,
    GoodAlternative,

    Stage = 10000,
}

export function customEffectClip(engineId: number, clipId: number): number {
    return 100000 + engineId * 100 + clipId
}
