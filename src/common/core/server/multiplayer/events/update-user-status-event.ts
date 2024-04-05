import { UserStatusEntry } from '../user-status-entry'

export type UpdateUserStatusEvent = {
    type: 'updateUserStatus'
    userStatus: UserStatusEntry
}
