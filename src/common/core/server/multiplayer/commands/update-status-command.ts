import { RoomStatus } from '../room-status'

export type UpdateStatusCommand = {
    type: 'updateStatus'
    status: RoomStatus
}
