export type ServerSubmitItemCommunityCommentActionRequest = {
    values: string
}

export type ServerSubmitItemCommunityCommentActionResponse = {
    shouldUpdateCommunity?: boolean
    shouldNavigateCommentsToPage?: number
    key: string
    hashes: string[]
}
