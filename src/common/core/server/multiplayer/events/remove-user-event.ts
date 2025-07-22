import { RoomUser } from '../room-user.js'

export type RemoveUserEvent = {
    type: 'removeUser'
    user: RoomUser
}
