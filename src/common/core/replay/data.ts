export type ReplayData = {
    startTime: number
    saveTime: number
    duration: number
    inputOffset: number
    playArea: {
        width: number
        height: number
    }
    result: {
        grade: 'allPerfect' | 'fullCombo' | 'pass' | 'fail'
        arcadeScore: number
        accuracyScore: number
        combo: number
        perfect: number
        great: number
        good: number
        miss: number
        totalCount: number
    }
    inputs: {
        entityIndex: number[]
        time: number[]
        judgment: number[]
        accuracy: number[]
    }
    entities: {
        data: {
            name: string
            value: number
        }[]
    }[]
    touches: {
        l: number[]
        t: number[]
        x: number[]
        y: number[]
    }[]
}
