export type UpdateLeadEvent = {
    type: 'updateLead'
    lead: 'room' | (string & {})
}
