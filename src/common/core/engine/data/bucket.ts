import { SkinSprite } from '../../skin/skin-sprite'

export type EngineDataBucket = {
    sprites: EngineDataSprite[]
}

export type EngineDataSprite = {
    id: SkinSprite
    x: number
    y: number
    w: number
    h: number
    rotation: number
}
