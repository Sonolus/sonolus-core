export type UpdateMasterCommand = {
    type: 'updateMaster'
    master: 'room' | (string & {})
}
