import { RoomStatus } from '../roomStatus.js'

export type UpdateStatusEvent = {
    type: 'updateStatus'
    status: RoomStatus
}
