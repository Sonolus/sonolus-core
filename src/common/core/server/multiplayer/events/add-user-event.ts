import { RoomUser } from '../room-user'

export type AddUserEvent = {
    type: 'addUser'
    user: RoomUser
}
