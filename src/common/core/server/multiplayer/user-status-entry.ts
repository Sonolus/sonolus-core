import { ServiceUserId } from '../../service/user-profile'
import { UserStatus } from './user-status'

export type UserStatusEntry = {
    userId: ServiceUserId
    status: UserStatus
}
