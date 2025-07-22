import { UserStatus } from '../user-status.js'

export type UpdateUserStatusCommand = {
    type: 'updateUserStatus'
    status: UserStatus
}
