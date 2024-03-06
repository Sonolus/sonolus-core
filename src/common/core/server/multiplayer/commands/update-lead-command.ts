export type UpdateLeadCommand = {
    type: 'updateLead'
    lead: 'room' | (string & {})
}
