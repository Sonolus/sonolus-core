import { UserProfile } from '../service/user-profile'

export type AuthenticateExternalRequest = {
    type: 'authenticateExternal'
    url: string
    time: number
    userProfile: UserProfile
}
