import { ServiceUserId } from '../../service/user-profile'
import { Sil } from '../../sil'

export type Suggestion = {
    userId: ServiceUserId
    level: Sil
}
