import { UserStatusEntry } from '../user-status-entry.js'

export type UpdateUserStatusEvent = {
    type: 'updateUserStatus'
    userStatus: UserStatusEntry
}
