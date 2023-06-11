export const EngineArchetypeDataName = {
    Beat: '#BEAT',
    Bpm: '#BPM',
    TimeScale: '#TIMESCALE',
} as const

export type EngineArchetypeDataName =
    (typeof EngineArchetypeDataName)[keyof typeof EngineArchetypeDataName]
