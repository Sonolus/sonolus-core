import { ServerForm } from '../../form'
import { ItemCommunityComment } from './comment/comment'

export type ItemCommunityInfo = {
    actions: ServerForm[]
    topComments: ItemCommunityComment[]
}
