import { RoomStatus } from '../room-status'

export type UpdateStatusEvent = {
    type: 'updateStatus'
    status: RoomStatus
}
