import { ServerMessage } from '../server/message.js'
import { ServiceUserProfile } from './userProfile.js'

export type ServiceAuthenticateExternalRequest = {
    type: 'authenticateExternal'
    url: string
    time: number
    userProfile: ServiceUserProfile
}

export type ServiceAuthenticateExternalResponse = ServerMessage
