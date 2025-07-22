import { ServiceUserId } from '../../service/user-profile.js'
import { Sil } from '../../sil.js'

export type Suggestion = {
    userId: ServiceUserId
    level: Sil
}
