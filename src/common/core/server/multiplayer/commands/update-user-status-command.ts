import { UserStatus } from '../user-status'

export type UpdateUserStatusCommand = {
    type: 'updateUserStatus'
    status: UserStatus
}
