export type ResourceType =
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
    | 'EffectClip'
    | 'ParticleThumbnail'
    | 'ParticleData'
    | 'ParticleTexture'
    | 'EngineThumbnail'
    | 'EngineData'
    | 'EngineRom'
    | 'EngineConfiguration'

export type SRL<T extends ResourceType> = {
    type: T
    hash: string
    url: string
}
