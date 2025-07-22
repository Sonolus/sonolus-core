import { ServiceUserId } from '../../../service/user-profile.js'

export type UpdateMasterEvent = {
    type: 'updateMaster'
    master: ServiceUserId | null
}
