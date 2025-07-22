import { GameplayResult } from '../../../gameplay-result.js'

export type FinishGameplayCommand = {
    type: 'finishGameplay'
    state: string
    result: GameplayResult
}
