import { ServiceUserId } from '../../../service/user-profile.js'

export type UpdateLeadEvent = {
    type: 'updateLead'
    lead: ServiceUserId | null
}
