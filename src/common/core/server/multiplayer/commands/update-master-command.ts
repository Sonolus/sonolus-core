import { ServiceUserId } from '../../../service/user-profile'

export type UpdateMasterCommand = {
    type: 'updateMaster'
    master: ServiceUserId
}
