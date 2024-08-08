export type ServerSubmitItemCommunityActionRequest = {
    values: string
}

export type ServerSubmitItemCommunityActionResponse = {
    key: string
    hashes: string[]
    shouldUpdateCommunity?: boolean
    shouldUpdateComments?: boolean
    shouldNavigateCommentsToPage?: number
}
