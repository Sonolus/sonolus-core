export const EngineArchetypeName = {
    BpmChange: '#BPM_CHANGE',
    TimeScaleChange: '#TIMESCALE_CHANGE',
} as const

export type EngineArchetypeName = (typeof EngineArchetypeName)[keyof typeof EngineArchetypeName]
