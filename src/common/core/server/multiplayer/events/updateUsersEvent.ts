import { RoomUser } from '../roomUser.js'

export type UpdateUsersEvent = {
    type: 'updateUsers'
    users: RoomUser[]
}
