import { ServiceUserId } from '../../../service/userProfile.js'

export type UpdateLeadEvent = {
    type: 'updateLead'
    lead: ServiceUserId | null
}
