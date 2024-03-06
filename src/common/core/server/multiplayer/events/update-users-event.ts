import { RoomUser } from '../room-user'

export type UpdateUsersEvent = {
    type: 'updateUsers'
    users: RoomUser[]
}
