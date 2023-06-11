import { ParticleDataEffect } from './effect'
import { ParticleDataSprite } from './sprite'

export type ParticleData = {
    width: number
    height: number
    interpolation: boolean
    sprites: ParticleDataSprite[]
    effects: ParticleDataEffect[]
}
