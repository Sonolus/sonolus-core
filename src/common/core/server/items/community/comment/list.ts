import { ServerItemCommunityComment } from './comment'

export type ServerItemCommunityCommentList = {
    pageCount: number
    cursor?: string
    comments: ServerItemCommunityComment[]
}
