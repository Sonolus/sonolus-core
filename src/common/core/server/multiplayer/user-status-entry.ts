import { ServiceUserId } from '../../service/user-profile.js'
import { UserStatus } from './user-status.js'

export type UserStatusEntry = {
    userId: ServiceUserId
    status: UserStatus
}
