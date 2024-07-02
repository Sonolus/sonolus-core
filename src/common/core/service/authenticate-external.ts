import { ServiceUserProfile } from '../service/user-profile'

export type ServiceAuthenticateExternalRequest = {
    type: 'authenticateExternal'
    url: string
    time: number
    userProfile: ServiceUserProfile
}
