import { SkinSprite } from '../../skin/data/sprite'

export type Bucket = {
    sprites: Sprite[]
}

type Sprite = {
    id: SkinSprite
    x: number
    y: number
    w: number
    h: number
    rotation: -90
}
