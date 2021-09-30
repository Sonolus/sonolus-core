export type EngineDataScript = {
    preprocess?: EngineDataScriptCallback
    spawnOrder?: EngineDataScriptCallback
    shouldSpawn?: EngineDataScriptCallback
    initialize?: EngineDataScriptCallback
    updateSequential?: EngineDataScriptCallback
    touch?: EngineDataScriptCallback
    updateParallel?: EngineDataScriptCallback
    terminate?: EngineDataScriptCallback
}

export type EngineDataScriptCallback = {
    index: number
    order?: number
}
