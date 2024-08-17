export type ServerSubmitItemActionRequest = {
    values: string
}

export type ServerSubmitItemActionResponse = {
    key: string
    hashes: string[]
    shouldUpdateItem?: boolean
    shouldRemoveItem?: boolean
    shouldNavigateToItem?: string
}
