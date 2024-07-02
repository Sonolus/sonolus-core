import { GameplayResult } from '../../gameplay-result'
import { ServiceUserId } from '../../service/user-profile'

export type ResultEntry = {
    userId: ServiceUserId
    result: GameplayResult
}
