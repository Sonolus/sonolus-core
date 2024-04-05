export type UpdateMasterEvent = {
    type: 'updateMaster'
    master: 'room' | (string & {})
}
