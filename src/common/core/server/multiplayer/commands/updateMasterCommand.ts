import { ServiceUserId } from '../../../service/userProfile.js'

export type UpdateMasterCommand = {
    type: 'updateMaster'
    master: ServiceUserId
}
