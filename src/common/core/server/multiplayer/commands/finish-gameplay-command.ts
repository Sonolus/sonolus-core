import { GameplayResult } from '../../../gameplay-result'

export type FinishGameplayCommand = {
    type: 'finishGameplay'
    state: string
    result: GameplayResult
}
