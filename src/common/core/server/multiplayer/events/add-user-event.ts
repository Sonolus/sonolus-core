import { RoomUser } from '../room-user.js'

export type AddUserEvent = {
    type: 'addUser'
    user: RoomUser
}
