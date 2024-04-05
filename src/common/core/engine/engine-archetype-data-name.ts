export const EngineArchetypeDataName = {
    Beat: '#BEAT',
    Bpm: '#BPM',
    TimeScale: '#TIMESCALE',
    Judgment: '#JUDGMENT',
    Accuracy: '#ACCURACY',
} as const

export type EngineArchetypeDataName =
    (typeof EngineArchetypeDataName)[keyof typeof EngineArchetypeDataName]
