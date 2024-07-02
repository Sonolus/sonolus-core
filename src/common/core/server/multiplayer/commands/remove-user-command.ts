import { ServiceUserId } from '../../../service/user-profile'

export type RemoveUserCommand = {
    type: 'removeUser'
    userId: ServiceUserId
}
