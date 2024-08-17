export type ServerSubmitItemCommunityCommentActionRequest = {
    values: string
}

export type ServerSubmitItemCommunityCommentActionResponse = {
    key: string
    hashes: string[]
    shouldUpdateCommunity?: boolean
    shouldUpdateComments?: boolean
    shouldNavigateCommentsToPage?: number
}
