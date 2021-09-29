import { SRL } from '../../resource/srl'

export type Clip = {
    id: EffectClip
    clip: SRL<'EffectClip'>
}

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
