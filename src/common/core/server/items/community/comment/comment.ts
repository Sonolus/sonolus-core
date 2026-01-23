import { UserItem } from '../../../../user/item.js'
import { ServerForm } from '../../../form.js'

export type ServerItemCommunityComment = {
    name: string
    author: string
    authorUser?: UserItem
    time: number
    content: string
    actions: ServerForm[]
}
