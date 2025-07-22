import { ParticleDataEffect } from './effect.js'
import { ParticleDataSprite } from './sprite.js'

export type ParticleData = {
    width: number
    height: number
    interpolation: boolean
    sprites: ParticleDataSprite[]
    effects: ParticleDataEffect[]
}
