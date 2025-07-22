import { RoomStatus } from '../room-status.js'

export type UpdateStatusEvent = {
    type: 'updateStatus'
    status: RoomStatus
}
