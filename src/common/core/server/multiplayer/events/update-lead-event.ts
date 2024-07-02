import { ServiceUserId } from '../../../service/user-profile'

export type UpdateLeadEvent = {
    type: 'updateLead'
    lead: ServiceUserId | null
}
