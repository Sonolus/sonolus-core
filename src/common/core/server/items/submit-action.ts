export type ServerSubmitItemActionRequest = {
    values: string
}

export type ServerSubmitItemActionResponse = {
    shouldUpdate?: boolean
    shouldRemove?: boolean
    key: string
    hashes: string[]
}
