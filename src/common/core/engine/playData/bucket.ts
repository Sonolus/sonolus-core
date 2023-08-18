import { UnitText } from '../../texts'

export type EnginePlayDataBucket = {
    sprites: EnginePlayDataBucketSprite[]
    unit?: UnitText | (string & {})
}

export type EnginePlayDataBucketSprite = {
    id: number
    fallbackId?: number
    x: number
    y: number
    w: number
    h: number
    rotation: number
}
