import { ServerForm } from '../form'
import { ItemCommunityComment } from './comment'

export type ItemCommunity = {
    actions: ServerForm[]
    topComments: ItemCommunityComment[]
}
