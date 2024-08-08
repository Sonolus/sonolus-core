export type ServerCreateItemRequest = {
    values: string
}

export type ServerCreateItemResponse = {
    key: string
    hashes: string[]
    shouldUpdateInfo?: boolean
    shouldNavigateToItem?: string
}
