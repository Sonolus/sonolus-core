import { UserProfile } from '../service/user-profile'

export type JoinRoomRequest = {
    type: 'authenticateMultiplayer'
    address: string
    room: string
    time: number
    userProfile: UserProfile
}

export type JoinRoomResponse = {
    url: string
    type: 'round'
    session: string
}
