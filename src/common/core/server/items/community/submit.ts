export type SubmitItemCommunityActionRequest = {
    values: string
}

export type SubmitItemCommunityActionResponse = {
    shouldUpdateCommunity?: boolean
    shouldNavigateCommentsToPage?: number
}
