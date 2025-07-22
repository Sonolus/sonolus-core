import { ServiceUserId } from '../../service/userProfile.js'
import { Sil } from '../../sil.js'

export type Suggestion = {
    userId: ServiceUserId
    level: Sil
}
