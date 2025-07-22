import { GameplayResult } from '../../gameplay-result.js'
import { ServiceUserId } from '../../service/user-profile.js'

export type ResultEntry = {
    userId: ServiceUserId
    result: GameplayResult
}
