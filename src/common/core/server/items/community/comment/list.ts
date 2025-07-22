import { ServerItemCommunityComment } from './comment.js'

export type ServerItemCommunityCommentList = {
    pageCount: number
    cursor?: string
    comments: ServerItemCommunityComment[]
}
