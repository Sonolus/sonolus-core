import { UserProfile } from '../service/user-profile'

export type AuthenticateServerRequest = {
    type: 'authenticateServer'
    address: string
    time: number
    userProfile: UserProfile
}

export type AuthenticateServerResponse = {
    session: string
    expiration: number
}
