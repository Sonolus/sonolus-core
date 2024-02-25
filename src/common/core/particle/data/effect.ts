import { ParticleEffectName } from '../particle-effect-name'

export type ParticleDataEffect = {
    name: ParticleEffectName | (string & {})
    transform: ParticleDataTransform
    groups: ParticleDataGroup[]
}

export type ParticleDataTransform = Record<
    `${'x' | 'y'}${1 | 2 | 3 | 4}`,
    Partial<
        Record<
            | 'c'
            | `${'x' | 'y'}${1 | 2 | 3 | 4}`
            | `${'r' | 'sinr' | 'cosr'}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`,
            number
        >
    >
>

export type ParticleDataGroup = {
    count: number
    particles: ParticleDataGroupParticle[]
}

export type ParticleDataGroupParticle = {
    sprite: number
    color: string
    start: number
    duration: number
    x: ParticleDataGroupParticleProperty
    y: ParticleDataGroupParticleProperty
    w: ParticleDataGroupParticleProperty
    h: ParticleDataGroupParticleProperty
    r: ParticleDataGroupParticleProperty
    a: ParticleDataGroupParticleProperty
}

export type ParticleDataGroupParticleProperty = {
    from?: ParticleDataGroupParticlePropertyExpression
    to?: ParticleDataGroupParticlePropertyExpression
    ease?:
        | 'linear'
        | `${'in' | 'out' | 'inOut' | 'outIn'}${
              | 'Sine'
              | 'Quad'
              | 'Cubic'
              | 'Quart'
              | 'Quint'
              | 'Expo'
              | 'Circ'
              | 'Back'
              | 'Elastic'}`
        | 'none'
}

export type ParticleDataGroupParticlePropertyExpression = Partial<
    Record<'c' | `${'r' | 'sinr' | 'cosr'}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`, number>
>
