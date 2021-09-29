export type Effect = {
    id: ParticleEffect
    transform: Transform
    groups: Group[]
}

export enum ParticleEffect {
    NoteCircularTapBase = 110000,
    NoteCircularTapRed,
    NoteCircularTapGreen,
    NoteCircularTapBlue,
    NoteCircularTapYellow,
    NoteCircularTapPurple,
    NoteCircularTapCyan,

    NoteCircularAlternativeBase = 111000,
    NoteCircularAlternativeRed,
    NoteCircularAlternativeGreen,
    NoteCircularAlternativeBlue,
    NoteCircularAlternativeYellow,
    NoteCircularAlternativePurple,
    NoteCircularAlternativeCyan,

    NoteCircularHoldBase = 112000,
    NoteCircularHoldRed,
    NoteCircularHoldGreen,
    NoteCircularHoldBlue,
    NoteCircularHoldYellow,
    NoteCircularHoldPurple,
    NoteCircularHoldCyan,

    NoteLinearTapBase = 120000,
    NoteLinearTapRed,
    NoteLinearTapGreen,
    NoteLinearTapBlue,
    NoteLinearTapYellow,
    NoteLinearTapPurple,
    NoteLinearTapCyan,

    NoteLinearAlternativeBase = 121000,
    NoteLinearAlternativeRed,
    NoteLinearAlternativeGreen,
    NoteLinearAlternativeBlue,
    NoteLinearAlternativeYellow,
    NoteLinearAlternativePurple,
    NoteLinearAlternativeCyan,

    NoteLinearHoldBase = 122000,
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

type Transform = Record<
    `${'x' | 'y'}${1 | 2 | 3 | 4}`,
    Partial<
        Record<
            | 'c'
            | `${'r' | 'sinr' | 'cosr'}${1 | 2 | 3 | 4}`
            | `${'x' | 'y'}${1 | 2 | 3 | 4}`,
            number
        >
    >
>

type Group = {
    count: number
    particles: Particle[]
}

type Particle = {
    sprite: number
    color: string
    start: number
    duration: number
    x: Property
    y: Property
    w: Property
    h: Property
    r: Property
    a: Property
}

type Property = {
    from?: PropertyExpression
    to?: PropertyExpression
    ease?:
        | 'Linear'
        | `${'In' | 'Out' | 'InOut' | 'OutIn'}${
              | 'Sine'
              | 'Quad'
              | 'Cubic'
              | 'Quart'
              | 'Quint'
              | 'Expo'
              | 'Circ'
              | 'Back'
              | 'Elastic'}`
}

type PropertyExpression = Partial<
    Record<'c' | `${'r' | 'sinr' | 'cosr'}${1 | 2 | 3 | 4}`, number>
>
