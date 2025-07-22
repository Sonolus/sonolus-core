import { ServiceUserId } from '../../service/userProfile.js'
import { UserStatus } from './userStatus.js'

export type UserStatusEntry = {
    userId: ServiceUserId
    status: UserStatus
}
