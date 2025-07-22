import { GameplayResult } from '../../gameplayResult.js'
import { ServiceUserId } from '../../service/userProfile.js'

export type ResultEntry = {
    userId: ServiceUserId
    result: GameplayResult
}
