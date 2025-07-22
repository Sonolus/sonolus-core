import { UserStatusEntry } from '../user-status-entry.js'

export type UpdateUserStatusesEvent = {
    type: 'updateUserStatuses'
    userStatuses: UserStatusEntry[]
}
