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
    | 'EngineWatchData'
    | 'EnginePreviewData'
    | 'EngineTutorialData'
    | 'EngineRom'
    | 'EngineConfiguration'
    | 'ReplayData'
    | 'ReplayConfiguration'

export type SRL<T extends ResourceType> = {
    type: T
    hash: string
    url: string
}
