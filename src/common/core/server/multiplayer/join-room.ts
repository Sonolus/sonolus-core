import { ServiceUserProfile } from '../../service/user-profile.js'

export type ServerJoinRoomRequest = {
    type: 'authenticateMultiplayer'
    address: string
    room: string
    time: number
    userProfile: ServiceUserProfile
}

export type ServerJoinRoomResponse = {
    url: string
    type: 'round'
    session: string
}
