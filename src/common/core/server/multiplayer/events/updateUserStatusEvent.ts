import { UserStatusEntry } from '../userStatusEntry.js'

export type UpdateUserStatusEvent = {
    type: 'updateUserStatus'
    userStatus: UserStatusEntry
}
