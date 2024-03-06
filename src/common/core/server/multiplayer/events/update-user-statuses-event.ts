import { UserStatusEntry } from '../user-status-entry'

export type UpdateUserStatusesEvent = {
    type: 'updateUserStatuses'
    userStatuses: UserStatusEntry[]
}
