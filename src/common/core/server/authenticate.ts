import { ServiceUserProfile } from '../service/user-profile'

export type ServerAuthenticateRequest = {
    type: 'authenticateServer'
    address: string
    time: number
    userProfile: ServiceUserProfile
}

export type ServerAuthenticateResponse = {
    session: string
    expiration: number
}
