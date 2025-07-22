import { ServiceUserId } from '../../../service/user-profile.js'

export type RemoveUserCommand = {
    type: 'removeUser'
    userId: ServiceUserId
}
