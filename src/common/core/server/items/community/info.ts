import { ServerForm } from '../../form.js'
import { ServerItemCommunityComment } from './comment/comment.js'

export type ServerItemCommunityInfo = {
    actions: ServerForm[]
    topComments: ServerItemCommunityComment[]
}
