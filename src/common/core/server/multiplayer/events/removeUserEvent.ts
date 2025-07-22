import { RoomUser } from '../roomUser.js'

export type RemoveUserEvent = {
    type: 'removeUser'
    user: RoomUser
}
