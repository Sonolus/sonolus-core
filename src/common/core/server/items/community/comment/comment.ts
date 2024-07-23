import { ServerForm } from '../../../form'

export type ServerItemCommunityComment = {
    name: string
    author: string
    time: number
    content: string
    actions: ServerForm[]
}
