export type Script = {
    preprocess?: Callback
    spawnOrder?: Callback
    shouldSpawn?: Callback
    initialize?: Callback
    updateSequential?: Callback
    touch?: Callback
    updateParallel?: Callback
    terminate?: Callback
}

type Callback = {
    index: number
    order?: number
}
