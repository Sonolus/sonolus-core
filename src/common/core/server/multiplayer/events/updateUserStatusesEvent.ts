import { UserStatusEntry } from '../userStatusEntry.js'

export type UpdateUserStatusesEvent = {
    type: 'updateUserStatuses'
    userStatuses: UserStatusEntry[]
}
