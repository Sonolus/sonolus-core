import { ServiceUserId } from '../../../service/userProfile.js'

export type UpdateMasterEvent = {
    type: 'updateMaster'
    master: ServiceUserId | null
}
