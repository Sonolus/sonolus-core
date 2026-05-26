import { Text } from '../../../../text/index.js'
import { UserItem } from '../../../../user/item.js'
import { ServerForm } from '../../../form.js'

export type ServerItemCommunityComment = {
    name: string
    author: string
    authorUser?: UserItem
    time: number
    content: Text | (string & {})
    actions: ServerForm[]
}
