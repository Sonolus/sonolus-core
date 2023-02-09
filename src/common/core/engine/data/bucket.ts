export type EngineDataBucket = {
    sprites: EngineDataBucketSprite[]
    unit?: string
}

export type EngineDataBucketSprite = {
    id: number
    fallbackId?: number
    x: number
    y: number
    w: number
    h: number
    rotation: number
}
