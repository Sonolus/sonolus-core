import { ServiceUserId } from '../../../service/user-profile'

export type UpdateMasterEvent = {
    type: 'updateMaster'
    master: ServiceUserId | null
}
