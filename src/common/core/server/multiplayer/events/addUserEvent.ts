import { RoomUser } from '../roomUser.js'

export type AddUserEvent = {
    type: 'addUser'
    user: RoomUser
}
