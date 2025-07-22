import { GameplayResult } from '../../../gameplayResult.js'

export type FinishGameplayCommand = {
    type: 'finishGameplay'
    state: string
    result: GameplayResult
}
