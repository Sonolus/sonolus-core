import { RoomUser } from '../room-user.js'

export type UpdateUsersEvent = {
    type: 'updateUsers'
    users: RoomUser[]
}
