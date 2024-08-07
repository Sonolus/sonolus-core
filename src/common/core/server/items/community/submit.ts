export type ServerSubmitItemCommunityActionRequest = {
    values: string
}

export type ServerSubmitItemCommunityActionResponse = {
    shouldUpdateCommunity?: boolean
    shouldNavigateCommentsToPage?: number
    key: string
    hashes: string[]
}
