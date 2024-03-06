import { RoomUser } from '../room-user'

export type RemoveUserEvent = {
    type: 'removeUser'
    user: RoomUser
}
