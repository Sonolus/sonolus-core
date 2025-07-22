import { UserStatus } from '../userStatus.js'

export type UpdateUserStatusCommand = {
    type: 'updateUserStatus'
    status: UserStatus
}
