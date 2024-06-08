import { ServerForm } from '../../../form'

export type ItemCommunityComment = {
    name: string
    author: string
    time: number
    content: string
    actions: ServerForm[]
}
