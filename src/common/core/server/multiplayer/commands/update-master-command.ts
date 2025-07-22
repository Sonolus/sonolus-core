import { ServiceUserId } from '../../../service/user-profile.js'

export type UpdateMasterCommand = {
    type: 'updateMaster'
    master: ServiceUserId
}
