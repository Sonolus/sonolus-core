import { ServerForm } from '../../form'
import { ServerItemCommunityComment } from './comment/comment'

export type ServerItemCommunityInfo = {
    actions: ServerForm[]
    topComments: ServerItemCommunityComment[]
}
