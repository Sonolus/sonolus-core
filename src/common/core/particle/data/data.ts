import { Effect } from './effect'
import { Sprite } from './sprite'

export type ParticleData = {
    width: number
    height: number
    interpolation: boolean
    sprites: Sprite[]
    effects: Effect[]
}
