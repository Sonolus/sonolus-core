import { RoomStatus } from '../room-status.js'

export type UpdateStatusCommand = {
    type: 'updateStatus'
    status: RoomStatus
}
