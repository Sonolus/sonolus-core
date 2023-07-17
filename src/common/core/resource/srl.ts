export type ResourceType =
    | 'ServerBanner'
    | 'LevelCover'
    | 'LevelBgm'
    | 'LevelPreview'
    | 'LevelData'
    | 'SkinThumbnail'
    | 'SkinData'
    | 'SkinTexture'
    | 'BackgroundThumbnail'
    | 'BackgroundData'
    | 'BackgroundImage'
    | 'BackgroundConfiguration'
    | 'EffectThumbnail'
    | 'EffectData'
    | 'EffectAudio'
    | 'ParticleThumbnail'
    | 'ParticleData'
    | 'ParticleTexture'
    | 'EngineThumbnail'
    | 'EnginePlayData'
    | 'EngineRom'
    | 'EngineConfiguration'

export type SRL<T extends ResourceType> = {
    type: T
    hash: string
    url: string
}
