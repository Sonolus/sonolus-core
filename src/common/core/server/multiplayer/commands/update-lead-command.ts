import { ServiceUserId } from '../../../service/user-profile'

export type UpdateLeadCommand = {
    type: 'updateLead'
    lead: ServiceUserId
}
