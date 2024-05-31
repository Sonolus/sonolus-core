import { ServerForm } from '../form'

export type ItemCommunityComment = {
    author: string
    time: number
    content: string
    actions: ServerForm[]
}
