import { GameplayResult } from '../gameplayResult.js'

export type ReplayData = {
    startTime: number
    saveTime: number
    duration: number
    inputOffset: number
    playArea: {
        width: number
        height: number
    }
    result: GameplayResult
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
    }
    streams?: {
        id: number
        keys: number[]
        values: number[]
    }[]
}
