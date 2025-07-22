import { ServiceUserId } from '../../../service/userProfile.js'

export type RemoveUserCommand = {
    type: 'removeUser'
    userId: ServiceUserId
}
