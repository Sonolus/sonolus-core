import { ServiceUserId } from '../../../service/userProfile.js'

export type UpdateLeadCommand = {
    type: 'updateLead'
    lead: ServiceUserId
}
