import { RoomStatus } from '../roomStatus.js'

export type UpdateStatusCommand = {
    type: 'updateStatus'
    status: RoomStatus
}
