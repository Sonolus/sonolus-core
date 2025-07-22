import { ServiceUserId } from '../../../service/user-profile.js'

export type UpdateLeadCommand = {
    type: 'updateLead'
    lead: ServiceUserId
}
